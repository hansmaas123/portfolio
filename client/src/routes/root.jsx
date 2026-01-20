import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Cursor from '../components/cursor';
import { TransitionProvider } from '../contexts/TransitionContext';

const Root = () => {
    const [scaling, setScaling] = useState(false);
    const location = useLocation();
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('.favicon').setAttribute('href', "/icon.svg")
    }
    return (
        <TransitionProvider>
            <Cursor scaling={scaling} />
            <Outlet key={location.pathname} context={{ setScaling }} />
        </TransitionProvider>
    );
}
export default Root;