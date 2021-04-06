import React, {useEffect} from 'react';
import './services.css'
import {FaCheckCircle} from 'react-icons/fa'
import Image from '../../images/7.jpg'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
    useEffect(() => {
        gsap.from('.animate-services', {
            duration: 0.5,
            opacity: 1,
            x: -150,
            stagger: 0.12,
            scrollTrigger: {
                trigger: '.animate-services',
                start: "top 100%",
                end: "bottom 10%",
                toggleActions: "restart complete "
            }
        });
        gsap.from('.animate-img', {
            ScrollTrigger: '.animate-services',
            duration: 1.2,
            opacity: 0,
            x: -200,
            scrollTrigger: {
                trigger: '.animate-services',
                start: "top 100%",
                end: "bottom 10%",
                toggleActions: "restart complete"
            }
        });
    })

    return (
        <div className="services" id="services">
            <div className="services-container">
                <div>
                    <p className="topline animate-services">Features</p>
                    <h1 className="services-heading animate-services">What We Offer</h1>
                    <div className="services-features">
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Group Fitness Classes
                        </p>
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Personal Trainer Sessions
                        </p>
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Indoor Pool
                        </p>
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Steam Room and Sauna
                        </p>
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Basketball Court
                        </p>
                        <p className="service-feature animate-services">
                            <FaCheckCircle className="fas fa-check-circle"/>Open 24/7
                        </p>
                    </div>
                </div>
                <div>
                    <img src={Image} alt="gym" className="services-img animate-img"/>
                </div>
            </div>
        </div>
    )
}