import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/style.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    let [colorIdentifier, setColorIdentifier] = useState('trainworld');
    const location = useLocation();
    
    useEffect(() => {
        const initScrollTriggers = () => {
            window.scrollTo(0, 0);

        gsap.to(".projects__wrapper", {
            x: '-620vw',
            scrollTrigger: {
                trigger: '.doesntexist',
                pin: '.projects__wrapper, .homepage__wrapper',
                scrub: 1,
                start: "top 0%",
                end: "bottom -700%",
            },
        });
        ScrollTrigger.create({
            trigger: '.home__project--wrapper2',
            start: "left 0%",
            end: "left -37%",
            onEnter: () => {
                document.querySelector('.home__title').innerHTML = 'APP DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#929948', backgroundImage: 'url(../../homebg_mixbox.svg)' })
                gsap.to('.home__title', { color: '#EEEC76' })
                gsap.to('.title__lines', { color: '#EEEC76' })
                gsap.to('.active', { backgroundColor: '#EEEC76', borderColor: '#EEEC76' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        // link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                setColorIdentifier('mixbox')
            },
            onLeave: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#492078', backgroundImage: 'url(../../homebg_stingstitute.svg)' })
                gsap.to('.home__title', { color: '#FF53B7' })
                gsap.to('.title__lines', { color: '#FF53B7' })
                gsap.to('.active', { backgroundColor: '#FF53B7', borderColor: '#FF53B7' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FF53B7', link.style.color = '#FF53B7' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                setColorIdentifier('stingstitute')
            },
            onEnterBack: () => {
                document.querySelector('.home__title').innerHTML = 'APP DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#929948', backgroundImage: 'url(../../homebg_mixbox.svg)' })
                gsap.to('.home__title', { color: '#EEEC76' })
                gsap.to('.title__lines', { color: '#EEEC76' })
                gsap.to('.active', { backgroundColor: '#EEEC76', borderColor: '#EEEC76' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                setColorIdentifier('mixbox')
            },
            onLeaveBack: () => {
                document.querySelector('.home__title').innerHTML = 'CREATIVE DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#272727', backgroundImage: 'url(../../homebg_trainworld.svg)' })
                gsap.to('.home__title', { color: '#EEEC76' })
                gsap.to('.title__lines', { color: '#EEEC76' })
                gsap.to('.active', { backgroundColor: '#EEEC76', borderColor: '#EEEC76' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                setColorIdentifier('trainworld')
            },
        });

        ScrollTrigger.create({
            trigger: '.home__project--wrapper4',
            start: "left -80%",
            end: "left -130%",
            onEnter: () => {
                document.querySelector('.home__title').innerHTML = 'APP DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#F0F0F0', backgroundImage: 'url(../../homebg_rotterdans.svg)' })
                gsap.to('.home__title', { color: '#2C2D2C' })
                gsap.to('.title__lines', { color: '#2C2D2C' })
                gsap.to('.active', { backgroundColor: '#2C2D2C', borderColor: '#2C2D2C' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#272727', link.style.color = '#272727' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('rotterdans')
            },
            onLeave: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#272727', backgroundImage: 'url(../../homebg_equalmelodies.svg)' })
                gsap.to('.home__title', { color: '#D8595B' })
                gsap.to('.title__lines', { color: '#D8595B' })
                gsap.to('.active', { backgroundColor: '#D8595B', borderColor: '#D8595B' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#D8595B', link.style.color = '#D8595B' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('equalmelodies')
            },
            onEnterBack: () => {
                document.querySelector('.home__title').innerHTML = 'APP DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#F0F0F0', backgroundImage: 'url(../../homebg_rotterdans.svg)' })
                gsap.to('.home__title', { color: '#2C2D2C' })
                gsap.to('.title__lines', { color: '#2C2D2C' })
                gsap.to('.active', { backgroundColor: '#2C2D2C', borderColor: '#2C2D2C' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#272727', link.style.color = '#272727' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('rotterdans')

            },
            onLeaveBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#492078', backgroundImage: 'url(../../homebg_stingstitute.svg)' })
                gsap.to('.home__title', { color: '#FF53B7' })
                gsap.to('.title__lines', { color: '#FF53B7' })
                gsap.to('.active', { backgroundColor: '#FF53B7', borderColor: '#FF53B7' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FF53B7', link.style.color = '#FF53B7' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#272727' })
                setColorIdentifier('stingstitute')

            },
        });
        ScrollTrigger.create({
            trigger: '.home__project--wrapper6',
            start: "left -185%",
            end: "left -245%",
            onEnter: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#366830', backgroundImage: 'url(../../homebg_reactartistique.svg)' })
                gsap.to('.home__title', { color: '#FDFDFD' })
                gsap.to('.title__lines', { color: '#FDFDFD' })
                gsap.to('.active', { backgroundColor: '#274A23', borderColor: '#274A23' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FDFDFD', link.style.color = '#FDFDFD' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('reactartistique')

            },
            onLeave: () => {
                document.querySelector('.home__title').innerHTML = 'MOTION DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#FDFDFD', backgroundImage: 'url(../../homebg_dishknob.svg)' })
                gsap.to('.home__title', { color: '#4C984C' })
                gsap.to('.title__lines', { color: '#4C984C' })
                gsap.to('.active', { backgroundColor: '#4C984C', borderColor: '#4C984C' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#4C984C', link.style.color = '#4C984C' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('dishknob')


            },
            onEnterBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#366830', backgroundImage: 'url(../../homebg_reactartistique.svg)' })
                gsap.to('.home__title', { color: '#FDFDFD' })
                gsap.to('.title__lines', { color: '#FDFDFD' })
                gsap.to('.active', { backgroundColor: '#274A23', borderColor: '#274A23' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FDFDFD', link.style.color = '#FDFDFD' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('reactartistique')

            },
            onLeaveBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#272727', backgroundImage: 'url(../../homebg_equalmelodies.svg)' })
                gsap.to('.home__title', { color: '#D8595B' })
                gsap.to('.title__lines', { color: '#D8595B' })
                gsap.to('.active', { backgroundColor: '#D8595B', borderColor: '#D8595B' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#D8595B', link.style.color = '#D8595B' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                    gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('equalmelodies')

            },
        });
        ScrollTrigger.create({
            trigger: '.home__project--wrapper8',
            start: "left -305%",
            end: "left -385%",
            onEnter: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#434321', backgroundImage: 'url(../../homebg_trimcraft.svg)' })
                gsap.to('.home__title', { color: '#EEEC76' })
                gsap.to('.title__lines', { color: '#EEEC76' })
                gsap.to('.active', { backgroundColor: '#EEEC76', borderColor: '#EEEC76' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#272727' })
                setColorIdentifier('trimcraft')

            },
            onLeave: () => {
                document.querySelector('.home__title').innerHTML = 'CREATIVE DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#21432E', backgroundImage: 'url(../../homebg_smashabutton.svg)' })
                gsap.to('.home__title', { color: '#FEA500' })
                gsap.to('.title__lines', { color: '#FEA500' })
                gsap.to('.active', { backgroundColor: '#FEA500', borderColor: '#FEA500' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FEA500', link.style.color = '#FEA500' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#272727' })
                setColorIdentifier('smashabutton')


            },
            onEnterBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#434321', backgroundImage: 'url(../../homebg_trimcraft.svg)' })
                gsap.to('.home__title', { color: '#EEEC76' })
                gsap.to('.title__lines', { color: '#EEEC76' })
                gsap.to('.active', { backgroundColor: '#EEEC76', borderColor: '#EEEC76' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#EEEC76', link.style.color = '#EEEC76' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#272727' })
                setColorIdentifier('trimcraft')

            },
            onLeaveBack: () => {
                document.querySelector('.home__title').innerHTML = 'MOTION DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#FDFDFD', backgroundImage: 'url(../../homebg_dishknob.svg)' })
                gsap.to('.home__title', { color: '#4C984C' })
                gsap.to('.title__lines', { color: '#4C984C' })
                gsap.to('.active', { backgroundColor: '#4C984C', borderColor: '#4C984C' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#4C984C', link.style.color = '#4C984C' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('dishknob')

            },
        });
        ScrollTrigger.create({
            trigger: '.home__project--wrapper10',
            start: "left -470%",
            end: "left -600%",
            onEnter: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#7A9A57', backgroundImage: 'url(../../homebg_chessbase.svg)' })
                gsap.to('.home__title', { color: '#ECEDCE' })
                gsap.to('.title__lines', { color: '#ECEDCE' })
                gsap.to('.active', { backgroundColor: '#5A723F', borderColor: '#5A723F' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FDFDFD', link.style.color = '#FDFDFD' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('chessbase')

            },
            onLeave: () => {
                document.querySelector('.home__title').innerHTML = 'CREATIVE DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#2E3495', backgroundImage: 'url(../../homebg_weatherdog.svg)' })
                gsap.to('.home__title', { color: '#E69A8D' })
                gsap.to('.title__lines', { color: '#E69A8D' })
                gsap.to('.active', { backgroundColor: '#E69A8D', borderColor: '#E69A8D' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#E69A8D', link.style.color = '#E69A8D' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('weatherdog')


            },
            onEnterBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DEVELOPER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#7A9A57', backgroundImage: 'url(../../homebg_chessbase.svg)' })
                gsap.to('.home__title', { color: '#ECEDCE' })
                gsap.to('.title__lines', { color: '#ECEDCE' })
                gsap.to('.active', { backgroundColor: '#5A723F', borderColor: '#5A723F' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FDFDFD', link.style.color = '#FDFDFD' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#FDFDFD' })
                setColorIdentifier('chessbase')

            },
            onLeaveBack: () => {
                document.querySelector('.home__title').innerHTML = 'WEB DESIGNER'
                gsap.to('.homepage__wrapper', { backgroundColor: '#21432E', backgroundImage: 'url(../../homebg_smashabutton.svg)' })
                gsap.to('.home__title', { color: '#FEA500' })
                gsap.to('.title__lines', { color: '#FEA500' })
                gsap.to('.active', { backgroundColor: '#FEA500', borderColor: '#FEA500' })
                document.querySelectorAll('.nav__link').forEach(link => {
                        link.style.borderColor = '#efefef'
                        if (!link.classList.contains('active')) {
                            link.addEventListener('mouseenter', () => { link.style.borderColor = '#FEA500', link.style.color = '#FEA500' })
                            link.addEventListener('mouseleave', () => { link.style.borderColor = '#efefef', link.style.color = '#272727' })
                        }
                    }),
                gsap.to('.nav__link.active', { color: '#272727' })
                setColorIdentifier('smashabutton')

            },
        });
    }
        initScrollTriggers();

        return () => {
            // Cleanup: kill all ScrollTriggers related to this component
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [location]);
    return (
        <main>
            <div className='homepage__wrapper'>
                <NavBar colorIdentifier={colorIdentifier} />
                <p className='name'>Hans Maas</p>
                <div className='home__title--wrapper'>
                    <p className='title__lines'>|</p>
                    <h1 className='home__title'>CREATIVE DEVELOPER</h1>
                    <p className='title__lines'>|</p>
                </div>
                <div className='projects__wrapper'>
                    <div className='home__project--container home__project--container1'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--trainworld' src="../../home_trainworld.jpeg" alt="project tumbnail trainworld" />
                        </div>
                        <Link className='home__project--wrapper'>
                            <h2 className='home__project--title'>TRAINWORLD</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Design & Development</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--mixbox' src="../../home_mixbox.jpg" alt="project tumbnail mixbox" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper2'>
                            <h2 className='home__project--title'>MIXBOX</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Design</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--stingstitute' src="../../home_stingstitute.jpg" alt="project tumbnail stingstitute" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper3'>
                            <h2 className='home__project--title'>STINGSTITUTE</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Design & Development</p>
                                <p>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--rotterdans' src="../../home_rotterdans.jpg" alt="project tumbnail rotterdans" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper4'>
                            <h2 className='home__project--title'>ROTTERDANS</h2>
                            <div className='home__project--details'>
                                <p>Team</p>
                                <p>Design & Development</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--equalmelodies' src="../../home_equalmelodies.jpg" alt="project tumbnail equal melodies" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper5'>
                            <h2 className='home__project--title'>EQUAL MELODIES</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Design</p>
                                <p>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--reactartistique' src="../../home_reactartistique.jpg" alt="project tumbnail react artistique" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper6'>
                            <h2 className='home__project--title'>REACT ARTISTIQUE</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Development</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--dishknob' src="../../home_dishknob.jpg" alt="project tumbnail dishknob" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper7'>
                            <h2 className='home__project--title'>DISHKNOB</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Motion Design</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--trimcraft' src="../../home_trimcraft.jpg" alt="project tumbnail trimcraft" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper8'>
                            <h2 className='home__project--title'>TRIMCRAFT</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Development</p>
                                <p>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--smashabutton' src="../../home_smashabutton.jpg" alt="project tumbnail smash a button" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper9'>
                            <h2 className='home__project--title'>SMASH A BUTOTN</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Development</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--chessbase' src="../../home_chessbase.jpg" alt="project tumbnail chessbase" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper10'>
                            <h2 className='home__project--title'>CHESSBASE</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Development</p>
                                <p>2023</p>
                            </div>
                        </Link>
                    </div>
                    <div className='home__project--container home__project--containers'>
                        <div className='project__thumbnail--wrapper'>
                            <img className='project__thumbnail project__thumbnail--weatherdog' src="../../home_weatherdog.jpg" alt="project tumbnail weather dog" />
                        </div>
                        <Link className='home__project--wrapper home__project--wrapper11'>
                            <h2 className='home__project--title'>WEATHER DOG</h2>
                            <div className='home__project--details'>
                                <p>Solo</p>
                                <p>Development</p>
                                <p>2024</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;
