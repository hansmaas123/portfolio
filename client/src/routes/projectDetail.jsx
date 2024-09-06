import React from "react";
import '../styles/style.css'
import { getProjectById } from "../services/project";
import { useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";


const loader = async ({ params }) => {
    const id = params.id;
    const project = await getProjectById(id);
    return { project };
};

const ProjectDetail = () => {
    const { project } = useLoaderData();
    // console.log(project.data.attributes.name)
    console.log(project.data.attributes.assignment)
    // console.log(project.data.attributes.cover.data[0].attributes.formats.thumbnail.url)
    const cover = project.data.attributes.cover.data[0].attributes.formats.large.url
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
        </div>
    )
}
ProjectDetail.loader = loader;
export default ProjectDetail