function AboutMain(){

    const row = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 50%)",
        fontSize: "1.4rem",
    }

    const paragraph = {

    }

    const img = require('../images/mario-and-adrian.jpg');

    const imgStyle = {
        width: "100%",
        height: "450px",
    }

    return (
        <>
            <div className='container'>
                <h1>About Us</h1>
                <div className='row' style={row}>
                <div className='column'>
                    <p style={paragraph}>
                    Based in Chicago, Illinois, Little Lemon is a family owned
                    Mediterranean restaurant, focused on traditional recipes served with a
                    modern twist.
                    </p>
                    <p>
                    The chefs draw inspiration from Italian, Greek, and Turkish culture
                    and have a menu of 12-15 items that they rotate seasonally.
                    </p>

                    <p>
                    The restaurant has a rustic and relaxed atmosphere with moderate
                    prices, making it a popular place for a meal any time of the day.
                    </p>

                    <p>
                    Little Lemon is owned by two Italian brothers, Mario and Adrian, who
                    moved to the United States to pursue their shared dream of owning a
                    restaurant.
                    </p>

                    <p>
                    To craft the menu, Mario relies on family recipes and his experience
                    as a chef in Italy.
                    </p>

                    <p>
                    Adrian does all the marketing for the restaurant and led the effort to
                    expand the menu beyond classic Italian to incorporate additional
                    cuisines from the mediterranean region.
                    </p>
                </div>

                <div className='column'>
                    <figure className='figure'>
                    <img
                        src={img}
                        alt="Mario and Adrian"
                        style={imgStyle}
                    />
                    <figcaption className='figure-caption'>
                        Little Lemon owners Mario and Adrian.
                    </figcaption>
                    </figure>
                </div>
                </div>

            </div>
        </>
    );
};

export default AboutMain;