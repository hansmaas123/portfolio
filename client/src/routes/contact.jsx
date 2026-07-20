import { useOutletContext, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { THEMES, applyTheme } from '../theme'

const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const Contact = () => {
    const { colorIdentifier } = useParams()
    const { setScaling } = useOutletContext()

    const theme = THEMES[colorIdentifier] || THEMES.trainworld;
    const iconSuffix = theme.isLight ? 'black' : 'white';

    useEffect(() => {
        applyTheme(THEMES[colorIdentifier] ? colorIdentifier : 'trainworld')
    }, [colorIdentifier])

    return (
        <PageTransition>
            <main>
                <section className="contact__container">
                    <div className="page-glow" aria-hidden="true"></div>
                    <NavBar colorIdentifier={colorIdentifier} />
                    <div className="contact__wrapper">
                        <h1 className="contact__title">LET&apos;S<br /><span className="contact__title2">CONNECT</span></h1>
                        <p className="contact__description">I&apos;m looking forward to meet you so we could build our <span className="highlight">next project together</span>.</p>
                        <div className="button__wrapper">
                            <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="mailto:maashans117@gmail.com" className="btn btn--primary">E-mail</a>
                            <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="tel:+32499103827" className="btn btn--ghost">Message</a>
                        </div>
                    </div>
                    <footer className="site-footer">
                        <div className="socials">
                            <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://www.instagram.com/maasdesign_studios/" target="_blank" rel="noopener noreferrer" className="social">
                                <img src={getAssetPath(`instagram${iconSuffix}.svg`)} alt="" />
                                Instagram
                            </a>
                            <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://www.behance.net/hansmaas" target="_blank" rel="noopener noreferrer" className="social">
                                <img src={getAssetPath(`behance${iconSuffix}.svg`)} alt="" />
                                Behance
                            </a>
                            <a onMouseEnter={() => setScaling(true)} onMouseLeave={() => setScaling(false)} href="https://github.com/hansmaas123" target="_blank" rel="noopener noreferrer" className="social">
                                <img src={getAssetPath(`github${iconSuffix}.svg`)} alt="" />
                                Github
                            </a>
                        </div>
                        <p className="site-footer__copy">All rights reserved — © Hans Maas</p>
                    </footer>
                </section>
            </main>
        </PageTransition>
    )
}

export default Contact
