import { useState, useEffect } from "react";
import axios from "axios";

export function ResourceEnquiryViewManger() {
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios.get("http://localhost:5001/resourceEnquiry").then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setResourceEnquiryList(response.data);
    });
  }, []);
  return (
    <> <section class="py-5">
      <div class="container text-center">
      <h1 style ={{marginBottom:20}}>Resource Enquiries List </h1>
      <label>Search</label><input type='text'
        name='search' placeholder='Search By Enquirer Name'
        onChange={event => setSearch(event.target.value)} />
        <div>
          {resourceEnquiryList.length === 0 ? (
            <h5>resourceEnquirys not available</h5>
          ) : (
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">Resource Name</th>
                  <th scope="col">Enquirer Name</th>
                  <th scope="col">Enquirer Email</th>
                  <th scope="col">Enquirer Phone</th>
                  <th scope="col">Previous Response Status</th>
                  <th scope="col">Current Response Status</th>
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
                      className="table-info"
                      key={resourceEnquiry.resource_enquiry_id}
                    >
                      <th scope="row">{resourceEnquiry.resource_name}</th>
                      <td>{resourceEnquiry.enquirer_name}</td>
                      <td>{resourceEnquiry.enquirer_email}</td>
                      <td>{resourceEnquiry.enquirer_phone}</td>

                      <td>{resourceEnquiry.previous_status}</td>
                      <td>{resourceEnquiry.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
