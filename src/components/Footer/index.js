import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-desc ">
                    <h1>Delux Fitness</h1>
                    <p>Luxury Fitness gym located in downtown California</p>
                    <p id="phone">359 - 123 - 459869</p>
                </div>
                <div className="footer-links">
                    <h2 className="footer-title">Contact us </h2>
                    <Link to="#" className="footer-link">Contact</Link>
                    <Link to="#" className="footer-link">Support</Link>
                    <Link to="#" className="footer-link">Sponsorships</Link>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-links">
                    <h2 className="footer-title">Memberships </h2>
                    <Link to="#" className="footer-link">Pricing</Link>
                    <Link to="#" className="footer-link">Plans</Link>
                    <Link to="#" className="footer-link">FAQ</Link>
                </div>
                <div className="footer-links">
                    <h2 className="footer-title">Social Media</h2>
                    <Link to="#" className="footer-link">Instagram</Link>
                    <Link to="#" className="footer-link">Facebook</Link>
                    <Link to="#" className="footer-link">Youtube</Link>
                    <Link to="#" className="footer-link">Twitter</Link>
                </div>
            </div>
        </div>
    )
}