import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    
        <div className="container">
            <div className="navbar">
                <div class="navitemleft">
                    <img src='r.svg' alt="" id="image"></img>
                    {/* <img></img> */}
                    <h1 className="nameheading">itika Tiwari</h1>
                </div>
                <div className="navitemsright">
                  
                     {/* <a href="#project">Project</a>
                     <a href="#skills">Skills</a>
                     <a href="#contactme">Contact Me</a> */}
                     <NavLink to='/'>Home</NavLink>
                     <NavLink to='/project'>
                      Project
                     </NavLink>
                     <NavLink to='/skills'>
                      Skills
                     </NavLink>
                     <NavLink to='/Contactus'>
                      Contact
                     </NavLink>
          
                </div>
            </div>
            </div>
    
  )
}

export default Navbar
