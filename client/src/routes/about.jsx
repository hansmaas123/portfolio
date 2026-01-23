import NavBar from "../components/NavBar"
import '../styles/style.css'
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect } from "react";
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'

// Theme configuration
const THEMES = {
    trainworld: {
        bgColor: '#272727',
        bgImage: 'url("/aboutbg_trainworld.svg")',
        arrowSrc: '/about_arrow_trainworld.svg',
        smallCircle: '#E8E661',
        largeCircle: '#FDFDFD',
        color1: '#EEEC76',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#EEEC76',
        navHoverColor: '#EEEC76',
        activeColor: '#EEEC76',
        activeBg: '#EEEC76',
        activeText: '#272727',
        buttonColor: '#272727',
        buttonBg: '#EEEC76',
        buttonBorder: '#EEEC76',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
    },
    mixbox: {
        bgColor: '#929948',
        bgImage: 'url("/aboutbg_mixbox.svg")',
        arrowSrc: '/about_arrow_trainworld.svg',
        smallCircle: '#EEEC76',
        largeCircle: '#FDFDFD',
        color1: '#EEEC76',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#EEEC76',
        navHoverColor: '#EEEC76',
        activeColor: '#EEEC76',
        activeBg: '#EEEC76',
        activeText: '#272727',
        buttonColor: '#272727',
        buttonBg: '#EEEC76',
        buttonBorder: '#EEEC76',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
    },
    stingstitute: {
        bgColor: '#492078',
        bgImage: 'url("/aboutbg_stingstitute.svg")',
        arrowSrc: '/about_arrow_stingstitute.svg',
        smallCircle: '#FF53B7',
        largeCircle: '#FDFDFD',
        color1: '#FF53B7',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#FF53B7',
        navHoverColor: '#FF53B7',
        activeColor: '#FF53B7',
        activeBg: '#FF53B7',
        activeText: '#492078',
        buttonColor: '#492078',
        buttonBg: '#FF53B7',
        buttonBorder: '#FF53B7',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
        buttonLeaveColor: '#492078',
    },
    rotterdans: {
        bgColor: '#efefef',
        bgImage: 'url("/aboutbg_rotterdans.svg")',
        arrowSrc: '/about_arrow_rotterdans.svg',
        smallCircle: '#2C2D2C',
        largeCircle: '#2C2D2C',
        color1: '#2C2D2C',
        color2: '#2C2D2C',
        color3: '#2C2D2C',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#2C2D2C',
        navHoverColor: '#2C2D2C',
        activeColor: '#2C2D2C',
        activeBg: '#2C2D2C',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#2C2D2C',
        buttonBorder: '#2C2D2C',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#2C2D2C',
        buttonHoverColor: '#2C2D2C',
    },
    equalmelodies: {
        bgColor: '#272727',
        bgImage: 'url("/aboutbg_equalmelodies.svg")',
        arrowSrc: '/about_arrow_equalmelodies.svg',
        smallCircle: '#D8595B',
        largeCircle: '#272727',
        color1: '#D8595B',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#D8595B',
        navHoverColor: '#D8595B',
        activeColor: '#D8595B',
        activeBg: '#D8595B',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#D8595B',
        buttonBorder: '#D8595B',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
    },
    reactartistique: {
        bgColor: '#366830',
        bgImage: 'url("/aboutbg_reactartistique.svg")',
        arrowSrc: '/about_arrow_reactartistique.svg',
        smallCircle: '#FDFDFD',
        largeCircle: '#274A23',
        color1: '#11210F',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#FDFDFD',
        navHoverColor: '#FDFDFD',
        activeColor: '#FDFDFD',
        activeBg: '#274A23',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#274A23',
        buttonBorder: '#274A23',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
    },
    dishknob: {
        bgColor: '#FFF8F4',
        bgImage: 'url("/aboutbg_dishknob.svg")',
        arrowSrc: '/about_arrow_dishknob.svg',
        smallCircle: '#4C984C',
        largeCircle: '#4C984C',
        color1: '#4C984C',
        color2: '#2C2D2C',
        color3: '#2C2D2C',
        arrowDown: '/about_arrowdown_black.svg',
        borderColor: '#4C984C',
        navHoverColor: '#4C984C',
        activeColor: '#4C984C',
        activeBg: '#4C984C',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#4C984C',
        buttonBorder: '#4C984C',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
    },
    trimcraft: {
        bgColor: '#434321',
        bgImage: 'url("/aboutbg_trimcraft.svg")',
        arrowSrc: '/about_arrow_trainworld.svg',
        smallCircle: '#EEEC76',
        largeCircle: '#FDFDFD',
        color1: '#EEEC76',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#EEEC76',
        navHoverColor: '#EEEC76',
        activeColor: '#EEEC76',
        activeBg: '#EEEC76',
        activeText: '#272727',
        buttonColor: '#272727',
        buttonBg: '#EEEC76',
        buttonBorder: '#EEEC76',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
    },
    smashabutton: {
        bgColor: '#21432E',
        bgImage: 'url("/aboutbg_smashabutton.svg")',
        arrowSrc: '/about_arrow_smashabutton.svg',
        smallCircle: '#FEA500',
        largeCircle: '#FEA500',
        color1: '#FEA500',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#FEA500',
        navHoverColor: '#FEA500',
        activeColor: '#FEA500',
        activeBg: '#FEA500',
        activeText: '#272727',
        buttonColor: '#272727',
        buttonBg: '#FEA500',
        buttonBorder: '#FEA500',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
    },
    chessbase: {
        bgColor: '#7A9A57',
        bgImage: 'url("/aboutbg_chessbase.svg")',
        arrowSrc: '/about_arrow_chessbase.svg',
        smallCircle: '#ECEDCE',
        largeCircle: '#ECEDCE',
        color1: '#ECEDCE',
        color2: '#2C2D2C',
        color3: '#2C2D2C',
        arrowDown: '/about_arrowdown_black.svg',
        borderColor: '#ECEDCE',
        navHoverColor: '#ECEDCE',
        activeColor: '#ECEDCE',
        activeBg: '#5A723F',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#5A723F',
        buttonBorder: '#5A723F',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
    },
    weatherdog: {
        bgColor: '#2E3495',
        bgImage: 'url("/aboutbg_weatherdog.svg")',
        arrowSrc: '/about_arrow_weatherdog.svg',
        smallCircle: '#E69A8D',
        largeCircle: '#E69A8D',
        color1: '#E69A8D',
        color2: '#FDFDFD',
        color3: '#FDFDFD',
        arrowDown: '/about_arrowdown_white.svg',
        borderColor: '#E69A8D',
        navHoverColor: '#E69A8D',
        activeColor: '#E69A8D',
        activeBg: '#E69A8D',
        activeText: '#FDFDFD',
        buttonColor: '#FDFDFD',
        buttonBg: '#E69A8D',
        buttonBorder: '#E69A8D',
        buttonHoverBg: 'transparent',
        buttonHoverBorder: '#272727',
        buttonHoverColor: '#272727',
    }
};

