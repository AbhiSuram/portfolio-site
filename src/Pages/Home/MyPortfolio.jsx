import { useState, useEffect } from "react";
import LetterByLetterText from "./LetterByLetterText";

function MyPortfolio({ portfolioClicked }){

    const [header,setHeader] = useState("My Projects");

    useEffect(() => {
        if (portfolioClicked) {
            setHeader(<LetterByLetterText text="My Projects" delay={100} />);
        }
    }, [portfolioClicked]);

    return (
        <section id="MyPortfolio" className="port--section">
            <div className="port--section--header">
                <h1 className="port--section--title">{header}</h1>
                <span style={{color: "#0070f3" }}>Links coming soon ...</span>
            </div>
            <div className="port--projects">
            <div className="project p1">
                <img src="./img/salesai.jpg" alt="Lead Generation Agent" className="project--image" />
                <div className="project--text">
                <h2>AI-Powered Sales Agent</h2>
                <p>An AI agent for sales automation, client interactions, and lead generation.</p>
                </div>
            </div>

            <div className="project reverse p2">
                <img src="./img/austintech.jpeg" alt="Project 2" className="project--image" />
                <div className="project--text">
                <h2>Expanding Tech Scene</h2>
                <p>An in depth analysis of the tech scene and networking opportunities.</p>
                </div>
            </div>

            <div className="project p1">
                <img src="./img/sportsfitness.jpg" alt="Project 3" className="project--image" />
                <div className="project--text">
                <h2>Sports Analytics Dashboard</h2>
                <p>Sentiment analysis within different sports teams, tracking media engagement.</p>
                </div>
            </div>
            </div>
        </section>
    )
}

export default MyPortfolio;