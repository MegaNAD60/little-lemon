import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <div className='container'>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
