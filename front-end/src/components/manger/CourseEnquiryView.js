import { useState, useEffect } from "react"
import axios from "axios";


export function CourseEnquiryViewManger() {
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
    return (<>
        <section class="py-5">
            <div class="container text-center">
            <h1 style ={{marginBottom:20}}>Course Enquiries List </h1>
            <label>Search</label><input type='text' 
name='search' placeholder='Search By Enquirer Name'
onChange={event =>setSearch(event.target.value)} />

                <div>
                    {enquiries.length === 0 ? (<h5>enquirys not available</h5>) : (
                        <table className="table table-hover table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Enquirer Name</th>
                                    <th scope="col">Enquirer Email</th>
                                    <th scope="col">Enquirer Phone</th>
                                    <th scope="col">Previous Response Status</th>

                                    <th scope="col">Current Response Status</th>


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


                                            </tr>
                                        )
                                    })
                                }


                            </tbody>


                        </table>
                    )}

                </div>
            </div>
        </section>
    </>)

}