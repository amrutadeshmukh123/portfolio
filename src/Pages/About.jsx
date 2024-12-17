import { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {


    // const about = useRef()


    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from(about.current, {
    //         opacity: 0,
    //         y: -500,
    //         scrollTrigger: {
    //             trigger: about.current,
    //             start: "top 100px",
    //             end: "end 1000px",
    //             markers:true,
    //             scrub: 1,
    //         }
    //     })
    //     gsap.from('.about-page main', {
    //         opacity: 0,
    //         x: -300,
    //         scrollTrigger: {
    //             trigger: about.current,
    //             start: "top 120px",
    //             end: "end 100px",
    //             scrub: 1,
    //         }
    //     })
        
    // }, [])


   
    return (
        <>
            <div class="about">
                <h2>About Me</h2>
                <div class="about-page">
                    <div class="main">
                        <div class="image"></div>
                        <div className="intro">
                            <div class="name">
                                <h3>Name :</h3>
                                <p>Amruta Haribhau Ingle</p>
                            </div>
                            <div class="name">
                                <h3>Education :</h3>
                                <p>MSc(Mathematics)
                                    Batch 2021-23
                                </p>
                            </div>
                            <div class="name">
                                <h3>Skill :</h3>
                                <p>HTML5, CSS3, Javascript, Github, Bootstrap, React.js 18, Node.js 20, Angular 17, MySQL, MongoDB, Firebase, Next.js</p>
                            </div>
                            <div class="name">
                                <h3>Hobby :</h3>
                                <p>Reading, Learning new skills</p>
                            </div>
                            <div class="name">
                                <h3>Experience :</h3>
                                <p>6 Months </p>
                            </div>
                        </div>
                    </div>
                    <div class="introduction">
                        <p>
                            I am a passionate web developer with hands-on experience in designing and developing modern, responsive, and user-friendly web applications. My technical expertise includes <span id='highlight' >HTML5, CSS3, Bootstrap, GSAP (Greensock Animation Platform) and JavaScript</span>for front-end development, along with advanced frameworks and libraries such as <span >React.js (v18), Angular (v17), and Next.js.</span>
                        </p>
                        <p>
                            On the backend, I specialize in Node.js (v20) for building scalable server-side applications and databases like <span id='highlight'>MySQL, MongoDB, and Firebase</span> for efficient data management. Proficient in using GitHub for version control, I am committed to maintaining clean, reusable, and collaborative code.
                        </p>
                        <p>During my internship at <span> Leadsoft Placement Academy</span>, I worked on diverse projects. I collaborated with a team to develop dynamic web applications using React.js and Node.js,and RESTful APIs.Additionally, I utilized <span id='highlight'>GitHub</span>to manage project repositories, ensuring efficient version control and teamwork.</p>
                    </div>
                </div>
            </div>


        </>
    )
}