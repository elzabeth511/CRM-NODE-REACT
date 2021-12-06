import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
// import Select from "react-select";

export function ResourceEnquiryEdit() {
  const { resource_enquiry_id } = useParams();

  return (
    <>
      <MyForm resource_enquiry_id={resource_enquiry_id} />
    </>
  );
}

function MyForm(props) {
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:5001/resourceEnquiry/${props.resource_enquiry_id}`)
      .then((response) => {
        setResourceEnquiryList(response.data);
      });
  }, []);
  function handlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setResourceEnquiryList((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(resourceEnquiryList);
    axios
      .put(
        `http://localhost:5001/resourceEnquiry/${props.resource_enquiry_id}`,
        resourceEnquiryList
      )
      .then((response) => {
        console.log(response);
        window.location = `/resourceenquirydetails/${props.resource_enquiry_id}`;
        setResourceEnquiryList(response.data);
      });
  }


  return (
    <>
      <div className="editbackground">
        <div className="editsidebar">
          <div className="innersidebar editinner">
            <h3 className="h3">CRM </h3>

            <p className="p">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
          </div>
        </div>
        <div className="editdiv editform">
          <form onSubmit={handleSubmit} className="regform ">
            <h1>Enquiry Edit</h1>
            <div class="formrow">
              <label>Resource Name</label>

              <input
                className="notallowed"
                type="text"
                name="resource_id"
                value={resourceEnquiryList.resource_name || ""}
                readOnly
              />
            </div>
            <div class="formrow">
              <label>Enquirer Name</label>

              <input
                className="notallowed"
                type="text"
                name="enquirer_name"
                value={resourceEnquiryList.enquirer_name || ""}
                readOnly
              />
            </div>
            <div class="formrow">
              <label>Enquirer Email</label>

              <input
                className="notallowed"
                type="text"
                name="enquirer_email"
                value={resourceEnquiryList.enquirer_email || ""}
                readOnly
              />
            </div>
            <div class="formrow">
              <label>Previous Status</label>

              <input
                type="text"
                name="previous_status"
                value={resourceEnquiryList.previous_status || ""}
                onChange={handlechange}
                readOnly
              />
            </div>
            <div class="formrow">
              <label>Status </label>

              <select name="status" onChange={handlechange}>
                <option value="Not Attended"> Not Attended</option>
                <option value="Rejected"> Rejected</option>
                <option value="Attended"> Attended</option>
                <option value="processing">Processing</option>
              </select>
            </div>
            <div>
              <input
                className="reset floatRight"
                type="reset"
                value="back"
                onClick={() =>
                  navigate(
                    `/resourceEnquiry`
                  )
                }
              />
              <input
                className="submit floatRight"
                type="submit"
                value="submit"
                // onClick={() =>
                //   navigate(
                //     `/resourcedetails/${resourceEnquiryList.resource_enquiry_id}`
                //   )
                // }
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
////////////////////////////////////////////////////////////////////////////for changing/////////////////////////////////////////
