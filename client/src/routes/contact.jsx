import { useOutletContext, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect, useRef } from 'react'
import PageTransition from '../components/PageTransition'

const THEMES = {
    trainworld: { color1: '#FDFDFD', color2: '#E8E661', smallCircle: '#E8E661', largeCircle: '#FDFDFD', bg: '#272727', bgImage: 'contactbg_trainworld', navHover: '#EEEC76', activeColor: '#272727', buttonPrimColor: '#272727', buttonPrimHoverColor: '#EEEC76', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#272727', icons: 'white' },
    internship: { color1: '#B2D8D8', color2: '#227C8A', smallCircle: '#227C8A', largeCircle: '#2C3A3A', bg: '#18404A', bgImage: 'contactbg_internship', navHover: '#227C8A', activeColor: '#FDFDFD', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#227C8A', buttonSecColor: '#B2D8D8', buttonSecHoverColor: '#FDFDFD', icons: 'white' },
    mixbox: { color1: '#FDFDFD', color2: '#EEEC76', smallCircle: '#EEEC76', largeCircle: '#FDFDFD', bg: '#929948', bgImage: 'contactbg_mixbox', navHover: '#EEEC76', activeColor: '#272727', buttonPrimColor: '#272727', buttonPrimHoverColor: '#EEEC76', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#272727', icons: 'white' },
    stingstitute: { color1: '#FDFDFD', color2: '#FF53B7', smallCircle: '#FF53B7', largeCircle: '#FDFDFD', bg: '#492078', bgImage: 'contactbg_stingstitute', navHover: '#FF53B7', activeColor: '#272727', buttonPrimColor: '#492078', buttonPrimHoverColor: '#FF53B7', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#492078', icons: 'white' },
    rotterdans: { color1: '#2C2D2C', color2: '#2C2D2C', smallCircle: '#272727', largeCircle: '#272727', bg: '#F0F0F0', bgImage: 'contactbg_rotterdans', navHover: '#272727', activeColor: '#FDFDFD', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#2C2D2C', buttonSecColor: '#2C2D2C', buttonSecHoverColor: '#FDFDFD', icons: 'black' },
    equalmelodies: { color1: '#FDFDFD', color2: '#D8595B', smallCircle: '#D8595B', largeCircle: '#272727', bg: '#272727', bgImage: 'contactbg_equalmelodies', navHover: '#D8595B', activeColor: '#FDFDFD', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#D8595B', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#FDFDFD', icons: 'white' },
    reactartistique: { color1: '#FDFDFD', color2: '#11210F', smallCircle: '#FDFDFD', largeCircle: '#274A23', bg: '#366830', bgImage: 'contactbg_reactartistique', navHover: '#274A23', activeColor: '#FDFDFD', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#FDFDFD', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#FDFDFD', icons: 'white' },
    dishknob: { color1: '#272727', color2: '#4C984C', smallCircle: '#4C984C', largeCircle: '#4C984C', bg: '#FFF8F4', bgImage: 'contactbg_dishknob', navHover: '#4C984C', activeColor: '#FDFDFD', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#4C984C', buttonSecColor: '#4C984C', buttonSecHoverColor: '#FDFDFD', icons: 'black' },
    trimcraft: { color1: '#FDFDFD', color2: '#EEEC76', smallCircle: '#EEEC76', largeCircle: '#FDFDFD', bg: '#434321', bgImage: 'contactbg_trimcraft', navHover: '#EEEC76', activeColor: '#FDFDFD', buttonPrimColor: '#272727', buttonPrimHoverColor: '#EEEC76', buttonSecColor: '#EEEC76', buttonSecHoverColor: '#272727', icons: 'white' },
    smashabutton: { color1: '#FDFDFD', color2: '#FEA500', smallCircle: '#FEA500', largeCircle: '#FEA500', bg: '#21432E', bgImage: 'contactbg_smashabutton', navHover: '#FEA500', activeColor: '#272727', buttonPrimColor: '#272727', buttonPrimHoverColor: '#FEA500', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#FDFDFD', icons: 'white' },
    chessbase: { color1: '#272727', color2: '#ECEDCE', smallCircle: '#ECEDCE', largeCircle: '#ECEDCE', bg: '#7A9A57', bgImage: 'contactbg_chessbase', navHover: '#D5D6BA', activeColor: '#FDFDFD', activeBg: '#5A723F', buttonPrimColor: '#FDFDFD', buttonPrimHoverColor: '#FDFDFD', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#FDFDFD', icons: 'white' },
    default: { color1: '#FDFDFD', color2: '#E69A8D', smallCircle: '#E69A8D', largeCircle: '#E69A8D', bg: '#2E3495', bgImage: 'contactbg_weatherdog', navHover: '#E69A8D', activeColor: '#FDFDFD', buttonPrimColor: '#272727', buttonPrimHoverColor: '#E69A8D', buttonSecColor: '#FDFDFD', buttonSecHoverColor: '#FDFDFD', icons: 'white' }
}

const Contact = () => {
    const { colorIdentifier } = useParams()
    const { setScaling } = useOutletContext()
    const listenersRef = useRef([])

    useEffect(() => {
        const theme = THEMES[colorIdentifier] || THEMES.default
        const accentColor = theme.activeBg || theme.color2
        const $ = s => document.querySelector(s)
        const $$ = s => document.querySelectorAll(s)

        // Apply base styles
        $('.color1').style.color = theme.color1
        $('.color2').style.color = theme.color2
        $('.highlight').style.color = theme.color2
        const smallCircle = $('.small_circle');
        const largeCircle = $('.large_circle');
        if (smallCircle) smallCircle.style.backgroundColor = theme.smallCircle;
        if (largeCircle) largeCircle.style.backgroundColor = theme.largeCircle;
        $('.contact__description').style.color = theme.color1
        Object.assign($('.background1').style, { backgroundColor: theme.bg, backgroundImage: `url("/${theme.bgImage}.svg")` })

        // Nav links hover
        $$('.nav__link').forEach(link => {
            if (!link.classList.contains('active')) {
                link.style.borderColor = '#efefef'
                const enter = () => { link.style.borderColor = theme.navHover; link.style.color = theme.navHover }
                const leave = () => { link.style.borderColor = '#efefef'; link.style.color = '#272727' }
                link.addEventListener('mouseenter', enter)
                link.addEventListener('mouseleave', leave)
                listenersRef.current.push({ el: link, event: 'mouseenter', handler: enter }, { el: link, event: 'mouseleave', handler: leave })
            }
        })

        // Active nav link
        const activeLink = $('.active')
        Object.assign(activeLink.style, { backgroundColor: accentColor, borderColor: accentColor, color: theme.activeColor })
        
        // Active link hover to keep its color
        const activeEnter = () => { activeLink.style.borderColor = accentColor; activeLink.style.backgroundColor = accentColor }
        const activeLeave = () => { activeLink.style.borderColor = accentColor; activeLink.style.backgroundColor = accentColor }
        activeLink.addEventListener('mouseenter', activeEnter)
        activeLink.addEventListener('mouseleave', activeLeave)
        listenersRef.current.push({ el: activeLink, event: 'mouseenter', handler: activeEnter }, { el: activeLink, event: 'mouseleave', handler: activeLeave })

        // Buttons
        Object.assign($('.button__color').style, { backgroundColor: accentColor, borderColor: accentColor, color: theme.buttonPrimColor })
        Object.assign($('.button__color--sec').style, { borderColor: accentColor, color: theme.buttonSecColor })

        // Button hover events
        const primBtn = $('.contact__button--prim')
        const secBtn = $('.contact__button--sec')
        const primEnter = () => { primBtn.style.backgroundColor = 'transparent'; primBtn.style.color = theme.buttonPrimHoverColor }
        const primLeave = () => { primBtn.style.backgroundColor = accentColor; primBtn.style.color = theme.buttonPrimColor }
        const secEnter = () => { secBtn.style.backgroundColor = accentColor; secBtn.style.color = theme.buttonSecHoverColor }
        const secLeave = () => { secBtn.style.backgroundColor = 'transparent'; secBtn.style.color = theme.buttonSecColor }
        primBtn.addEventListener('mouseenter', primEnter)
        primBtn.addEventListener('mouseleave', primLeave)
        secBtn.addEventListener('mouseenter', secEnter)
        secBtn.addEventListener('mouseleave', secLeave)
        listenersRef.current.push(
            { el: primBtn, event: 'mouseenter', handler: primEnter }, { el: primBtn, event: 'mouseleave', handler: primLeave },
            { el: secBtn, event: 'mouseenter', handler: secEnter }, { el: secBtn, event: 'mouseleave', handler: secLeave }
        )

        // Social icons
        $('.bottom__right').style.color = theme.color1
        $$('.social__contact').forEach(s => s.style.color = theme.color1)
        $('.social__icon--instagram').src = `/instagram${theme.icons}.svg`
        $('.social__icon--behance').src = `/behance${theme.icons}.svg`
        $('.social__icon--github').src = `/github${theme.icons}.svg`

        return () => {
            listenersRef.current.forEach(({ el, event, handler }) => el.removeEventListener(event, handler))
            listenersRef.current = []
        }
    }, [colorIdentifier])

    return (
        <PageTransition>
            <main>
            <section className="contact__container background1">
                <NavBar colorIdentifier={colorIdentifier} />
                <h1 className="hidden">Let&apos;s Connect</h1>
                <div className="contact__wrapper">
                    <div className="contact__detail--wrapper">
                        <p className="contact__title color1">LET&apos;S<br /><span className="contact__title2 color2">CONNECT</span></p>
                        <p className="contact__description color1">I&apos;m looking forward to meet you so we could build our <span className="highlight color2">next project together</span></p>
                        <div className="button__wrapper">
                            <a onMouseEnter={() => setScaling(true)} href="mailto:maashans117@gmail.com" target="_blank" rel="noopener noreferrer" className="about__contact--button contact__button contact__button--prim button__color">E-mail</a>
                            <a onMouseLeave={() => setScaling(false)} href="tel:+32499103827" className="about__contact--button contact__button contact__button--sec button__color--sec">Message</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom__left">
                        <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://www.instagram.com/maasdesign_studios/" target="_blank" rel="noopener noreferrer" className="social social__contact">
                            <img src="/instagramwhite.svg" alt="Instagram" className="social__icon--instagram" />
                            <p>Instagram</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://www.behance.net/hansmaas" target="_blank" rel="noopener noreferrer" className="social social__contact">
                            <img src="/behancewhite.svg" alt="Behance" className="social__icon--behance" />
                            <p>Behance</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://github.com/hansmaas123" target="_blank" rel="noopener noreferrer" className="social social__contact">
                            <img src="/githubwhite.svg" alt="Github" className="social__icon--github" />
                            <p>Github</p>
                        </a>
                    </div>
                    <p className="bottom__right bottom__right--contact">All rights reserved — © Hans Maas</p>
                </div>
            </section>
        </main>
        </PageTransition>
    )
}

export default Contact
