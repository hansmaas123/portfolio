import NavBar from "../components/NavBar"
import '../styles/style.css'
import { Link, useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect } from "react";

const About = () => {
    let { colorIdentifier } = useParams();
   

    useEffect(() => {
        {colorIdentifier === 'trainworld' ?
            (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#272727')
            : colorIdentifier === 'mixbox' ? 
                (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#929948')
                : colorIdentifier === 'stingstitute' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'rotterdans' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'equalmelodies' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'reactartistique' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'dishknob' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'trimcraft' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'smashabutton' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : colorIdentifier === 'chessbase' ? (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
                : (document.querySelector('.aboutpage__bg--wrapper').style.backgroundColor = '#492078')
        }
    }, [colorIdentifier])
    
    return (
        <div className="aboutpage__wrapper">
            <div className="aboutpage__bg--wrapper">
                <NavBar />
                <section className="about__title--wrapper">
                    <h1 className="hidden">CREATING TOMMORROW&apos;S EXPERIENCES TODAY</h1>
                    <div>
                        <p className="about__title about__title1">CREATING TOMORROW&apos;S</p>
                        <p className="about__title about__title2">EXPERIENCES</p>
                        <p className="about__title about__title3">TODAY.</p>
                        <img src="../../about_arrow.svg" alt="arrow" className="about__arrow" />
                    </div>
                </section>
                <section className="about__intro--wrapper">
                    <h2 className="hidden">Personal Info</h2>
                    <p className="about__intro">Hi, my name is <span className="highlight">Hans</span>. I am a Belgian student, currently studying <span className="bold">Digital Design and Development</span> (Devine) in Kortrijk.</p>
                    <p className="about__description about__description1"> I love to to get <span className="bold">out of my comfort zone</span>, creating things I never thought I could. I have gained a <span className="bold">lot of skills</span>, but I would like to expand my knowledge and dive deeper in mostly <span className="bold">Development</span> and a bit of <span className="bold">Design</span>.</p>
                    <p className="about__description about__description2">When i’m off work, I love to grab a drink at the <span className="bold">bar</span> with my friends, play the <span className="bold">piano</span> and go <span className="bold">bouldering</span> (indoor climbing).</p>
                </section>
            </div>
            <section className="about__skillset--wrapper">
                <h2 className="about__skillset--title">MY SKILLSET</h2>
                <div>
                    <div className="about__skillset--itemwrapperall">
                        <button onClick={() => {
                            document.querySelector('.about__skillset--itemhidden').classList.toggle('display');
                            if (document.querySelector('.about__skillset--itemhidden').classList.contains('display')) {
                                document.querySelector('.arrow').style.transform = 'rotate(180deg)'
                            } else {
                                document.querySelector('.arrow').style.transform = 'rotate(0deg)'
                            }
                        }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__skillset--item">DEVELOPMENT</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow" />
                        </button>
                        <div className="about__skillset--itemhidden">
                            <div className="logo__wrapper--all">
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../html.svg" alt="html icon" />
                                    </div>
                                    <p className="logo__name">HTML5</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../css.svg" alt="css icon" />
                                    </div>
                                    <p className="logo__name">CSS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../js.svg" alt="javascript icon" />
                                    </div>
                                    <p className="logo__name">JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../php.svg" alt="php icon" />
                                    </div>
                                    <p className="logo__name">PHP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../react.svg" alt="react icon" />
                                    </div>
                                    <p className="logo__name">REACT</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper logo__wrapper--long">
                                        <img src="../../react.svg" alt="react native icon" />
                                    </div>
                                    <p className="logo__name">REACT NATIVE</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../astro.svg" alt="astro icon" />
                                    </div>
                                    <p className="logo__name">ASTRO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../strapi.svg" alt="strapi icon" />
                                    </div>
                                    <p className="logo__name">STRAPI</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../arduino.svg" alt="arduino icon" />
                                    </div>
                                    <p className="logo__name">ARDUINO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../p5js.svg" alt="p5.js icon" />
                                    </div>
                                    <p className="logo__name">P5JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../sequelace.svg" alt="my sequel ace icon" />
                                    </div>
                                    <p className="logo__name">SEQUEL ACE</p>
                                </div>
                            </div>
                            <div className="logo__container2">
                                <div className="logo__wrapper--all logo__wrapper--all2">
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../gsap.svg" alt="gsap icon" />
                                        </div>
                                        <p className="logo__name">GSAP</p>
                                    </div>
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../gtm.svg" alt="google teachable machine icon" />
                                        </div>
                                        <p className="logo__name">GTM</p>
                                    </div>
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../ml5.svg" alt="ml5js icon" />
                                        </div>
                                        <p className="logo__name">ML5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__skillset--itemwrapperall">
                        <button onClick={() => {
                            document.querySelector('.about__skillset--itemhidden2').classList.toggle('display');
                            if (document.querySelector('.about__skillset--itemhidden2').classList.contains('display')) {
                                document.querySelector('.arrow2').style.transform = 'rotate(180deg)'
                            } else {
                                document.querySelector('.arrow2').style.transform = 'rotate(0deg)'
                            }
                        }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__skillset--item">DESIGN</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow2" />
                        </button>
                        <div className="about__skillset--itemhidden2">
                            <div className="logo__wrapper--alldesign">
                                <p className="logo__name--design">Brand Identity</p>
                                <p className="logo__name--design">Motion Design</p>
                                <p className="logo__name--design">Campaign</p>
                                <p className="logo__name--design">Storytelling & Tone of Voice</p>
                                <p className="logo__name--design">Packaging</p>
                            </div>
                            <div className="logo__container--design2">
                                <p className="logo__name--design">Logotypes & Brand Marks</p>
                                <p className="logo__name--design">Web/App Design</p>
                                <p className="logo__name--design">Graphic Design</p>
                                <p className="logo__name--design">UX/UI Design</p>
                            </div>
                            <div className="logo__wrapper--alldesign3">
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../ai.svg" alt="adobe illustrator icon" />
                                    </div>
                                    <p className="logo__name--design2">ADOBE ILLUSTRATOR</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../ps.svg" alt="adobe photoshop icon" />
                                    </div>
                                    <p className="logo__name--design2">ADOBE PHOTOSHOP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../ae.svg" alt="adobe after effects icon" />
                                    </div>
                                    <p className="logo__name--design2">ADOBE AFTER EFFECTS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../au.svg" alt="adobe audition icon" />
                                    </div>
                                    <p className="logo__name--design2">ADOBE AUDITION</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../figma.svg" alt="figma icon" />
                                    </div>
                                    <p className="logo__name--design2">FIGMA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__skillset--itemwrapperall">
                        <button onClick={() => {
                            document.querySelector('.about__skillset--itemhidden3').classList.toggle('display2');
                            if (document.querySelector('.about__skillset--itemhidden3').classList.contains('display2')) {
                                document.querySelector('.arrow3').style.transform = 'rotate(180deg)'
                            } else {
                                document.querySelector('.arrow3').style.transform = 'rotate(0deg)'
                            }
                        }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__skillset--item">UX RESEARCH</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow3" />
                        </button>
                        <div className="about__skillset--itemhidden3">
                            <div className="logo__wrapper--alldesign">
                                <p className="logo__name--design">Prototyping & Wireframing</p>
                                <p className="logo__name--design">Usability & Concept Testing</p>
                                <p className="logo__name--design">Heuristic Evaluation</p>
                                <p className="logo__name--design">Cultural Probes</p>
                            </div>
                            <div className="logo__container--design2">
                                <p className="logo__name--design">Primary Research</p>
                                <p className="logo__name--design">Secondary Research</p>
                                <p className="logo__name--design">Personas & Journey Mapping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about__contact--container">
                <div className="about__contact--wrapper">
                    <div className="about__contact--items">
                        <h2 className="about__contact--title">Let&apos;s Talk</h2>
                        <Link to={'/contact'} className="about__contact--button">Contact me</Link>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom__left">
                        <a href="https://www.instagram.com/maasdesign_studios/" className="social">
                            <img src="../../instagram.svg" alt="icon of instagram" />
                            <p>Instagram</p>
                        </a>
                        <a href="https://www.behance.net/hansmaas" className="social">
                            <img src="../../behance.svg" alt="icon of behance" />
                            <p>Behance</p>
                        </a>
                        <a href="https://github.com/hansmaas123" className="social">
                            <img src="../../github.svg" alt="icon of github" />
                            <p>Github</p>
                        </a>
                    </div>
                    <p className="bottom__right">All rights reserved — © Hans Maas</p>
                </div>
            </section>
        </div>

    )
}

About.propTypes = {
    colorIdentifier: PropTypes.string
};

export default About