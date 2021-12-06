import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { ResourceEnquiryRegistration } from "../../ResourceEnquiry/ResourceEnquiryRegistration";

function ViewResourceDetails() {
  

  const { resource_id } = useParams();
  const [resource, setResource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllResources();
  }, []);

  const getAllResources = () => {
    axios
      .get(`http://localhost:5001/resource/${resource_id}`)
      .then((response) => {
        setResource(response.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const resourceName = resource.resource_name;
  console.log(resourceName);
  return (
    <>
      <div className="container row mt-5 m-auto mb-1">
        <div
          className="col-md-8 order-0 bg-info bg-gradient
 text-white p-5 "
        >
          <ResourceEnquiryRegistration resourceName={resourceName} />
        </div>

        <div
          className="col-md-4  mb-4 mb-md-0 order-1 bg-dark p-5 bg-gradient
"
          data-removed="true"
        >
          <img className="img-fluid" src={resource.thumbnail} />
          <div className="card-body">
            <h4 className="card-title text-capitalize display-3 text-light">
              {resource.resource_name}
            </h4>
            <p className="card-text fs-3 text-muted text-capitalize">
              rent:{" "}
              <label className="text-light fs-2 bd-highlight text-nowrap">
                {resource.rent}
              </label>
            </p>
            <bitton
              className="text-center btn btn-primary  btn-lg"
              onClick={() => navigate("/viewresource")}
            >
              back
            </bitton>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewResourceDetails;
