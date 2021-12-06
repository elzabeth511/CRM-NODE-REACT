import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
// import './edit.css'
function CourseEditAdmin() {
    const { id } = useParams();
    return (<>
       
        <MyForm id={id} />
    </>);
}

function MyForm(props) {
    const navigate = useNavigate();
    const mystyle={
        maxWidth: "600px",
        background: "white",
        padding: "5px",
        borderStyle:"solid",
        backgroundColor:"#43c1439e",
        margin:"auto",
     
    }
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:5001/course/${props.id}`)
            .then(response => {
                console.log('promise was fullfilled')
                console.log(response)
                setInputs(response.data)
            })
    }, []);

    function handleChange(event) {
        //during change of every element.
        //save name in 'name' and its value in value
        const name = event.target.name;
        const value = event.target.value;
        // setInputs is the function that updates the state.
        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
        if (inputs.total_seat > inputs.available_seat) {
            axios
                .put(`http://localhost:5001/course/${props.id}`, inputs)
                .then(response => {
                    console.log('Promise was fulfilled')
                    console.log(response)
                    toast.success("Course details updated successfully");
                    setTimeout(() => {
                        navigate(`/coursedetails/${props.id}`)
                    }, 3000)
                })
            // window.location = `/coursedetails/${props.id}`
        }
        else {
            alert('Available seat greater than total seat')
        }
    }
    return (
        <div className="d-flex justify-content-center" style={mystyle} >
            <form className="row col-md-6 g-3 needs-validation" onSubmit={handleSubmit}>

            <h3 style={{ textAlign: "center"}}> Course Edit</h3>

                <div className="col-md-12">
                    < label for="validationCustom01" className="form-label">Course Name:</label><br />
                    <input type="text" name="course_name"
                        className="form-control"
                        value={inputs.course_name || ""}
                        onChange={handleChange}
                        required
                    />


                </div>
                <div>

                    <label>Description:</label>

                    <textarea name="description"
                    className="form-control"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />



                </div>
                
                <div>
                    <label>Course Thumbnail URL:</label>

                    <input type="text" name="thumbnail"
                    className="form-control"
                        value={inputs.thumbnail || ""}
                        onChange={handleChange}
                        required

                    />
                </div>


                <div>
                    <label>Course Fee:</label><br />

                    <input type="number" name="course_fee"
                    className="form-control"
                        value={inputs.course_fee || ""}
                        onChange={handleChange}
                        required
                        min={0}

                    />
                </div>
                <div>
                    <label>Total Seat:</label>
                    <input type="text" name="total_seat"
                    className="form-control"
                        value={inputs.total_seat || ""}
                        onChange={handleChange}
                        required

                    />


                </div>
                <div>


                    <label for="validationCustom01" className="form-label">Available Seat:</label>
                    <input type="text" name="available_seat"
                    className="form-control" 
                    min="0" max={inputs.total_seat}
                        value={inputs.available_seat || ""}
                        onChange={handleChange}
                        required

                    />


                </div>

                <div>
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>


            </form>
            <ToastContainer />
        </div>
    )
}
export default CourseEditAdmin;