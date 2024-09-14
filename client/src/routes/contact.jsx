import { useOutletContext, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import PropTypes from 'prop-types'
import { useEffect } from 'react'

const Contact = () => {
    let { colorIdentifier } = useParams()
    const { setScaling } = useOutletContext();

    useEffect(() => {
        {

            colorIdentifier === 'trainworld' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                document.querySelector('.small_circle').style.backgroundColor = '#E8E661',
                document.querySelector('.large_circle').style.backgroundColor = '#FDFDFD',
                document.querySelector('.color2').style.color = '#E8E661',
                document.querySelector('.highlight').style.color = '#E8E661',
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.style.borderColor = '#efefef'
                    if (!link.classList.contains('active')) {
                        link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76' })
                        link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef' })
                    }
                }),
                document.querySelector('.contact__description').style.color = '#FDFDFD',
                document.querySelector('.active').style.backgroundColor = '#E8E661',
                document.querySelector('.active').style.borderColor = '#E8E661',
                document.querySelector('.active').style.color = '#272727',
                document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_trainworld.svg")',
                document.querySelector('.button__color').style.backgroundColor = '#E8E661',
                document.querySelector('.button__color').style.borderColor = '#E8E661',
                document.querySelector('.button__color--sec').style.borderColor = '#E8E661',
                document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                document.querySelector('.button__color').style.color = '#272727',

                document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#EEEC76' }),
                document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--sec').style.color = '#272727' }),
                document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),

                document.querySelector('.bottom__right').style.color = '#FDFDFD',
                document.querySelectorAll('.social__contact').forEach(social => {
                    social.style.color = '#FDFDFD'

                }),
                document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                document.querySelector('.social__icon--github').src = '/githubwhite.svg',


                document.querySelector('.background1').style.backgroundColor = '#272727')

                : colorIdentifier === 'mixbox' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                    document.querySelector('.small_circle').style.backgroundColor = '#EEEC76',
                    document.querySelector('.large_circle').style.backgroundColor = '#FDFDFD',
                    document.querySelector('.color2').style.color = '#EEEC76',
                    document.querySelector('.highlight').style.color = '#EEEC76',
                    document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef' })
                        }
                    }),
                    document.querySelector('.contact__description').style.color = '#FDFDFD',
                    document.querySelector('.active').style.backgroundColor = '#EEEC76',
                    document.querySelector('.active').style.borderColor = '#EEEC76',
                    document.querySelector('.active').style.color = '#272727',
                    document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_mixbox.svg")',
                    document.querySelector('.button__color').style.backgroundColor = '#EEEC76',
                    document.querySelector('.button__color').style.borderColor = '#EEEC76',
                    document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#EEEC76' }),
                    document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                    document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--sec').style.color = '#272727' }),
                    document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                    document.querySelector('.button__color--sec').style.borderColor = '#EEEC76',
                    document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                    document.querySelector('.button__color').style.color = '#272727',
                    document.querySelector('.nav__link').style.borderColor = '#efefef',
                    document.querySelector('.nav__link').classList.add('hover__mixbox'),

                    document.querySelector('.background1').style.backgroundColor = '#929948')

                    : colorIdentifier === 'stingstitute' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                        document.querySelector('.small_circle').style.backgroundColor = '#FF53B7',
                        document.querySelector('.large_circle').style.backgroundColor = '#FDFDFD',
                        document.querySelector('.color2').style.color = '#FF53B7',
                        document.querySelector('.highlight').style.color = '#FF53B7',
                        document.querySelectorAll('.nav__link').forEach(link => {
                            link.style.borderColor = '#efefef'
                            if (!link.classList.contains('active')) {
                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#FF53B7', link.style.color = '#FF53B7' })
                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                            }
                        }),
                        document.querySelector('.contact__description').style.color = '#FDFDFD',
                        document.querySelector('.active').style.backgroundColor = '#FF53B7',
                        document.querySelector('.active').style.borderColor = '#FF53B7',
                        document.querySelector('.active').style.color = '#272727',
                        document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_stingstitute.svg")',
                        document.querySelector('.button__color').style.backgroundColor = '#FF53B7',
                        document.querySelector('.button__color').style.borderColor = '#FF53B7',
                        document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#FF53B7' }),
                        document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#FF53B7', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                        document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#FF53B7', document.querySelector('.contact__button--sec').style.color = '#492078' }),
                        document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                        document.querySelector('.button__color--sec').style.borderColor = '#FF53B7',
                        document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                        document.querySelector('.button__color').style.color = '#492078',
                        document.querySelector('.nav__link').style.borderColor = '#efefef',
                        document.querySelector('.nav__link').classList.add('hover__stingstitute'),
                        document.querySelector('.bottom__right').style.color = '#FDFDFD',
                        document.querySelectorAll('.social__contact').forEach(social => {
                            social.style.color = '#FDFDFD'

                        }),
                        document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                        document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                        document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                        document.querySelector('.background1').style.backgroundColor = '#492078')

                        : colorIdentifier === 'rotterdans' ? (document.querySelector('.color1').style.color = '#2C2D2C',
                            document.querySelector('.small_circle').style.backgroundColor = '#272727',
                            document.querySelector('.large_circle').style.backgroundColor = '#272727',
                            document.querySelector('.color2').style.color = '#2C2D2C',
                            document.querySelector('.highlight').style.color = '#2C2D2C',
                            document.querySelectorAll('.nav__link').forEach(link => {
                                link.style.borderColor = '#efefef'
                                if (!link.classList.contains('active')) {
                                    link.addEventListener('mouseenter', () => { link.style.borderColor = '#272727', link.style.color = '#272727' })
                                    link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                }
                            }),
                            document.querySelector('.contact__description').style.color = '#272727',
                            document.querySelector('.active').style.backgroundColor = '#2C2D2C',
                            document.querySelector('.active').style.borderColor = '#2C2D2C',
                            document.querySelector('.active').style.color = '#FDFDFD',
                            document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_rotterdans.svg")',
                            document.querySelector('.button__color').style.backgroundColor = '#2C2D2C',
                            document.querySelector('.button__color').style.borderColor = '#2C2D2C',
                            document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#2C2D2C' }),
                            document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#2C2D2C', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                            document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#2C2D2C', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                            document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#2C2D2C' }),
                            document.querySelector('.button__color--sec').style.borderColor = '#2C2D2C',
                            document.querySelector('.button__color--sec').style.color = '#272727',
                            document.querySelector('.button__color').style.color = '#FDFDFD',
                            document.querySelector('.nav__link').style.borderColor = '#efefef',
                            document.querySelector('.nav__link').classList.add('hover__'),
                            document.querySelector('.bottom__right').style.color = '#2C2D2C',
                            document.querySelectorAll('.social__contact').forEach(social => {
                                social.style.color = '#2C2D2C'

                            }),
                            document.querySelector('.social__icon--instagram').src = '/instagramblack.svg',
                            document.querySelector('.social__icon--behance').src = '/behanceblack.svg',
                            document.querySelector('.social__icon--github').src = '/githubblack.svg',
                            document.querySelector('.background1').style.backgroundColor = '#F0F0F0')

                            : colorIdentifier === 'equalmelodies' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                                document.querySelector('.small_circle').style.backgroundColor = '#D8595B',
                                document.querySelector('.large_circle').style.backgroundColor = '#272727',
                                document.querySelector('.color2').style.color = '#D8595B',
                                document.querySelector('.highlight').style.color = '#D8595B',
                                document.querySelectorAll('.nav__link').forEach(link => {
                                    link.style.borderColor = '#efefef'
                                    if (!link.classList.contains('active')) {
                                        link.addEventListener('mouseenter', () => { link.style.borderColor = '#D8595B', link.style.color = '#D8595B' })
                                        link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                    }
                                }),
                                document.querySelector('.contact__description').style.color = '#FDFDFD',
                                document.querySelector('.active').style.backgroundColor = '#D8595B',
                                document.querySelector('.active').style.borderColor = '#D8595B',
                                document.querySelector('.active').style.color = '#FDFDFD',
                                document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_equalmelodies.svg")',
                                document.querySelector('.button__color').style.backgroundColor = '#D8595B',
                                document.querySelector('.button__color').style.borderColor = '#D8595B',
                                document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#D8595B' }),
                                document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#D8595B', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#D8595B', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                document.querySelector('.button__color--sec').style.borderColor = '#D8595B',
                                document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                                document.querySelector('.button__color').style.color = '#FDFDFD',
                                document.querySelector('.nav__link').style.borderColor = '#efefef',
                                document.querySelector('.nav__link').classList.add('hover__'),
                                document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                document.querySelectorAll('.social__contact').forEach(social => {
                                    social.style.color = '#FDFDFD'

                                }),
                                document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                document.querySelector('.background1').style.backgroundColor = '#272727')

                                : colorIdentifier === 'reactartistique' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                                    document.querySelector('.small_circle').style.backgroundColor = '#FDFDFD',
                                    document.querySelector('.large_circle').style.backgroundColor = '#274A23',
                                    document.querySelector('.color2').style.color = '#11210F',
                                    document.querySelector('.highlight').style.color = '#11210F',
                                    document.querySelectorAll('.nav__link').forEach(link => {
                                        link.style.borderColor = '#efefef'
                                        if (!link.classList.contains('active')) {
                                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#274A23', link.style.color = '#FDFDFD' })
                                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                        }
                                    }),
                                    document.querySelector('.contact__description').style.color = '#FDFDFD',
                                    document.querySelector('.active').style.backgroundColor = '#274A23',
                                    document.querySelector('.active').style.borderColor = '#274A23',
                                    document.querySelector('.active').style.color = '#FDFDFD',
                                    document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_reactartistique.svg")',
                                    document.querySelector('.button__color').style.backgroundColor = '#274A23',
                                    document.querySelector('.button__color').style.borderColor = '#274A23',
                                    document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                    document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#274A23', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                    document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#274A23', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                    document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                    document.querySelector('.button__color--sec').style.borderColor = '#274A23',
                                    document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                                    document.querySelector('.button__color').style.color = '#FDFDFD',
                                    document.querySelector('.nav__link').style.borderColor = '#efefef',
                                    document.querySelector('.nav__link').classList.add('hover__'),
                                    document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                    document.querySelectorAll('.social__contact').forEach(social => {
                                        social.style.color = '#FDFDFD'

                                    }),
                                    document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                    document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                    document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                    document.querySelector('.background1').style.backgroundColor = '#366830')

                                    : colorIdentifier === 'dishknob' ? (document.querySelector('.color1').style.color = '#272727',
                                        document.querySelector('.small_circle').style.backgroundColor = '#4C984C',
                                        document.querySelector('.large_circle').style.backgroundColor = '#4C984C',
                                        document.querySelector('.color2').style.color = '#4C984C',
                                        document.querySelector('.highlight').style.color = '#4C984C',
                                        document.querySelectorAll('.nav__link').forEach(link => {
                                            link.style.borderColor = '#efefef'
                                            if (!link.classList.contains('active')) {
                                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#4C984C', link.style.color = '#4C984C' })
                                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                            }
                                        }),
                                        document.querySelector('.contact__description').style.color = '#272727',
                                        document.querySelector('.active').style.backgroundColor = '#4C984C',
                                        document.querySelector('.active').style.borderColor = '#4C984C',
                                        document.querySelector('.active').style.color = '#FDFDFD',
                                        document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_dishknob.svg")',
                                        document.querySelector('.button__color').style.backgroundColor = '#4C984C',
                                        document.querySelector('.button__color').style.borderColor = '#4C984C',
                                        document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#4C984C' }),
                                        document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#4C984C', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                        document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#4C984C', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                        document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#4C984C' }),
                                        document.querySelector('.button__color--sec').style.borderColor = '#4C984C',
                                        document.querySelector('.button__color--sec').style.color = '#4C984C',
                                        document.querySelector('.button__color').style.color = '#FDFDFD',
                                        document.querySelector('.nav__link').style.borderColor = '#efefef',
                                        document.querySelector('.nav__link').classList.add('hover__'),
                                        document.querySelector('.bottom__right').style.color = '#272727',
                                        document.querySelectorAll('.social__contact').forEach(social => {
                                            social.style.color = '#272727'

                                        }),
                                        document.querySelector('.social__icon--instagram').src = '/instagramblack.svg',
                                        document.querySelector('.social__icon--behance').src = '/behanceblack.svg',
                                        document.querySelector('.social__icon--github').src = '/githubblack.svg',
                                        document.querySelector('.background1').style.backgroundColor = '#FFF8F4')

                                        : colorIdentifier === 'trimcraft' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                                            document.querySelector('.small_circle').style.backgroundColor = '#EEEC76',
                                            document.querySelector('.large_circle').style.backgroundColor = '#FDFDFD',
                                            document.querySelector('.color2').style.color = '#EEEC76',
                                            document.querySelector('.highlight').style.color = '#EEEC76',
                                            document.querySelectorAll('.nav__link').forEach(link => {
                                                link.style.borderColor = '#efefef'
                                                if (!link.classList.contains('active')) {
                                                    link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                                                    link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                }
                                            }),
                                            document.querySelector('.contact__description').style.color = '#FDFDFD',
                                            document.querySelector('.active').style.backgroundColor = '#EEEC76',
                                            document.querySelector('.active').style.borderColor = '#EEEC76',
                                            document.querySelector('.active').style.color = '#EFDFDFD',
                                            document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_trimcraft.svg")',
                                            document.querySelector('.button__color').style.backgroundColor = '#EEEC76',
                                            document.querySelector('.button__color').style.borderColor = '#EEEC76',
                                            document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#EEEC76' }),
                                            document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                                            document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#EEEC76', document.querySelector('.contact__button--sec').style.color = '#272727' }),
                                            document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#EEEC76' }),
                                            document.querySelector('.button__color--sec').style.borderColor = '#EEEC76',
                                            document.querySelector('.button__color--sec').style.color = '#EFDFDFD',
                                            document.querySelector('.button__color').style.color = '#EFDFDFD',
                                            document.querySelector('.nav__link').style.borderColor = '#efefef',
                                            document.querySelector('.nav__link').classList.add('hover__'),
                                            document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                            document.querySelectorAll('.social__contact').forEach(social => {
                                                social.style.color = '#FDFDFD'

                                            }),
                                            document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                            document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                            document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                            document.querySelector('.background1').style.backgroundColor = '#434321')

                                            : colorIdentifier === 'smashabutton' ? (document.querySelector('.color1').style.color = '#FDFDFD',
                                                document.querySelector('.small_circle').style.backgroundColor = '#FEA500',
                                                document.querySelector('.large_circle').style.backgroundColor = '#FEA500',
                                                document.querySelector('.color2').style.color = '#FEA500',
                                                document.querySelector('.highlight').style.color = '#FEA500',
                                                document.querySelectorAll('.nav__link').forEach(link => {
                                                    link.style.borderColor = '#efefef'
                                                    if (!link.classList.contains('active')) {
                                                        link.addEventListener('mouseenter', () => { link.style.borderColor = '#FEA500', link.style.color = '#FEA500' })
                                                        link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                    }
                                                }),
                                                document.querySelector('.contact__description').style.color = '#FDFDFD',
                                                document.querySelector('.active').style.backgroundColor = '#FEA500',
                                                document.querySelector('.active').style.borderColor = '#FEA500',
                                                document.querySelector('.active').style.color = '#272727',
                                                document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_smashabutton.svg")',
                                                document.querySelector('.button__color').style.backgroundColor = '#FEA500',
                                                document.querySelector('.button__color').style.borderColor = '#FEA500',
                                                document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#FEA500' }),
                                                document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#FEA500', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                                                document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#FEA500', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                document.querySelector('.button__color--sec').style.borderColor = '#FEA500',
                                                document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                                                document.querySelector('.button__color').style.color = '#272727',
                                                document.querySelector('.nav__link').style.borderColor = '#efefef',
                                                document.querySelector('.nav__link').classList.add('hover__'),
                                                document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                                document.querySelectorAll('.social__contact').forEach(social => {
                                                    social.style.color = '#FDFDFD'

                                                }),
                                                document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                                document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                                document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                                document.querySelector('.background1').style.backgroundColor = '#21432E')

                                                : colorIdentifier === 'chessbase' ? (document.querySelector('.color1').style.color = '#272727',
                                                    document.querySelector('.small_circle').style.backgroundColor = '#ECEDCE',
                                                    document.querySelector('.large_circle').style.backgroundColor = '#ECEDCE',
                                                    document.querySelector('.color2').style.color = '#ECEDCE',
                                                    document.querySelector('.highlight').style.color = '#ECEDCE',
                                                    document.querySelectorAll('.nav__link').forEach(link => {
                                                        link.style.borderColor = '#efefef'
                                                        if (!link.classList.contains('active')) {
                                                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#D5D6BA', link.style.color = '#D5D6BA' })
                                                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                        }
                                                    }),
                                                    document.querySelector('.contact__description').style.color = '#FDFDFD',
                                                    document.querySelector('.active').style.backgroundColor = '#5A723F',
                                                    document.querySelector('.active').style.borderColor = '#5A723F',
                                                    document.querySelector('.active').style.color = '#FDFDFD',
                                                    document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_chessbase.svg")',
                                                    document.querySelector('.button__color').style.backgroundColor = '#5A723F',
                                                    document.querySelector('.button__color').style.borderColor = '#5A723F',
                                                    document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                                    document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#5A723F', document.querySelector('.contact__button--prim').style.color = '#FDFDFD' }),
                                                    document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#5A723F', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                    document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                    document.querySelector('.button__color--sec').style.borderColor = '#5A723F',
                                                    document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                                                    document.querySelector('.button__color').style.color = '#FDFDFD',
                                                    document.querySelector('.nav__link').style.borderColor = '#efefef',
                                                    document.querySelector('.nav__link').classList.add('hover__'),
                                                    document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                                    document.querySelectorAll('.social__contact').forEach(social => {
                                                        social.style.color = '#FDFDFD'

                                                    }),
                                                    document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                                    document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                                    document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                                    document.querySelector('.background1').style.backgroundColor = '#7A9A57')

                                                    : (document.querySelector('.color1').style.color = '#FDFDFD',
                                                        document.querySelector('.small_circle').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.large_circle').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.color2').style.color = '#E69A8D',
                                                        document.querySelector('.highlight').style.color = '#E69A8D',
                                                        document.querySelectorAll('.nav__link').forEach(link => {
                                                            link.style.borderColor = '#efefef'
                                                            if (!link.classList.contains('active')) {
                                                                link.addEventListener('mouseenter', () => { link.style.borderColor = '#E69A8D', link.style.color = '#E69A8D' })
                                                                link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                                                            }
                                                        }),
                                                        document.querySelector('.contact__description').style.color = '#FDFDFD',
                                                        document.querySelector('.active').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.active').style.borderColor = '#E69A8D',
                                                        document.querySelector('.active').style.color = '#FDFDFD',
                                                        document.querySelector('.background1').style.backgroundImage = 'url("/contactbg_weatherdog.svg")',
                                                        document.querySelector('.button__color').style.backgroundColor = '#E69A8D',
                                                        document.querySelector('.button__color').style.borderColor = '#E69A8D',
                                                        document.querySelector('.contact__button--prim').addEventListener('mouseenter', () => { document.querySelector('.contact__button--prim').style.backgroundColor = 'transparent', document.querySelector('.contact__button--prim').style.color = '#E69A8D' }),
                                                        document.querySelector('.contact__button--prim').addEventListener('mouseleave', () => { document.querySelector('.contact__button--prim').style.backgroundColor = '#E69A8D', document.querySelector('.contact__button--prim').style.color = '#272727' }),
                                                        document.querySelector('.contact__button--sec').addEventListener('mouseenter', () => { document.querySelector('.contact__button--sec').style.backgroundColor = '#E69A8D', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                        document.querySelector('.contact__button--sec').addEventListener('mouseleave', () => { document.querySelector('.contact__button--sec').style.backgroundColor = 'transparent', document.querySelector('.contact__button--sec').style.color = '#FDFDFD' }),
                                                        document.querySelector('.button__color--sec').style.borderColor = '#E69A8D',
                                                        document.querySelector('.button__color--sec').style.color = '#FDFDFD',
                                                        document.querySelector('.button__color').style.color = '#FDFDFD',
                                                        document.querySelector('.nav__link').style.borderColor = '#efefef',
                                                        document.querySelector('.nav__link').classList.add('hover__'),
                                                        document.querySelector('.bottom__right').style.color = '#FDFDFD',
                                                        document.querySelectorAll('.social__contact').forEach(social => {
                                                            social.style.color = '#FDFDFD'

                                                        }),
                                                        document.querySelector('.social__icon--instagram').src = '/instagramwhite.svg',
                                                        document.querySelector('.social__icon--behance').src = '/behancewhite.svg',
                                                        document.querySelector('.social__icon--github').src = '/githubwhite.svg',
                                                        document.querySelector('.background1').style.backgroundColor = '#2E3495')
        }
    }, [colorIdentifier])

    return (
        <main>
            <section className="contact__container background1">
                <NavBar colorIdentifier={colorIdentifier} />
                <h1 className="hidden">Let&apos;s Conncet</h1>
                <div className="contact__wrapper">
                    <div className="contact__detail--wrapper">
                        <p className="contact__title color1">LET&apos;S<br /><span className="contact__title2 color2">CONNECT</span></p>
                        <p className="contact__description color1">I’m looking forward to meet you so we could build our <span className="highlight color2">next project together</span></p>
                        <div className="button__wrapper">
                            <a onMouseEnter={() => setScaling(true)} href="mailto:contact@hansmaasdevine.be" target="__blank" className="about__contact--button contact__button contact__button--prim button__color">E-mail</a>
                            <a onMouseLeave={() => setScaling(false)} href="tel:+32499103827" className="about__contact--button contact__button contact__button--sec button__color--sec">Message</a>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom__left">
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://www.instagram.com/maasdesign_studios/" target='__blank' className="social social__contact">
                            <img src="/instagramwhite.svg" alt="icon of instagram" className='social__icon--instagram' />
                            <p>Instagram</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://www.behance.net/hansmaas" target='__blank' className="social social__contact">
                            <img src="/behancewhite.svg" alt="icon of behance" className='social__icon--behance' />
                            <p>Behance</p>
                        </a>
                        <a onMouseEnter={() => setScaling(true)}
                            onMouseLeave={() => setScaling(false)} href="https://github.com/hansmaas123" target='__blank' className="social social__contact">
                            <img src="/githubwhite.svg" alt="icon of github" className='social__icon--github' />
                            <p>Github</p>
                        </a>
                    </div>
                    <p className="bottom__right bottom__right--contact">All rights reserved — © Hans Maas</p>
                </div>
            </section>
        </main>
    )
}

Contact.propTypes = {
    colorIdentifier: PropTypes.string
};


export default Contact