import React, { useEffect } from "react";
import '../styles/style.css'
import { getProjectById } from "../services/project";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const loader = async ({ params }) => {
    const id = params.id;
    const idInteger = parseInt(id)
    let nextId;
    { id == 11 ? nextId = 1 : nextId = idInteger + 1 }
    const project = await getProjectById(id);
    const nextProject = await getProjectById(nextId);
    return { project, nextProject };
};

const ProjectDetail = () => {
    const { project, nextProject } = useLoaderData();
    const { pathname } = useLocation();

    const projectImages = project.data.attributes.images.data
    const cover = project.data.attributes.cover.data[0].attributes.formats.large.url
    const nextCover = nextProject.data.attributes.cover.data[0].attributes.formats.large.url

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    useEffect(() => {
        project.data.attributes.name === 'TRAINWORLD' ? (
            document.documentElement.style.backgroundColor = '#272727',
            document.querySelector('.detail__background').style.backgroundColor = '#272727',
            document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_trainworld.svg")',
            document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_trainworld.svg")',
            document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-trainworld.svg")',
            document.querySelector('.next-project__wrapper').style.backgroundColor = '#929948',
            document.querySelector('.detail__button--color').style.backgroundColor = '#E8E661',
            document.querySelector('.detail__button--color').style.borderColor = '#E8E661',
            document.querySelector('.icon__external').src = '../../link_black.svg',
            document.querySelector('.detail__link').style.color = '#272727',
            document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
            document.querySelector('.assignment__wrapper').style.marginBottom = 0,
            document.querySelectorAll('.highlighted').forEach(highlight => {
                highlight.style.color = '#E8E661'
            }),
            document.querySelectorAll('.detail__color1').forEach(color1 => {
                color1.style.color = '#E8E661'
            }),
            document.querySelectorAll('.detail__color2').forEach(color1 => {
                color1.style.color = '#FDFDFD'
            }),
            document.querySelectorAll('.next-project__color').forEach(text => {
                text.style.color = '#EEEC76'
            }),
            document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                line.style.borderColor = '#EEEC76'
            })
        )
            : project.data.attributes.name === 'MIXBOX' ? (
                document.documentElement.style.backgroundColor = '#929948',
                document.querySelector('.detail__background').style.backgroundColor = '#929948',
                document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_mixbox.svg")',
                document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_mixbox.svg")',
                document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-mixbox.svg")',
                document.querySelector('.next-project__wrapper').style.backgroundColor = '#492078',
                document.querySelector('.detail__button--color').style.backgroundColor = '#EEEC76',
                document.querySelector('.detail__button--color').style.borderColor = '#EEEC76',
                document.querySelector('.icon__external').src = '../../link_black.svg',
                document.querySelector('.detail__link').style.color = '#272727',
                document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                document.querySelector('.assignment__wrapper').style.marginBottom = '5rem',
                document.querySelectorAll('.highlighted').forEach(highlight => {
                    highlight.style.color = '#EEEC76'
                }),
                document.querySelectorAll('.detail__color1').forEach(color1 => {
                    color1.style.color = '#EEEC76'
                }),
                document.querySelectorAll('.detail__color2').forEach(color1 => {
                    color1.style.color = '#FDFDFD'
                }),
                document.querySelectorAll('.next-project__color').forEach(text => {
                    text.style.color = '#FF53B7'
                }),
                document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                    line.style.borderColor = '#FDFDFD'
                })
            )
                : project.data.attributes.name === 'STINGSTITUTE' ? (
                    document.documentElement.style.backgroundColor = '#492078',
                    document.querySelector('.detail__background').style.backgroundColor = '#492078',
                    document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_stingstitute.svg")',
                    document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_stingstitute.svg")',
                    document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-stingstitute.svg")',
                    document.querySelector('.next-project__wrapper').style.backgroundColor = '#F0F0F0',
                    document.querySelector('.detail__button--color').style.backgroundColor = '#FF53B7',
                    document.querySelector('.detail__button--color').style.borderColor = '#FF53B7',
                    document.querySelector('.icon__external').src = '../../link_black.svg',
                    document.querySelector('.assignment__wrapper').style.marginBottom = '18rem',
                    document.querySelector('.detail__link').style.color = '#272727',
                    document.querySelectorAll('.highlighted').forEach(highlight => {
                        highlight.style.color = '#FF53B7'
                    }),
                    document.querySelectorAll('.detail__color1').forEach(color1 => {
                        color1.style.color = '#FF53B7'
                    }),
                    document.querySelectorAll('.detail__color2').forEach(color1 => {
                        color1.style.color = '#FDFDFD'
                    }),
                    document.querySelectorAll('.next-project__color').forEach(text => {
                        text.style.color = '#272727'
                    }),
                    document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                        line.style.borderColor = '#FDFDFD'
                    })
                )
                    : project.data.attributes.name === 'ROTTERDANS' ? (
                        document.documentElement.style.backgroundColor = '#F0F0F0',
                        document.querySelector('.detail__background').style.backgroundColor = '#F0F0F0',
                        document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_rotterdans.svg")',
                        document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_rotterdans.svg")',
                        document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-rotterdans.svg")',
                        document.querySelector('.next-project__wrapper').style.backgroundColor = '#272727',
                        document.querySelector('.detail__button--color').style.backgroundColor = '#272727',
                        document.querySelector('.detail__button--color').style.borderColor = '#272727',
                        document.querySelector('.icon__external').src = '../../link_white.svg',
                        document.querySelector('.detail__link').style.color = '#FDFDFD',
                        document.querySelector('.detail__description--wrapper').style.backgroundSize = 'contain',
                        document.querySelector('.assignment__wrapper').style.marginBottom = 0,
                        document.querySelectorAll('.highlighted').forEach(highlight => {
                            highlight.style.color = '#272727'
                        }),
                        document.querySelectorAll('.detail__color1').forEach(color1 => {
                            color1.style.color = '#272727'
                        }),
                        document.querySelectorAll('.detail__color2').forEach(color1 => {
                            color1.style.color = '#272727'
                        }),
                        document.querySelectorAll('.next-project__color').forEach(text => {
                            text.style.color = '#D8595B'
                        }),
                        document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                            line.style.borderColor = '#272727'
                        })
                    )
                        : project.data.attributes.name === 'EQUAL MELODIES' ? (
                            document.documentElement.style.backgroundColor = '#272727',
                            document.querySelector('.detail__background').style.backgroundColor = '#272727',
                            document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_equalmelodies.svg")',
                            document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_equalmelodies.svg")',
                            document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-equalmelodies.svg")',
                            document.querySelector('.next-project__wrapper').style.backgroundColor = '#366830',
                            document.querySelector('.detail__button--color').style.backgroundColor = '#D8595B',
                            document.querySelector('.detail__button--color').style.borderColor = '#D8595B',
                            document.querySelector('.icon__external').src = '../../link_white.svg',
                            document.querySelector('.detail__link').style.color = '#FDFDFD',
                            document.querySelector('.detail__description--wrapper').style.backgroundSize = 'contain',
                            document.querySelector('.assignment__wrapper').style.marginBottom = 0,
                            document.querySelectorAll('.highlighted').forEach(highlight => {
                                highlight.style.color = '#D8595B'
                            }),
                            document.querySelectorAll('.detail__color1').forEach(color1 => {
                                color1.style.color = '#D8595B'
                            }),
                            document.querySelectorAll('.detail__color2').forEach(color1 => {
                                color1.style.color = '#FDFDFD'
                            }),
                            document.querySelectorAll('.next-project__color').forEach(text => {
                                text.style.color = '#FDFDFD'
                            }),
                            document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                line.style.borderColor = '#FDFDFD'
                            })
                        )
                            : project.data.attributes.name === 'REACT ARTISTIQUE' ? (
                                document.documentElement.style.backgroundColor = '#366830',
                                document.querySelector('.detail__background').style.backgroundColor = '#366830',
                                document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_reactartistique.svg")',
                                document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_reactartistique.svg")',
                                document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-reactartistique.svg")',
                                document.querySelector('.next-project__wrapper').style.backgroundColor = '#FFF8F4',
                                document.querySelector('.detail__button--color').style.backgroundColor = '#274A23',
                                document.querySelector('.detail__button--color').style.borderColor = '#274A23',
                                document.querySelector('.icon__external').src = '../../link_white.svg',
                                document.querySelector('.detail__link').style.color = '#FDFDFD',
                                document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                document.querySelector('.assignment__wrapper').style.marginBottom = '25rem',
                                document.querySelectorAll('.highlighted').forEach(highlight => {
                                    highlight.style.color = '#87EA7B'
                                }),
                                document.querySelectorAll('.detail__color1').forEach(color1 => {
                                    color1.style.color = '#FDFDFD'
                                }),
                                document.querySelectorAll('.detail__color2').forEach(color1 => {
                                    color1.style.color = '#FDFDFD'
                                }),
                                document.querySelectorAll('.next-project__color').forEach(text => {
                                    text.style.color = '#4C984C'
                                }),
                                document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                    line.style.borderColor = '#FDFDFD'
                                })
                            )
                                : project.data.attributes.name === 'DISHKNOB' ? (
                                    document.documentElement.style.backgroundColor = '#FFF8F4',
                                    document.querySelector('.detail__background').style.backgroundColor = '#FFF8F4',
                                    document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_dishknob.svg")',
                                    document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_dishknob.svg")',
                                    document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-dishknob.svg")',
                                    document.querySelector('.next-project__wrapper').style.backgroundColor = '#434321',
                                    document.querySelector('.detail__button--color').style.backgroundColor = '#4C984C',
                                    document.querySelector('.detail__button--color').style.borderColor = '#4C984C',
                                    document.querySelector('.icon__external').src = '../../link_white.svg',
                                    document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                    document.querySelector('.assignment__wrapper').style.marginBottom = '27rem',
                                    document.querySelector('.detail__link').style.color = '#FDFDFD',
                                    document.querySelectorAll('.highlighted').forEach(highlight => {
                                        highlight.style.color = '#3A753A'
                                    }),
                                    document.querySelectorAll('.detail__color1').forEach(color1 => {
                                        color1.style.color = '#4C984C'
                                    }),
                                    document.querySelectorAll('.detail__color2').forEach(color1 => {
                                        color1.style.color = '#3A753A'
                                    }),
                                    document.querySelectorAll('.next-project__color').forEach(text => {
                                        text.style.color = '#EEEC76'
                                    }),
                                    document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                        line.style.borderColor = '#3A753A'
                                    })
                                )
                                    : project.data.attributes.name === 'TRIMCRAFT' ? (
                                        document.documentElement.style.backgroundColor = '#434321',
                                        document.querySelector('.detail__background').style.backgroundColor = '#434321',
                                        document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_trimcraft.svg")',
                                        document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_trimcraft.svg")',
                                        document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-trimcraft.svg")',
                                        document.querySelector('.next-project__wrapper').style.backgroundColor = '#21432E',
                                        document.querySelector('.detail__button--color').style.backgroundColor = '#EEEC76',
                                        document.querySelector('.detail__button--color').style.borderColor = '#EEEC76',
                                        document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                        document.querySelector('.assignment__wrapper').style.marginBottom = '18rem',
                                        document.querySelector('.icon__external').src = '../../link_black.svg',
                                        document.querySelector('.detail__link').style.color = '#272727',
                                        document.querySelectorAll('.highlighted').forEach(highlight => {
                                            highlight.style.color = '#EEEC76'
                                        }),
                                        document.querySelectorAll('.detail__color1').forEach(color1 => {
                                            color1.style.color = '#EEEC76'
                                        }),
                                        document.querySelectorAll('.detail__color2').forEach(color1 => {
                                            color1.style.color = '#FDFDFD'
                                        }),
                                        document.querySelectorAll('.next-project__color').forEach(text => {
                                            text.style.color = '#FEA500'
                                        }),
                                        document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                            line.style.borderColor = '#FDFDFD'
                                        })
                                    )
                                        : project.data.attributes.name === 'SMASH A BUTTON' ? (
                                            document.documentElement.style.backgroundColor = '#21432E',
                                            document.querySelector('.detail__background').style.backgroundColor = '#21432E',
                                            document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_smashabutton.svg")',
                                            document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_smashabutton.svg")',
                                            document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-smashabutton.svg")',
                                            document.querySelector('.next-project__wrapper').style.backgroundColor = '#7A9A57',
                                            document.querySelector('.detail__button--color').style.backgroundColor = '#FEA500',
                                            document.querySelector('.detail__button--color').style.borderColor = '#FEA500',
                                            document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                            document.querySelector('.assignment__wrapper').style.marginBottom = '25rem',
                                            document.querySelector('.icon__external').src = '../../link_black.svg',
                                            document.querySelector('.detail__link').style.color = '#272727',
                                            document.querySelectorAll('.highlighted').forEach(highlight => {
                                                highlight.style.color = '#FEA500'
                                            }),
                                            document.querySelectorAll('.detail__color1').forEach(color1 => {
                                                color1.style.color = '#FEA500'
                                            }),
                                            document.querySelectorAll('.detail__color2').forEach(color1 => {
                                                color1.style.color = '#FDFDFD'
                                            }),
                                            document.querySelectorAll('.next-project__color').forEach(text => {
                                                text.style.color = '#ECEDCE'
                                            }),
                                            document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                                line.style.borderColor = '#FEA500'
                                            })
                                        )
                                            : project.data.attributes.name === 'CHESSBASE' ? (
                                                document.documentElement.style.backgroundColor = '#7A9A57',
                                                document.querySelector('.detail__background').style.backgroundColor = '#7A9A57',
                                                document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_chessbase.svg")',
                                                document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_chessbase.svg")',
                                                document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-chessbase.svg")',
                                                document.querySelector('.next-project__wrapper').style.backgroundColor = '#2E3495',
                                                document.querySelector('.detail__button--color').style.backgroundColor = '#5A723F',
                                                document.querySelector('.detail__button--color').style.borderColor = '#5A723F',
                                                document.querySelector('.icon__external').src = '../../link_white.svg',
                                                document.querySelector('.detail__link').style.color = '#FDFDFD',
                                                document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                                document.querySelector('.assignment__wrapper').style.marginBottom = '25rem',
                                                document.querySelectorAll('.highlighted').forEach(highlight => {
                                                    highlight.style.color = '#FDFDFD'
                                                }),
                                                document.querySelectorAll('.detail__color1').forEach(color1 => {
                                                    color1.style.color = '#ECEDCE'
                                                }),
                                                document.querySelectorAll('.detail__color2').forEach(color1 => {
                                                    color1.style.color = '#FDFDFD'
                                                }),
                                                document.querySelectorAll('.next-project__color').forEach(text => {
                                                    text.style.color = '#E69A8D'
                                                }),
                                                document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                                    line.style.borderColor = '#FDFDFD'
                                                })
                                            )
                                                : (
                                                    document.documentElement.style.backgroundColor = '#2E3495',
                                                    document.querySelector('.detail__background').style.backgroundColor = '#2E3495',
                                                    document.querySelector('.detail__title--wrapper').style.backgroundImage = 'url("../../detailbg_weatherdog.svg")',
                                                    document.querySelector('.detail__description--wrapper').style.backgroundImage = 'url("../../detailbg2_weatherdog.svg")',
                                                    document.querySelector('.next-project__wrapper').style.backgroundImage = 'url("../../detailbg_next-weatherdog.svg")',
                                                    document.querySelector('.next-project__wrapper').style.backgroundColor = '#272727',
                                                    document.querySelector('.detail__button--color').style.backgroundColor = '#E69A8D',
                                                    document.querySelector('.detail__button--color').style.borderColor = '#E69A8D',
                                                    document.querySelector('.icon__external').src = '../../link_white.svg',
                                                    document.querySelector('.detail__link').style.color = '#FDFDFD',
                                                    document.querySelector('.detail__description--wrapper').style.backgroundSize = 'cover',
                                                    document.querySelector('.assignment__wrapper').style.marginBottom = '27rem',
                                                    document.querySelectorAll('.highlighted').forEach(highlight => {
                                                        highlight.style.color = '#E69A8D'
                                                    }),
                                                    document.querySelectorAll('.detail__color1').forEach(color1 => {
                                                        color1.style.color = '#FDFDFD'
                                                    }),
                                                    document.querySelectorAll('.detail__color2').forEach(color1 => {
                                                        color1.style.color = '#FDFDFD'
                                                    }),
                                                    document.querySelectorAll('.next-project__color').forEach(text => {
                                                        text.style.color = '#E8E661'
                                                    }),
                                                    document.querySelectorAll('.detail__item--wrapper').forEach(line => {
                                                        line.style.borderColor = '#FDFDFD'
                                                    })
                                                )
    }, [project.data.attributes.name])

    return (
        <div className="detail__wrapper detail__background">
            <NavBar />
            <Link to={'/'} className="backbutton__wrapper">
                <img src="../../backbutton_white.svg" alt="back button" className="backbutton" />
            </Link>
            <section className="detail__title--wrapper">
                <h2 className="hidden">{project.data.attributes.name} intro</h2>
                <p className="detail__title detail__color1">{project.data.attributes.name}</p>
                <p className="detail__year detail__color2">{project.data.attributes.year}</p>
                <a href="https://hansmaasdevine.be/int3/" className="detail__link about__contact--button button__color about__button--color detail__button--color">Visit Project <img src="../../link_black.svg" alt="icon" className="icon__external" /></a>
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
                            <img key={index} className={`image__detail image__trainworld--${index}`} src={`http://localhost:1337` + projectImage.attributes.formats.large.url} alt="image" />
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
                                                <video controls width={'90%'} key={index} className={`image__detail image__reactartistique--${index}`}>
                                                    <source src={`http://localhost:1337` + projectImage.attributes.url} type="video/mp4" />
                                                </video>
                                            ))}
                                        </div>
                                    )
                                        : project.data.attributes.name === 'DISHKNOB' ? (
                                            <div className="images__project--wrapper images__dishknob--wrapper">
                                                {projectImages.map((projectImage, index) => (
                                                    <video controls width={'90%'} key={index} className={`image__detail image__dishknob--${index}`}>
                                                        <source src={`http://localhost:1337` + projectImage.attributes.url} type="video/mp4" />
                                                    </video>
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
                                                            <div>
                                                            </div>
                                                        )
                }
            </section>
            <section className="next-project__wrapper">
                <h2 className="hidden">Next Project</h2>
                <div className="next-project__text--wrapper">
                    <p className="next-project next-project__color">NEXT PROJECT</p>
                    <p className="next-project__name next-project__color">{nextProject.data.attributes.name}</p>
                </div>
                <div className="next-project__cover--wrapper">
                    <Link className="next-project__cover--wrapper2" to={`/project/${nextProject.data.id}`}>
                        <img src={'http://localhost:1337' + nextCover} alt="next project cover" className="next-project__cover" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
ProjectDetail.loader = loader;
export default ProjectDetail