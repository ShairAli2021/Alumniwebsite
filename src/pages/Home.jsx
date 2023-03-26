import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Login from "../Registration/Login/Login";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import RegistrationForm from "../Registration/RegistrationForm";
import ScrolltoTop from "../components/Scroll/ScrollTop";
import MySlider from "../components/Home/MySlider";

// scroll 




const Home = () => {


  return (
    <>
    <Fragment>
    <BrowserRouter>
    <ScrolltoTop/>
   
    
      <Header />
    
      <Routes>
     
      <Route  exact path="/"  element={<MySlider/>}>
      </Route>
    
  
      <Route path="/all" element={<FreeCourse/>}>
      
              </Route>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/blog" element={<ChooseUs/>}/>
      <Route path="/pages" element={<Testimonials/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<RegistrationForm/>}/>
      <Route path="/admin" element={<Features/>}/>
   
      
      </Routes>
      <HeroSection />
      <CompanySection />
      <Features />
    
    
      <Testimonials />
      <Newsletter />
      <Footer />
      
      </BrowserRouter>
    </Fragment>
    
    </>
  );
};

export default Home;
