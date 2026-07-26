import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import Observer from 'gsap/Observer'
import { useOutletContext } from 'react-router-dom'
import '../styles/style.css'
import NavBar from '../components/NavBar'
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'
import { THEMES, PROJECTS, applyTheme } from '../theme'

gsap.registerPlugin(Observer)

// The rail renders the project list three times so there is always a full set of
// cards on either side of the visible one. The middle set is the "real" one for
// assistive tech; the flanking sets only exist to make the wrap invisible.
const SETS = [0, 1, 2]
const PRIMARY_SET = 1

// A 1:1 touch drag feels sluggish against a rail this wide — a swipe should carry
// further than the thumb travels.
const DRAG_SPEED = 1.8

const Thumbnail = ({ src, alt }) => {
    const imgRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)

    // A copy of an already-cached image is complete before React can attach onLoad,
    // so without this it would sit at opacity 0 behind a spinner and then fade in
    // again the moment it slides into view.
    useEffect(() => {
        if (imgRef.current?.complete) setIsLoaded(true)
    }, [])

    return (
        <>
            {!isLoaded && (
                <div className="image__loader">
                    <div className="spinner"></div>
                </div>
            )}
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                // The rail moves by transform on a page that never scrolls, so lazy
                // loading only fires as a card is already sliding in — which reads as
                // the images flashing. The whole set is ~270 KB, so fetch it up front.
                loading="eager"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </>
    )
}

Thumbnail.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

