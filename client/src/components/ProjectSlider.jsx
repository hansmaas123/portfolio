import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectSlider({ projects }) {
    const projectsRefs = useRef([]);

    useEffect(() => {
        // Set initial positions
        gsap.set(projectsRefs.current, (index) => ({
            x: index === 0 ? '0%' : '100%',
        }));

        projectsRefs.current.forEach((projectRef, index) => {
            const nextIndex = (index + 1) % projects.length;

            ScrollTrigger.create({
                trigger: projectRef,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onEnter: () => {
                    gsap.to(projectRef, {
                        x: '-100%',
                        duration: 1,
                        ease: 'power1.inOut',
                    });
                    gsap.to(projectsRefs.current[nextIndex], {
                        x: '0%',
                        duration: 1,
                        ease: 'power1.inOut',
                    });
                },
                onLeaveBack: () => {
                    gsap.to(projectsRefs.current[nextIndex], {
                        x: '100%',
                        duration: 1,
                        ease: 'power1.inOut',
                    });
                    gsap.to(projectRef, {
                        x: '0%',
                        duration: 1,
                        ease: 'power1.inOut',
                    });
                },
            });
        });
    }, [projects]);

    return (
        <div className="slider-container" style={{ height: '400vh' }}>
            {projects.map((project, index) => (
                <div
                    className="project"
                    key={index}
                    ref={(el) => (projectsRefs.current[index] = el)}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem',
                        backgroundColor: 'lightgray',
                        border: '2px solid #000',
                    }}
                >
                    {project}
                </div>
            ))}
        </div>
    );
}

export default ProjectSlider;
