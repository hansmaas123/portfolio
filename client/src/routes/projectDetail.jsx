import React from "react";
import '../styles/style.css'
import { getProjectById } from "../services/project";
import { Link, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";


const loader = async ({ params }) => {
    const id = params.id;
    const idInteger = parseInt(id)
    let nextId;
    {id===11 ? nextId = 1 : nextId = idInteger+1}
    const project = await getProjectById(id);
    const nextProject = await getProjectById(nextId);
    return { project, nextProject };
};

const ProjectDetail = () => {
    const { project, nextProject } = useLoaderData();
    // console.log(project.data.attributes.name)
    // console.log(project.data.attributes.images.data[1].attributes.formats.thumbnail.url)
    const projectImages = project.data.attributes.images.data
    // console.log(`http://localhost:1337` + projectImage[index].formats.thumbnail.url)
    // console.log(project.data.attributes.cover.data[0].attributes.formats.thumbnail.url)
    const cover = project.data.attributes.cover.data[0].attributes.formats.large.url
    const nextCover = nextProject.data.attributes.cover.data[0].attributes.formats.large.url
    console.log(nextProject.data.id);
    return (
        <div className="detail__wrapper">
            <NavBar />
            <section className="detail__title--wrapper">
                <h2 className="hidden">{project.data.attributes.name} intro</h2>
                <p className="detail__title detail__color1">{project.data.attributes.name}</p>
                <p className="detail__year detail__color2">{project.data.attributes.year}</p>
                <a href="https://hansmaasdevine.be/int3/" className="detail__link about__contact--button button__color about__button--color">Visit Project <img src="../../link_black.svg" alt="icon" /></a>
                <div className="cover__wrapper">
                    <img src={'http://localhost:1337' + cover} alt="cover" className="cover__image" />
                </div>
            </section>
            <section className="details__container--wrapper">
                <h2 className="hidden">details</h2>
                <div className="details__container">
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Focus</p>
                        <p className="detail__item--description">{project.data.attributes.focus}</p>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title ">Year</p>
                        <p className="detail__item--description">{project.data.attributes.year}</p>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Scope of work</p>
                        <div className="scope__wrapper">
                            <p className="detail__item--descriptionscope">{project.data.attributes.scope}</p>
                            {project.data.attributes.scope2 && (<p className="detail__item--descriptionscope">{project.data.attributes.scope2}</p>)}
                            {project.data.attributes.scope3 && (<p className="detail__item--descriptionscope">{project.data.attributes.scope3}</p>)}
                            {project.data.attributes.scope4 && (<p className="detail__item--description">{project.data.attributes.scope4}</p>)}
                        </div>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Location</p>
                        <p className="detail__item--description">{project.data.attributes.location}</p>
                    </div>
                </div>
            </section>
            <section className="detail__description--wrapper">
                <h2 className="hidden">description</h2>
                <div className="assignment__wrapper">
                    <h3 className="detail__color1 description__title assignment__title">THE ASSIGNMENT</h3>
                    {project.data.attributes.assignment.map((block, index) => (
                        <p className="detail__description detail__color2 assignment__description" key={index}>
                            {block.children.map((child, childIndex) => {
                                if (typeof child === 'object' && child.text) {
                                    let styledText = child.text;
                                    if (child.bold) {
                                        styledText = <strong key={childIndex}>{styledText}</strong>;
                                    }
                                    if (child.italic) {
                                        styledText = <span className="highlighted" key={childIndex}>{styledText}</span>;
                                    }
                                    return <span key={childIndex}>{styledText} </span>;
                                }
                                return null;
                            })}
                        </p>
                    ))}
                </div>
                <div className="approach__wrapper">
                    <h2 className="detail__color1 description__title approach__title">APPROACH</h2>
                    {project.data.attributes.approach.map((block, index) => (
                        <p className="detail__description detail__color2 approach__description" key={index}>
                            {block.children.map((child, childIndex) => {
                                if (typeof child === 'object' && child.text) {
                                    let styledText = child.text;
                                    if (child.bold) {
                                        styledText = <strong key={childIndex}>{styledText}</strong>;
                                    }
                                    if (child.italic) {
                                        styledText = <span className="highlighted" key={childIndex}>{styledText}</span>;
                                    }
                                    return <span key={childIndex}>{styledText} </span>;
                                }
                                return null;
                            })}
                        </p>
                    ))}
                </div>
            </section>
            <section className="images">
                <h2 className="hidden">Images</h2>
                    {project.data.attributes.name === 'TRAINWORLD' ? (
                        <div className="images__project--wrapper images__trainworld--wrapper">
                            {projectImages.map((projectImage, index) => (
                                <img key={index} className={`image__detail image__trainworld--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image"/>
                            ))}
                        </div>
                    )
                        : project.data.attributes.name === 'MIXBOX' ? (
                            <div className="images__project--wrapper images__mixbox--wrapper">
                                {projectImages.map((projectImage, index) => (
                                    <img key={index} className={`image__detail image__mixbox--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                ))}
                            </div>
                        )
                            : project.data.attributes.name === 'STINGSTITUTE' ? (
                                <div className="images__project--wrapper images__stingstitute--wrapper">
                                    {projectImages.map((projectImage, index) => (
                                        <img key={index} className={`image__detail image__stingstitute--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                    ))}
                                </div>
                            )
                                : project.data.attributes.name === 'ROTTERDANS' ? (
                                    <div className="images__project--wrapper images__rotterdans--wrapper">
                                        {projectImages.map((projectImage, index) => (
                                            <img key={index} className={`image__detail image__rotterdans--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                        ))}
                                    </div>
                                )
                                    : project.data.attributes.name === 'EQUAL MELODIES' ? (
                                        <div className="images__project--wrapper images__equalmelodies--wrapper">
                                            {projectImages.map((projectImage, index) => (
                                                <img key={index} className={`image__detail image__equalmelodies--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                            ))}
                                        </div>
                                    )
                                        : project.data.attributes.name === 'REACT ARTISTIQUE' ? (
                                            <div className="images__project--wrapper images__reactartistique--wrapper">
                                                {projectImages.map((projectImage, index) => (
                                                    <img key={index} className={`image__detail image__reactartistique--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                ))}
                                            </div>
                                        )
                                            : project.data.attributes.name === 'DISHKNOB' ? (
                                                <div className="images__project--wrapper images__dishknob--wrapper">
                                                    {projectImages.map((projectImage, index) => (
                                                        <img key={index} className={`image__detail image__dishknob--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                    ))}
                                                </div>
                                            )
                                                : project.data.attributes.name === 'TRIMCRAFT' ? (
                                                    <div className="images__project--wrapper images__trimcraft--wrapper">
                                                        {projectImages.map((projectImage, index) => (
                                                            <img key={index} className={`image__detail image__trimcraft--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                        ))}
                                                    </div>
                                                )
                                                    : project.data.attributes.name === 'SMASH A BUTTON' ? (
                                                        <div className="images__project--wrapper images__smashabutton--wrapper">
                                                            {projectImages.map((projectImage, index) => (
                                                                <img key={index} className={`image__detail image__smashabutton--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                            ))}
                                                        </div>
                                                    )
                                                        : project.data.attributes.name === 'CHESSBASE' ? (
                                                            <div className="images__project--wrapper images__chessbase--wrapper">
                                                                {projectImages.map((projectImage, index) => (
                                                                    <img key={index} className={`image__detail image__chessbase--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                                ))}
                                                            </div>
                                                        )
                                                            : (
                                                                <div className="images__project--wrapper images__weatherdog--wrapper">
                                                                    {projectImages.map((projectImage, index) => (
                                                                        <img key={index} className={`image__detail image__weatherdog--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
                                                                    ))}
                                                                </div>
                                                            )
                    }
            </section>
            <section className="next-project__wrapper">
                <h2 className="hidden">Next Project</h2>
                <div className="next-project__text--wrapper">
                    <p className="next-project">NEXT PROJECT</p>
                    <p className="next-project__name">MIXBOX</p>
                </div>
                <Link className="next-project__cover--wrapper" to={`/project/${nextProject.data.id}`}>
                    <img src={'http://localhost:1337' + nextCover} alt="next project cover" className="next-project__cover" />
                </Link>

                {/* {project.data.attributes.name === 'TRAINWORLD' ? (

                )
                    : project.data.attributes.name === 'MIXBOX' ? (
                       
                    )
                        : project.data.attributes.name === 'STINGSTITUTE' ? (
                           
                        )
                            : project.data.attributes.name === 'ROTTERDANS' ? (
                                
                            )
                                : project.data.attributes.name === 'EQUAL MELODIES' ? (
                                   
                                )
                                    : project.data.attributes.name === 'REACT ARTISTIQUE' ? (

                                    )
                                        : project.data.attributes.name === 'DISHKNOB' ? (

                                        )
                                            : project.data.attributes.name === 'TRIMCRAFT' ? (

                                            )
                                                : project.data.attributes.name === 'SMASH A BUTTON' ? (

                                                )
                                                    : project.data.attributes.name === 'CHESSBASE' ? (

                                                    )
                                                        : (

                                                        )
                } */}
            </section>
        </div>
    )
}
ProjectDetail.loader = loader;
export default ProjectDetail