const applyTheme = (theme) => {
    if (!theme) return;

    const wrapper = document.querySelector('.aboutpage__wrapper');
    const bgWrapper = document.querySelector('.aboutpage__bg--wrapper');
    const arrow = document.querySelector('.about__arrow');
    const smallCircle = document.querySelector('.small_circle');
    const largeCircle = document.querySelector('.large_circle');
    const button = document.querySelector('.about__button--color');
    const activeNav = document.querySelector('.active');

    if (wrapper) wrapper.style.backgroundColor = theme.bgColor;
    if (bgWrapper) bgWrapper.style.backgroundImage = theme.bgImage;
    if (arrow) arrow.src = theme.arrowSrc;
    if (smallCircle) smallCircle.style.backgroundColor = theme.smallCircle;
    if (largeCircle) largeCircle.style.backgroundColor = theme.largeCircle;

    // Apply colors
    document.querySelectorAll('.about__color1').forEach(el => el.style.color = theme.color1);
    document.querySelectorAll('.about__color2').forEach(el => el.style.color = theme.color2);
    const color3 = document.querySelector('.about__color3');
    if (color3) color3.style.color = theme.color3;

    document.querySelectorAll('.about__arrowdown').forEach(el => el.src = theme.arrowDown);
    document.querySelectorAll('.about__skillset--itemwrapperall').forEach(el => el.style.borderColor = theme.borderColor);

    // Apply navigation styles
    document.querySelectorAll('.nav__link').forEach(link => {
        link.style.borderColor = '#efefef';
        if (!link.classList.contains('active')) {
            link.addEventListener('mouseenter', () => {
                link.style.borderColor = theme.navHoverColor;
                link.style.color = theme.navHoverColor;
            });
            link.addEventListener('mouseleave', () => {
                link.style.borderColor = '#efefef';
                link.style.color = '#272727';
            });
        }
    });

    if (activeNav) {
        activeNav.style.backgroundColor = theme.activeBg;
        activeNav.style.borderColor = theme.activeColor;
        activeNav.style.color = theme.activeText;
    }

    // Apply button styles
    if (button) {
        button.style.color = theme.buttonColor;
        button.style.backgroundColor = theme.buttonBg;
        button.style.borderColor = theme.buttonBorder;

        button.addEventListener('mouseenter', () => {
            button.style.color = theme.buttonHoverColor || theme.buttonHoverBorder || '#272727';
            button.style.backgroundColor = theme.buttonHoverBg;
            button.style.borderColor = theme.buttonHoverBorder;
        });

        button.addEventListener('mouseleave', () => {
            button.style.color = theme.buttonLeaveColor || theme.buttonColor;
            button.style.backgroundColor = theme.buttonBg;
            button.style.borderColor = theme.buttonBorder;
        });
    }
};

