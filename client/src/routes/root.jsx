import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cursor from '../components/cursor';
import { TransitionProvider } from '../contexts/TransitionContext';

const Root = () => {
    const [scaling, setScaling] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();
    
    useEffect(() => {
        // Detect mobile/tablet devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024 || 'ontouchstart' in window);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('.favicon').setAttribute('href', "/icon.svg")
    }
    return (
        <TransitionProvider>
            {!isMobile && <Cursor scaling={scaling} />}
            <Outlet key={location.pathname} context={{ setScaling }} />
        </TransitionProvider>
    );
}
export default Root;