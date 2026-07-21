// Central theme system.
// One palette per project, applied as CSS custom properties on <html>,
// so every page and component restyles itself from the same variables.

export const THEMES = {
    trainworld: {
        role: 'CREATIVE DEVELOPER',
        bg: '#232323', text: '#FDFDFD', accent: '#E8E661', onAccent: '#232323',
        isLight: false
    },
    internship: {
        role: 'UI DEVELOPER',
        bg: '#163B44', text: '#F2FAFA', accent: '#9FD9DC', onAccent: '#123137',
        isLight: false
    },
    mixbox: {
        role: 'APP DESIGNER',
        bg: '#7E8438', text: '#FDFDF3', accent: '#F2F075', onAccent: '#3B3D14',
        isLight: false
    },
    stingstitute: {
        role: 'WEB DEVELOPER',
        bg: '#421D6C', text: '#F9F3FF', accent: '#FF53B7', onAccent: '#31114F',
        isLight: false
    },
    rotterdans: {
        role: 'APP DEVELOPER',
        bg: '#EFEFEC', text: '#1E1E1E', accent: '#1E1E1E', onAccent: '#EFEFEC',
        isLight: true
    },
    equalmelodies: {
        role: 'WEB DESIGNER',
        bg: '#262626', text: '#FDFDFD', accent: '#E0666A', onAccent: '#2B0F10',
        isLight: false
    },
    reactartistique: {
        role: 'WEB DEVELOPER',
        bg: '#2E5829', text: '#F3FAF1', accent: '#8FE682', onAccent: '#16300F',
        isLight: false
    },
    dishknob: {
        role: 'MOTION DESIGNER',
        bg: '#FFF8F4', text: '#2C2D2C', accent: '#3E8A3E', onAccent: '#FFF8F4',
        isLight: true
    },
    trimcraft: {
        role: 'WEB DEVELOPER',
        bg: '#3E3E1F', text: '#FBFBEF', accent: '#EEEC76', onAccent: '#33331A',
        isLight: false
    },
    smashabutton: {
        role: 'CREATIVE DEVELOPER',
        bg: '#1F4230', text: '#F4FAF6', accent: '#FEA500', onAccent: '#22331F',
        isLight: false
    },
    chessbase: {
        role: 'WEB DEVELOPER',
        bg: '#5E7A40', text: '#FBFCF2', accent: '#ECEDCE', onAccent: '#3C4A2A',
        isLight: false
    },
    weatherdog: {
        role: 'CREATIVE DEVELOPER',
        bg: '#2B318C', text: '#F4F5FF', accent: '#F0A08F', onAccent: '#33150F',
        isLight: false
    },
    squarebracket: {
        role: 'WEB DEVELOPER',
        bg: '#1E1E1E', text: '#EDEDED', accent: '#E9531F', onAccent: '#1E1E1E',
        isLight: false
    }
}

// Homepage order. `id` matches the Strapi project ids.
export const PROJECTS = [
    { id: 1, name: 'TRAINWORLD', type: 'Design & Development', team: 'Solo', year: '2024', theme: 'trainworld', thumb: 'home_trainworld.jpeg' },
    { id: 13, name: 'SQUAREBRACKET', type: 'Design & Development', team: 'Solo', year: '2026', theme: 'squarebracket', thumb: 'home_squarebracket.jpg' },
    { id: 12, name: 'DEV INTERNSHIP', type: 'Development', team: 'Team', year: '2025', theme: 'internship', thumb: 'home_internship.jpg' },
    { id: 2, name: 'MIXBOX', type: 'Design', team: 'Solo', year: '2024', theme: 'mixbox', thumb: 'home_mixbox.jpg' },
    { id: 3, name: 'STINGSTITUTE', type: 'Design & Development', team: 'Solo', year: '2023', theme: 'stingstitute', thumb: 'home_stingstitute.jpg' },
    { id: 4, name: 'ROTTERDANS', type: 'Design & Development', team: 'Team', year: '2024', theme: 'rotterdans', thumb: 'home_rotterdans.jpg' },
    { id: 5, name: 'EQUAL MELODIES', type: 'Design', team: 'Solo', year: '2023', theme: 'equalmelodies', thumb: 'home_equalmelodies.jpg' },
    { id: 6, name: 'REACT ARTISTIQUE', type: 'Development', team: 'Solo', year: '2024', theme: 'reactartistique', thumb: 'home_reactartistique.jpg' },
    { id: 7, name: 'DISHKNOB', type: 'Motion Design', team: 'Solo', year: '2024', theme: 'dishknob', thumb: 'home_dishknob.jpg' },
    { id: 8, name: 'TRIMCRAFT', type: 'Development', team: 'Solo', year: '2023', theme: 'trimcraft', thumb: 'home_trimcraft.jpg' },
    { id: 9, name: 'SMASH A BUTTON', type: 'Development', team: 'Solo', year: '2024', theme: 'smashabutton', thumb: 'home_smashabutton.jpg' },
    { id: 10, name: 'CHESSBASE', type: 'Development', team: 'Solo', year: '2023', theme: 'chessbase', thumb: 'home_chessbase.jpg' },
    { id: 11, name: 'WEATHER DOG', type: 'Development', team: 'Solo', year: '2024', theme: 'weatherdog', thumb: 'home_weatherdog.jpg' }
]

export const getProjectMetaById = (id) => PROJECTS.find(p => p.id === Number(id)) || PROJECTS[0]

// The "next project" follows homepage order in PROJECTS and wraps around,
// so adding/reordering projects here keeps the detail-page chain correct.
export const getNextProjectId = (id) => {
    const index = PROJECTS.findIndex(p => p.id === Number(id))
    if (index === -1) return PROJECTS[0].id
    return PROJECTS[(index + 1) % PROJECTS.length].id
}

// Writes the palette to CSS variables and notifies listeners (nav, transition overlay).
export const applyTheme = (identifier) => {
    const theme = THEMES[identifier] || THEMES.trainworld
    const style = document.documentElement.style
    style.setProperty('--bg', theme.bg)
    style.setProperty('--text', theme.text)
    style.setProperty('--accent', theme.accent)
    style.setProperty('--on-accent', theme.onAccent)
    document.documentElement.dataset.theme = identifier
    style.colorScheme = theme.isLight ? 'light' : 'dark'
    window.dispatchEvent(new CustomEvent('themeChange', { detail: { colorIdentifier: identifier } }))
    return theme
}
