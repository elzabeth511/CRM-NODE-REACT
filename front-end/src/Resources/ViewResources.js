import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';


const ViewResources = (props) => {
    const navigate = useNavigate();
    const [resources, setResource] = useState([])
    
    useEffect(() => {
        getAllResources();
    }, []);

    const getAllResources = () => {
        axios.get("http://localhost:5001/resource")
            .then(response => {
                setResource(response.data.data)
            })
            .catch(error => {
                console.log("error")
            });
    }

    const deleteResource = (id) => {
        confirmAlert({
            title: 'Resource Delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    axios.delete("http://localhost:5001/resource/" + id)
                        .then((response) => {
                            toast.success("Resource deleted succesfully")
                            getAllResources();
                        })
                        .catch((error) => {
                            toast.success("Error occured while Deleting")
                        })
                }
              },
              {
                label: 'No'
              }
            ]
          });
        
    }

    const handleEditResource = (id) => {
        navigate("/resoure/update/" + id)
    }
    
    return (
        <div>
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr>
                        <th>Resource Name</th>
                        
                        <th>Status</th>
                        <th>Rent</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map(resource => {
                            return (
                            <tr className="table-info" key={resource.resource_id}>
                                <th scope="row">{resource.resource_name}</th>
                                {/* <td>{resource.slot_availability.split("T")[0]}</td> */}
                                <td>{resource.status}</td>
                                <td>{resource.rent}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={()=>{handleEditResource(resource.resource_id)}}>Edit</button>
                                    <button className="btn btn-outline-danger" onClick={() =>deleteResource(resource.resource_id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            <ToastContainer/>
        </div>
        
        
    )
}
export default ViewResources;