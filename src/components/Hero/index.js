import React, {useEffect} from 'react';
import './hero.css'
import {Link} from 'react-router-dom';
import gsap from "gsap";

export default function Hero() {
    useEffect(() => {
        gsap.from('.animate-hero', {
            duration: 0.8,
            opacity: 0,
            y: -150,
            stagger: 0.3,
        });
    })

    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="animate-hero">Deluxe Fitness</h1>
                <p className="animate-hero">Join Now for $30</p>
                <Link to="#" className="button animate-hero">Get Started</Link>
            </div>
        </div>
    )
}
