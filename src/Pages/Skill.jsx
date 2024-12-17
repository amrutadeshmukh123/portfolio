import { useRef } from 'react';
import './Skill.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skill() {


    // const skillAll = useRef()
    




    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from(skillAll.current, {
    //         opacity: 0,
    //         y: -500,
    //         stagger:0.35,
    //         scrollTrigger: {
    //             trigger: skillAll.current,
    //             start: "top 280px",
    //             end: "end 1800px",
    //             scrub: 1,
    //         }
    //     })
        
        
    // }, [])

    return (
        <>
          <div className="skill-all">
            
         
            <div className="skill-title">
                <h2>My Skills</h2>
            </div>
            <div className="skill-icon">
                <div className="language">
                    <i className="fa-brands fa-html5"></i>
                    <h5>HTML5</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-css3-alt"></i>
                    <h5>CSS3</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-js"></i>
                    <h5>Javascript</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-bootstrap"></i>
                    <h5>Bootstrap</h5>
                </div>
                <div className="language">
                    <i class="fa-solid fa-database"></i>
                    <h5>MongoDB</h5>
                </div>
                
                <div className="language">
                    <i class="fa-solid fa-database"></i>
                    <h5>MySQL</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-react"></i>
                    <h5>React 18</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-angular"></i>
                    <h5>Angular 18</h5>
                </div>
                <div className="language">
                    <i class="fa-brands fa-node"></i>
                    <h5>Node.Js 20</h5>
                </div>
                <div className="language">
                    <i class="fa-solid fa-globe"></i>
                    <h5>Next.Js</h5>
                </div>


            </div>
            <div class="skill-container">

                <div className="first">
                    <div class="skill-box">
                        <span class="title">HTML</span>
                        <div class="skill-bar">
                            <span class="skill-per html">
                                <span class="tooltip">69%</span>
                            </span>
                        </div>
                    </div>

                    <div class="skill-box">
                        <span class="title">CSS</span>

                        <div class="skill-bar">
                            <span class="skill-per css">
                                <span class="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skill-box">
                        <span class="title">JavaScript</span>

                        <div class="skill-bar">
                            <span class="skill-per javascript">
                                <span class="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skill-box">
                        <span class="title">Bootstrap</span>

                        <div class="skill-bar">
                            <span class="skill-per bootstrap">
                                <span class="tooltip">58%</span>
                            </span>
                        </div>
                    </div>

                </div>
                <div className="second">
                    <div class="skill-box">
                        <span class="title">React </span>
                        <div class="skill-bar">
                            <span class="skill-per react">
                                <span class="tooltip">75%</span>
                            </span>
                        </div>
                    </div>

                    <div class="skill-box">
                        <span class="title">Angular</span>

                        <div class="skill-bar">
                            <span class="skill-per angular">
                                <span class="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skill-box">
                        <span class="title">Node.JS</span>

                        <div class="skill-bar">
                            <span class="skill-per node">
                                <span class="tooltip">60%</span>
                            </span>
                        </div>
                    </div>
                    <div class="skill-box">
                        <span class="title">MySQL</span>

                        <div class="skill-bar">
                            <span class="skill-per mysql">
                                <span class="tooltip">78%</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}