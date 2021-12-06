import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useNavigate } from "react-router";

//import CourseAccess from './courseAccess';

function ViewResource() {
  const [resources, setResource] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllResources();
  }, []);

  const getAllResources = () => {
    axios
      .get("http://localhost:5001/resource")
      .then((response) => {
        setResource(response.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };
  //initialize the usestate to empty
  // const [resources, setResources] = useState([]);
  // useEffect(() => {
  //     console.log('The use effect has been executed');

  //     axios
  //         .get('http://localhost:5001/resource')
  //         .then(response => {
  //             console.log('Promise was fulfilled')
  //             console.log(response)
  //             setResources(response.data)
  //         })

  // }, [])

  return (
    <>
      <div>
        <h1 className="text-center display-1 "> Resource list </h1>
        <div>
          {resources.map((resource) => (
            <div key={resource.resource_id}>
              <div>
                <section class="py-3">
                  <div class="container text-center">
                    <div>
                      <div class="row align-items-center text-md-left mb-3 ">
                        <div class="col-md-6 order-1 order-md-0">
                          <img
                            class="img-fluid"
                            src={resource.thumbnail}
                            alt=""
                          />
                        </div>
                        <div class="col-md-6 mb-4 mb-md-0 ">
                          <span class="display-5 text-capitalize mb-2">
                            {resource.resource_name}
                          </span>

                          <h3 class="mb-4 my-3">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() =>
                                navigate(
                                  `/detailresourceview/${resource.resource_id}`
                                )
                              }
                            >
                              View Details
                            </button>
                          </h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewResource;
