import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

const Contact = ({colorIdentifier}) => {
    console.log()
    return (
        <section className="contact__container">
            <NavBar colorIdentifier={colorIdentifier} />
            <h1 className="hidden">Let&apos;s Conncet</h1>
            <div className="contact__wrapper">
                <div className="contact__detail--wrapper">
                    <p className="contact__title contact__title1">LET&apos;S<br /><span className="contact__title2">CONNECT</span></p>
                    <p className="contact__description">I’m looking forward to meet you so we could build our <span className="highlight color">next project together</span></p>
                    <div className="button__wrapper">
                        <a to={''} className="about__contact--button contact__button contact__button--prim">E-mail</a>
                        <a to={''} className="about__contact--button contact__button contact__button--sec">Message</a>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom__left">
                    <a href="https://www.instagram.com/maasdesign_studios/" className="social social__contact">
                        <img src="../../instagramwhite.svg" alt="icon of instagram" />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.behance.net/hansmaas" className="social social__contact">
                        <img src="../../behancewhite.svg" alt="icon of behance" />
                        <p>Behance</p>
                    </a>
                    <a href="https://github.com/hansmaas123" className="social social__contact">
                        <img src="../../githubwhite.svg" alt="icon of github" />
                        <p>Github</p>
                    </a>
                </div>
                <p className="bottom__right bottom__right--contact">All rights reserved — © Hans Maas</p>
            </div>
        </section>
    )
}

export default Contact