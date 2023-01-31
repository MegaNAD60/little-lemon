import React from "react"
import { useState } from 'react';
import bgimg from '../images/restaurant_inside.jpg'
import { Link } from "react-router-dom";

function Hero(){

    const hero = {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "75%",
        color: "white",
        minHeight: "200px",
        textAlign: "center",
        padding: "0.5rem",
       }

    const heading_shadow = {
        textShadow: "1px 1px 4px #333333",
        fontFamily: 'Markazi Text',
        letterSpacing: "2px",
        fontSize: "4rem",
        marginTop: "1.5rem",
        marginBottom: "0",
    }

    const hero_p = {
        fontSize: "2rem",
        margin: "0",
        textShadow: "2px 2px 4px #333333",
    }

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const cta = {
        display: "inline-block",
        color: "rgba(255, 255, 255, 0.9)",
        width: "200px",
        fontWeight: "bold",
        fontSize: "1.5rem",
        padding: "8px",
        textAlign: "center",
        outline: "none",
        textDecoration: "none",
        margin: "1rem",
        backgroundColor: isHover ? '#495E57' : 'rgba(255, 255, 255, 0.1)',
        border : isHover ? '3px solid #495E57' : '3px solid #fff',
    }

    return (
        <>
           <section style={hero}>
                <h1 style={heading_shadow}>SPECIAL OFFER</h1>
                <p style={hero_p}>30% off This Weekend</p>

                <Link
                    to="/book"
                    data-testid="hover"
                    style={cta}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        Book Now
                </Link>
            </section>
        </>
    );
}

export default Hero;