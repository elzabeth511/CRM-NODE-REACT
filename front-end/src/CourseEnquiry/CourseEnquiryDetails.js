import { useState, useEffect } from "react";
import { useParams } from "react-router";

import axios from "axios";
import { Link } from "react-router-dom";
import DeleteCourseEnquiry from "./DeleteCourseEnquiry";

function CourseEnquiryDetails() {
    const [enquiry, setEnquiry] = useState([])
    const { course_enquiryId } = useParams()
    useEffect(() => {
        console.log('The use effect hook has been executed');
        axios
            .get(`http://localhost:5001/course_enquirys/${course_enquiryId}`)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setEnquiry(response.data)
            })


    }, [])
    return (
        <>
            <div className='regform'>
                <h1>Course Enquiry Registration</h1>
                <a href='/courseEnqiury'>Back to Enquiry List</a>
                <div>Course Name : {enquiry.course_name}</div>
                <div>Enquirer Name: {enquiry.enquirer_name}</div>
                <div>Enquirer Email: {enquiry.enquirer_email}</div>
                <div>Enquirer Phone: {enquiry.enquirer_phone}</div>
                <div>Previous Status: {enquiry.previous_status}</div>

                <div>Response Status: {enquiry.status}
                    <button className="btn btn-primary">
                        <Link className='text-light' style={{textDecoration:'none'}} to={`/courseenquiryupdate/${enquiry.course_enquiryId}`}>Edit Status</Link>
                    </button>
                    {/* <button>
                    <DeleteCourseEnquiry course_enquiryId ={enquiry.course_enquiryId}/>
                </button>  */}
                </div>

            </div>
        </>
    )
}
// function Delete(props){

//     axios.delete(`http://localhost:5001/course_enquirys/${props.course_enquiryId}`).then((response) => {

// console.log("delete");

// console.log(response.data);

// });

// window.location = `/courseenquirylist`;



// }

export default CourseEnquiryDetails;