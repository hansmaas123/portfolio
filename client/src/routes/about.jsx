import NavBar from "../components/NavBar"
import '../styles/style.css'
import { Link, useParams } from "react-router-dom"
import PropTypes from 'prop-types';
import { useEffect } from "react";

const About = () => {
    let { colorIdentifier } = useParams();

    useEffect(() => {
        {
            colorIdentifier === 'trainworld' ?
                (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#272727',
                    document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_trainworld.svg")',
                    document.querySelector('.about__arrow').src = "../../about_arrow_trainworld.svg",






                    document.querySelectorAll('.about__color1').forEach(color => {
                        color.style.color = "#EEEC76"
                    }),
                    document.querySelectorAll('.about__color2').forEach(color2 => {
                        color2.style.color = "#FDFDFD"
                    }),
                    document.querySelector('.about__color3').style.color = "#FDFDFD",
                    document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                        arrow.src = '../../about_arrowdown_white.svg'
                    }),
                    document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                        borderline.style.borderColor = "#EEEC76"
                    }),
                    document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                    document.querySelector('.active').style.backgroundColor = '#EEEC76',
                    document.querySelector('.active').style.borderColor = '#EEEC76',
                    document.querySelector('.active').style.color = '#272727',
                    document.querySelector('.about__button--color').style.color = '#272727',
                    document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76',
                    document.querySelector('.about__button--color').style.borderColor = '#EEEC76',
                    document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                        document.querySelector('.about__button--color').style.color = '#272727'
                        document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                        document.querySelector('.about__button--color').style.borderColor = '#272727'
                    }),
                    document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                        document.querySelector('.about__button--color').style.color = '#272727'
                        document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76'
                        document.querySelector('.about__button--color').style.borderColor = '#EEEC76'
                    })




                )
                : colorIdentifier === 'mixbox' ?
                    (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#929948',
                        document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_mixbox.svg")',
                        document.querySelector('.about__arrow').src = "../../about_arrow_trainworld.svg",






                        document.querySelectorAll('.about__color1').forEach(color => {
                            color.style.color = "#EEEC76"
                        }),
                        document.querySelectorAll('.about__color2').forEach(color2 => {
                            color2.style.color = "#FDFDFD"
                        }),
                        document.querySelector('.about__color3').style.color = "#FDFDFD",
                        document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                            arrow.src = '../../about_arrowdown_white.svg'
                        }),
                        document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                            borderline.style.borderColor = "#EEEC76"
                        }),
                        document.querySelectorAll('.nav__link').forEach(link => {
                            link.style.borderColor = '#efefef'
                            if (!link.classList.contains('active')) {
                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                            }
                        }),
                        document.querySelector('.active').style.backgroundColor = '#EEEC76',
                        document.querySelector('.active').style.borderColor = '#EEEC76',
                        document.querySelector('.active').style.color = '#272727',
                        document.querySelector('.about__button--color').style.color = '#272727',
                        document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76',
                        document.querySelector('.about__button--color').style.borderColor = '#EEEC76',
                        document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                            document.querySelector('.about__button--color').style.color = '#272727'
                            document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                            document.querySelector('.about__button--color').style.borderColor = '#272727'
                        }),
                        document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                            document.querySelector('.about__button--color').style.color = '#272727'
                            document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76'
                            document.querySelector('.about__button--color').style.borderColor = '#EEEC76'
                        })




                    )
                    : colorIdentifier === 'stingstitute' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#492078',
                        document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_stingstitute.svg")',
                        document.querySelector('.about__arrow').src = "../../about_arrow_stingstitute.svg",


                        document.querySelectorAll('.about__color1').forEach(color => {
                            color.style.color = "#FF53B7"
                        }),
                        document.querySelectorAll('.about__color2').forEach(color2 => {
                            color2.style.color = "#FDFDFD"
                        }),
                        document.querySelector('.about__color3').style.color = "#FDFDFD",
                        document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                            arrow.src = '../../about_arrowdown_white.svg'
                        }),
                        document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                            borderline.style.borderColor = "#FF53B7"
                        }),
                        document.querySelectorAll('.nav__link').forEach(link => {
                            link.style.borderColor = '#efefef'
                            if (!link.classList.contains('active')) {
                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#FF53B7', link.style.color = '#FF53B7' })
                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                            }
                        }),
                        document.querySelector('.active').style.backgroundColor = '#FF53B7',
                        document.querySelector('.active').style.borderColor = '#FF53B7',
                        document.querySelector('.active').style.color = '#492078',
                        document.querySelector('.about__button--color').style.color = '#492078',
                        document.querySelector('.about__button--color').style.backgroundColor = '#FF53B7',
                        document.querySelector('.about__button--color').style.borderColor = '#FF53B7',
                        document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                            document.querySelector('.about__button--color').style.color = '#272727'
                            document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                            document.querySelector('.about__button--color').style.borderColor = '#272727'
                        }),
                        document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                            document.querySelector('.about__button--color').style.color = '#492078'
                            document.querySelector('.about__button--color').style.backgroundColor = '#FF53B7'
                            document.querySelector('.about__button--color').style.borderColor = '#FF53B7'
                        })

                    )
                        : colorIdentifier === 'rotterdans' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#efefef',
                            document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_rotterdans.svg")',
                            document.querySelector('.about__arrow').src = "../../about_arrow_rotterdans.svg",






                            document.querySelectorAll('.about__color1').forEach(color => {
                                color.style.color = "#2C2D2C"
                            }),
                            document.querySelectorAll('.about__color2').forEach(color2 => {
                                color2.style.color = "#2C2D2C"
                            }),
                            document.querySelector('.about__color3').style.color = "#2C2D2C",

                            document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                arrow.src = '../../about_arrowdown_white.svg'
                            }),
                            document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                borderline.style.borderColor = "#2C2D2C"
                            }),
                            document.querySelectorAll('.nav__link').forEach(link => {
                                link.style.borderColor = '#efefef'
                                if (!link.classList.contains('active')) {
                                    link.addEventListener('mouseenter', () => { link.style.borderColor = '#2C2D2C', link.style.color = '#2C2D2C' })
                                    link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                }
                            }),
                            document.querySelector('.active').style.backgroundColor = '#2C2D2C',
                            document.querySelector('.active').style.borderColor = '#2C2D2C',
                            document.querySelector('.active').style.color = '#FDFDFD',
                            document.querySelector('.about__button--color').style.color = '#FDFDFD',
                            document.querySelector('.about__button--color').style.backgroundColor = '#2C2D2C',
                            document.querySelector('.about__button--color').style.borderColor = '#2C2D2C',
                            document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                document.querySelector('.about__button--color').style.color = '#2C2D2C'
                                document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                document.querySelector('.about__button--color').style.borderColor = '#2C2D2C'
                            }),
                            document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                document.querySelector('.about__button--color').style.backgroundColor = '#2C2D2C'
                                document.querySelector('.about__button--color').style.borderColor = '#2C2D2C'
                            })




                        )
                            : colorIdentifier === 'equalmelodies' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#272727',
                                document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_equalmelodies.svg")',
                                document.querySelector('.about__arrow').src = "../../about_arrow_equalmelodies.svg",






                                document.querySelectorAll('.about__color1').forEach(color => {
                                    color.style.color = "#D8595B"
                                }),
                                document.querySelectorAll('.about__color2').forEach(color2 => {
                                    color2.style.color = "#FDFDFD"
                                }),
                                document.querySelector('.about__color3').style.color = "#FDFDFD",
                                document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                    arrow.src = '../../about_arrowdown_white.svg'
                                }),
                                document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                    borderline.style.borderColor = "#D8595B"
                                }),
                                document.querySelectorAll('.nav__link').forEach(link => {
                                    link.style.borderColor = '#efefef'
                                    if (!link.classList.contains('active')) {
                                        link.addEventListener('mouseenter', () => { link.style.borderColor = '#D8595B', link.style.color = '#D8595B' })
                                        link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                    }
                                }),
                                document.querySelector('.active').style.backgroundColor = '#D8595B',
                                document.querySelector('.active').style.borderColor = '#D8595B',
                                document.querySelector('.active').style.color = '#FDFDFD',
                                document.querySelector('.about__button--color').style.color = '#FDFDFD',
                                document.querySelector('.about__button--color').style.backgroundColor = '#D8595B',
                                document.querySelector('.about__button--color').style.borderColor = '#D8595B',
                                document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                    document.querySelector('.about__button--color').style.color = '#272727'
                                    document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                    document.querySelector('.about__button--color').style.borderColor = '#272727'
                                }),
                                document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                    document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                    document.querySelector('.about__button--color').style.backgroundColor = '#D8595B'
                                    document.querySelector('.about__button--color').style.borderColor = '#D8595B'
                                })




                            )
                                : colorIdentifier === 'reactartistique' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#366830',
                                    document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_reactartistique.svg")',
                                    document.querySelector('.about__arrow').src = "../../about_arrow_reactartistique.svg",






                                    document.querySelectorAll('.about__color1').forEach(color => {
                                        color.style.color = "#11210F"
                                    }),
                                    document.querySelectorAll('.about__color2').forEach(color2 => {
                                        color2.style.color = "#FDFDFD"
                                    }),
                                    document.querySelector('.about__color3').style.color = "#FDFDFD",
                                    document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                        arrow.src = '../../about_arrowdown_white.svg'
                                    }),
                                    document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                        borderline.style.borderColor = "#FDFDFD"
                                    }),
                                    document.querySelectorAll('.nav__link').forEach(link => {
                                        link.style.borderColor = '#efefef'
                                        if (!link.classList.contains('active')) {
                                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FDFDFD', link.style.color = '#FDFDFD' })
                                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                        }
                                    }),
                                    document.querySelector('.active').style.backgroundColor = '#274A23',
                                    document.querySelector('.active').style.borderColor = '#274A23',
                                    document.querySelector('.active').style.color = '#FDFDFD',
                                    document.querySelector('.about__button--color').style.color = '#FDFDFD',
                                    document.querySelector('.about__button--color').style.backgroundColor = '#274A23',
                                    document.querySelector('.about__button--color').style.borderColor = '#274A23',
                                    document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                        document.querySelector('.about__button--color').style.color = '#272727'
                                        document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                        document.querySelector('.about__button--color').style.borderColor = '#272727'
                                    }),
                                    document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                        document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                        document.querySelector('.about__button--color').style.backgroundColor = '#274A23'
                                        document.querySelector('.about__button--color').style.borderColor = '#274A23'
                                    })




                                )
                                    : colorIdentifier === 'dishknob' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#FFF8F4',
                                        document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_dishknob.svg")',
                                        document.querySelector('.about__arrow').src = "../../about_arrow_dishknob.svg",






                                        document.querySelectorAll('.about__color1').forEach(color => {
                                            color.style.color = "#4C984C"
                                        }),
                                        document.querySelectorAll('.about__color2').forEach(color2 => {
                                            color2.style.color = "#2C2D2C"
                                        }),
                                        document.querySelector('.about__color3').style.color = "#2C2D2C",
                                        document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                            arrow.src = '../../about_arrowdown_black.svg'
                                        }),
                                        document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                            borderline.style.borderColor = "#4C984C"
                                        }),
                                        document.querySelectorAll('.nav__link').forEach(link => {
                                            link.style.borderColor = '#efefef'
                                            if (!link.classList.contains('active')) {
                                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#4C984C', link.style.color = '#4C984C' })
                                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                            }
                                        }),
                                        document.querySelector('.active').style.backgroundColor = '#4C984C',
                                        document.querySelector('.active').style.borderColor = '#4C984C',
                                        document.querySelector('.active').style.color = '#FDFDFD',
                                        document.querySelector('.about__button--color').style.color = '#FDFDFD',
                                        document.querySelector('.about__button--color').style.backgroundColor = '#4C984C',
                                        document.querySelector('.about__button--color').style.borderColor = '#4C984C',
                                        document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                            document.querySelector('.about__button--color').style.color = '#272727'
                                            document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                            document.querySelector('.about__button--color').style.borderColor = '#272727'
                                        }),
                                        document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                            document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                            document.querySelector('.about__button--color').style.backgroundColor = '#4C984C'
                                            document.querySelector('.about__button--color').style.borderColor = '#4C984C'
                                        })




                                    )
                                        : colorIdentifier === 'trimcraft' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#434321',
                                            document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_trimcraft.svg")',
                                            document.querySelector('.about__arrow').src = "../../about_arrow_trainworld.svg",






                                            document.querySelectorAll('.about__color1').forEach(color => {
                                                color.style.color = "#EEEC76"
                                            }),
                                            document.querySelectorAll('.about__color2').forEach(color2 => {
                                                color2.style.color = "#FDFDFD"
                                            }),
                                            document.querySelector('.about__color3').style.color = "#FDFDFD",
                                            document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                                arrow.src = '../../about_arrowdown_white.svg'
                                            }),
                                            document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                                borderline.style.borderColor = "#EEEC76"
                                            }),
                                            document.querySelectorAll('.nav__link').forEach(link => {
                                                link.style.borderColor = '#efefef'
                                                if (!link.classList.contains('active')) {
                                                    link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                                                    link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                }
                                            }),
                                            document.querySelector('.active').style.backgroundColor = '#EEEC76',
                                            document.querySelector('.active').style.borderColor = '#EEEC76',
                                            document.querySelector('.active').style.color = '#272727',
                                            document.querySelector('.about__button--color').style.color = '#272727',
                                            document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76',
                                            document.querySelector('.about__button--color').style.borderColor = '#EEEC76',
                                            document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                                document.querySelector('.about__button--color').style.color = '#272727'
                                                document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                                document.querySelector('.about__button--color').style.borderColor = '#272727'
                                            }),
                                            document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                                document.querySelector('.about__button--color').style.color = '#272727'
                                                document.querySelector('.about__button--color').style.backgroundColor = '#EEEC76'
                                                document.querySelector('.about__button--color').style.borderColor = '#EEEC76'
                                            })




                                        )
                                            : colorIdentifier === 'smashabutton' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#21432E',
                                                document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_smashabutton.svg")',
                                                document.querySelector('.about__arrow').src = "../../about_arrow_smashabutton.svg",






                                                document.querySelectorAll('.about__color1').forEach(color => {
                                                    color.style.color = "#FEA500"
                                                }),
                                                document.querySelectorAll('.about__color2').forEach(color2 => {
                                                    color2.style.color = "#FDFDFD"
                                                }),
                                                document.querySelector('.about__color3').style.color = "#FDFDFD",
                                                document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                                    arrow.src = '../../about_arrowdown_white.svg'
                                                }),
                                                document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                                    borderline.style.borderColor = "#FEA500"
                                                }),
                                                document.querySelectorAll('.nav__link').forEach(link => {
                                                    link.style.borderColor = '#efefef'
                                                    if (!link.classList.contains('active')) {
                                                        link.addEventListener('mouseenter', () => { link.style.borderColor = '#FEA500', link.style.color = '#FEA500' })
                                                        link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                    }
                                                }),
                                                document.querySelector('.active').style.backgroundColor = '#FEA500',
                                                document.querySelector('.active').style.borderColor = '#FEA500',
                                                document.querySelector('.active').style.color = '#272727',
                                                document.querySelector('.about__button--color').style.color = '#272727',
                                                document.querySelector('.about__button--color').style.backgroundColor = '#FEA500',
                                                document.querySelector('.about__button--color').style.borderColor = '#FEA500',
                                                document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                                    document.querySelector('.about__button--color').style.color = '#272727'
                                                    document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                                    document.querySelector('.about__button--color').style.borderColor = '#272727'
                                                }),
                                                document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                                    document.querySelector('.about__button--color').style.color = '#272727'
                                                    document.querySelector('.about__button--color').style.backgroundColor = '#FEA500'
                                                    document.querySelector('.about__button--color').style.borderColor = '#FEA500'
                                                })




                                            )
                                                : colorIdentifier === 'chessbase' ? (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#7A9A57',
                                                    document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_chessbase.svg")',
                                                    document.querySelector('.about__arrow').src = "../../about_arrow_chessbase.svg",






                                                    document.querySelectorAll('.about__color1').forEach(color => {
                                                        color.style.color = "#ECEDCE"
                                                    }),
                                                    document.querySelectorAll('.about__color2').forEach(color2 => {
                                                        color2.style.color = "#2C2D2C"
                                                    }),
                                                    document.querySelector('.about__color3').style.color = "#2C2D2C",
                                                    document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                                        arrow.src = '../../about_arrowdown_black.svg'
                                                    }),
                                                    document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                                        borderline.style.borderColor = "#ECEDCE"
                                                    }),
                                                    document.querySelectorAll('.nav__link').forEach(link => {
                                                        link.style.borderColor = '#efefef'
                                                        if (!link.classList.contains('active')) {
                                                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#ECEDCE', link.style.color = '#ECEDCE' })
                                                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                        }
                                                    }),
                                                    document.querySelector('.active').style.backgroundColor = '#5A723F',
                                                    document.querySelector('.active').style.borderColor = '#5A723F',
                                                    document.querySelector('.active').style.color = '#FDFDFD',
                                                    document.querySelector('.about__button--color').style.color = '#FDFDFD',
                                                    document.querySelector('.about__button--color').style.backgroundColor = '#5A723F',
                                                    document.querySelector('.about__button--color').style.borderColor = '#5A723F',
                                                    document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                                        document.querySelector('.about__button--color').style.color = '#272727'
                                                        document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                                        document.querySelector('.about__button--color').style.borderColor = '#272727'
                                                    }),
                                                    document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                                        document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                                        document.querySelector('.about__button--color').style.backgroundColor = '#5A723F'
                                                        document.querySelector('.about__button--color').style.borderColor = '#5A723F'
                                                    })




                                                )
                                                    : (document.querySelector('.aboutpage__wrapper').style.backgroundColor = '#2E3495',
                                                        document.querySelector('.aboutpage__bg--wrapper').style.backgroundImage = 'url("../../aboutbg_weatherdog.svg")',
                                                        document.querySelector('.about__arrow').src = "../../about_arrow_weatherdog.svg",






                                                        document.querySelectorAll('.about__color1').forEach(color => {
                                                            color.style.color = "#E69A8D"
                                                        }),
                                                        document.querySelectorAll('.about__color2').forEach(color2 => {
                                                            color2.style.color = "#FDFDFD"
                                                        }),
                                                        document.querySelector('.about__color3').style.color = "#FDFDFD",
                                                        document.querySelectorAll('.about__arrowdown').forEach(arrow => {
                                                            arrow.src = '../../about_arrowdown_white.svg'
                                                        }),
                                                        document.querySelectorAll('.about__skillset--itemwrapperall').forEach(borderline => {
                                                            borderline.style.borderColor = "#E69A8D"
                                                        }),
                                                        document.querySelectorAll('.nav__link').forEach(link => {
                                                            link.style.borderColor = '#efefef'
                                                            if (!link.classList.contains('active')) {
                                                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#E69A8D', link.style.color = '#E69A8D' })
                                                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                            }
                                                        }),
                                                        document.querySelector('.active').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.active').style.borderColor = '#E69A8D',
                                                        document.querySelector('.active').style.color = '#FDFDFD',
                                                        document.querySelector('.about__button--color').style.color = '#FDFDFD',
                                                        document.querySelector('.about__button--color').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.about__button--color').style.borderColor = '#E69A8D',
                                                        document.querySelector('.about__button--color').addEventListener('mouseenter', () => {
                                                            document.querySelector('.about__button--color').style.color = '#272727'
                                                            document.querySelector('.about__button--color').style.backgroundColor = 'transparent'
                                                            document.querySelector('.about__button--color').style.borderColor = '#272727'
                                                        }),
                                                        document.querySelector('.about__button--color').addEventListener('mouseleave', () => {
                                                            document.querySelector('.about__button--color').style.color = '#FDFDFD'
                                                            document.querySelector('.about__button--color').style.backgroundColor = '#E69A8D'
                                                            document.querySelector('.about__button--color').style.borderColor = '#E69A8D'
                                                        })




                                                    )
        }
    }, [colorIdentifier])

    return (
        <main className="aboutpage__wrapper">
            <div className="aboutpage__bg--wrapper">
                <NavBar colorIdentifier={colorIdentifier} />
                <section className="about__title--wrapper">
                    <h1 className="hidden">CREATING TOMMORROW&apos;S EXPERIENCES TODAY</h1>
                    <div>
                        <p className="about__color1 about__title about__title1">CREATING TOMORROW&apos;S</p>
                        <p className="about__color1 about__title about__title2">EXPERIENCES</p>
                        <p className="about__color2 about__title about__title3">TODAY.</p>
                        <img src="../../about_arrow_trainworld.svg" alt="arrow" className="about__arrow" />
                    </div>
                </section>
                <section className="about__intro--wrapper">
                    <h2 className="hidden">Personal Info</h2>
                    <p className="about__color1 about__intro">Hi, my name is <span className="highlight about__color3">Hans</span>. I am a Belgian student, currently studying <span className="bold">Digital Design and Development</span> (Devine) in Kortrijk.</p>
                    <p className="about__color2 about__description about__color1"> I love to to get <span className="bold">out of my comfort zone</span>, creating things I never thought I could. I have gained a <span className="bold">lot of skills</span>, but I would like to expand my knowledge and dive deeper in mostly <span className="bold">Development</span> and a bit of <span className="bold">Design</span>.</p>
                    <p className="about__color2 about__description about__color2">When i’m off work, I love to grab a drink at the <span className="bold">bar</span> with my friends, play the <span className="bold">piano</span> and go <span className="bold">bouldering</span> (indoor climbing).</p>
                </section>
            </div>
            <section className="about__skillset--wrapper">
                <h2 className="about__color1 about__skillset--title">MY SKILLSET</h2>
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
                            <p className="about__color2 about__skillset--item">DEVELOPMENT</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow about__arrowdown" />
                        </button>
                        <div className="about__skillset--itemhidden">
                            <div className="logo__wrapper--all">
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../html.svg" alt="html icon" />
                                    </div>
                                    <p className="about__color2 logo__name">HTML5</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../css.svg" alt="css icon" />
                                    </div>
                                    <p className="about__color2 logo__name">CSS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../js.svg" alt="javascript icon" />
                                    </div>
                                    <p className="about__color2 logo__name">JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../php.svg" alt="php icon" />
                                    </div>
                                    <p className="about__color2 logo__name">PHP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../react.svg" alt="react icon" />
                                    </div>
                                    <p className="about__color2 logo__name">REACT</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper logo__wrapper--long">
                                        <img src="../../react.svg" alt="react native icon" />
                                    </div>
                                    <p className="about__color2 logo__name">REACT NATIVE</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../astro.svg" alt="astro icon" />
                                    </div>
                                    <p className="about__color2 logo__name">ASTRO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../strapi.svg" alt="strapi icon" />
                                    </div>
                                    <p className="about__color2 logo__name">STRAPI</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../arduino.svg" alt="arduino icon" />
                                    </div>
                                    <p className="about__color2 logo__name">ARDUINO</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../p5js.svg" alt="p5.js icon" />
                                    </div>
                                    <p className="about__color2 logo__name">P5JS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../sequelace.svg" alt="my sequel ace icon" />
                                    </div>
                                    <p className="about__color2 logo__name">SEQUEL ACE</p>
                                </div>
                            </div>
                            <div className="logo__container2">
                                <div className="logo__wrapper--all logo__wrapper--all2">
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../gsap.svg" alt="gsap icon" />
                                        </div>
                                        <p className="about__color2 logo__name">GSAP</p>
                                    </div>
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../gtm.svg" alt="google teachable machine icon" />
                                        </div>
                                        <p className="about__color2 logo__name">GTM</p>
                                    </div>
                                    <div className="logo__wrapper--details">
                                        <div className="logo__wrapper">
                                            <img src="../../ml5.svg" alt="ml5js icon" />
                                        </div>
                                        <p className="about__color2 logo__name">ML5</p>
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
                            <p className="about__color2 about__skillset--item">DESIGN</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow2 about__arrowdown" />
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
                                    <p className="about__color2 logo__name--design2">ADOBE ILLUSTRATOR</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../ps.svg" alt="adobe photoshop icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE PHOTOSHOP</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../ae.svg" alt="adobe after effects icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE AFTER EFFECTS</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../au.svg" alt="adobe audition icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">ADOBE AUDITION</p>
                                </div>
                                <div className="logo__wrapper--details">
                                    <div className="logo__wrapper">
                                        <img src="../../figma.svg" alt="figma icon" />
                                    </div>
                                    <p className="about__color2 logo__name--design2">FIGMA</p>
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
                            <p className="about__color2 about__skillset--item">UX RESEARCH</p>
                            <img src="../../about_arrowdown_white.svg" alt="arrow down" className="arrow3 about__arrowdown" />
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
                        <Link to={`/contact/${colorIdentifier}`} className="about__contact--button button__color about__button--color">Contact me</Link>
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
        </main>

    )
}

About.propTypes = {
    colorIdentifier: PropTypes.string
};

export default About