const Index = () => {
    const { setScaling } = useOutletContext()
    const [activeIndex, setActiveIndex] = useState(0)
    const railRef = useRef(null)
    const barRef = useRef(null)
    const reducedMotion = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const activeTheme = PROJECTS[activeIndex].theme

    useEffect(() => {
        applyTheme(activeTheme)
    }, [activeTheme])

    // no vertical scrolling here, so drop the scrollbar gutter the other pages reserve
    useEffect(() => {
        document.documentElement.classList.add('home-locked')
        return () => document.documentElement.classList.remove('home-locked')
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (reducedMotion) return

        const rail = railRef.current
        const slides = Array.from(rail.children)
        const count = PROJECTS.length
        const setX = gsap.quickSetter(rail, 'x', 'px')

        // `period` is the distance between a card and its clone one set later, so
        // shifting the rail by exactly that much renders a pixel-identical frame —
        // that is the seam the loop hides behind.
        let period = 1
        let step = 1
        let centerOffset = 0

        const measure = () => {
            period = slides[count].offsetLeft - slides[0].offsetLeft
            step = period / count
            centerOffset = window.innerWidth / 2 - slides[0].offsetLeft - slides[0].offsetWidth / 2
        }

        // `target` is where the rail wants to be, `current` follows it with a bit of
        // lag. Both measure how far the rail has travelled from "first project dead
        // centre", so 0 is the load state and every whole `step` centres the next
        // card. They grow without bound in either direction; only the value written
        // to the DOM is wrapped, which is what makes the loop endless both ways.
        let target = 0
        let current = 0
        let dragDistance = 0

        const render = () => {
            setX(gsap.utils.wrap(-2 * period, -period, -period - current + centerOffset))
            // half a step of offset puts the bar's reset at the same spot as the
            // counter's, so "13 → 01" and "100% → 0%" always happen together
            if (barRef.current) {
                barRef.current.style.width = `${gsap.utils.wrap(0, 1, (current + step / 2) / period) * 100}%`
            }
            const index = gsap.utils.wrap(0, count, Math.round(current / step))
            setActiveIndex(prev => (prev === index ? prev : index))
        }

        const tick = (time, deltaTime) => {
            if (Math.abs(target - current) < 0.01) {
                if (current === target) return
                current = target
            } else {
                current += (target - current) * (1 - Math.pow(0.0018, deltaTime / 1000))
            }
            render()
        }

        const observer = Observer.create({
            target: window,
            // 'touch' without 'pointer' is Observer's touch-only switch: a mouse drag
            // never moves the rail, so on desktop the wheel is the only input.
            type: 'wheel,touch',
            preventDefault: true,
            allowClicks: true,
            dragMinimum: 3,
            onWheel: (self) => {
                target += Math.abs(self.deltaX) > Math.abs(self.deltaY) ? self.deltaX : self.deltaY
            },
            onDragStart: () => { dragDistance = 0 },
            onDrag: (self) => {
                // horizontal only — swiping up and down deliberately does nothing.
                // dragDistance stays in real pixels: it measures intent for the
                // click check below, not how far the rail travels.
                dragDistance += Math.abs(self.deltaX)
                target -= self.deltaX * DRAG_SPEED
            }
        })

        // a drag that ends on a card must not navigate to that project
        const resetDrag = () => { dragDistance = 0 }
        const swallowClickAfterDrag = (event) => {
            if (dragDistance > 8) {
                event.preventDefault()
                event.stopPropagation()
            }
        }
        rail.addEventListener('pointerdown', resetDrag, true)
        rail.addEventListener('click', swallowClickAfterDrag, true)

        // card widths are viewport-relative, so a resize changes what a pixel of
        // travel is worth — rescale the position to keep the same card centred
        const onResize = () => {
            const previousStep = step
            measure()
            if (previousStep > 0) {
                const ratio = step / previousStep
                current *= ratio
                target *= ratio
            }
            render()
        }
        window.addEventListener('resize', onResize)

        measure()
        render()
        gsap.ticker.add(tick)

        return () => {
            gsap.ticker.remove(tick)
            observer.kill()
            window.removeEventListener('resize', onResize)
            rail.removeEventListener('pointerdown', resetDrag, true)
            rail.removeEventListener('click', swallowClickAfterDrag, true)
            gsap.set(rail, { x: 0 })
        }
    }, [reducedMotion])

    return (
        <PageTransition>
            <main className={`home${reducedMotion ? ' home--static' : ''}`}>
                <div className="page-glow" aria-hidden="true"></div>
                <div className="home__pin">
                    <NavBar colorIdentifier={activeTheme} />
                    <header className="home__intro">
                        <p className="home__eyebrow">Hans Maas — Portfolio</p>
                        <h1 className="home__title" key={activeTheme}>{THEMES[activeTheme].role}</h1>
                    </header>
                    <div className="home__rail-viewport">
                        <div className="home__rail" ref={railRef}>
                            {(reducedMotion ? [PRIMARY_SET] : SETS).map(set => PROJECTS.map((project, index) => (
                                <TransitionLink
                                    key={`${set}-${project.id}`}
                                    to={`/project/${project.id}`}
                                    className="slide"
                                    aria-hidden={set === PRIMARY_SET ? undefined : true}
                                    tabIndex={set === PRIMARY_SET ? undefined : -1}
                                    onMouseEnter={() => setScaling(true)}
                                    onMouseLeave={() => setScaling(false)}
                                    onClick={() => setScaling(false)}
                                >
                                    <div className="slide__media">
                                        <p className="slide__index">{String(index + 1).padStart(2, '0')}</p>
                                        <Thumbnail
                                            src={`${import.meta.env.BASE_URL}${project.thumb}`}
                                            alt={`${project.name} project thumbnail`}
                                        />
                                    </div>
                                    <div className="slide__caption">
                                        <h2 className="slide__name">{project.name}</h2>
                                        <p className="slide__meta">{project.type}<br />{project.team} · {project.year}</p>
                                    </div>
                                </TransitionLink>
                            )))}
                        </div>
                    </div>
                    <div className="home__bottom">
                        <p className="home__name">Hans Maas</p>
                        <p className="home__hint">Scroll to explore</p>
                        <div className="home__progress">
                            <p className="home__count">
                                {String(activeIndex + 1).padStart(2, '0')}
                                <span> / {PROJECTS.length}</span>
                            </p>
                            <div className="home__bar" aria-hidden="true">
                                <span className="home__bar-fill" ref={barRef}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageTransition>
    )
}

export default Index
