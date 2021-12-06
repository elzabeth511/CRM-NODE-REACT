import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function ResourceEnquiryViewAdmin() {
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    axios.get("http://localhost:5001/resourceEnquiry").then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setResourceEnquiryList(response.data);
    });
  }, []);
  return (
    <>
      <h1 className="text-capitalize">Resource Enquiry List </h1>
      <label className="mb-3 mx-2 fs-3 text-primary">Search</label><input type='text'
        name='search' placeholder='Search By Enquirer Name'
        onChange={event => setSearch(event.target.value)} />
      <div>
        {resourceEnquiryList.length === 0 ? (
          <h5>Resource Enquiry not available</h5>
        ) : (
          <table className="table table-striped w-auto">
            <thead>
              <tr className="text-capitalize">
                <th>Resource Name</th>
                <th>Enquirer Name</th>
                <th>Enquirer Email</th>
                <th>Enquirer Phone</th>
                <th>Previous Response Status</th>
                <th>Current Response Status</th>
              </tr>
            </thead>
            <tbody>
              {resourceEnquiryList.filter((resourceEnquiry)=>{
                            if (search==''){
                                return resourceEnquiry
                            }
                            else if (resourceEnquiry.enquirer_name.toLowerCase().includes(search.toLowerCase())){
                                return resourceEnquiry
                            }
                        }).map((resourceEnquiry) => {
                return (
                  <tr
                    className="table "
                    key={resourceEnquiry.resource_enquiry_id}
                  >
                    <th scope="row" className="text-capitalize">{resourceEnquiry.resource_name}</th>
                    <td className="text-capitalize">{resourceEnquiry.enquirer_name}</td>
                    <td>{resourceEnquiry.enquirer_email}</td>
                    <td>{resourceEnquiry.enquirer_phone}</td>

                    <td className="text-capitalize">{resourceEnquiry.previous_status}</td>
                    <td className="text-capitalize">{resourceEnquiry.status}</td>

                    <td>
                      <button className="btn btn-primary" onClick={() => navigate(`/resourceenquiryedit/${resourceEnquiry.resource_enquiry_id}`)}>edit</button>

                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
