import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useLocation, useOutletContext } from 'react-router-dom'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/style.css'
import NavBar from '../components/NavBar'
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'

gsap.registerPlugin(ScrollTrigger)

const THEMES = {
    trainworld: { title: 'CREATIVE DEVELOPER', bg: '#272727', bgImage: 'homebg_trainworld', titleColor: '#EEEC76', smallCircle: '#E8E661', largeCircle: '#FDFDFD', activeBg: '#EEEC76', navHover: '#EEEC76', activeText: '#272727' },
    mixbox: { title: 'APP DESIGNER', bg: '#929948', bgImage: 'homebg_mixbox', titleColor: '#EEEC76', smallCircle: '#EEEC76', largeCircle: '#FDFDFD', activeBg: '#EEEC76', navHover: '#EEEC76', activeText: '#272727' },
    stingstitute: { title: 'WEB DEVELOPER', bg: '#492078', bgImage: 'homebg_stingstitute', titleColor: '#FF53B7', smallCircle: '#FF53B7', largeCircle: '#FDFDFD', activeBg: '#FF53B7', navHover: '#FF53B7', activeText: '#272727' },
    rotterdans: { title: 'APP DEVELOPER', bg: '#F0F0F0', bgImage: 'homebg_rotterdans', titleColor: '#2C2D2C', smallCircle: '#272727', largeCircle: '#272727', activeBg: '#2C2D2C', navHover: '#272727', activeText: '#FDFDFD' },
    equalmelodies: { title: 'WEB DESIGNER', bg: '#272727', bgImage: 'homebg_equalmelodies', titleColor: '#D8595B', smallCircle: '#D8595B', largeCircle: '#272727', activeBg: '#D8595B', navHover: '#D8595B', activeText: '#FDFDFD' },
    reactartistique: { title: 'WEB DEVELOPER', bg: '#366830', bgImage: 'homebg_reactartistique', titleColor: '#FDFDFD', smallCircle: '#FDFDFD', largeCircle: '#274A23', activeBg: '#274A23', navHover: '#FDFDFD', activeText: '#FDFDFD' },
    dishknob: { title: 'MOTION DESIGNER', bg: '#FDFDFD', bgImage: 'homebg_dishknob', titleColor: '#4C984C', smallCircle: '#4C984C', largeCircle: '#4C984C', activeBg: '#4C984C', navHover: '#4C984C', activeText: '#FDFDFD' },
    trimcraft: { title: 'WEB DEVELOPER', bg: '#434321', bgImage: 'homebg_trimcraft', titleColor: '#EEEC76', smallCircle: '#EEEC76', largeCircle: '#FDFDFD', activeBg: '#EEEC76', navHover: '#EEEC76', activeText: '#272727' },
    smashabutton: { title: 'CREATIVE DEVELOPER', bg: '#21432E', bgImage: 'homebg_smashabutton', titleColor: '#FEA500', smallCircle: '#FEA500', largeCircle: '#FEA500', activeBg: '#FEA500', navHover: '#FEA500', activeText: '#272727' },
    chessbase: { title: 'WEB DEVELOPER', bg: '#7A9A57', bgImage: 'homebg_chessbase', titleColor: '#ECEDCE', smallCircle: '#ECEDCE', largeCircle: '#ECEDCE', activeBg: '#5A723F', navHover: '#FDFDFD', activeText: '#FDFDFD' },
    weatherdog: { title: 'CREATIVE DEVELOPER', bg: '#2E3495', bgImage: 'homebg_weatherdog', titleColor: '#E69A8D', smallCircle: '#E69A8D', largeCircle: '#E69A8D', activeBg: '#E69A8D', navHover: '#E69A8D', activeText: '#FDFDFD' }
}

