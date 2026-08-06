import { useOutletContext, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'
import { THEMES, applyTheme } from '../theme'
import { EMAIL, PHONE, SOCIALS } from '../contact'
import { useRootClass } from '../useRootClass'

const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const Contact = () => {
    const { colorIdentifier } = useParams()
    const { setScaling } = useOutletContext()

    const theme = THEMES[colorIdentifier] || THEMES.trainworld;
    const iconSuffix = theme.isLight ? 'black' : 'white';

    useEffect(() => {
        applyTheme(THEMES[colorIdentifier] ? colorIdentifier : 'trainworld')
    }, [colorIdentifier])

    // the page is built to fit one screen, so drop the reserved scrollbar gutter
    useRootClass('no-gutter')

    // every link grows the custom cursor, like the rest of the site
    const cursor = {
        onMouseEnter: () => setScaling(true),
        onMouseLeave: () => setScaling(false)
    }

    const details = [
        { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
        { label: 'Phone', value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` }
    ]

    return (
        <PageTransition>
            <main className="contact">
                <div className="page-glow" aria-hidden="true"></div>
                <NavBar colorIdentifier={colorIdentifier} />

                <div className="contact__layout">
                    <header className="contact__intro">
                        <p className="contact__eyebrow">Get in touch</p>
                        <h1 className="contact__title">
                            LET&apos;S<br />
                            <span className="contact__title-accent">CONNECT</span>
                        </h1>
                        <p className="contact__description">
                            I&apos;m looking forward to meet you so we could build our{' '}
                            <span className="highlight">next project together</span>.
                        </p>
                    </header>

                    <div className="contact__panel">
                        {details.map(detail => (
                            <a
                                key={detail.label}
                                {...cursor}
                                href={detail.href}
                                className="contact__row"
                            >
                                <span className="contact__row-label">{detail.label}</span>
                                <span className="contact__row-value">{detail.value}</span>
                                <svg className="contact__row-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        ))}

                        <div className="contact__elsewhere">
                            <p className="contact__eyebrow">Elsewhere</p>
                            <div className="socials">
                                {SOCIALS.map(social => (
                                    <a
                                        key={social.label}
                                        {...cursor}
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
                        </div>
                    </div>
                </div>

                <footer className="site-footer">
                    <div className="site-footer__end">
                        <TransitionLink
                            {...cursor}
                            to={`/privacy/${colorIdentifier || 'trainworld'}`}
                            className="site-footer__link"
                        >
                            Privacy policy
                        </TransitionLink>
                        <p className="site-footer__copy">All rights reserved - © Hans Maas</p>
                    </div>
                </footer>
            </main>
        </PageTransition>
    )
}

export default Contact
