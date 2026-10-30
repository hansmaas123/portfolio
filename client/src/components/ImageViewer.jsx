import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

// A horizontal swipe has to travel this far before it changes the image,
// so a slightly sideways vertical drag doesn't flip photos by accident.
const SWIPE_THRESHOLD = 50;

// Fullscreen gallery viewer: arrows (buttons, keyboard, swipe) step through the
// images and wrap around; the cross, Escape or a click on the backdrop closes it.
// Rendered into <body> so the page transition's transforms can't trap the
// fixed overlay inside the page.
const ImageViewer = ({ images, index, onIndexChange, onClose, setScaling }) => {
    const [closing, setClosing] = useState(false);
    const touchStart = useRef(null);
    const closeButton = useRef(null);
    const count = images.length;

    const close = useCallback(() => {
        setScaling(false);
        setClosing(true);
    }, [setScaling]);

    const step = useCallback((direction) => {
        // functional, so rapid presses each count even before a re-render
        onIndexChange((current) => (current + direction + count) % count);
    }, [count, onIndexChange]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') step(1);
            if (e.key === 'ArrowLeft') step(-1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [close, step]);

    // Lock the page behind the viewer and hand focus back when it closes.
    useEffect(() => {
        const previousFocus = document.activeElement;
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        closeButton.current?.focus();
        return () => {
            document.body.style.overflow = overflow;
            previousFocus?.focus?.();
        };
    }, []);

    // Neighbours are fetched ahead so stepping doesn't wait on the network.
    useEffect(() => {
        [1, -1].forEach((offset) => {
            new Image().src = images[(index + offset + count) % count].src;
        });
    }, [index, images, count]);

    const onTouchStart = (e) => {
        const touch = e.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const onTouchEnd = (e) => {
        if (!touchStart.current) return;
        const touch = e.changedTouches[0];
        const dx = touch.clientX - touchStart.current.x;
        const dy = touch.clientY - touchStart.current.y;
        touchStart.current = null;
        if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) step(dx < 0 ? 1 : -1);
    };

    const hover = {
        onMouseEnter: () => setScaling(true),
        onMouseLeave: () => setScaling(false)
    };

    return createPortal(
        <div
            className={`viewer${closing ? ' viewer--closing' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            onAnimationEnd={(e) => { if (closing && e.target === e.currentTarget) onClose(); }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <p className="viewer__counter" aria-live="polite">
                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </p>

            <button ref={closeButton} type="button" className="viewer__btn viewer__close" onClick={close} aria-label="Close" {...hover}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
            </button>

            <figure className="viewer__stage" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
                {/* keyed so every image fades in on its own */}
                <img key={images[index].src} className="viewer__image" src={images[index].src} alt={images[index].alt} />
            </figure>

            {count > 1 && (
                <>
                    <button type="button" className="viewer__btn viewer__arrow viewer__arrow--prev" onClick={() => step(-1)} aria-label="Previous image" {...hover}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button type="button" className="viewer__btn viewer__arrow viewer__arrow--next" onClick={() => step(1)} aria-label="Next image" {...hover}>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </>
            )}
        </div>,
        document.body
    );
};

ImageViewer.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    })).isRequired,
    index: PropTypes.number.isRequired,
    onIndexChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    setScaling: PropTypes.func.isRequired
};

export default ImageViewer;