const PROJECTS = [
    { id: 1, name: 'TRAINWORLD', type: 'Design & Development', team: 'Solo', year: '2024', theme: 'trainworld' },
    { id: 2, name: 'MIXBOX', type: 'Design', team: 'Solo', year: '2024', theme: 'mixbox' },
    { id: 3, name: 'STINGSTITUTE', type: 'Design & Development', team: 'Solo', year: '2023', theme: 'stingstitute' },
    { id: 4, name: 'ROTTERDANS', type: 'Design & Development', team: 'Team', year: '2024', theme: 'rotterdans' },
    { id: 5, name: 'EQUAL MELODIES', type: 'Design', team: 'Solo', year: '2023', theme: 'equalmelodies' },
    { id: 6, name: 'REACT ARTISTIQUE', type: 'Development', team: 'Solo', year: '2024', theme: 'reactartistique' },
    { id: 7, name: 'DISHKNOB', type: 'Motion Design', team: 'Solo', year: '2024', theme: 'dishknob' },
    { id: 8, name: 'TRIMCRAFT', type: 'Development', team: 'Solo', year: '2023', theme: 'trimcraft' },
    { id: 9, name: 'SMASH A BUTTON', type: 'Development', team: 'Solo', year: '2024', theme: 'smashabutton' },
    { id: 10, name: 'CHESSBASE', type: 'Development', team: 'Solo', year: '2023', theme: 'chessbase' },
    { id: 11, name: 'WEATHER DOG', type: 'Development', team: 'Solo', year: '2024', theme: 'weatherdog' }
]

const SCROLL_TRIGGERS = [
    { trigger: 2, start: 'left 0%', end: 'left -37%', enterTheme: 'mixbox', leaveTheme: 'stingstitute', enterBackTheme: 'mixbox', leaveBackTheme: 'trainworld' },
    { trigger: 4, start: 'left -80%', end: 'left -130%', enterTheme: 'rotterdans', leaveTheme: 'equalmelodies', enterBackTheme: 'rotterdans', leaveBackTheme: 'stingstitute' },
    { trigger: 6, start: 'left -185%', end: 'left -245%', enterTheme: 'reactartistique', leaveTheme: 'dishknob', enterBackTheme: 'reactartistique', leaveBackTheme: 'equalmelodies' },
    { trigger: 8, start: 'left -305%', end: 'left -385%', enterTheme: 'trimcraft', leaveTheme: 'smashabutton', enterBackTheme: 'trimcraft', leaveBackTheme: 'dishknob' },
    { trigger: 10, start: 'left -470%', end: 'left -600%', enterTheme: 'chessbase', leaveTheme: 'weatherdog', enterBackTheme: 'chessbase', leaveBackTheme: 'smashabutton' }
]

