import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Book(){
    return (
        <>
            <Header />
            <Nav />
            <BookingForm />
            <Footer />
        </>
    );
};

export default Book;