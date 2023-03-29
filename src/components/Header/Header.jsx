import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";
// scroll


const navLinks = [
  {
    display: "Home",
    url: "/",
  
  },
  {
    display: "About",
    url: "/about",
  },

  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Pages",
    url: "/pages",
  },
  
  {
    display:"All Project",
    url:"/all"
  }
  

  // admin section
  ,{
    display:"Login",
    url:"/login"

  }

]
const Header = () => {
  const menuRef=useRef(null)


  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
         
            <h2 className=" d-flex  gap-1">
              <i class="pantone-line"> 
             <Link to="/"><img src="logo192.png" alt="logo"></img></Link>
          
              </i> 
             
            </h2>

          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}  > {item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> 03426930403
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