const Index = () => {
    const [colorIdentifier, setColorIdentifier] = useState('trainworld')
    const location = useLocation()
    const { setScaling } = useOutletContext()

    const applyTheme = (themeName) => {
        const theme = THEMES[themeName]
        if (!theme) return

        // Check if we're still on the homepage before applying theme
        const homeTitle = document.querySelector('.home__title');
        const homepageWrapper = document.querySelector('.homepage__wrapper');
        const titleLines = document.querySelector('.title__lines');
        
        if (!homeTitle || !homepageWrapper) return; // Exit if homepage elements don't exist
        
        homeTitle.innerHTML = theme.title
        gsap.to('.homepage__wrapper', { backgroundColor: theme.bg, backgroundImage: `url(/${theme.bgImage}.svg)` })
        gsap.to('.home__title', { color: theme.titleColor })
        if (titleLines) gsap.to('.title__lines', { color: theme.titleColor })
        
        // Only animate cursor circles if they exist (not on mobile)
        if (document.querySelector('.small_circle')) {
            gsap.to('.small_circle', { backgroundColor: theme.smallCircle })
        }
        if (document.querySelector('.large_circle')) {
            gsap.to('.large_circle', { backgroundColor: theme.largeCircle })
        }
        
        gsap.to('.active', { backgroundColor: 'transparent', borderColor: theme.activeBg, color: theme.activeBg })

        document.querySelectorAll('.nav__link').forEach(link => {
            link.style.borderColor = '#efefef'
            if (!link.classList.contains('active')) {
                link.onmouseenter = () => { link.style.borderColor = theme.navHover; link.style.color = theme.navHover }
                link.onmouseleave = () => { link.style.borderColor = '#efefef'; link.style.color = '#272727' }
            }
        })

        setColorIdentifier(themeName)
        
        // Dispatch custom event to notify transition context and navbar
        window.dispatchEvent(new CustomEvent('themeChange', { detail: { colorIdentifier: themeName } }))
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const smallCircle = document.querySelector('.small_circle');
        const largeCircle = document.querySelector('.large_circle');
        if (smallCircle) smallCircle.style.backgroundColor = '#E8E661';
        if (largeCircle) largeCircle.style.backgroundColor = '#FDFDFD';
        
        // Apply default theme after full transition completes (600ms entry + 600ms exit = 1200ms)
        setTimeout(() => {
            applyTheme('trainworld')
        }, 1250)
        if (window.screen.width >= 1200) {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-620vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        } else if (window.screen.width < 1200 && window.screen.width >= 1000) {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-681vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        } else if (window.screen.width < 1000 && window.screen.width >= 800) {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-730vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        } else if (window.screen.width < 800 && window.screen.width >= 420) {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-760vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        } else if (window.screen.width < 420 && window.screen.width >= 380) {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-820vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        } else {
            gsap.killTweensOf('.projects__wrapper')
            gsap.to('.projects__wrapper', {
                x: '-840vw',
                scrollTrigger: {
                    trigger: 'body',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: 'top top',
                    end: 'bottom -700%'
                }
            })
        }

        SCROLL_TRIGGERS.forEach(({ trigger, start, end, enterTheme, leaveTheme, enterBackTheme, leaveBackTheme }) => {
            ScrollTrigger.create({
                trigger: `.home__project--wrapper${trigger}`,
                start,
                end,
                onEnter: () => applyTheme(enterTheme),
                onLeave: () => applyTheme(leaveTheme),
                onEnterBack: () => applyTheme(enterBackTheme),
                onLeaveBack: () => applyTheme(leaveBackTheme)
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
            // Ensure body/html can scroll after leaving homepage
            document.body.style.overflow = ''
            document.documentElement.style.overflow = ''
        }
    }, [location])

    return (
        <PageTransition>
            <main>
                <div className="homepage__wrapper">
                <NavBar colorIdentifier={colorIdentifier} />
                <p className="name">Hans Maas</p>
                <div className="home__title--wrapper">
                    <p className="title__lines">|</p>
                    <h1 className="home__title">CREATIVE DEVELOPER</h1>
                    <p className="title__lines">|</p>
                </div>
                <div className="projects__wrapper">
                    {PROJECTS.map((project, index) => (
                        <div key={project.id} className={`home__project--container${index > 0 ? ' home__project--containers' : ''}`}>
                            <div className="project__thumbnail--wrapper">
                                <img
                                    className={`project__thumbnail project__thumbnail--${project.theme}`}
                                    src={`/home_${project.theme}.${project.theme === 'trainworld' ? 'jpeg' : 'jpg'}`}
                                    alt={`project thumbnail ${project.name.toLowerCase()}`}
                                />
                            </div>
                            <TransitionLink
                                onMouseEnter={() => setScaling(true)}
                                onMouseLeave={() => setScaling(false)}
                                onClick={() => {
                                    setScaling(false)
                                    // Dispatch theme change based on clicked project
                                    window.dispatchEvent(new CustomEvent('themeChange', { detail: { colorIdentifier: project.theme } }))
                                }}
                                to={`/project/${project.id}`}
                                className={`home__project--wrapper${index > 0 ? ` home__project--wrapper${index + 1}` : ''}`}
                            >
                                <h2 className="home__project--title">{project.name}</h2>
                                <div className="home__project--details">
                                    <p>{project.team}</p>
                                    <p>{project.type}</p>
                                    <p>{project.year}</p>
                                </div>
                            </TransitionLink>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        </PageTransition>
    )
}

export default Index
