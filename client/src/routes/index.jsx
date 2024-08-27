import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/style.css'
import NavBar from '../components/NavBar';
gsap.registerPlugin(ScrollTrigger);

const Index = () => {

    useEffect(() => {
            gsap.to(".projects__wrapper", {
                x: '-400vw',
                scrollTrigger: {
                    trigger: '.w',
                    pin: '.projects__wrapper, .homepage__wrapper',
                    scrub: 1,
                    start: "top 0%",
                    end: "bottom 0"
                },
            });
    }, []);

    return (
        <div className='homepage__wrapper'>
            <NavBar />
            <p className='name'>Hans Maas</p>
            <div className='home__title--wrapper'>
                <h1 className='home__title'>CREATIVE DEVELOPER</h1>
            </div>
            <div className='projects__wrapper'>
            <div className='home__project--container home__project--container1'>
                <div className='project__thumbnail--wrapper'>
                    <img className='project__thumbnail project__thumbnail--trainworld' src="../../home_trainworld.jpeg" alt="project tumbnail trainworld" />
                </div>
                <div className='home__project--wrapper'>
                    <h2 className='home__project--title'>TRAINWORLD</h2>
                    <div className='home__project--details'>
                        <p>Solo</p>
                        <p>Design & Development</p>
                        <p>2024</p>
                    </div>
                </div>
            </div>
            <div className='home__project--container home__project--containers'>
                <div className='project__thumbnail--wrapper'>
                    <img className='project__thumbnail project__thumbnail--mixbox' src="../../home_mixbox.jpg" alt="project tumbnail mixbox" />
                </div>
                <div className='home__project--wrapper home__project--wrapper2'>
                    <h2 className='home__project--title'>MIXBOX</h2>
                    <div className='home__project--details'>
                        <p>Solo</p>
                        <p>Design</p>
                        <p>2024</p>
                    </div>
                </div>
            </div>
            <div className='home__project--container home__project--containers'>
                <div className='project__thumbnail--wrapper'>
                    <img className='project__thumbnail project__thumbnail--stingstitute' src="../../home_stingstitute.jpg" alt="project tumbnail stingstitute" />
                </div>
                    <div className='home__project--wrapper home__project--wrapper3'>
                    <h2 className='home__project--title'>STINGSTITUTE</h2>
                    <div className='home__project--details'>
                        <p>Solo</p>
                        <p>Design & Development</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
            <div className='home__project--container home__project--containers'>
                <div className='project__thumbnail--wrapper'>
                    <img className='project__thumbnail project__thumbnail--rotterdans' src="../../home_rotterdans.jpg" alt="project tumbnail rotterdans" />
                </div>
                    <div className='home__project--wrapper home__project--wrapper4'>
                    <h2 className='home__project--title'>ROTTERDANS</h2>
                    <div className='home__project--details'>
                        <p>Team</p>
                        <p>Design & Development</p>
                        <p>2024</p>
                    </div>
                </div>
            </div>
            <div className='home__project--container home__project--containers'>
                <div className='project__thumbnail--wrapper'>
                    <img className='project__thumbnail project__thumbnail--equalmelodies' src="../../home_equalmelodies.jpg" alt="project tumbnail equal melodies" />
                </div>
                    <div className='home__project--wrapper home__project--wrapper5'>
                    <h2 className='home__project--title'>EQUAL MELODIES</h2>
                    <div className='home__project--details'>
                        <p>Solo</p>
                        <p>Design</p>
                        <p>2023</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Index;
