import { useEffect, useState } from "react";
import '../styles/style.css'
import { getProjectById } from "../services/project";
import { useLoaderData, useLocation, useOutletContext } from "react-router-dom";
import NavBar from "../components/NavBar";
import PageTransition from '../components/PageTransition';
import TransitionLink from '../components/TransitionLink';

const loader = async ({ params }) => {
    const id = params.id;
    const idInteger = parseInt(id)
    let nextId;
    { idInteger == 11 ? nextId = 1 : nextId = idInteger + 1 }
    const project = await getProjectById(idInteger);
    const nextProject = await getProjectById(nextId);
    return { project, nextProject };
};

// Theme configuration
const THEMES = {
    'TRAINWORLD': {
        identifier: 'trainworld',
        bgColor: '#272727',
        smallCircle: '#E8E661',
        largeCircle: '#FDFDFD',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_trainworld.svg")',
        descriptionBg: 'url("/detailbg2_trainworld.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-trainworld.svg")',
        nextProjectBgColor: '#929948',
        buttonBg: '#E8E661',
        buttonBorder: '#E8E661',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#272727',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_black.svg',
        linkColor: '#272727',
        iconExternal: '/link_black.svg',
        assignmentMargin: 0,
        navHoverColor: '#E8E661',
        highlightedColor: '#E8E661',
        color1: '#E8E661',
        color2: '#FDFDFD',
        nextProjectColor: '#EEEC76',
        borderColor: '#EEEC76',
    },
    'MIXBOX': {
        identifier: 'mixbox',
        bgColor: '#929948',
        smallCircle: '#EEEC76',
        largeCircle: '#FDFDFD',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_mixbox.svg")',
        descriptionBg: 'url("/detailbg2_mixbox.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-mixbox.svg")',
        nextProjectBgColor: '#492078',
        buttonBg: '#EEEC76',
        buttonBorder: '#EEEC76',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#272727',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_black.svg',
        linkColor: '#272727',
        iconExternal: '/link_black.svg',
        assignmentMargin: '5rem',
        navHoverColor: '#EEEC76',
        highlightedColor: '#EEEC76',
        color1: '#EEEC76',
        color2: '#FDFDFD',
        nextProjectColor: '#FF53B7',
        borderColor: '#FDFDFD',
    },
    'STINGSTITUTE': {
        identifier: 'stingstitute',
        bgColor: '#492078',
        smallCircle: '#FF53B7',
        largeCircle: '#FDFDFD',
        hidden1Visible: true,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_stingstitute.svg")',
        descriptionBg: 'url("/detailbg2_stingstitute.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-stingstitute.svg")',
        nextProjectBgColor: '#F0F0F0',
        buttonBg: '#FF53B7',
        buttonBorder: '#FF53B7',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#272727',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_black.svg',
        linkColor: '#272727',
        iconExternal: '/link_black.svg',
        assignmentMargin: '18rem',
        navHoverColor: '#FF53B7',
        highlightedColor: '#FF53B7',
        color1: '#FF53B7',
        color2: '#FDFDFD',
        nextProjectColor: '#272727',
        borderColor: '#FDFDFD',
    },
    'ROTTERDANS': {
        identifier: 'rotterdans',
        bgColor: '#F0F0F0',
        smallCircle: '#272727',
        largeCircle: '#272727',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#272727',
        backButtonSrc: '/backbutton_black.svg',
        titleBg: 'url("/detailbg_rotterdans.svg")',
        descriptionBg: 'url("/detailbg2_rotterdans.svg")',
        descriptionBgSize: 'contain',
        nextProjectBg: 'url("/detailbg_next-rotterdans.svg")',
        nextProjectBgColor: '#272727',
        buttonBg: '#272727',
        buttonBorder: '#272727',
        buttonHoverLinkColor: '#272727',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_black.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: 0,
        navHoverColor: '#272727',
        highlightedColor: '#272727',
        color1: '#272727',
        color2: '#272727',
        nextProjectColor: '#D8595B',
        borderColor: '#272727',
    },
    'EQUAL MELODIES': {
        identifier: 'equalmelodies',
        bgColor: '#272727',
        smallCircle: '#D8595B',
        largeCircle: '#272727',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_equalmelodies.svg")',
        descriptionBg: 'url("/detailbg2_equalmelodies.svg")',
        descriptionBgSize: 'contain',
        nextProjectBg: 'url("/detailbg_next-equalmelodies.svg")',
        nextProjectBgColor: '#366830',
        buttonBg: '#D8595B',
        buttonBorder: '#D8595B',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: 0,
        navHoverColor: '#D8595B',
        highlightedColor: '#D8595B',
        color1: '#D8595B',
        color2: '#FDFDFD',
        nextProjectColor: '#FDFDFD',
        borderColor: '#FDFDFD',
    },
    'REACT ARTISTIQUE': {
        identifier: 'reactartistique',
        bgColor: '#366830',
        smallCircle: '#FDFDFD',
        largeCircle: '#274A23',
        hidden1Visible: false,
        hidden2Visible: true,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_reactartistique.svg")',
        descriptionBg: 'url("/detailbg2_reactartistique.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-reactartistique.svg")',
        nextProjectBgColor: '#FFF8F4',
        buttonBg: '#274A23',
        buttonBorder: '#274A23',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: '25rem',
        navHoverColor: '#FDFDFD',
        highlightedColor: '#87EA7B',
        color1: '#FDFDFD',
        color2: '#FDFDFD',
        nextProjectColor: '#4C984C',
        borderColor: '#FDFDFD',
    },
    'DISHKNOB': {
        identifier: 'dishknob',
        bgColor: '#FFF8F4',
        smallCircle: '#4C984C',
        largeCircle: '#4C984C',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_black.svg',
        titleBg: 'url("/detailbg_dishknob.svg")',
        descriptionBg: 'url("/detailbg2_dishknob.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-dishknob.svg")',
        nextProjectBgColor: '#434321',
        buttonBg: '#4C984C',
        buttonBorder: '#4C984C',
        buttonHoverLinkColor: '#272727',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_black.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: '27rem',
        navHoverColor: '#4C984C',
        highlightedColor: '#3A753A',
        color1: '#4C984C',
        color2: '#3A753A',
        nextProjectColor: '#EEEC76',
        borderColor: '#3A753A',
    },
    'TRIMCRAFT': {
        identifier: 'trimcraft',
        bgColor: '#434321',
        smallCircle: '#EEEC76',
        largeCircle: '#FDFDFD',
        hidden1Visible: false,
        hidden2Visible: true,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_trimcraft.svg")',
        descriptionBg: 'url("/detailbg2_trimcraft.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-trimcraft.svg")',
        nextProjectBgColor: '#21432E',
        buttonBg: '#EEEC76',
        buttonBorder: '#EEEC76',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#272727',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_black.svg',
        linkColor: '#272727',
        iconExternal: '/link_black.svg',
        assignmentMargin: '18rem',
        navHoverColor: '#EEEC76',
        highlightedColor: '#EEEC76',
        color1: '#EEEC76',
        color2: '#FDFDFD',
        nextProjectColor: '#FEA500',
        borderColor: '#FDFDFD',
    },
    'SMASH A BUTTON': {
        identifier: 'smashabutton',
        bgColor: '#21432E',
        smallCircle: '#FEA500',
        largeCircle: '#FEA500',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_smashabutton.svg")',
        descriptionBg: 'url("/detailbg2_smashabutton.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-smashabutton.svg")',
        nextProjectBgColor: '#7A9A57',
        buttonBg: '#FEA500',
        buttonBorder: '#FEA500',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#272727',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_black.svg',
        linkColor: '#272727',
        iconExternal: '/link_black.svg',
        assignmentMargin: '25rem',
        navHoverColor: '#FEA500',
        highlightedColor: '#FEA500',
        color1: '#FEA500',
        color2: '#FDFDFD',
        nextProjectColor: '#ECEDCE',
        borderColor: '#FEA500',
    },
    'CHESSBASE': {
        identifier: 'chessbase',
        bgColor: '#7A9A57',
        smallCircle: '#ECEDCE',
        largeCircle: '#ECEDCE',
        hidden1Visible: false,
        hidden2Visible: true,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_chessbase.svg")',
        descriptionBg: 'url("/detailbg2_chessbase.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-chessbase.svg")',
        nextProjectBgColor: '#2E3495',
        buttonBg: '#5A723F',
        buttonBorder: '#5A723F',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: '25rem',
        navHoverColor: '#ECEDCE',
        highlightedColor: '#ECEDCE',
        color1: '#ECEDCE',
        color2: '#FDFDFD',
        nextProjectColor: '#E69A8D',
        borderColor: '#ECEDCE',
    },
    'WEATHERDOG': {
        identifier: 'weatherdog',
        bgColor: '#2E3495',
        smallCircle: '#E69A8D',
        largeCircle: '#E69A8D',
        hidden1Visible: false,
        hidden2Visible: false,
        hiddenColor: '#FDFDFD',
        backButtonSrc: '/backbutton_white.svg',
        titleBg: 'url("/detailbg_weatherdog.svg")',
        descriptionBg: 'url("/detailbg2_weatherdog.svg")',
        descriptionBgSize: 'cover',
        nextProjectBg: 'url("/detailbg_next-weatherdog.svg")',
        nextProjectBgColor: '#272727',
        buttonBg: '#E69A8D',
        buttonBorder: '#E69A8D',
        buttonHoverLinkColor: '#FDFDFD',
        buttonLeaveLinkColor: '#FDFDFD',
        buttonHoverIcon: '/link_white.svg',
        buttonLeaveIcon: '/link_white.svg',
        linkColor: '#FDFDFD',
        iconExternal: '/link_white.svg',
        assignmentMargin: '27rem',
        navHoverColor: '#E69A8D',
        highlightedColor: '#E69A8D',
        color1: '#E69A8D',
        color2: '#FDFDFD',
        nextProjectColor: '#E8E661',
        borderColor: '#E69A8D',
    },
};

