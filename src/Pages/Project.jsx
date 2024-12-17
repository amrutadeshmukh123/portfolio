import { useEffect, useRef } from "react";
import "./Project.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Project() {


    // const projectAll = useRef()
    




    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger)
    //     gsap.from(projectAll.current, {
    //         opacity: 0,
    //         y: -500,
    //         stagger:0.35,
    //         scrollTrigger: {
    //             trigger: projectAll.current,
    //             start: "top 380px",
    //             end: "end 2000px",
    //             scrub: 1,
    //         }
    //     })
      
        
    // }, [])



    const projects = [
       
        {
            image: "/images/cafe.png",
            projectName: "Cafe Website",
            para: "A website where you can place order and give review",
            skills: "React, CSS, React hooks",
            gitHub: "https://github.com/amrutadeshmukh123/caffe-website.git",
            vercel: "https://caffe-website.vercel.app/",
        },
        {
            image: "/images/Blog manager.png",
            projectName: "Blog Manager Application",
            para: "A app that provides you a platform to share your thoughts",
            skills: "Angular, CSS, Node.Js, Express",
            gitHub: "https://github.com/amrutadeshmukh123/blog-manager.git",
            vercel: "https://blog-manager-gilt.vercel.app/",
        },
        {
            image: "/images/User generator.png",
            projectName: "Random User Generator",
            para: "A fun app that generates random user at the click of a button!",
            skills: "HTML ,CSS, Javascript, API",
            gitHub: "https://github.com/amrutadeshmukh123/random-user-generator.git",
            vercel: "https://random-user-generator-livid.vercel.app/  ",
        },
        {
            image: "/images/gym.png",
            projectName: "Gym Website",
            para: "A gym website with dynamic routing ",
            skills: "React, CSS, React navigation",
            gitHub: "https://github.com/amrutadeshmukh123/gym-website.git",
            vercel: "https://gym-website-theta-orpin.vercel.app/",
        },
        {
            image: "/images/toy.png",
            projectName: "Toy Website",
            para: "A toy website with dynamic routing  ",
            skills: "Angular, CSS, Dynamic routing",
            gitHub: "https://github.com/amrutadeshmukh123/toy-website.git",
            vercel: "https://toy-website-ten.vercel.app/home",
        },
        {
            image: "/images/weather.png",
            projectName: "Weather Forcast App",
            para: "A weather app which will give weather updates of your city ",
            skills: "React, CSS, Api",
            gitHub: "https://github.com/amrutadeshmukh123/weather-forcast.git",
            vercel: "https://weather-forcast-chi.vercel.app/",
        },
        {
            image: "/images/form.png",
            projectName: "Student Form",
            para: "A Student admission form with validations",
            skills: "React, CSS, Form validations",
            gitHub: "https://github.com/amrutadeshmukh123/attribute-validation.git",
            vercel: "https://attribute-validation.vercel.app/",
        },
        {
            image: "/images/add.png",
            projectName: "Add and View Student",
            para: "A form where we first add student and then can see names",
            skills: "React, CSS, localstorage",
            gitHub: "https://github.com/amrutadeshmukh123/add-view-user.git",
            vercel: "https://add-view-user.vercel.app/",
        },
        {
            image: "/images/joke generator.png",
            projectName: "Random Joke Generator",
            para: "A fun app that generates random jokes at the click of a button!",
            skills: "HTML ,css, Javascript, API",
            gitHub: "https://github.com/amrutadeshmukh123/random-joke-generator.git",
            vercel: "https://random-joke-generator-vert.vercel.app/",
        },
        {
            image: "/images/hospital.png",
            projectName: "Image Slider",
            para: "A hospital page where I have used image slider",
            skills: "HTML, CSS, Javascript",
            gitHub: "https://github.com/amrutadeshmukh123/image-slider.git",
            vercel: "https://image-slider1.vercel.app/",
        },
        {
            image: "/images/User generator.png",
            projectName: "Random Joke Generator",
            para: "A fun app that generates random user at the click of a button!",
            skills: "HTML ,CSS, Javascript, API",
            gitHub: "https://github.com/amrutadeshmukh123/random-user-generator.git",
            vercel: "https://random-user-generator-livid.vercel.app/  ",
        },
        {
            image: "/images/resister.png",
            projectName: "Login Register Page",
            para: "Login resister page with toggling effect",
            skills: "HTML ,CSS, Javascript",
            gitHub: "https://github.com/amrutadeshmukh123/login-resister.git",
            vercel: " https://login-resister.vercel.app/",
        },
        {
            image: "/images/todo.png",
            projectName: "To Do List",
            para: "With th help of this you can manage your daily routine.",
            skills: "HTML ,CSS, Javascript",
            gitHub: "https://github.com/amrutadeshmukh123/todo-list.git",
            vercel: " https://todo-list-nine-gamma-89.vercel.app/",
        },
        {
            image: "/images/calculator.png",
            projectName: "Calculator",
            para: "Designed a calculator whre we can perform the operations",
            skills: "HTML ,CSS, Javascript",
            gitHub: "https://github.com/amrutadeshmukh123/calculator.git",
            vercel: " https://calculator-gamma-cyan.vercel.app/",
        },

    ];

    return (
        <>  
            
        <div className="project-all">

            <div className="project-title">
                <h2>My Projects</h2>
            </div>
            <div className="card-container">

                {
                    projects.map((project, index) => {
                        return (
                            <div className="card" key={index}>
                                <img src={project.image} alt="" />
                                <h3>{project.projectName} </h3>
                                {/* <p>{project.para}</p> */}
                                <p>{project.para} & Built with : {project.skills}</p>
                                <div className="card-links">
                                    <a href={project.gitHub} target="_blank">GitHub</a>
                                    <a href={project.vercel} target="_blank">Live Demo</a>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>

        </>
    )
}