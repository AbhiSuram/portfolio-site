import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import Navbar from "../Navbar";
import AboutMe from "../AboutMe";
import Skills from "../Skills";
import Footer from "../Footer";
import ContactMe from "../ContactMe";
import { useState, useEffect } from "react";

export default function Home () {
    const [portfolioClicked, setPortfolioClicked] = useState(false);
    return(
        <div>
            <Navbar setPortfolioClicked={setPortfolioClicked}/>
            <HeroSection />
            <MyPortfolio portfolioClicked={portfolioClicked}/>
            <AboutMe />
            <Skills/>
            <ContactMe />
            <Footer />
        </div>
    )
}