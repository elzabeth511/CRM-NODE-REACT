import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import "../ResourceEnquiry/resourcesStyles.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

function CourseEnquiryForm(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({});

  console.log(props.courseName);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    //to prevent default html form submit behaviour

    // event.preventDefault();
    inputs.status = "pending";
    inputs.previous_status = "pending";
    inputs.course_name = props.courseName;
    //alert the current state
    // console.log(inputs);

    /*
        
        */
    axios
      .post("http://localhost:5001/course_enquirys", inputs)
      .then((response) => {
        console.log("promise fulfilled");
        console.log(response);
        setInputs(response.data);
        toast.success("Enquiry Submitted successfully");
        setTimeout(() => {
          navigate("/thanks");
        }, 3000);
         window.location = '/thanks'
      });
    /**
              toast.success("Resource saved successfully");
                setTimeout(() => {
                    navigate("/resourceList")
                }, 3000)
            })
            .catch((error) => {
                toast.error("Error occured while creating resource. Please try again!!!");
            })
             */
  }

  //rendering components

  return (
    <>
      <div className="container form-group row fs-5">
        <form onSubmit={handleSubmit} action="">
          <h1 className="text-capitalize"> Course registraion</h1>
          <div className="mt-1">
            <label class="col-sm-4 col-form-label ">Course Name </label>
            <input
              type="text"
              name="course_name"
              readOnly
              className="notallowed"
              value={inputs.course_name || props.courseName}
              class="col-sm-6 notallowed text-muted fs-5"
            />
          </div>
          <div className="mt-1">
            <label class="col-sm-4 col-form-label">Name </label>
            <input
              type="text"
              name="enquirer_name"
              value={inputs.enquirer_name || ""}
              onChange={handleChange}
              class="col-sm-6 text-muted fs-5"
            />
          </div>
          <div className="mt-1">
            <label class="col-sm-4 col-form-label">Email </label>
            <input
              type="email"
              name="enquirer_email"
              value={inputs.enquirer_email || ""}
              onChange={handleChange}
              class="col-sm-6 text-muted fs-5"
            />
          </div>
          <div className="mt-1">
            <label class="col-sm-4 col-form-label ">Mobile No </label>
            <input
              class="col-sm-6 text-muted fs-5"
              placeholder="###-###-####"
              type="text"
              name="enquirer_phone"
              required
              value={inputs.enquirer_phone || ""}
              onChange={handleChange}
              pattern="^\d{3}-\d{3}-\d{4}$"
            />
          </div>

          <div className="text-right mt-3 ">
            <input
              className="btn btn-success bt-lg "
              type="submit"
              value="Submit"
            />

            <input
              className="btn btn-secondary mx-3 "
              type="reset"
              name="clear"
              value="Clear"
              onClick={() => navigate(`/detailcourseview/${id}`)}
            />
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default CourseEnquiryForm;
