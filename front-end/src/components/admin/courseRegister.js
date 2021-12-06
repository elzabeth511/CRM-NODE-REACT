import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router";
 export function CourseRegsiter(){
return (<>
<MyForm />
</>);
}

function MyForm() {
    const mystyle={
        maxWidth: "600px",
        background: "white",
        padding: "5px",
        borderStyle:"solid",
        backgroundColor:"#43c1439e",
        margin:"auto",
     
    }
    const navigate = useNavigate();
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});
    function handleChange(event){
    //during change of every element.
    //save name in 'name' and its value in value
    const name = event.target.name;
    const value = event.target.value;
    // setInputs is the function that updates the state.
    setInputs(values => ({...values, [name]: value}))
    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        // console.log(seatCheck(inputs));
        if(inputs.total_seat >= inputs.available_seat){
            axios
            .post('http://localhost:5001/course',inputs)
            .then(response => {
                console.log('Promise was fulfilled')
                console.log(response)
                toast.success("Course added successfully")
                setTimeout(() => {
                    navigate("/courseList")
                }, 5000)
               // window.location='/courseList'
            })
        }
        else{
            toast.info("available seat is greater")
        }
        
        }
        return (
            <div  className="d-flex justify-content-center" style={mystyle} >
            <form className="row col-md-8 g-3 needs-validation" onSubmit={handleSubmit}>

            <h2 style={{textAlign: "center"}}>Add Course</h2>
            
            <div className="col-md-12">
                 < label  for="validationCustom01" className="form-label">Course Name:</label>
                     <input type="text" name="course_name"
                     id="validationCustom01"
                     className="form-control"
                     placeholder="Course Name"
                        value={inputs.course_name || ""}
                        onChange={handleChange}
                        required
                    />
                
                
            </div>
            <div>
            
                <label  for="validationCustomDescription" className="form-label">Description:</label>
            
                     <textarea name="description"
                     id="validationCustomDescription"
                     className="form-control"
                     placeholder="Description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />
                   
                
              
            </div>
            <div>
                <label for="validationCustomthumbnail" className="form-label">Thumbnail URL:</label>
        
                        <input type="text" name="thumbnail"
                        id="validationCustomthumbnail"
                        className="form-control"
                        placeholder="Image Url"
                        value={inputs.thumbnail || ""}
                        onChange={handleChange}
                        required
                        
                        />
            </div>    
     
            <div>
                <label for="validationCustomfee" className="form-label">Course Fee:</label>
        
                        <input type="number" name="course_fee"
                        id="validationCustomfee"
                        className="form-control"
                        placeholder="Course Fee"
                        value={inputs.course_fee || ""}
                        onChange={handleChange}
                        required
                        min={0}
                        
                        />
            </div>    
            <div>
                <label for="validationCustomSeat" className="form-label">Total Seat:</label>
                    <input type="number" name="total_seat"
                    id="validationCustomSeat"
                    placeholder="Total Seat"
                    className="form-control"
                        value={inputs.total_seat || ""}
                        onChange={handleChange}
                        required
                        
                    />
                        
                
            </div>
            <div>
               
                 
                <label for="validationCustomseat" className="form-label">Available Seat:</label>
                  <input type="number" name="available_seat"
                  className="form-control"
                  id="validationCustomseat"
                  placeholder="Available Seat"
                        value={inputs.available_seat || ""}
                        onChange={handleChange}
                        min="0" max={inputs.total_seat}
                        
                    />
             
               
            </div>
                
            <div>
            <button className="btn btn-primary" type="submit">ADD</button>
            </div>
           

            </form> 
            <ToastContainer />
            </div>
        )
}



 
 