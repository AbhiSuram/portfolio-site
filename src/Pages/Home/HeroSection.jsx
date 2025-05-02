import LetterByLetterText from "./LetterByLetterText"
import { Link } from "react-scroll";

export default function HeroSection() {

    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Abhi!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            <LetterByLetterText text="Tech Guy, Seller, " delay={100}/>
                        </span>{" "}
                        <br />
                        <LetterByLetterText text="Builder. " delay={100} time={2000}/>
                    </h1>
                    <p className="hero--section--description">Welcome to my portfolio 😀
                    <br />
                    </p>
                </div>
                 <Link to="Contact" className="btn btn-primary">
                    Contact Me
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"/>
            </div>
        </section>
    )
}