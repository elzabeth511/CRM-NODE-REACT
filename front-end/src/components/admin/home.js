import { contains } from "jquery";
import { Link } from "react-router-dom";
import { CourseDetailsAdmin } from "./courseDetails";
import { CourseEnquiryViewAdmin } from "./courseEnquiryDetails";
import { CourseRegsiter } from "./courseRegister";
import ViewResourcesAdmin from "./resourceDetails";
import { ResourceEnquiryViewAdmin } from "./resurceEnquiryDetails";
import '../../CourseEnquiry/home.css'

export function HomeAdmin() {
   return (
      <main style={{marginLeft: -75, marginRight: -75, marginTop: -25}}>
  <div class="position-relative overflow-hidden  text-center bg-light" style={{backgroundImage: `url(image.jpg)`, backgroundSize: "contain", color: "white"}}>
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-1 fw-normal">Training Academy</h1>
      <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <Link class="btn btn-outline-secondary" to={"/course"}>Add Cource</Link>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
  
                <section id="footer">
                    <div className="container-fluid">
                    
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                                <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                                <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Team 6</a></p>
                            </div>
                         
                        </div>
                    </div>
                </section>
            
</main>

   )
}