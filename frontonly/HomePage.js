import './App.css';
import NavBar from './components/homepage/NavBar.jsx'
import Footer from './components/homepage/Footer.js'
import SQDLCarousel from './components/homepage/Carousel.js'


//Landing page for the website
function HomePage() {
  return (
      <>
        <NavBar loginHandler ='' registerHandler ='' aboutHandler =''/>
        <SQDLCarousel/>
        <Footer/>
      </>

    );
}


export default HomePage;
