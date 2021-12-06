import { useState,useEffect } from "react"
import axios from "axios";
import { Link } from "react-router-dom";



export function CourseEnquiryViewAdmin() {
    const [enquiries, setEnquiries] = useState([])
    const [search, setSearch] = useState('')

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
return(<>
<h1>Course Enquiries list </h1><label>Search</label><input type='text' 
name='search' placeholder='Search By Enquirer Name'
onChange={event =>setSearch(event.target.value)} />

<div>
            {enquiries.length === 0 ? (<h5>enquirys not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Enquirer Name</th>
                        <th>Enquirer Email</th>
                        <th>Enquirer Phone</th>
                        <th>Previous Response Status</th>

                        <th>Current Response Status</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        enquiries.filter((enquiry)=>{
                            if (search==''){
                                return enquiry
                            }
                            else if (enquiry.enquirer_name.toLowerCase().includes(search.toLowerCase())){
                                return enquiry
                            }
                        }).map(enquiry => {
                            return (
                            <tr className="table-info" key={enquiry.course_enquiryId}>
                                <th scope="row">{enquiry.course_name}</th>
                                <td>{enquiry.enquirer_name}</td>
                                <td>{enquiry.enquirer_email}</td>
                                <td>{enquiry.enquirer_phone}</td>
                                <td>{enquiry.previous_status}</td>

                                <td>{enquiry.status}</td>
                                <td>
                                <button className='btn btn-primary'>
                        <Link style={{textDecoration:'none'}} className='text-light' to={`/courseenquiryupdate/${enquiry.course_enquiryId}`}>Edit Status</Link>
                    </button>
                                </td>

                                
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            
        </div>
</>)

}