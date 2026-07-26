import { useOutletContext, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import { THEMES, applyTheme } from '../theme'
import { EMAIL, PHONE, SOCIALS } from '../contact'

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
                        <div className="contact__details">
                            <div className="contact__detail">
                                <p className="contact__detail-label">Email</p>
                                <a
                                    onMouseEnter={() => setScaling(true)}
                                    onMouseLeave={() => setScaling(false)}
                                    href={`mailto:${EMAIL}`}
                                    className="contact__detail-value"
                                >
                                    {EMAIL}
                                </a>
                            </div>
                            <div className="contact__detail">
                                <p className="contact__detail-label">Phone</p>
                                <a
                                    onMouseEnter={() => setScaling(true)}
                                    onMouseLeave={() => setScaling(false)}
                                    href={`tel:${PHONE.replace(/\s/g, '')}`}
                                    className="contact__detail-value"
                                >
                                    {PHONE}
                                </a>
                            </div>
                        </div>
                    </div>
                    <footer className="site-footer">
                        <div className="socials">
                            {SOCIALS.map(social => (
                                <a
                                    key={social.label}
                                    onMouseEnter={() => setScaling(true)}
                                    onMouseLeave={() => setScaling(false)}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social"
                                >
                                    <img src={getAssetPath(`${social.icon}${iconSuffix}.svg`)} alt="" />
                                    {social.label}
                                </a>
                            ))}
                        </div>
                        <p className="site-footer__copy">All rights reserved — © Hans Maas</p>
                    </footer>
                </section>
            </main>
        </PageTransition>
    )
}

export default Contact
