import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Academic from './Pages/Academic'
import Skill from './Pages/Skill'
import Project from './Pages/Project'
import Connect from './Pages/Connect'
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function App() {

  const [mobile,setMobile] = useState(false)

  useGSAP(()=>{

    const tl = gsap.timeline()

    // tl.from('.header',{
    //     opacity:0.5,
    //     y:-400
    // }).from('.header h2',{
    //     opacity:0.5,
    //     y:-400
    // }).from('.header .links a',{
    //     opacity:0,
    //     stagger:0.35,
    //     y:-200
    // })
    
    // .from('.header .links button',{
    //     opacity:0,
    //     x:200
    // })
    // .from('.home',{
    //     opacity:0,
    //     y:-300
    // }).from('.home h1',{
    //     opacity:0,
    //     scale:0.2
    // }).from('.home .field p',{
    //     opacity:0,
    //     scale:5,
    //     rotate:45,
    //     stagger:0.1
    // }).from('.home button',{
    //     opacity:0,
    //     scale:2,
    //     y:-200
    // }).from('.home .image img',{
    //     opacity:0,
    //     scale:0,
        
    // })
})


  return (
    <>
      <div className="header">
        <h2>Amruta Ingle</h2>
        <div className= {mobile ? 'links-mobile' : "links"} onclick={()=>setMobile(false)}>
          <NavLink to='/' onClick={() => setMobile(false)}>Home</NavLink>
          <NavLink to='/about' onClick={() => setMobile(false)}>About Me</NavLink>
          <NavLink to='/academic' onClick={() => setMobile(false)}>Academics</NavLink>
          <NavLink to='/skill' onClick={() => setMobile(false)}>Skills</NavLink>
          <NavLink to='/project' onClick={() => setMobile(false)}>Projects</NavLink>
          <NavLink to='/connect' onClick={() => setMobile(false)}>Connect Me</NavLink>
        </div>
        <div className='mobile-menu' onClick={()=>setMobile(!mobile)}><i className={mobile ? "fa-solid fa-xmark" :"fa-solid fa-bars"}></i></div>
      </div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/academic' Component={Academic} />
        <Route path='/skill' Component={Skill} />
        <Route path='/project' Component={Project} />
        <Route path='/connect' Component={Connect}></Route>
      </Routes>

      <div className="footer">
        <div className="footer-left">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Academics</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
          </div>
        </div>
        <div className="footer-center">
          <div className='middle'>
            <i className="fa-solid fa-location-dot"></i>
            <p>Akola,Maharashtra</p>
          </div>
          <div className='middle'>
            <i className="fa-solid fa-phone-volume"></i>
            <p>+91 90****6089</p>
          </div>
          <div className='middle'>
            <i className="fa-solid fa-envelope"></i>
            <p>amrutaingle175@gmail.com</p>
          </div>
        </div>
        <div className="footer-right">
          <p className="about-me">
            <span>You can also reach me through links of my social media account given below.</span>
            <div className="icons">
              <a href="https://t.ly/u20JA" target='_blank'> <i className="fa-brands fa-square-whatsapp"></i></a>
              <a href="https://github.com/amrutadeshmukh123" target='_blank'><i className="fa-brands fa-github"></i></a>
              <a href=""><i className="fa-brands fa-square-facebook"></i></a>
              <a href="https://www.linkedin.com/in/amruta-deshmukh-63a9a6305/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </p>
        </div>

      </div>
      <div className="copyright">
        <p>&copy; 2025 Amruta Ingle . All Rights Are Reserved.</p>
      </div>
    </>
  )
}

export default App
