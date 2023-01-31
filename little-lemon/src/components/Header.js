import React from "react"

function Header(){

    const logo = require('../images/logo.png');

    const img = {
        marginTop: "10px",
    }

    return (
        <>
            <center>
                <img src={logo} alt="header img" style={img} />
            </center>
        </>
    );
}

export default Header;