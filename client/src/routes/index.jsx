import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useOutletContext } from 'react-router-dom'
import '../styles/style.css'
import NavBar from '../components/NavBar'
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'
import { THEMES, PROJECTS, applyTheme } from '../theme'

gsap.registerPlugin(ScrollTrigger)

const Thumbnail = ({ src, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <>
            {!isLoaded && (
                <div className="image__loader">
                    <div className="spinner"></div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
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
    const pinRef = useRef(null)
    const barRef = useRef(null)
    const reducedMotion = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const activeTheme = PROJECTS[activeIndex].theme

    useEffect(() => {
        applyTheme(activeTheme)
    }, [activeTheme])

    useEffect(() => {
        window.scrollTo(0, 0)
        if (reducedMotion) return

        const rail = railRef.current
        const distance = () => Math.max(0, rail.scrollWidth - window.innerWidth)

        const tween = gsap.to(rail, {
            x: () => -distance(),
            ease: 'none',
            scrollTrigger: {
                trigger: pinRef.current,
                pin: true,
                scrub: 1,
                start: 'top top',
                end: () => `+=${distance()}`,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    if (barRef.current) barRef.current.style.width = `${self.progress * 100}%`
                    const index = Math.min(
                        PROJECTS.length - 1,
                        Math.round(self.progress * (PROJECTS.length - 1))
                    )
                    setActiveIndex(prev => (prev === index ? prev : index))
                }
            }
        })

        return () => {
            tween.scrollTrigger?.kill()
            tween.kill()
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [reducedMotion])

    return (
        <PageTransition>
            <main className={`home${reducedMotion ? ' home--static' : ''}`}>
                <div className="page-glow" aria-hidden="true"></div>
                <div className="home__pin" ref={pinRef}>
                    <NavBar colorIdentifier={activeTheme} />
                    <header className="home__intro">
                        <p className="home__eyebrow">Hans Maas — Portfolio</p>
                        <h1 className="home__title" key={activeTheme}>{THEMES[activeTheme].role}</h1>
                    </header>
                    <div className="home__rail-viewport">
                        <div className="home__rail" ref={railRef}>
                            {PROJECTS.map((project, index) => (
                                <TransitionLink
                                    key={project.id}
                                    to={`/project/${project.id}`}
                                    className="slide"
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
                            ))}
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
