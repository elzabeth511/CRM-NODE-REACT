import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Delete } from "./ResourceEnquiryDetails";

export function ResourceEnquiryList(){
    const [resourceEnquiryList,setResourceEnquiryList]=useState([])
    useEffect(()=>{
        axios
        .get("http://localhost:5001/resourceEnquiry")
        .then((response)=>{
            console.log("promise was fullfilled");
            console.log(response);
            setResourceEnquiryList(response.data);
        });
    },[]);
    return(<>
    <div className="editbackground">
        <div className="editdiv editform">
            <h1 className="h1"> Resource Enquiry List</h1>
            <ul>
            {resourceEnquiryList.map((resourceEnquiry)=>(
             <li key={resourceEnquiry.resource_enquiry_id}>
             <ResourceEnquiry details={resourceEnquiry}/>
         </li>
             
        ))}
            </ul>
        </div>
        <div className="editsidebar">
          <div className="innersidebar editinner">
            <h3 className="h3">Lucture Hall </h3>

            <p className="p">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
          </div>
        </div>
    </div>
    
    </>)


}

function ResourceEnquiry(props){
    const navigate=useNavigate()
    return(<>
    <div className="listMain">
        <div className="headerDiv">
        <h3>{props.details.enquirer_name}</h3>
        <h4> resource id:{props.details.resource_id}</h4>
       
        </div>
        <div className="listbuttondiv">
        <button
            className="delete floatLeft"
            onClick={() => Delete(props.details.resource_enquiry_id)}
          >
            Delete
          </button>
        <button
            className="submit floatLeft"
            onClick={() => navigate(`/resourceenquiryedit/${props.details.resource_enquiry_id}`)}

          >
            edit
          </button>
          <button  
           className="reset floatLeft"
        onClick={() => navigate(`/resourcedetails/${props.details.resource_enquiry_id}`)}
        >Details</button>
        
          
         

         
          
        </div>
    



    </div>
    </>)
}
