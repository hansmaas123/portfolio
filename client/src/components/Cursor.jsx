import { useEffect, useState } from "react";
import "../styles/style.css";
import { motion } from "framer-motion";
import PropTypes from 'prop-types'

const Cursor = ({ scaling }) => {
    const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
    const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mousemove = (e) => {
            setlargecircle({ x: e.clientX, y: e.clientY });
            setsmallcircle({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);

    return (
        <div>
            <motion.div
                animate={{
                    x: largecircle.x - 32,
                    y: largecircle.y - 32,
                    transition: { type: "spring", mass: 2 },
                }}
                className="large_circle"
                style={{ scale: scaling ? 0.1 : 1 }}></motion.div>
            <motion.div
                style={{
                    left: `${smallcircle.x - 8}px`,
                    top: `${smallcircle.y - 8}px`,
                    position: "fixed",  // Ensure it positions correctly
                    pointerEvents: 'none',  // Avoid interfering with the cursor
                }}
                className="small_circle"></motion.div>
        </div>
    );
};
Cursor.propTypes = {
    scaling: PropTypes.bool
};
export default Cursor;