const applyTheme = (theme, setColorIdentifier) => {
    if (!theme) return;

    // Set state
    setColorIdentifier(theme.identifier);

    // Apply background colors
    document.documentElement.style.backgroundColor = theme.bgColor;
    const detailBg = document.querySelector('.detail__background');
    if (detailBg) detailBg.style.backgroundColor = theme.bgColor;

    // Apply circle colors
    const smallCircle = document.querySelector('.small_circle');
    const largeCircle = document.querySelector('.large_circle');
    if (smallCircle) smallCircle.style.backgroundColor = theme.smallCircle;
    if (largeCircle) largeCircle.style.backgroundColor = theme.largeCircle;

    // Apply hidden element visibility and color
    const hidden1 = document.querySelector('.detail__hidden1');
    const hidden2 = document.querySelector('.detail__hidden2');
    const hidden = document.querySelector('.detail__hidden');
    if (hidden1) hidden1.style.visibility = theme.hidden1Visible ? 'visible' : 'hidden';
    if (hidden2) hidden2.style.visibility = theme.hidden2Visible ? 'visible' : 'hidden';
    if (hidden) hidden.style.color = theme.hiddenColor;

    // Apply back button
    const backButton = document.querySelector('.backbutton');
    if (backButton) backButton.src = theme.backButtonSrc;

    // Apply backgrounds
    const titleWrapper = document.querySelector('.detail__title--wrapper');
    const descWrapper = document.querySelector('.detail__description--wrapper');
    const nextWrapper = document.querySelector('.next-project__wrapper');
    if (titleWrapper) titleWrapper.style.backgroundImage = theme.titleBg;
    if (descWrapper) {
        descWrapper.style.backgroundImage = theme.descriptionBg;
        descWrapper.style.backgroundSize = theme.descriptionBgSize;
    }
    if (nextWrapper) {
        nextWrapper.style.backgroundImage = theme.nextProjectBg;
        nextWrapper.style.backgroundColor = theme.nextProjectBgColor;
    }

    // Apply button styles
    const button = document.querySelector('.detail__button--color');
    const link = document.querySelector('.detail__link');
    const icon = document.querySelector('.icon__external');
    
    if (button) {
        button.style.backgroundColor = theme.buttonBg;
        button.style.borderColor = theme.buttonBorder;
        
        // Remove old event listeners by cloning
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        newButton.addEventListener('mouseenter', () => {
            const detailLink = document.querySelector('.detail__link');
            const detailButton = document.querySelector('.detail__button--color');
            const iconExt = document.querySelector('.icon__external');
            if (detailLink) detailLink.style.color = theme.buttonHoverLinkColor;
            if (detailButton) {
                detailButton.style.backgroundColor = 'transparent';
                detailButton.style.borderColor = theme.buttonBorder;
            }
            if (iconExt) iconExt.src = theme.buttonHoverIcon;
        });
        
        newButton.addEventListener('mouseleave', () => {
            const detailLink = document.querySelector('.detail__link');
            const detailButton = document.querySelector('.detail__button--color');
            const iconExt = document.querySelector('.icon__external');
            if (iconExt) iconExt.src = theme.buttonLeaveIcon;
            if (detailLink) detailLink.style.color = theme.buttonLeaveLinkColor;
            if (detailButton) {
                detailButton.style.backgroundColor = theme.buttonBg;
                detailButton.style.borderColor = theme.buttonBorder;
            }
        });
    }

    // Set initial link and icon styling
    setTimeout(() => {
        const detailLink = document.querySelector('.detail__link');
        const iconExt = document.querySelector('.icon__external');
        if (detailLink) detailLink.style.color = theme.buttonLeaveLinkColor;
        if (iconExt) iconExt.src = theme.iconExternal;
    }, 0);

    // Apply assignment margin
    // const assignment = document.querySelector('.assignment__wrapper');
    // if (assignment) assignment.style.marginBottom = typeof theme.assignmentMargin === 'number' ? `${theme.assignmentMargin}px` : theme.assignmentMargin;

    // Apply navigation styles (without cloning to preserve React event handlers)
    document.querySelectorAll('.nav__link').forEach(navLink => {
        navLink.style.borderColor = '#efefef';
        
        // Remove old hover listeners and add new ones
        navLink.onmouseenter = () => {
            navLink.style.borderColor = theme.navHoverColor;
            navLink.style.color = theme.navHoverColor;
        };
        
        navLink.onmouseleave = () => {
            navLink.style.borderColor = '#efefef';
            navLink.style.color = '#272727';
        };
    });

    // Apply text colors
    document.querySelectorAll('.highlighted').forEach(el => el.style.color = theme.highlightedColor);
    document.querySelectorAll('.detail__color1').forEach(el => el.style.color = theme.color1);
    document.querySelectorAll('.detail__color2').forEach(el => el.style.color = theme.color2);
    document.querySelectorAll('.next-project__color').forEach(el => el.style.color = theme.nextProjectColor);
    document.querySelectorAll('.detail__item--wrapper').forEach(el => el.style.borderColor = theme.borderColor);
};

