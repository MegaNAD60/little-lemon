import React from "react"
import { Link } from "react-router-dom";



function Nav(){
    const nav = {
        listStyle: "none",
        textAlign: "center",
        color: "white",
        backgroundColor: "#495E57",
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
        textDecoration: "none",
    }

    const navLinks= {
        display: "inline-block",
        margin: "0.5rem",
        fontSize: "1.5rem",
        color: "white",
        textDecoration: "none",
    }

    return (
        <>
                <nav className="nav" style={nav}>
                    <Link to="/" style={navLinks}>Home</Link>
                    <Link to="/about" style={navLinks}>About</Link>
                    <Link style={navLinks}>Menu</Link>
                    <Link to="/book" style={navLinks}>Book</Link>
                </nav>

        </>
    );
}

export default Nav;