import NavBar from "../components/NavBar"
import '../styles/style.css'
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import { useEffect } from "react"
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'
import { THEMES, applyTheme } from '../theme'
import { EMAIL, PHONE } from '../contact'
import { CONTROLLER, LAST_UPDATED } from '../legal'

const Privacy = () => {
    const { colorIdentifier } = useParams()
    const { setScaling } = useOutletContext()
    const { pathname } = useLocation()

    const theme = THEMES[colorIdentifier] ? colorIdentifier : 'trainworld'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        applyTheme(theme)
    }, [theme])

    const cursor = {
        onMouseEnter: () => setScaling(true),
        onMouseLeave: () => setScaling(false)
    }

    return (
        <PageTransition>
            <main className="legal">
                <div className="page-glow" aria-hidden="true"></div>
                <NavBar colorIdentifier={theme} />

                <header className="legal__hero">
                    <p className="legal__eyebrow">Privacy</p>
                    <h1 className="legal__title">PRIVACY<br />POLICY</h1>
                    <p className="legal__updated">Last updated — {LAST_UPDATED}</p>
                </header>

                <div className="legal__body">
                    <p className="legal__lead">
                        This site does not use cookies, does not track you and has no
                        contact form. The little data that is processed is described
                        below, in line with the General Data Protection Regulation
                        (Regulation (EU) 2016/679) and the Belgian Act of 30 July 2018 on
                        the protection of natural persons with regard to the processing
                        of personal data.
                    </p>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">01</span> Who is responsible for your data
                        </h2>
                        <p>
                            The controller of the personal data described here is:
                        </p>
                        <ul className="legal__facts">
                            <li><span>Name</span>{CONTROLLER.name}</li>
                            {CONTROLLER.address && (
                                <li><span>Address</span>{CONTROLLER.address}</li>
                            )}
                            <li>
                                <span>Email</span>
                                <a {...cursor} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </li>
                            <li>
                                <span>Phone</span>
                                <a {...cursor} href={`tel:${PHONE.replace(/\s/g, '')}`}>{PHONE}</a>
                            </li>
                            {CONTROLLER.enterpriseNumber && (
                                <li><span>Enterprise no.</span>{CONTROLLER.enterpriseNumber}</li>
                            )}
                        </ul>
                        <p>
                            This is a personal portfolio. Nothing is sold or offered here
                            for payment, so I act in a private capacity rather than as a
                            business. Given that, and the scale of the site, no data
                            protection officer is required and none has been appointed.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">02</span> What is processed, why, and on what basis
                        </h2>

                        <h3 className="legal__subheading">Server log data</h3>
                        <p>
                            Like any website, this one is served by a web host that records
                            technical data each time a page or file is requested: your IP
                            address, the date and time, the page or file requested, the
                            referring page and your browser and operating system version.
                        </p>
                        <p>
                            <strong>Purpose</strong> — keeping the site available, secure
                            and free of abuse. <strong>Legal basis</strong> — my legitimate
                            interest in operating and protecting the site
                            (Article 6(1)(f) GDPR). These logs are not used to build a
                            profile of you and are not linked to any other data.
                        </p>

                        <h3 className="legal__subheading">If you contact me</h3>
                        <p>
                            The contact page shows an email address and a phone number as
                            ordinary links; there is no form, so nothing you write passes
                            through this website. If you choose to email or call me, I
                            process what you send me — your name, your email address or
                            phone number, and the content of your message.
                        </p>
                        <p>
                            <strong>Purpose</strong> — answering you and, where relevant,
                            discussing possible work. <strong>Legal basis</strong> — my
                            legitimate interest in replying to people who choose to
                            contact me (Article 6(1)(f) GDPR); where your message concerns
                            an offer of work, also steps taken at your request before
                            entering into a contract (Article 6(1)(b) GDPR).
                        </p>

                        <p className="legal__note">
                            There is no account, no newsletter, no comment section and no
                            payment on this site. No special categories of data
                            (Article 9 GDPR) are processed, and providing any data is
                            entirely voluntary.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">03</span> Cookies and tracking
                        </h2>
                        <p>
                            This website sets <strong>no cookies at all</strong> and stores
                            nothing in your browser&apos;s local or session storage. There
                            is no analytics, no advertising, no social media pixel and no
                            profiling. That is also why you are not asked for cookie
                            consent — there is nothing to consent to.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">04</span> Who else may receive data
                        </h2>
                        <p>
                            I do not sell or share your data. Three parties are
                            unavoidably involved in delivering the site, and each of them
                            sees your IP address because your browser has to request files
                            from them:
                        </p>
                        <ul className="legal__list">
                            <li>
                                <strong>The web host</strong> — stores the server logs
                                described above on my behalf, as a processor under
                                Article 28 GDPR.
                            </li>
                            <li>
                                <strong>Adobe Fonts (Typekit)</strong>, Adobe Inc. — serves
                                the typefaces used on this site.
                            </li>
                            <li>
                                <strong>Cloudinary</strong>, Cloudinary Ltd. — serves the
                                project images in the portfolio.
                            </li>
                        </ul>
                        <p>
                            Links to Instagram, LinkedIn, GitHub and YouTube are plain
                            links. Nothing is loaded from those platforms until you click
                            through, at which point their own privacy policies apply.
                        </p>
                        <p>
                            Data may also be disclosed where I am legally obliged to do so,
                            for example on a valid request from a public authority.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">05</span> Transfers outside the EEA
                        </h2>
                        <p>
                            Adobe and Cloudinary are established outside the European
                            Economic Area or may process data there. Such transfers take
                            place on the basis of the safeguards provided for in Chapter V
                            GDPR — the European Commission&apos;s Standard Contractual
                            Clauses and, where the provider is certified, the EU–US Data
                            Privacy Framework adequacy decision.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">06</span> How long data is kept
                        </h2>
                        <ul className="legal__list">
                            <li>
                                <strong>Server logs</strong> — kept by the host for a short
                                period for security and diagnostics, and then deleted or
                                overwritten.
                            </li>
                            <li>
                                <strong>Emails and messages</strong> — kept for as long as
                                needed to handle your enquiry and any resulting work, and
                                deleted afterwards unless a longer period is required by
                                law.
                            </li>
                        </ul>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">07</span> Your rights
                        </h2>
                        <p>Under the GDPR you have the right to:</p>
                        <ul className="legal__list">
                            <li>ask whether I hold data about you and obtain a copy of it (Article 15);</li>
                            <li>have inaccurate data corrected (Article 16);</li>
                            <li>have your data erased (Article 17);</li>
                            <li>have the processing restricted (Article 18);</li>
                            <li>receive your data in a portable format (Article 20);</li>
                            <li>
                                object to processing based on legitimate interest, including
                                at any time and on grounds relating to your particular
                                situation (Article 21).
                            </li>
                        </ul>
                        <p>
                            No decisions are taken about you by automated means and there is
                            no profiling within the meaning of Article 22 GDPR.
                        </p>
                        <p>
                            To exercise any of these rights, email me at{' '}
                            <a {...cursor} href={`mailto:${EMAIL}`}>{EMAIL}</a>. I will
                            reply within one month. I may ask you for a little more
                            information if I cannot otherwise establish who you are.
                        </p>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">08</span> Complaints
                        </h2>
                        <p>
                            If you believe your data is being handled unlawfully, please
                            tell me first — I would rather fix it. You also have the right
                            to lodge a complaint with the Belgian supervisory authority:
                        </p>
                        <ul className="legal__facts">
                            <li>
                                <span>Authority</span>
                                Gegevensbeschermingsautoriteit / Autorité de protection des données
                            </li>
                            <li><span>Address</span>Drukpersstraat 35, 1000 Brussels, Belgium</li>
                            <li>
                                <span>Email</span>
                                <a {...cursor} href="mailto:contact@apd-gba.be">contact@apd-gba.be</a>
                            </li>
                            <li>
                                <span>Website</span>
                                <a {...cursor} href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">
                                    gegevensbeschermingsautoriteit.be
                                </a>
                            </li>
                        </ul>
                    </section>

                    <section className="legal__section">
                        <h2 className="legal__heading">
                            <span className="legal__num">09</span> Changes to this policy
                        </h2>
                        <p>
                            If the site changes in a way that affects your data — a contact
                            form, analytics, anything that sets a cookie — this page is
                            updated before that change goes live, and the date at the top
                            is revised.
                        </p>
                    </section>

                    <div className="legal__back">
                        <TransitionLink {...cursor} to={`/contact/${theme}`} className="btn btn--primary">
                            Get in touch
                            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </TransitionLink>
                    </div>
                </div>

                <footer className="site-footer">
                    <p className="site-footer__copy">All rights reserved — © Hans Maas</p>
                </footer>
            </main>
        </PageTransition>
    )
}

export default Privacy
