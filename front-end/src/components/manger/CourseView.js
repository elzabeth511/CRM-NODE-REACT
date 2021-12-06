import { useState, useEffect } from "react"
import axios from "axios";

export function CourseViewManger() {
    const [course, setcourse] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
            .get("http://localhost:5001/course")
            .then((response) => {
                console.log("promise was fullfilled");
                console.log(response);
                setcourse(response.data);
            });
    }, []);
    return (<>
        <section class="py-5">
            <div class="container text-center">
            <h1 style ={{marginBottom:20}}>Course List </h1>
            <label>Search</label><input type='text' 
name='search' placeholder='Search By Course Name'
onChange={event =>setSearch(event.target.value)} />

                <div>
                    {course.length === 0 ? (<h5>courses not available</h5>) : (
                        <table class="table table-hover table-dark">
                        <thead>
                          <tr>
                            <th scope="col">Course Name</th>
                            <th scope="col">Details</th>
                            <th scope="col">Course Fee</th>
                            <th scope="col">Total seats</th>
                            <th scope="col">Available seats</th>

                          </tr>
                        </thead>
                        {/* <table className="table table-striped w-auto">
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Details</th>
                                    <th>course seats</th>
                                    <th>Total seats</th>
                                    <th>Available seats</th>


                                </tr>
                            </thead> */}
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
                                            <tr className="table-info" key={course.course_id}>
                                                <th scope="row">{course.course_name}</th>
                                                <td>{course.description}</td>
                                                <td>{course.course_fee}</td>
                                                <td>{course.total_seat}</td>
                                                <td>{course.available_seat}</td>


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