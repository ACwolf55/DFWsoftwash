import"./FooterStyles.css";
import React from 'react';
import { FaHome, 
    FaPhone, 
    FaMailBulk, 
    FaFacebook, 
    FaTwitter, 
    FaLinkedin 
} from "react-icons/fa";

const Footer = () => {
    return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{ color : 
                    "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p> 1633 Wood Creek Ln</p>
                        <p> Allen, TX</p>
                    </div>
                </div>
                <div className="Faphone">
                    <h4><FaPhone size={20} style={{ color : 
                    "#fff", marginRight: "2rem"}}/>
                    321-684-3454</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color : 
                    "#fff", marginRight: "2rem"}}/>
                    lolokelty2000@gmail.com</h4>
                </div>
            </div>
            
            <div className="right">
                <h4>About the company</h4>
                <p>We are a proud PowerWashing company that prides ourself on hard work and perserverance
                </p>
                <div className="social">
                <FaFacebook 
                size={30} 
                style={{ color : "#fff", marginRight: "1rem"}}
                    />
                    <FaTwitter 
                    size={30} 
                    style={{ color : "#fff", marginRight: "1rem"}}
                    />
                    <FaLinkedin 
                    size={30} 
                    style={{ color : "#fff", marginRight: "1rem"}}
                    />
                </div>
            </div>
        </div>
    </div>
    )
    }

export default Footer