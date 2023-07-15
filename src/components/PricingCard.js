import "./PricingCardStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
return (
    <div className="pricing">
        <div className="card-container"/>
        <div className="card">
            <h3>- Quote -</h3>
            <span className="bar"></span>
            <p className="btc">$ 0</p>
            <p>- Immediate Response from our team -</p>
            <p>- Never a Minute Late -</p>
            <p>- Honest and Hardworking -</p>
            <p>- Great Pricing! -</p>
            <Link to="/contact" className="btn">BOOK NOW</Link>
        </div>

        <div className="card">
            <h3>- Commercial -</h3>
            <span className="bar"></span>
            <p className="btc">0.20 SQF</p>
            <p>- Immediate Response from our team -</p>
            <p>- Never a Minute Late -</p>
            <p>- Honest and Hardworking -</p>
            <p>- email propert photos for a more accurate Quote -</p>
            <Link to="/contact" className="btn">BOOK NOW</Link>
        </div>

        <div className="card">
            <h3>- Looking to get Hired?? -</h3>
            <span className="bar"></span>
            <p className="btc">$ 0</p>
            <p>- Looking for self Motivated hard working people -</p>
            <p>- Our team Will respond as soon as we can -</p>
            <p>- Call or email! -</p>
            <p>- Send your resume via Link! -</p>
            <Link to="/contact" className="btn">BOOK NOW</Link>
        </div>
    </div>
)
}

export default PricingCard;