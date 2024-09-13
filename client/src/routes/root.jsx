import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Cursor from '../components/cursor';

const Root = () => {
    const [scaling, setScaling] = useState(false);
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector('.favicon').setAttribute('href', "/icon.svg")
    }
    return (
        <>
            <Cursor scaling={scaling} />
            <Outlet context={{ setScaling }} />
        </>
    );
}
export default Root;