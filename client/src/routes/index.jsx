import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/style.css'
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
    useEffect(() => {
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
            trigger: '.home__project--wrapper2', // Target the specific div
            start: "top 0%", // When the left edge of the div hits 30% of the viewport width
            end: "top -37%", // When the left edge of the div hits 70% of the viewport width
            markers: true,
            onEnter: () => gsap.to('.homepage__wrapper', { backgroundColor: '#FFFFFF' }), // Change to your desired color
            onLeave: () => gsap.to('.homepage__wrapper', { backgroundColor: '#272727' }), // Revert to the original color
            onEnterBack: () => gsap.to('.homepage__wrapper', { backgroundColor: '#FFFFFF' }), // Change color when scrolling back
            onLeaveBack: () => gsap.to('.homepage__wrapper', { backgroundColor: '#272727' }), // Revert when leaving back
        });
    }, []);

    return (
        <div>
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
        </div>
    );
};

export default Index;
