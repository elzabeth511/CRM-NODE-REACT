import { useState,useEffect } from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

export function CourseDetailsAdmin(){
    const [course,setcourse]=useState([])
    const [search, setSearch] = useState('')

    const navigate=useNavigate()
    useEffect(()=>{
        getCoureses();
    },[]);
    function getCoureses() {
        axios
        .get("http://localhost:5001/course")
        .then((response)=>{
            console.log("promise was fullfilled");
            console.log(response);
            setcourse(response.data);
        });
    }
    function DeleteCourse(id){
        confirmAlert({
            title: 'Course Delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios
                        .delete(`http://localhost:5001/course/${id}`)
                        .then(response => {
                        console.log('delete promise was fullfilled')
                        console.log(response)
                        getCoureses();
                        toast.success("Course Deleted successfully")
                        })
                }
              },
              {
                label: 'No'
              }
            ]
          });
        
        }
return(<>
<h1 className="text-capitalize">course list </h1>
<label className="mb-3 mx-2 fs-3 text-primary">Search</label><input type='text' 
name='search' placeholder='Search By Course Name'
onChange={event =>setSearch(event.target.value)} />

<div>
            {course.length === 0 ? (<h5>courses not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr className="text-capitalize">
                        <th>course Name</th>
                        <th>Details</th>
                        <th>course seats</th>
                        <th>Total seats</th>
                        <th>Available seats</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        course.filter((course)=>{
                            if (search==''){
                                return course
                            }
                            else if (course.course_name.toLowerCase().includes(search.toLowerCase())){
                                return course
                            }
                        }).map(course => {
                            return (
                            <tr className="table" key={course.course_id}>
                                <th scope="row" className="text-capitalize">{course.course_name}</th>
                                <td className="text-capitalize">{course.description}</td>
                                <td>{course.course_fee}</td>
                                <td>{course.total_seat}</td>
                                <td>{course.available_seat}</td>
                                <td>
                                    <button className="btn btn-outline-primary mx-2"  onClick={()=>navigate(`/courseedit/${course.id}`)}>Edit</button>

                                    
                                    <button className="btn btn-outline-danger" onClick={()=>DeleteCourse(course.id)}>Delete</button>
                                </td>

                                
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            <ToastContainer />
        </div>
</>)

}

// function DeleteCourse(id){
//     console.log('delete1 promise was fullfilled')
//     axios
//     .delete(`http://localhost:5001/course/${id}`)
//     .then(response => {
//     console.log('delete promise was fullfilled')
//     console.log(response)
//     })
//     window.location = '/courseList'
//     }