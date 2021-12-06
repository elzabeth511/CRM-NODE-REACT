import { useState, useEffect } from "react";
import axios from "axios";

import CourseEnquiry from "./CourseEnquiry";




function CourseEnquiryList() {
    const [enquiries, setEnquiries] = useState([])
    useEffect(() => {
        console.log('The use effect hook has been executed');
        axios
            .get('http://localhost:5001/course_enquirys')
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setEnquiries(response.data)
            })


    }, [])
    return (
        <>
            <div>
                <h1>Course Enquiry List</h1>
            </div>
            <div>
                <ul>
                    {enquiries.map(enquiry =>
                        <li key={enquiry.course_enquiryId}>
                            <CourseEnquiry details={enquiry} />
                        </li>
                    )}
                </ul>
            </div>

        </>
    )

}
export default CourseEnquiryList;