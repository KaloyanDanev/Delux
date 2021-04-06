import React, {useEffect} from 'react';
import './team.css'
import Image3 from '../../images/3.jpg'
import Image4 from '../../images/4.jpg'
import Image5 from '../../images/5.jpg'
import Image6 from '../../images/6.jpg'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
    useEffect(() => {
        gsap.from('.animate-team', {
            duration: 1,
            opacity: 0,
            y: -150,
            stagger: 0.3,
            delay: 0.2,
            scrollTrigger: {
                trigger: '.animate-team',
                start: "top 70%",
                end: "bottom 10%",
                toggleActions: "restart complete "
            }
        });
    })

    return (
        <div className="team" id="trainers">
            <div className="team-wrapper">
                <div className="team-text animate-team">
                    <p className="topline">Private Coaching</p>
                    <h1>Meet Our Trainers</h1>
                    <p className="team-desc">
                        All our Personal trainers have over 30 years of experience combined. Each trainer
                        specializes in
                        strength and mobility Workouts
                    </p>
                </div>
                <div className="team-text animate-team">
                    <p className="topline">Free Trial</p>
                    <h1>7 Day Trial</h1>
                    <p className="team-desc">
                        You can work with each trainer for up to 7 days for free in order to see if they are a good
                        fit
                        for your goals.
                    </p>
                </div>
                <div className="team-card animate-team">
                    <p>Vanessa</p>
                    <img src={Image3} alt="person" className="team-img"/>
                </div>
                <div className="team-card animate-team">
                    <p>Tyler</p>
                    <img src={Image4} alt="person" className="team-img"/>
                </div>
                <div className="team-card animate-team">
                    <p>Sasha</p>
                    <img src={Image5} alt="person" className="team-img"/>
                </div>
                <div className="team-card animate-team">
                    <p>Nigel</p>
                    <img src={Image6} alt="person" className="team-img"/>
                </div>
            </div>
        </div>
    )
}