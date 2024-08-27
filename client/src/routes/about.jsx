import NavBar from "../components/NavBar"
import '../styles/style.css'

const About = () => {
    console.log()
    return (
        <div className="aboutpage__wrapper">
            <NavBar />
            <section className="about__title--wrapper">
                <h1 className="hidden">CREATING TOMMORROW&apos;S EXPERIENCES TODAY</h1>
                <div>
                    <p className="about__title about__title1">CREATING TOMORROW&apos;S</p>
                    <p className="about__title about__title2">EXPERIENCES</p>
                    <p className="about__title about__title3">TODAY.</p>
                    <img src="../../about_arrow.svg" alt="arrow" className="about__arrow" />
                </div>
            </section>
            <section className="about__intro--wrapper">
            <p className="about__intro">Hi, my name is <span className="highlight">Hans</span>. I am a Belgian student, currently studying <span className="bold">Digital Design and Development</span> (Devine) in Kortrijk.</p>
                <p className="about__description about__description1"> I love to to get <span className="bold">out of my comfort zone</span>, creating things I never thought I could. I have gained a <span className="bold">lot of skills</span>, but I would like to expand my knowledge and dive deeper in mostly <span className="bold">Development</span> and a bit of <span className="bold">Design</span>.</p>
                <p className="about__description about__description2">When i’m off work, I love to grab a drink at the <span className="bold">bar</span> with my friends, play the <span className="bold">piano</span> and go indoor <span className="bold">bouldering</span> (climbing).</p>
            </section>
            <section className="about__skillset--wrapper">
                <h2 className="about__skillset--title">Skillset</h2>
                <div>
                    <div>
                        <p></p>
                        <img src="" alt="arrow down" />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About