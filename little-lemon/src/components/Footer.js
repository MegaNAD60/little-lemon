import React from "react"

function Footer(){
            const logo = require('../images/logo_footer.png');

            const img = {
                marginTop: "10px",
            }

            const footer = {
                display: "grid",
                gridTemplateColumns: "repeat(2, 50%)",
            }

            const copyright = {
                borderTop: "1px solid",
                textAlign: "right",
            }

            return (
                <>
                    <div style={footer}>
                        <img src={logo} alt="header img" style={img} />
                        <p style={copyright}>Copyright Little Lemon</p>
                    </div>
                </>
            );
        }


export default Footer;