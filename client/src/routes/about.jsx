import NavBar from "../components/NavBar"
import '../styles/style.css'
import { useLocation, useOutletContext, useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
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

// Oldest first, so the rail reads as a path forward and the scroll animation
// draws it in the direction the story runs. `team` is rendered as counted rows
// rather than a sentence, so the shape of each team is legible at a glance.
const EXPERIENCE = [
    {
        kind: 'education',
        period: '2022 — 2025',
        place: 'HOWEST UNIVERSITY OF APPLIED SCIENCES',
        location: 'Kortrijk, Belgium',
        role: 'Bachelor — Digital Design and Development (Devine)',
        terms: ['Graduated 2025']
    },
    {
        kind: 'work',
        period: '2025',
        place: 'ROBOT KITTENS',
        location: 'Hilversum, The Netherlands',
        role: 'Front-end Developer',
        terms: ['Internship — Feb to May 2025', 'Student job — Jun to Jul 2025'],
        team: [
            { count: 1, label: 'Lead developer' },
            { count: 1, label: 'Senior front-end developer' },
            { count: 2, label: 'Back-end developers' },
            { count: 2, label: 'Designers' }
        ]
    },
    {
        kind: 'work',
        period: '2025 — 2026',
        place: 'SQUAREBRACKET',
        location: 'Mechelen, Belgium',
        role: 'Front-end Developer & Designer',
        terms: ['Student job — Aug 2025', 'Full-time — Oct 2025 to Jun 2026'],
        team: [
            { count: 2, label: 'Back-end developers' },
            { count: 1, label: 'Front-end developer' }
        ],
        note: 'No in-house designer, so every design was mine as well — two roles in one seat.'
    }
];

const Timeline = ({ entries, animated }) => (
    <div className={`timeline${animated ? '' : ' timeline--static'}`}>
        {/* The rail lives on the container rather than per entry, so the accent
            line can be drawn across the whole section in one go. */}
        <div className="timeline__rail" aria-hidden="true">
            <span className="timeline__rail-progress"></span>
        </div>
        <ol className="timeline__list">
            {entries.map(entry => (
                <li className="timeline__item" key={`${entry.place}-${entry.period}`}>
                    <span className="timeline__dot" aria-hidden="true"></span>
                    <div className="timeline__aside">
                        <p className="timeline__kind">{entry.kind === 'education' ? 'Education' : 'Work'}</p>
                        <p className="timeline__years">{entry.period}</p>
                    </div>
                    <div className="timeline__body">
                        <h3 className="timeline__place">{entry.place}</h3>
                        <p className="timeline__role">{entry.role}</p>
                        <p className="timeline__location">{entry.location}</p>
                        <ul className="timeline__terms">
                            {entry.terms.map(term => <li className="timeline__term" key={term}>{term}</li>)}
                        </ul>
                        {entry.team && (
                            <div className="timeline__team">
                                <p className="timeline__team-label">Worked alongside</p>
                                <ul className="timeline__team-list">
                                    {entry.team.map(member => (
                                        <li className="timeline__member" key={member.label}>
                                            <span className="timeline__count">{member.count}</span>
                                            {member.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {entry.note && <p className="timeline__note">{entry.note}</p>}
                    </div>
                </li>
            ))}
        </ol>
    </div>
);

Timeline.propTypes = {
    animated: PropTypes.bool.isRequired,
    entries: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.oneOf(['work', 'education']).isRequired,
        period: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        terms: PropTypes.arrayOf(PropTypes.string).isRequired,
        team: PropTypes.arrayOf(PropTypes.shape({
            count: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })),
        note: PropTypes.string
    })).isRequired
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

    const experienceRef = useRef(null);

    const theme = THEMES[colorIdentifier] || THEMES.trainworld;
    const iconSuffix = theme.isLight ? 'black' : 'white';
    const reducedMotion = typeof window !== 'undefined'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // The rail draws itself as the section is scrolled, and each entry arrives
    // as it reaches the fold. ScrollTrigger is pulled in on demand so it stays
    // out of the shared gsap chunk the homepage loads.
    useEffect(() => {
        if (reducedMotion) return;

        let context;
        let cancelled = false;

        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
            if (cancelled) return;
            gsap.registerPlugin(ScrollTrigger);

            context = gsap.context((self) => {
                gsap.to('.timeline__rail-progress', {
                    scaleY: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.timeline',
                        start: 'top 72%',
                        // finishes low enough that the last stretch of line is
                        // still drawing as the final entry settles into place
                        end: 'bottom 62%',
                        scrub: .4
                    }
                });

                self.selector('.timeline__item').forEach((item) => {
                    gsap.from(item.querySelector('.timeline__aside'), {
                        opacity: 0, y: 26, duration: .6, ease: 'power3.out',
                        scrollTrigger: { trigger: item, start: 'top 84%' }
                    });
                    gsap.from(item.querySelector('.timeline__body'), {
                        opacity: 0, y: 34, duration: .7, ease: 'power3.out',
                        scrollTrigger: { trigger: item, start: 'top 84%' }
                    });
                    // the dot lands after its entry, so the rail reads as
                    // arriving at a stop rather than passing one
                    gsap.from(item.querySelector('.timeline__dot'), {
                        scale: 0, duration: .5, ease: 'back.out(2.6)', delay: .12,
                        scrollTrigger: { trigger: item, start: 'top 84%' }
                    });
                });
            }, experienceRef);
        });

        return () => {
            cancelled = true;
            context?.revert();
        };
    }, [reducedMotion]);

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

                <section className="about__experience--wrapper" ref={experienceRef}>
                    <div className="section-label">
                        <span className="section-label__num">02</span>
                        <h2 className="section-label__text">Experience</h2>
                    </div>
                    <Timeline entries={EXPERIENCE} animated={!reducedMotion} />
                </section>

                <section className="about__skillset--wrapper">
                    <div className="section-label">
                        <span className="section-label__num">03</span>
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

                <section className="about__cta">
                    <div className="about__cta-inner">
                        <p className="about__cta-eyebrow">Have a project in mind?</p>
                        <h2 className="about__cta-title">LET&apos;S TALK</h2>
                        <div className="about__cta-actions">
                            <TransitionLink
                                onMouseEnter={() => setScaling(true)}
                                onMouseLeave={() => setScaling(false)}
                                to={`/contact/${colorIdentifier}`}
                                className="btn btn--inverse"
                            >
                                Contact me
                                <svg className="btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </TransitionLink>
                        </div>
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
