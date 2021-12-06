import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Home } from "./Home";
import { ResourceEnquiryDetails } from "./ResourceEnquiryDetails";
import { ResourceEnquiryEdit } from "./ResourceEnquiryEdit";    
import { ResourceEnquiryList } from "./ResourceEnquiryList";
import { ResourceEnquiryRegistration } from "./ResourceEnquiryRegistration";
import "./resourcesStyles.css";

export function ResourceEnquiryTry() {
  return (
    <>
      <MyRouter />
    </>
  );
}

function MyRouter() {
  return (
    <>
      <Router>
        <div className="navbar">
            <label>cRM</label>
          <div className="navcontent">
            <div>
              <Link to="/" className="Link">
                Home
              </Link>
            </div>
            <div>
              <Link to="/resourceenquirylist" className="Link">
                Resource Enquiry List
              </Link>
            </div>
            <div>
              <Link to="/resourceenquiryregister" className="Link">
                Resource Enquiry Register
              </Link>
            </div>
          </div>
          <div className="loginbar">
            <Link to="/resourceenquiryregister" className="Link">
              Login
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/resourceenquirylist"
            element={<ResourceEnquiryList />}
          />
          <Route
            path="/resourceenquiryregister"
            element={<ResourceEnquiryRegistration />}
          />
          <Route
            path="/resourcedetails/:resource_enquiry_id"
            element={<ResourceEnquiryDetails />}
          />
          <Route
            path="/resourceenquiryedit/:resource_enquiry_id"
            element={<ResourceEnquiryEdit />}
          />
        </Routes>
        <footer className="footer_style">
        Copyright - All Rights Reserved
      </footer>
      </Router>
    </>
  );
}
