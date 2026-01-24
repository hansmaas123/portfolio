import { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const QUOTES = [
    "Design is not just what it looks like. Design is how it works.",
    "Good design is obvious. Great design is transparent.",
    "Simplicity is the ultimate sophistication.",
    "Code is like humor. When you have to explain it, it's bad.",
    "First, solve the problem. Then, write the code.",
    "The best error message is the one that never shows up.",
    "Design is thinking made visual.",
    "Make it work, make it right, make it fast.",
    "Every great design begins with an even better story.",
    "The details are not the details. They make the design.",
    "Perfection is achieved when there is nothing left to take away.",
    "Design is intelligence made visible.",
    "Form follows function.",
    "Less is more.",
    "Innovation distinguishes between a leader and a follower."
]

const TransitionContext = createContext()

// Theme colors mapping based on project identifiers
const THEME_COLORS = {
    trainworld: { bg: '#272727', text: '#E8E661' },
    mixbox: { bg: '#929948', text: '#EEEC76' },
    stingstitute: { bg: '#492078', text: '#FF53B7' },
    rotterdans: { bg: '#F0F0F0', text: '#272727' },
    equalmelodies: { bg: '#272727', text: '#D8595B' },
    reactartistique: { bg: '#366830', text: '#FDFDFD' },
    dishknob: { bg: '#FFF8F4', text: '#4C984C' },
    trimcraft: { bg: '#434321', text: '#EEEC76' },
    smashabutton: { bg: '#21432E', text: '#FEA500' },
    chessbase: { bg: '#7A9A57', text: '#ECEDCE' },
    weatherdog: { bg: '#2E3495', text: '#E69A8D' },
    default: { bg: '#272727', text: '#EEEC76' }
}

export const useTransition = () => {
    const context = useContext(TransitionContext)
    if (!context) {
        // Return no-op functions if context is not available
        return {
            startTransition: () => Promise.resolve(),
            endTransition: () => {}
        }
    }
    return context
}

export const TransitionProvider = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [quote, setQuote] = useState('')
    const location = useLocation()
    
    // Extract colorIdentifier from the current URL path
    const getColorIdentifierFromPath = () => {
        const pathname = location.pathname
        
        // For /about/:colorIdentifier or /contact/:colorIdentifier
        const aboutMatch = pathname.match(/^\/about\/(.+)$/)
        const contactMatch = pathname.match(/^\/contact\/(.+)$/)
        
        if (aboutMatch) return aboutMatch[1]
        if (contactMatch) return contactMatch[1]
        
        // For /project/:id - extract project id and map to color
        const projectMatch = pathname.match(/^\/project\/(\d+)$/)
        if (projectMatch) {
            const projectId = parseInt(projectMatch[1])
            // Map project IDs to their themes
            const projectThemes = {
                1: 'trainworld', 2: 'mixbox', 3: 'stingstitute', 4: 'rotterdans',
                5: 'equalmelodies', 6: 'reactartistique', 7: 'dishknob', 8: 'trimcraft',
                9: 'smashabutton', 10: 'chessbase', 11: 'weatherdog'
            }
            return projectThemes[projectId] || 'trainworld'
        }
        
        // Default to trainworld for home and other pages
        return 'trainworld'
    }
    
    const [currentColorIdentifier, setCurrentColorIdentifier] = useState(getColorIdentifierFromPath())
    
    useEffect(() => {
        const newIdentifier = getColorIdentifierFromPath()
        // Don't change to homepage theme immediately - let homepage handle its own theme
        if (location.pathname === '/') {
            return
        }
        setCurrentColorIdentifier(newIdentifier)
    }, [location.pathname])
    
    // Listen for custom events from pages that change themes (like homepage scroll)
    useEffect(() => {
        const handleThemeChange = (event) => {
            if (event.detail && event.detail.colorIdentifier) {
                setCurrentColorIdentifier(event.detail.colorIdentifier)
            }
        }
        
        window.addEventListener('themeChange', handleThemeChange)
        return () => window.removeEventListener('themeChange', handleThemeChange)
    }, [])
    
    const themeColors = THEME_COLORS[currentColorIdentifier] || THEME_COLORS.default

    const startTransition = () => {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)])
        setIsTransitioning(true)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, 600)
        })
    }

    const endTransition = () => {
        setTimeout(() => {
            setIsTransitioning(false)
        }, 800)
    }

    return (
        <TransitionContext.Provider value={{ startTransition, endTransition }}>
            {children}
            <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: themeColors.bg,
                            zIndex: 10003,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            style={{
                                color: themeColors.text,
                                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                                fontWeight: 600,
                                textAlign: 'center',
                                maxWidth: '800px',
                                lineHeight: 1.4,
                                fontFamily: 'neulis-neue, serif'
                            }}
                        >
                            {quote}
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </TransitionContext.Provider>
    )
}

TransitionProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default TransitionContext
