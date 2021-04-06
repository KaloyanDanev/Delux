import React, {useEffect} from 'react';
import './membership.css'
import {FaBicycle, FaDumbbell} from 'react-icons/fa'
import {Link} from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Membership() {
        useEffect(() => {
            gsap.from('.animate-membership', {
                duration: 1,
                opacity: 0,
                y: -150,
                stagger: 0.3,
                delay: 0.5,
                scrollTrigger: {
                    trigger: '.animate-membership',
                    start: "top 70%",
                    end: "bottom 10%",
                    toggleActions: "restart complete "
                }
            });
            gsap.from('.animate-card', {
                ScrollTrigger: '.animate-card',
                duration: 1,
                opacity: 0,
                y: -150,
                stagger: 0.1,
                delay: 0.2,
                scrollTrigger: {
                    trigger: '.animate-card',
                    start: "top 70%",
                    end: "bottom 10%",
                    toggleActions: "restart complete "
                }
            });
        }) 
		
    return (
        <div className="membership" id="plans">
            <h1 className="animate-membership">View Our Plans</h1>
            <p className="membership-desc animate-membership">
                Get Started today and receive 25% off your first month
            </p>
            <div className="membership-wrapper">
                <div className="membership-card animate-card">
                    <div className="membership-title">
                        <FaDumbbell className="fas fa-dumbbell card-icon"/>
                        <h3>Starter</h3>
                    </div>
                    <div className="membership-perks">
                        <p>Get access to the entire Gym</p>
                        <p>$30 Per Month</p>
                    </div>
                    <Link to="#" className="button">Sign Up</Link>
                </div>
                <div className="membership-card animate-card">
                    <div className="membership-title">
                        <FaBicycle className="fas fa-bicycle card-icon"/>
                        <h3>Silver</h3>
                    </div>
                    <div className="membership-perks">
                        <p>Get access to the entire Gym</p>
                        <p>Group Fitness Classes</p>
                        <p>$49 Per Month</p>
                    </div>
                    <Link to="#" className="button">Sign Up</Link>
                </div>
                <div className="membership-card animate-card">
                    <div className="membership-title">
                        <FaDumbbell className="fas fa-dumbbell card-icon"/>
                        <h3>Gold</h3>
                    </div>
                    <div className="membership-perks">
                        <p>Get access to the entire Gym</p>
                        <p>Group Fitness Classes</p>
                        <p>Private Personal Training</p>
                        <p>$80 Per Month</p>
                    </div>
                    <Link to="#" className="button">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
