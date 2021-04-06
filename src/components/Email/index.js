import React, {useEffect} from 'react';
import './email.css'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Email() {
    useEffect(() => {
        gsap.from('.animate-email', {
            duration: 0.8,
            opacity: 0,
            y: -150,
            stagger: 0.25,
            delay: 0.6,
            scrollTrigger: {
                trigger: '.animate-email',
                start: "top 96%",
                end: "bottom 10%",
                toggleActions: "restart complete "
            }
        });
    })
    return (
        <div className="email">
            <div className="email-content">
                <h1 className="animate-email">Get Access to members only perks</h1>
                <p className="animate-email">Sign up for our newsletter below to get $100 off your first personal
                    training session!</p>
                <form action="#" className="animate-email">
                    <div className="form-wrap ">
                        <label htmlFor="email">
                            <input type="email" placeholder="Enter your email" id="email"/>
                        </label>
                        <button className="button" type="submit">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