const ProjectDetail = () => {
    const { project, nextProject } = useLoaderData();
    const { pathname } = useLocation();
    const { setScaling } = useOutletContext();
    
    // Helper function to safely get image URL
    const getImageUrl = (imageData) => {
        return imageData.attributes.formats?.large?.url || imageData.attributes.url;
    };
    
    const projectImages = project.attributes.images?.data || [];
    const cover = getImageUrl(project.attributes.cover.data[0]);
    const nextCover = getImageUrl(nextProject.attributes.cover.data[0]);
    const [colorIdentifier, setColorIdentifier] = useState('trainworld')

    useEffect(() => {
        window.scrollTo(0, 0);
        // Ensure body/html can scroll
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.documentElement.style.position = '';
    }, [pathname]);

    useEffect(() => {
        const theme = THEMES[project.attributes.name] || THEMES.WEATHERDOG;
        applyTheme(theme, setColorIdentifier);
    }, [project.attributes.name])

    return (
        <PageTransition>
            <main className="detail__wrapper detail__background">
            <NavBar colorIdentifier={colorIdentifier} />
            <TransitionLink onMouseEnter={() => setScaling(true)}
                onMouseLeave={() => setScaling(false)} onClick={(() => {
                    document.querySelector('body').classList.add("scroll-up");
                    document.querySelector('body').classList.remove("scroll-down")
                })} to={'/'} className="backbutton__wrapper">
                <img src="/backbutton_white.svg" alt="back button" className="backbutton" />
            </TransitionLink>
            <section className="detail__title--wrapper">
                <h1 className="hidden">{project.attributes.name} intro</h1>
                <p className="detail__title detail__color1">{project.attributes.name}</p>
                <p className="detail__year detail__color2">{project.attributes.year}</p>
                <a onMouseEnter={() => setScaling(true)}
                    onMouseLeave={() => setScaling(false)} href={project.attributes.link} target="_blank" className="detail__link about__contact--button button__color about__button--color detail__button--color">Visit Project <img src="/link_black.svg" alt="icon" className="icon__external" /></a>
                <p className="detail__hidden detail__hidden1">(Note: this website is only made for pc)</p>
                <p className="detail__hidden detail__hidden2">(Note: I did only focus on development, not design. Website only for pc)</p>
                <div className="cover__wrapper">
                    <img src={cover} alt="cover" className="cover__image" />
                </div>
            </section>
            <section className="details__container--wrapper">
                <h2 className="hidden">details</h2>
                <div className="details__container">
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Focus</p>
                        <p className="detail__item--description">{project.attributes.focus}</p>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title ">Year</p>
                        <p className="detail__item--description">{project.attributes.year}</p>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Scope of work</p>
                        <div className="scope__wrapper">
                            <p className="detail__item--descriptionscope">{project.attributes.scope}</p>
                            {project.attributes.scope2 && (<p className="detail__item--descriptionscope">{project.attributes.scope2}</p>)}
                            {project.attributes.scope3 && (<p className="detail__item--descriptionscope">{project.attributes.scope3}</p>)}
                            {project.attributes.scope4 && (<p className="detail__item--description">{project.attributes.scope4}</p>)}
                        </div>
                    </div>
                    <div className="detail__item--wrapper detail__color2">
                        <p className="detail__item--title">Location</p>
                        <p className="detail__item--description">{project.attributes.location}</p>
                    </div>
                </div>
            </section>
            <section className="detail__description--wrapper">
                <h2 className="hidden">description</h2>
                <div className="assignment__wrapper">
                    <h3 className="detail__color1 description__title assignment__title">THE ASSIGNMENT</h3>
                    {project.attributes.assignment.map((block, index) => (
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
                    {project.attributes.approach.map((block, index) => (
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
                {project.attributes.name === 'TRAINWORLD' ? (
                    <div className="images__project--wrapper images__trainworld--wrapper">
                        {projectImages.map((projectImage, index) => (
                            <img key={index} className={`image__detail image__trainworld--${index}`} src={getImageUrl(projectImage)} alt="image" />
                        ))}
                    </div>
                )
                    : project.attributes.name === 'MIXBOX' ? (
                        <div className="mixbox__img--wrapper">
                            <div key={`${project.attributes.name}-1`} className="images__project--wrapper images__mixbox--wrapper1">
                                {projectImages.map((projectImage, index) => (
                                    (index < 4 && <img key={index} className={`image__detail image__mixbox--${index}`} src={getImageUrl(projectImage)} alt="image" />)
                                ))}
                            </div>
                            <div key={`${project.attributes.name}-2`} className="images__project--wrapper images__mixbox--wrapper2">
                                {projectImages.map((projectImage, index) => (
                                    (index >= 4 && <img key={index} className={`image__detail image__mixbox--${index}`} src={getImageUrl(projectImage)} alt="image" />)
                                ))}
                            </div>
                        </div>
                    )
                        : project.attributes.name === 'STINGSTITUTE' ? (
                            <div key={project.attributes.name} className="images__project--wrapper images__stingstitute--wrapper">
                                {projectImages.map((projectImage, index) => (
                                    <img key={index} className={`image__detail image__stingstitute--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                ))}
                            </div>
                        )
                            : project.attributes.name === 'ROTTERDANS' ? (
                                <div key={project.attributes.name} className="images__project--wrapper images__rotterdans--wrapper">
                                    {projectImages.map((projectImage, index) => (
                                        <img key={index} className={`image__detail image__rotterdans--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                    ))}
                                </div>
                            )
                                : project.attributes.name === 'EQUAL MELODIES' ? (
                                    <div key={project.attributes.name} className="images__project--wrapper images__equalmelodies--wrapper">
                                        {projectImages.map((projectImage, index) => (
                                            <img key={index} className={`image__detail image__equalmelodies--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                        ))}
                                    </div>
                                )
                                    : project.attributes.name === 'REACT ARTISTIQUE' ? (
                                        <div key={project.attributes.name} className="images__project--wrapper images__reactartistique--wrapper">
                                            {projectImages.map((projectImage, index) => (
                                                <video controls width={'90%'} key={index} className={`image__detail image__reactartistique--${index}`}>
                                                    <source src={getImageUrl(projectImage)} type="video/mp4" />
                                                </video>
                                            ))}
                                        </div>
                                    )
                                        : project.attributes.name === 'DISHKNOB' ? (
                                            <div key={project.attributes.name} className="images__project--wrapper images__dishknob--wrapper">
                                                {projectImages.map((projectImage, index) => (
                                                    <video controls width={'90%'} key={index} className={`image__detail image__dishknob--${index}`}>
                                                        <source src={getImageUrl(projectImage)} type="video/mp4" />
                                                    </video>
                                                ))}
                                            </div>
                                        )
                                            : project.attributes.name === 'TRIMCRAFT' ? (
                                                <div key={project.attributes.name} className="images__project--wrapper images__trimcraft--wrapper">
                                                    {projectImages.map((projectImage, index) => (
                                                        <img key={index} className={`image__detail image__trimcraft--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                                    ))}
                                                </div>
                                            )
                                                : project.attributes.name === 'SMASH A BUTTON' ? (
                                                    <div key={project.attributes.name} className="images__project--wrapper images__smashabutton--wrapper">
                                                        {projectImages.map((projectImage, index) => (
                                                            <img key={index} className={`image__detail image__smashabutton--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                                        ))}
                                                    </div>
                                                )
                                                    : project.attributes.name === 'CHESSBASE' ? (
                                                        <div key={project.attributes.name} className="images__project--wrapper images__chessbase--wrapper">
                                                            {projectImages.map((projectImage, index) => (
                                                                <img key={index} className={`image__detail image__chessbase--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                                            ))}
                                                        </div>
                                                    )
                                                        : (
                                                            <div key={project.attributes.name} className="images__project--wrapper images__weatherdog--wrapper">
                                                                {projectImages.map((projectImage, index) => (
                                                                    <img key={index} className={`image__detail image__weatherdog--${index}`} src={getImageUrl(projectImage)} alt="image" />
                                                                ))}
                                                            </div>
                                                        )
                }
            </section>
            <section className="next-project__wrapper">
                <h2 className="hidden">Next Project</h2>
                <div className="next-project__text--wrapper">
                    <p className="next-project next-project__color">NEXT PROJECT</p>
                    <p className="next-project__name next-project__color">{nextProject.attributes.name}</p>
                </div>
                <div className="next-project__cover--wrapper">
                    <TransitionLink onMouseEnter={() => setScaling(true)}
                        onMouseLeave={() => setScaling(false)} 
                        onClick={() => {
                            setScaling(false);
                            // Dispatch theme change for next project
                            const nextTheme = THEMES[nextProject.attributes.name];
                            if (nextTheme) {
                                window.dispatchEvent(new CustomEvent('themeChange', { detail: { colorIdentifier: nextTheme.identifier } }));
                            }
                        }}
                        className="next-project__cover--wrapper2" 
                        to={`/project/${nextProject.id}`}>
                        <img src={nextCover} alt="next project cover" className="next-project__cover" />
                    </TransitionLink>
                </div>
            </section>
        </main>
        </PageTransition>
    )
}
ProjectDetail.loader = loader;
export default ProjectDetail