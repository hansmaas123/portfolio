import NavBar from "../components/NavBar"
import '../styles/style.css'
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import PageTransition from '../components/PageTransition'
import TransitionLink from '../components/TransitionLink'
import { THEMES, applyTheme } from '../theme'

const getAssetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const DEV_TOOLS = [
    { name: 'HTML5', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'JS', icon: 'js.svg' },
    { name: 'PHP', icon: 'php.svg' },
    { name: 'REACT (+NATIVE)', icon: 'react.svg' },
    { name: 'ASTRO', icon: 'astro.svg' },
    { name: 'STRAPI', icon: 'strapi.svg' },
    { name: 'ARDUINO', icon: 'arduino.svg' },
    { name: 'P5JS', icon: 'p5js.svg' },
    { name: 'SEQUEL ACE', icon: 'sequelace.svg' },
    { name: 'GSAP', icon: 'gsap.svg' },
    { name: 'GTM', icon: 'gtm.svg' },
    { name: 'ML5', icon: 'ml5.svg' },
    { name: 'WEBGL', icon: 'webgl.svg' },
    { name: 'DENO FRESH', icon: 'fresh.svg' },
    { name: 'THREE.JS', icon: 'threejs.svg' },
    { name: 'QUASAR', icon: 'quasar.svg' },
    { name: 'SVELTEKIT', icon: 'sveltekit.svg' },
    { name: 'DIRECTUS', icon: 'directus.svg' },
    { name: 'WORDPRESS', icon: 'wordpress.svg' }
];

const DESIGN_TOOLS = [
    { name: 'ADOBE ILLUSTRATOR', icon: 'ai.svg' },
    { name: 'ADOBE PHOTOSHOP', icon: 'ps.svg' },
    { name: 'ADOBE AFTER EFFECTS', icon: 'ae.svg' },
    { name: 'ADOBE AUDITION', icon: 'au.svg' },
    { name: 'FIGMA', icon: 'figma.svg' },
    { name: 'BLENDER', icon: 'blender.svg' }
];

const DESIGN_SKILLS = [
    'Brand Identity', 'Motion Design', 'Web/App Design', 'Graphic Design', 'UX/UI Design',
    'Campaign', 'Packaging Design', 'Storytelling & Tone of Voice', 'Logotypes & Brand Marks'
];

const UX_SKILLS = [
    'Prototyping & Wireframing', 'Usability & Concept Testing', 'Heuristic Evaluation',
    'Cultural Probes', 'Primary and Secondary Research', 'Personas & Journey Mapping'
];

const ToolGrid = ({ tools }) => (
    <div className="logo__wrapper--all">
        {tools.map(tool => (
            <div className="logo__wrapper--details" key={tool.name}>
                <div className="logo__wrapper">
                    <img className="logo" src={getAssetPath(tool.icon)} alt={`${tool.name} icon`} />
                </div>
                <p className="logo__name">{tool.name}</p>
            </div>
        ))}
    </div>
);

const TagList = ({ tags }) => (
    <div className="tag-list">
        {tags.map(tag => <p className="tag" key={tag}>{tag}</p>)}
    </div>
);

ToolGrid.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    })).isRequired
};

TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

const SKILL_SECTIONS = [
    { title: 'DEVELOPMENT', content: <ToolGrid tools={DEV_TOOLS} /> },
    { title: 'DESIGN', content: <><TagList tags={DESIGN_SKILLS} /><ToolGrid tools={DESIGN_TOOLS} /></> },
    { title: 'UX RESEARCH', content: <TagList tags={UX_SKILLS} /> }
];

const About = () => {
    const { colorIdentifier } = useParams();
    const { setScaling } = useOutletContext();
    const { pathname } = useLocation();
    const [openIndex, setOpenIndex] = useState(0);

    const theme = THEMES[colorIdentifier] || THEMES.trainworld;
    const iconSuffix = theme.isLight ? 'black' : 'white';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        applyTheme(THEMES[colorIdentifier] ? colorIdentifier : 'trainworld');
    }, [colorIdentifier]);

    return (
        <PageTransition>
            <main className="aboutpage__wrapper">
                <div className="page-glow" aria-hidden="true"></div>
                <NavBar colorIdentifier={colorIdentifier} />

                <section className="about__hero">
                    <h1 className="about__title">
                        CREATING <span className="accent">TOMORROW&apos;S</span><br />
                        EXPERIENCES<br />
                        <span className="accent">TODAY.</span>
                    </h1>
                    <svg className="about__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 4v16m0 0 7-7m-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </section>

                <section className="about__intro--wrapper">
                    <div className="story__aside">
                        <div className="section-label">
                            <span className="section-label__num">01</span>
                            <h2 className="section-label__text">About me</h2>
                        </div>
                        <div className="story__rule" aria-hidden="true"></div>
                    </div>
                    <div className="about__intro--body">
                        <p>Hi, my name is <span className="highlight">Hans</span>. I am a Belgian <span className="bold">Front-end Developer</span>, with a Bachelor&apos;s degree in <span className="bold">Digital Design and Development</span> (Devine) at Howest in Kortrijk, Belgium.</p>
                        <p>I love to get <span className="bold">out of my comfort zone</span>, creating things I never thought I could. I have gained a <span className="bold">lot of skills</span>, but I would like to expand my knowledge and dive deeper in mostly <span className="bold">Development</span> while keeping <span className="bold">Design</span> as an extra skill.</p>
                        <p>When I&apos;m off work, I love to grab a drink at the <span className="bold">bar</span> with my friends, play the <span className="bold">piano</span> and go work out at the <span className="bold">gym</span>.</p>
                    </div>
                </section>

                <section className="about__skillset--wrapper">
                    <div className="section-label">
                        <span className="section-label__num">02</span>
                        <h2 className="section-label__text">My skillset</h2>
                    </div>
                    <div>
                        {SKILL_SECTIONS.map((section, index) => (
                            <div className={`skill${openIndex === index ? ' open' : ''}`} key={section.title}>
                                <button
                                    className="skill__toggle"
                                    onMouseEnter={() => setScaling(true)}
                                    onMouseLeave={() => setScaling(false)}
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    aria-expanded={openIndex === index}
                                >
                                    {section.title}
                                    <svg className="skill__chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="skill__panel">
                                    <div className="skill__panel-inner">
                                        <div className="skill__content">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about__contact--container">
                    <div className="about__contact--wrapper">
                        <h2 className="about__contact--title">Let&apos;s Talk</h2>
                        <TransitionLink
                            onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)}
                            to={`/contact/${colorIdentifier}`}
                            className="btn btn--inverse"
                        >
                            Contact me
                        </TransitionLink>
                    </div>
                </section>

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
            </main>
        </PageTransition>
    )
}

export default About
