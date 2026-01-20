import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

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
                            backgroundColor: '#272727',
                            zIndex: 10000,
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
                                color: '#EEEC76',
                                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                                fontWeight: 600,
                                textAlign: 'center',
                                maxWidth: '800px',
                                lineHeight: 1.4,
                                fontFamily: 'new-spirit, serif'
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
