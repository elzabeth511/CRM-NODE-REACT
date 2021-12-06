import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "../../Login";
import { CourseEnquiryViewManger } from "./CourseEnquiryView";
import { CourseViewManger } from "./CourseView";
import { HomeManger } from "./home";
import { ResourceEnquiryViewManger } from "./ResourceEnquiryView";
import ViewResourcesManger from "./ResourceView";

export function ManagerApp() {
  return (
    <>
      <Router>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <div class="container-fluid">
            <ul class="nav navbar-nav"> 
              <li class="nav-item active"><div><Link class="nav-link" to="/manager">Home</Link></div></li>
              <li class="nav-item active"><div><Link class="nav-link" to="/course">Course</Link></div></li>
              <li class="nav-item active"><div><Link class="nav-link" to="/resourse">Resource</Link></div></li>
              <li class="nav-item active"><div><Link class="nav-link" to="/courseenquiry">Course Enquiry</Link></div></li>
              <li class="nav-item active"><div><Link class="nav-link" to="/resourceenquiry">Resource Enquiry</Link></div></li>
              <li class="nav-item active"><a class="nav-link" href='https://analytics.google.com/analytics/web/?authuser=2#/report-home/a214024739w295186749p256292937' >Page Visit</a></li>
              {/* <li class="nav-item active">  {localStorage.getItem('mytoken') && <div><Link  class="nav-link" onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}</li> */}
             
            </ul>
          </div>
          <div className="d-flex">
                            {/* {localStorage.getItem('mytoken') &&
                             <div><Link style={{color:'white'}} className="nav-link" onClick={() => window.location = '/login'} to="/login">Logout</Link></div>
                             } */}
                             <ul class="nav navbar-nav"> 
                             <li class="nav-item active mx-3">  {localStorage.getItem('mytoken') && <div><Link  class="nav-link" onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}</li>
                             </ul>
                        </div>
        </nav>
       

        <Routes>
          <Route path="/manager" element={<HomeManger />} />
          <Route path="/course" element={<CourseViewManger />} />
          <Route path="/courseenquiry" element={<CourseEnquiryViewManger />} />
          <Route path="/resourse" element={<ViewResourcesManger />} />
          <Route path="/resourceenquiry" element={<ResourceEnquiryViewManger />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>
    </>
  );
}
