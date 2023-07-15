import "./AboutContentStyles.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/React1.jpg"
import React2 from "../assets/React2.jpg"

const AboutContent = () => {
return (
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>
            Im a fullstack Developer who had a dream to work for himself. I create Beutiful websites and also own a PowerWashing company you see here!
        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack 
                top">
                    <img src={React1}
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack 
                bottom">
                    <img src={React2}
                    className="img"
                    alt="true"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default AboutContent;