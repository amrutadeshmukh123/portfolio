import { Outlet, Route, Routes } from 'react-router-dom';
import './Home.css';
import About from './About';
import Academic from './Academic'
import Skill from './Skill'
import Project from './Project'
import Connect from './Connect'
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


export default function Home() {


    const  [text ] = useTypewriter({
        words: ['Developer'],
        loop: {},
    });

    const about = useRef()


    useGSAP(() => {

        const t1 = gsap.timeline()


        t1.from('.header', {
            opacity: 0.5,
            y: -400
        }).from('.header h2', {
            opacity: 0.5,
            y: -400
        }).from('.header .links a', {
            opacity: 0,
            stagger: 0.35,
            y: -200
        }).from('.home ', {
            opacity: 0,
        }).from('.home .info', {
            opacity: 0,
            y: -400
        }).from('.home .info h1', {
            opacity: 0,
            x: -200
        }).from('.home .info h3', {
            opacity: 0,
            x: -200
        }).from('.home .info p', {
            opacity: 0,
            x: -200
        }).from('.home .info button', {
            opacity: 0,
            x: -200
        }).from('.home .info .icon i', {
            opacity: 0,
            x: -200,
            stagger: 0.35
        }).from('.home .image', {
            opacity: 0,
            stagger: 0.35,
            x: 400
        })
    })


    return (
        <>
            <div className="home">
                <div className="info">
                    <h1>Hello,I'm Amruta Ingle</h1>
                    <h3>Web
                        <span style={{ fontWeight: 'bold' , marginLeft:'10px' }}>
                            {text}
                        </span>
                        {/* <Cursor /> */}
                    </h3>
                    <p>Welcome to my portfolio! I'm a passionate web developer specializing in creating responsive,
                        user-friendly websites. With a keen eye for design and a commitment to clean code, I turn ideas into
                        functional digital experiences. Explore my work and let's build something amazing together.</p>
                    <a href="http://localhost:2000/attachments/1734184782217.pdf" target='_blank'><button>Download CV</button></a>

                    <div className="icon">
                        <a href="https://github.com/amrutadeshmukh123" target='_blank'><i className="fa-brands fa-github"></i></a>
                        <a href="https://t.ly/u20JA" target='_blank'> <i className="fa-brands fa-square-whatsapp"></i></a>
                        <a href="https://www.linkedin.com/in/amruta-deshmukh-63a9a6305/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <i className="fa-brands fa-facebook"></i>
                    </div>

                </div>
                <div className="image">
                    <img src="/images/Photo.jpg" alt="" />
                </div>
            </div>

            <About />
            <Academic />
            <Skill />
            <Project />
            <Connect />

        </>
    )
}