import { useEffect, useRef } from 'react';
import './Academic.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Academic() {

    
    // const academics = useRef()


    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from(academics.current, {
    //         opacity: 0,
    //         y: -500,
    //         scrollTrigger: {
    //             trigger: academics.current,
    //             start: "top 200px",
    //             end: "end 1500px",
    //             scrub: 1,
    //         }
    //     })
    //     // gsap.from('.about-page main', {
    //     //     opacity: 0,
    //     //     x: -300,
    //     //     scrollTrigger: {
    //     //         trigger: about.current,
    //     //         start: "top 120px",
    //     //         end: "end 100px",
    //     //         scrub: 1,
    //     //     }
    //     // })
        
    // }, [])




    return (
        <>
            <div className="academics">
                <div className="container">
                    <main className='row'>
                        <section className='col'>
                            <header className='title'>
                                <h2>Education</h2>
                            </header>
                            <div className="contents">
                                <div className="box">
                                    <h4>June 2016</h4>
                                    <h3>Secondary Education(10th)</h3>
                                    <h5>Percentage/CGPA : 91.20%</h5>
                                    <p>I have completed my 10th standard in 2016 with percentage 91.20% at Dr. Panjabrao Deshmukh Vidyalaya,Washim</p>
                                </div>
                                <div className="box">
                                    <h4>May 2018</h4>
                                    <h3>Higher Secondary Education(12th)</h3>
                                    <h5>Percentage/CGPA : 85.85%</h5>
                                    <p>I have completed my 12th standard in 2018 with percentage 85.85% at Shri Shivaji College ,Rithad (Washim)</p>
                                </div>
                                <div className="box">
                                    <h4>2018 - 2021</h4>
                                    <h3>Bachelor's Degree (B.Sc)</h3>
                                    <h5>Percentage/CGPA : 8.77</h5>
                                    <p>I have completed my bachelor's degree in mathematics started from july 2018 to october 2021 with CGPA 8.77 at R. A. College, Washim</p>
                                </div>
                                <div className="box">
                                    <h4>2021 - 2023</h4>
                                    <h3>Master's Degree (M.Sc)</h3>
                                    <h5>Percentage/CGPA : 6.10</h5>
                                    <p>I have completed my bachelor's degree in mathematics started from july 2018 to october 2021 with CGPA 6.10 at R. A. College, Washim</p>
                                </div>
                            </div>



                        </section>


                        <section className='col'>
                            <header className='title'>
                                <h2>Experience</h2>
                            </header>
                           <div className="contents">
                           <div className="box">
                                <h4>InternShip</h4>
                                <h3>LeadSoft Placement Academy</h3>
                                <h4>July 2024 - December 2024</h4>
                                <p>I have Completed my Internship at LeadSoft Placement Academy under the guidance of Mr. Suraj Pawar sir.</p>
                            </div>
                            <div className="box">
                                <p>During my internship at LeadSoft Placement Academy, I had the opportunity to work on cutting-edge web development projects. This hands-on experience not only honed my abilities in frontend and backend development but also deepened my understanding of technologies and team collaboration.</p>
                            </div>
                            <div className="box">
                              <p>I specialized in frontend development, where I designed and implemented responsive user interfaces using HTML5, CSS3, and Bootstrap. Leveraging frameworks like React.js 18, Angular 17, and GSAP, I created intuitive designs with smooth animations and enhanced interactivity to improve user experience.</p>
                            </div>
                            <div className="box">
                              <p>On the backend, I worked with Node.js 20 to develop RESTful APIs and handle server-side functionality. I also implemented robust database solutions using MySQL and MongoDB, ensuring efficient data storage and retrieval. Additionally, I integrated Firebase for seamless authentication, real-time data updates.</p>
                            </div>
                           </div>

                        </section>

                    </main>
                </div>
            </div>
        </>
    )
}