const About = () => {
    let { colorIdentifier } = useParams();
    const { setScaling } = useOutletContext();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Ensure body/html can scroll
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.documentElement.style.position = '';
    }, [pathname]);

    useEffect(() => {
        const theme = THEMES[colorIdentifier] || THEMES.weatherdog;
        applyTheme(theme);
    }, [colorIdentifier]);

    return (
        <PageTransition>
            <main className="aboutpage__wrapper">
            <div className="aboutpage__bg--wrapper">
                <NavBar colorIdentifier={colorIdentifier} />
                <section className="about__title--wrapper about__section">
                    <h1 className="hidden">CREATING TOMMORROW&apos;S EXPERIENCES TODAY</h1>
                    <div>
                        <p className="about__color1 about__title about__title1">CREATING TOMORROW&apos;S</p>
                        <p className="about__color1 about__title about__title2">EXPERIENCES</p>
                        <p className="about__color2 about__title about__title3">TODAY.</p>
                        <img src="/about_arrow_trainworld.svg" alt="arrow" className="about__arrow" />
                    </div>
                </section>
                <section className="about__intro--wrapper">
                    <h2 className="hidden">Personal Info</h2>
                    <p className="about__color1 about__intro">Hi, my name is <span className="highlight about__color3">Hans</span>. I am a Belgian <span className="bold">Front-end Developer</span>, with a Bachelor&apos;s degree in <span className="bold">Digital Design and Development</span> (Devine) at Howest in Kortrijk, Belgium.</p>
                    <p className="about__color2 about__description about__color1"> I love to to get <span className="bold">out of my comfort zone</span>, creating things I never thought I could. I have gained a <span className="bold">lot of skills</span>, but I would like to expand my knowledge and dive deeper in mostly <span className="bold">Development</span> while keeping <span className="bold">Design</span> as an extra skill.</p>
                    <p className="about__color2 about__description about__color2">When i’m off work, I love to grab a drink at the <span className="bold">bar</span> with my friends, play the <span className="bold">piano</span> and go work out at the <span className="bold">gym</span>.</p>
                </section>
            </div>
            <section className="about__skillset--wrapper about__section">
                <h2 className="about__color1 about__skillset--title">MY SKILLSET</h2>
                <div>
                    <div className="about__skillset--itemwrapperall">
                        <button onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={() => {
                                document.querySelector('.about__skillset--itemhidden').classList.toggle('display');
                                if (document.querySelector('.about__skillset--itemhidden').classList.contains('display')) {
                                    document.querySelector('.arrow').style.transform = 'rotate(180deg)'
                                } else {
                                    document.querySelector('.arrow').style.transform = 'rotate(0deg)'
                                }
                            }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__color2 about__skillset--item">DEVELOPMENT</p>
                            <img src="/about_arrowdown_white.svg" alt="arrow down" className="arrow about__arrowdown" />
                        </button>
                        <div className="about__skillset--itemhidden">
                            <div className="logo__wrapper--all logo__wrapper--development">
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/html.svg" alt="html icon" />
                                    </div>
                                    <p className="about__color2 logo__name">HTML5</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/css.svg" alt="css icon" />
                                    </div>
                                    <p className="about__color2 logo__name">CSS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/js.svg" alt="javascript icon" />
                                    </div>
                                    <p className="about__color2 logo__name">JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/php.svg" alt="php icon" />
                                    </div>
                                    <p className="about__color2 logo__name">PHP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper logo__wrapper--long">
                                        <img className="logo" src="/react.svg" alt="react native icon" />
                                    </div>
                                    <p className="about__color2 logo__name">REACT (+NATIVE)</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/astro.svg" alt="astro icon" />
                                    </div>
                                    <p className="about__color2 logo__name">ASTRO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/strapi.svg" alt="strapi icon" />
                                    </div>
                                    <p className="about__color2 logo__name">STRAPI</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/arduino.svg" alt="arduino icon" />
                                    </div>
                                    <p className="about__color2 logo__name">ARDUINO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/p5js.svg" alt="p5.js icon" />
                                    </div>
                                    <p className="about__color2 logo__name">P5JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/sequelace.svg" alt="my sequel ace icon" />
                                    </div>
                                    <p className="about__color2 logo__name">SEQUEL ACE</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/gsap.svg" alt="gsap icon" />
                                    </div>
                                    <p className="about__color2 logo__name">GSAP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/gtm.svg" alt="google teachable machine icon" />
                                    </div>
                                    <p className="about__color2 logo__name">GTM</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/ml5.svg" alt="ml5js icon" />
                                    </div>
                                    <p className="about__color2 logo__name">ML5</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/webgl.svg" alt="webgl icon" />
                                    </div>
                                    <p className="about__color2 logo__name">WEBGL</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/fresh.svg" alt="deno fresh icon" />
                                    </div>
                                    <p className="about__color2 logo__name">DENO FRESH</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                       <img className="logo" src="/threejs.svg" alt="three.js icon" />
                                    </div>
                                    <p className="about__color2 logo__name">THREE.JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/quasar.svg" alt="quasar icon" />
                                    </div>
                                    <p className="about__color2 logo__name">QUASAR</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/sveltekit.svg" alt="sveltekit icon" />
                                    </div>
                                    <p className="about__color2 logo__name">SVELTEKIT</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/directus.svg" alt="directus icon" />
                                    </div>
                                    <p className="about__color2 logo__name">DIRECTUS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/wordpress.svg" alt="wordpress icon" />
                                    </div>
                                    <p className="about__color2 logo__name">WORDPRESS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__skillset--itemwrapperall">
                        <button onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={() => {
                                document.querySelector('.about__skillset--itemhidden2').classList.toggle('display');
                                if (document.querySelector('.about__skillset--itemhidden2').classList.contains('display')) {
                                    document.querySelector('.arrow2').style.transform = 'rotate(180deg)'
                                } else {
                                    document.querySelector('.arrow2').style.transform = 'rotate(0deg)'
                                }
                            }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__color2 about__skillset--item">DESIGN</p>
                            <img src="/about_arrowdown_white.svg" alt="arrow down" className="arrow2 about__arrowdown" />
                        </button>
                        <div className="about__skillset--itemhidden2">
                            <div className="logo__wrapper--alldesign">
                                <p className="logo__name--design">Brand Identity</p>
                                <p className="logo__name--design">Motion Design</p>
                                <p className="logo__name--design">Web/App Design</p>
                                <p className="logo__name--design">Graphic Design</p>
                                <p className="logo__name--design">UX/UI Design</p>
                                <p className="logo__name--design">Campaign</p>
                                <p className="logo__name--design">Packaging Design</p>
                                <p className="logo__name--design">Storytelling & Tone of Voice</p>
                                <p className="logo__name--design">Logotypes & Brand Marks</p>
                            </div>
                            <div className="logo__wrapper--alldesign3">
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/ai.svg" alt="adobe illustrator icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE ILLUSTRATOR</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/ps.svg" alt="adobe photoshop icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE PHOTOSHOP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/ae.svg" alt="adobe after effects icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE AFTER EFFECTS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/au.svg" alt="adobe audition icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE AUDITION</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/figma.svg" alt="figma icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">FIGMA</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img className="logo" src="/blender.svg" alt="blender icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">BLENDER</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__skillset--itemwrapperall">
                        <button onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={() => {
                                document.querySelector('.about__skillset--itemhidden3').classList.toggle('display2');
                                if (document.querySelector('.about__skillset--itemhidden3').classList.contains('display2')) {
                                    document.querySelector('.arrow3').style.transform = 'rotate(180deg)'
                                } else {
                                    document.querySelector('.arrow3').style.transform = 'rotate(0deg)'
                                }
                            }}
                            href="#development" className="about__skillset--itemwrapper"
                        >
                            <p className="about__color2 about__skillset--item">UX RESEARCH</p>
                            <img src="/about_arrowdown_white.svg" alt="arrow down" className="arrow3 about__arrowdown" />
                        </button>
                        <div className="about__skillset--itemhidden3">
                            <div className="logo__wrapper--alldesign">
                                <p className="logo__name--design">Prototyping & Wireframing</p>
                                <p className="logo__name--design">Usability & Concept Testing</p>
                                <p className="logo__name--design">Heuristic Evaluation</p>
                                <p className="logo__name--design">Cultural Probes</p>
                                <p className="logo__name--design">Primary and Secondary Research</p>
                                <p className="logo__name--design">Personas & Journey Mapping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about__contact--container about__section">
                <div className="about__contact--wrapper">
                    <div className="about__contact--items">
                        <h2 className="about__contact--title">Let&apos;s Talk</h2>
                        <TransitionLink onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} onClick={(() => {
                                document.querySelector('body').classList.add("scroll-up");
                                document.querySelector('body').classList.remove("scroll-down")
                            })} to={`/contact/${colorIdentifier}`} className="about__contact--button button__color about__button--color">Contact me</TransitionLink>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom__left">
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://www.instagram.com/maasdesign_studios/" target='__blank' className="social">
                            <img src="/instagram.svg" alt="icon of instagram" />
                            <p>Instagram</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://www.behance.net/hansmaas" target='__blank' className="social">
                            <img src="/behance.svg" alt="icon of behance" />
                            <p>Behance</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://github.com/hansmaas123" target='__blank' className="social">
                            <img src="/github.svg" alt="icon of github" />
                            <p>Github</p>
                        </a>
                    </div>
                    <p className="bottom__right">All rights reserved — © Hans Maas</p>
                </div>
            </section>
        </main>
        </PageTransition>
    )
}

About.propTypes = {
    colorIdentifier: PropTypes.string
};

export default About