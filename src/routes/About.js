import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from "../components/AboutContent";

const About = () => {
    return(
    <div>
        <Navbar/>
        <HeroImg2 heading="ABOUT" text="just your freindly neighborhood cleaner boy"/>
        <AboutContent/>
        <Footer/>
    </div>
    );
};

export default About;