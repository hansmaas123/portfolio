import { useEffect, useState } from "react";
import "../styles/style.css";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'

// Custom cursor: an accent ring that trails the pointer plus a dot on it.
// Colors come from the CSS theme variables.
const Cursor = ({ scaling }) => {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const mousemove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mousemove);
        return () => window.removeEventListener("mousemove", mousemove);
    }, []);

    return (
        <div>
            <motion.div
                animate={{
                    x: position.x - 28,
                    y: position.y - 28,
                    scale: scaling ? 1.6 : 1,
                    transition: { type: "spring", mass: 1.4 },
                }}
                className="large_circle"
            ></motion.div>
            <div
                className="small_circle"
                style={{
                    transform: `translate(${position.x - 5}px, ${position.y - 5}px) scale(${scaling ? 0 : 1})`,
                }}
            ></div>
        </div>
    );
};

Cursor.propTypes = {
    scaling: PropTypes.bool
};

export default Cursor;
