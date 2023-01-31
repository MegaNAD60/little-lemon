import { useState } from "react";

function BookingForm() {

    const row = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 50%)",
        fontSize: "1.4rem",
    }

    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log("Form submited!")
    }

    const formStyle = {
        display: "grid",
        maxWidth: "200px", 
        gap: "20px"
    }


    const inputStyle = {
        height: "30px",
        width: "500px",
    }

    const img = require('../images/restaurant inside alternative.jpg');

    const imgStyle = {
        width: "100%",
        height: "450px",
    }

    return (
        <>
            <h1>Make a reservation </h1>
            <div className="row" style={row}>
                <div className="column">
                    <div className="formSection">
                        <form style={formStyle} onSubmit={handleSubmit}>
                            <label htmlFor="resDate">Choose date</label>
                            <input style={inputStyle} type="date" id="resDate" required value={name} onChange={e => setName(e.target.value)} />
                            <label htmlFor="resTime">Choose time</label>
                            <select id="resTime" style={inputStyle} required value={name} onChange={e => setName(e.target.value)} >
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                            <label htmlFor="guests">Number of guests</label>
                            <input type="number" style={inputStyle} placeholder="1" min="1" max="10" id="guests" required value={name} onChange={e => setName(e.target.value)} />
                            <label htmlFor="occation">Occation</label>
                            <select id="occation" style={inputStyle} required value={name} onChange={e => setName(e.target.value)} >
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                            <input disabled={!name} style={inputStyle} type="submit" value="Make Your reservation" aria-label="On Click" />
                        </form>
                    </div>
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
        </>
    );
};

export default BookingForm;