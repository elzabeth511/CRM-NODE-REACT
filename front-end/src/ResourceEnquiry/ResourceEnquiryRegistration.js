import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";


export function ResourceEnquiryRegistration(props) {
  //console.log(props.resourceName+'inside')
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  const navigate = useNavigate();
  const {resource_id}=useParams()

  function handlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setResourceEnquiryList((values) => ({ ...values, [name]: value }));
    resourceEnquiryList.resource_name = props.resourceName;
    //console.log(resourceEnquiryList.resourceName + 'hey');
  }
  function handleSubmit(event) {
    event.preventDefault();
    resourceEnquiryList.status = "pending";
    resourceEnquiryList.resource_name = props.resourceName;
    resourceEnquiryList.previous_status = "pending";

    axios
      .post("http://localhost:5001/resourceEnquiry", resourceEnquiryList)
      .then((response) => {
        console.log(response);
        //window.location = "/";
        setResourceEnquiryList(response.data);
        toast.success("Enquiry Submitted successfully");
        setTimeout(() => {
          navigate("/thanks");
        }, 3000);
        // window.location = '/thanks'
      });
  }
  return (
    <>
      <div >
        <div className="container form-group row fs-5">
          <form onSubmit={handleSubmit} className="">
            <h1 className="text-capitalize">Enquiry Registration</h1>
            <div class="mt-1">
              <label class="col-sm-4 col-form-label ">Resource Name</label>

              <input
                type="text"
                name="resource_name"
                readOnly
                value={resourceEnquiryList.resource_name || props.resourceName}
                class="col-sm-8 notallowed text-muted fs-5"
              />
            </div>
            <div class="mt-1">
              <label class="col-sm-4 col-form-label">Enquirer Name</label>

              <input
                type="text"
                name="enquirer_name"
                value={resourceEnquiryList.enquirer_name || ""}
                onChange={handlechange}
                required
                class="col-sm-8 text-muted fs-5"
              />
            </div>
            <div class="mt-1">
              <label class="col-sm-4 col-form-label">Enquirer Email</label>

              <input
                type="email"
                name="enquirer_email"
                value={resourceEnquiryList.enquirer_email || ""}
                onChange={handlechange}
                required
                class="col-sm-8 text-muted fs-5"
              />
            </div>
            <div class="mt-1">
              <label class="col-sm-4 col-form-label">Mobile No </label>
              <input
                placeholder="###-###-####"
                type="tel"
                name="enquirer_phone"
                pattern="^\d{3}-\d{3}-\d{4}$"
                required
                value={resourceEnquiryList.enquirer_phone || ""}
                onChange={handlechange}
                class="col-sm-8 text-muted fs-5"
              />
            </div>
            {/* <div class="mt-1">
              <label>Mobile NO</label>

              <input
                type="text"
                name="enquirer_phno"
                value={resourceEnquiryList.enquirer_phno || ""}
                onChange={handlechange}
                required
              />
            </div> */}

            <div className="float-end mt-2">
              
              <input
               className='btn btn-success bt-lg mx-2 '
                type="submit"
                value="submit"
              />
              <input
               className='btn btn-secondary '
                type="reset"
                value="reset"
                onClick={() => navigate( `/detailresourceview/${resource_id}`)}
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
