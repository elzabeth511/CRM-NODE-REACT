import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"


export function ResourceEnquiryDetails(){
    const [resourceEnquiryList,setResourceEnquiryList]=useState([])
    const navigate = useNavigate();
  const { resource_enquiry_id } = useParams();
   
        useEffect(() => {
            axios.get(`http://localhost:5001/resourceEnquiry/${resource_enquiry_id}`).then((response) => {
              console.log(response);
              setResourceEnquiryList(response.data);
            });
          }, []);
  
    return(<>
   
    <div className="maindetails">
      <div className="details">
      <h1>Resource Enquiry Details</h1>
        <h4>Resource Name: <label>{resourceEnquiryList.resource_name}</label></h4>
        <h4>Enquirer Name: <label>{resourceEnquiryList.enquirer_name}</label></h4>
        <h4>Enquire Email: <label>{resourceEnquiryList.enquirer_email}</label></h4>
        <h4>Previous status: <label>{resourceEnquiryList.previous_status}</label></h4>
        <h4>Current status: <label>{resourceEnquiryList.status}</label></h4>

        {/* <button  className="delete"style={{float:"left"}} onClick={()=>Delete(resource_enquiry_id)}>Delete</button> */}
        <button  className="submit" style={{float:"left"}} onClick={()=>navigate(`/resourceenquiryedit/${resourceEnquiryList.resource_enquiry_id}`)}>edit</button>
        <button className="reset" style={{float:"left"}} onClick={() => navigate(`/resourceEnquiry`)}>back</button>

      </div>
    </div>
    </>)

}


    export function Delete(resource_enquiry_id){
        axios.delete(`http://localhost:5001/resourceEnquiry/${resource_enquiry_id}`).then((response) => {
    console.log("delete");
    console.log(response.data);
  });
  window.location = `/resourceenquirylist`;

    }