import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from "react";
import Home from "../../CourseEnquiry/Home";
import About from "../../CourseEnquiry/About";
import ThankYou from "../../CourseEnquiry/ThankYou";
import Login from "../../Login";
import ViewCourse from "./viewCourse";
import ViewCourseDetails from "./detailCourseView";
import CourseEnquiryForm from "../../CourseEnquiry/CourseEnquiryForm";
import ViewResource from "./viewResource";
import ViewResourceDetails from "./detailResourceView";
import  { useEffect } from "react";
import ReactGA from 'react-ga';
import './custapp.css'
function CustomerApp(){
    useEffect(()=>
    {
      ReactGA.initialize('UA-214024739-1')
    
      ReactGA.pageview(window.location.pathname + window.location.search)
    },[])
    
    useEffect(() => {
      console.log(window.location.pathname)
     })
    return(
        <>
<Router>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark container-fluid">
    <div class="container-fluid fs-5">
        <ul class="nav navbar-nav">
        <li class="nav-item active">
        <a class="nav-link" href="/">Home </a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="/about">About </a>

        </li>
        <li class="nav-itemnav-item active">
        <a class="nav-link" href="/viewcourse">Courses </a>

        </li>

        <li class="nav-item active">
        <a class="nav-link" href="/viewresource">Resources </a>

        </li>
        


        </ul>
    </div>
    <div class=" fs-5 mx-3 float-end">
        <ul class="nav navbar-nav ">
        <li class="nav-item active  ">
        <i class="zmdi zmdi-account material-icons-name"></i>
        <a class="nav-link " href="/login">Login</a>

        </li>
        </ul>
        </div>
</nav>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/thanks" element={<ThankYou/>} />
<Route path="/login" element={<Login />} />
<Route path="/viewcourse" element={<ViewCourse />} />
<Route path="/viewresource" element={<ViewResource />} />

<Route path="/detailcourseview/:id" element={<ViewCourseDetails />} />
<Route path="/detailresourceview/:resource_id" element={< ViewResourceDetails />} />

<Route path="/courseenquiry" element={<CourseEnquiryForm />} />




</Routes>

<section className=" container-fluid">
                <section id="footer">
                    <div className="container-fluid">
                        <div className="row text-center text-xs-center text-sm-left text-md-left">
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <h5>Quick links</h5>
                                <ul className="list-unstyled quick-links">
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Home</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>About</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                                    <li><a href="#"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                                    <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                                <ul className="list-unstyled list-inline social text-center">
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
                                </ul>
                            </div>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                                <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Team 6</a></p>
                            </div>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

</Router>
        </>
    )

}

export default CustomerApp;