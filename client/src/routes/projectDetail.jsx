import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import '../styles/style.css'
import { getProjectById } from "../services/project";
import { useLoaderData, useLocation, useOutletContext, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTransition from '../components/PageTransition';
import TransitionLink from '../components/TransitionLink';
import { THEMES, applyTheme, getProjectMetaById, getNextProjectId } from '../theme';

const loader = async ({ params }) => {
    const id = parseInt(params.id)
    const project = await getProjectById(id);
    const nextProject = await getProjectById(getNextProjectId(id));
    return { project, nextProject };
};

// Per-project disclaimers, keyed by theme identifier
const NOTES = {
    stingstitute: 'Note: this website is only made for desktop.',
    reactartistique: 'Note: development only, not design. Desktop only.',
    trimcraft: 'Note: development only, not design. Desktop only.',
    chessbase: 'Note: development only, not design. Desktop only.'
};

// Projects whose gallery contains videos instead of images
const VIDEO_GALLERIES = new Set(['reactartistique', 'dishknob']);

const ImageWithLoader = ({ src, className, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`image__frame ${className}`}>
            {!isLoaded && (
                <div className="image__loader">
                    <div className="spinner"></div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                style={{ opacity: isLoaded ? 1 : 0 }}
            />
        </div>
    );
};

ImageWithLoader.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

// Renders Strapi rich-text blocks; italic text becomes an accent highlight
const RichText = ({ blocks }) => (
    blocks.map((block, index) => (
        <p key={index}>
            {block.children.map((child, childIndex) => {
                if (typeof child !== 'object' || !child.text) return null;
                let styledText = child.text;
                if (child.bold) {
                    styledText = <strong>{styledText}</strong>;
                }
                if (child.italic) {
                    styledText = <span className="highlighted">{styledText}</span>;
                }
                return <span key={childIndex}>{styledText} </span>;
            })}
        </p>
    ))
);

const ProjectDetail = () => {
    const { project, nextProject } = useLoaderData();
    const { pathname } = useLocation();
    const { id } = useParams();
    const { setScaling } = useOutletContext();

    const meta = getProjectMetaById(id);
    const nextMeta = getProjectMetaById(nextProject.id);
    const nextTheme = THEMES[nextMeta.theme];
    const isInternship = project.attributes.name === 'DEV INTERNSHIP';
    const note = NOTES[meta.theme];
    const isVideoGallery = VIDEO_GALLERIES.has(meta.theme);

    const getImageUrl = (imageData) => {
        return imageData.attributes.formats?.large?.url || imageData.attributes.url;
    };

    const projectImages = project.attributes.images?.data || [];
    const cover = getImageUrl(project.attributes.cover.data[0]);
    const nextCover = getImageUrl(nextProject.attributes.cover.data[0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        applyTheme(meta.theme);
    }, [meta.theme]);

    return (
        <PageTransition>
            <main className="detail__wrapper">
                <div className="page-glow" aria-hidden="true"></div>
                <NavBar colorIdentifier={meta.theme} />
                <TransitionLink
                    onMouseEnter={() => setScaling(true)}
                    onMouseLeave={() => setScaling(false)}
                    to={'/'}
                    className="backbutton__wrapper"
                    aria-label="Back to home"
                >
                    <svg className="backbutton" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </TransitionLink>

                <section className="detail__hero">
                    <p className="detail__eyebrow">{project.attributes.year} — {project.attributes.focus}</p>
                    <h1 className="detail__title">{project.attributes.name}</h1>
                    <div className="detail__actions">
                        <a
                            onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)}
                            href={project.attributes.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary"
                        >
                            Visit project
                            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        {note && <p className="detail__note">{note}</p>}
                    </div>
                    <div className="cover__wrapper">
                        <div className="cover__image">
                            <img src={cover} alt={`${project.attributes.name} cover`} />
                        </div>
                    </div>
                </section>

                <section className="details__container--wrapper">
                    <h2 className="hidden">Details</h2>
                    <div className="details__container">
                        <div className="detail__item--wrapper">
                            <p className="detail__item--title">Focus</p>
                            <p className="detail__item--description">{project.attributes.focus}</p>
                        </div>
                        <div className="detail__item--wrapper">
                            <p className="detail__item--title">Year</p>
                            <p className="detail__item--description">{project.attributes.year}</p>
                        </div>
                        <div className="detail__item--wrapper">
                            <p className="detail__item--title">Scope of work</p>
                            <p className="detail__item--descriptionscope">{project.attributes.scope}</p>
                            {project.attributes.scope2 && <p className="detail__item--descriptionscope">{project.attributes.scope2}</p>}
                            {project.attributes.scope3 && <p className="detail__item--descriptionscope">{project.attributes.scope3}</p>}
                            {project.attributes.scope4 && <p className="detail__item--descriptionscope">{project.attributes.scope4}</p>}
                        </div>
                        <div className="detail__item--wrapper">
                            <p className="detail__item--title">Location</p>
                            <p className="detail__item--description">{project.attributes.location}</p>
                        </div>
                    </div>
                </section>

                <section className="story">
                    <div className="story__aside">
                        <div className="section-label">
                            <span className="section-label__num">01</span>
                            <h2 className="section-label__text">{isInternship ? 'Introduction' : 'The Assignment'}</h2>
                        </div>
                        <div className="story__rule" aria-hidden="true"></div>
                    </div>
                    <div className="story__body">
                        <RichText blocks={project.attributes.assignment} />
                    </div>
                </section>

                <section className="story">
                    <div className="story__aside">
                        <div className="section-label">
                            <span className="section-label__num">02</span>
                            <h2 className="section-label__text">{isInternship ? 'Reflection' : 'Approach'}</h2>
                        </div>
                        <div className="story__rule" aria-hidden="true"></div>
                    </div>
                    <div className="story__body">
                        <RichText blocks={project.attributes.approach} />
                    </div>
                </section>

                <section className="images">
                    <h2 className="hidden">Gallery</h2>
                    <div className={`gallery gallery--${meta.theme}${isVideoGallery ? ' gallery--videos' : ''}`}>
                        {projectImages.map((projectImage, index) => (
                            isVideoGallery ? (
                                <div className="gallery__item" key={index}>
                                    <video controls preload="metadata">
                                        <source src={getImageUrl(projectImage)} type="video/mp4" />
                                    </video>
                                </div>
                            ) : (
                                <div className="gallery__item" key={index}>
                                    <ImageWithLoader
                                        src={getImageUrl(projectImage)}
                                        className="gallery__image"
                                        alt={`${project.attributes.name} detail ${index + 1}`}
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </section>

                <section
                    className="next-project__wrapper"
                    style={{ backgroundColor: nextTheme.bg, color: nextTheme.text }}
                >
                    <div className="next-project__text--wrapper">
                        <p className="next-project" style={{ color: nextTheme.accent }}>Next project</p>
                        <h2 className="next-project__name" style={{ color: nextTheme.text }}>{nextProject.attributes.name}</h2>
                    </div>
                    <TransitionLink
                        onMouseEnter={() => setScaling(true)}
                        onMouseLeave={() => setScaling(false)}
                        onClick={() => setScaling(false)}
                        className="next-project__cover--wrapper2"
                        to={`/project/${nextProject.id}`}
                    >
                        <img src={nextCover} alt={`${nextProject.attributes.name} cover`} className="next-project__cover" />
                    </TransitionLink>
                </section>
            </main>
        </PageTransition>
    )
}

ProjectDetail.loader = loader;
export default ProjectDetail
