import Navbar from '../components/common/Navbar.jsx';
import Hero from '../components/homepage/Hero.jsx';
import HomepageContent from '../components/homepage/HomepageContent.jsx';
import Cards from '../components/homepage/Cards.jsx';
import Footer from '../components/common/Footer.jsx';
import './homepage.css';
import React from 'react';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Navbar />
            <Hero />
            <HomepageContent />
            <Cards />
            <Footer />
        </div>
    )
}

export default Homepage;