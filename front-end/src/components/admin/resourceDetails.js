import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert} from 'react-confirm-alert';
const ViewResourcesAdmin = (props) => {
    const [resources, setResource] = useState([])
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

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
    function deleteResource(id) {
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


    return (<>
    <h1 className="text-capitalize">Resource List </h1><label className="mb-3 mx-2 fs-3 text-primary">Search</label><input type='text' 
name='search' placeholder='Search By Resource Name'
onChange={event =>setSearch(event.target.value)} />
        
        <div className="container">
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-striped w-full">
                    <thead>
                        <tr className="text-capitalize">
                            <th>Resource Name</th>
                            {/* <th>Availabilty</th> */}
                            <th>Status</th>
                            <th>Rent</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            resources.filter((resource)=>{
                                if (search==''){
                                    return resource
                                }
                                else if (resource.resource_name.toLowerCase().includes(search.toLowerCase())){
                                    return resource
                                }
                            }).map(resource => {
                                return (
                                    <tr className="" key={resource.resource_id}>
                                        <th scope="row" className="text-capitalize">{resource.resource_name}</th>

                                        <td className="text-capitalize">{resource.status}</td>
                                        <td>{resource.rent}</td>
                                        <td>
                                            <button className="btn btn-outline-primary" onClick={() => navigate(`/resourceedit/${resource.resource_id}`)} >Edit</button>
                                            <button className="btn btn-outline-danger" style={{ marginLeft: 8 }} onClick={() => deleteResource(resource.resource_id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>


                </table>
            )}
            <ToastContainer />
        </div>


    </>)
}

export default ViewResourcesAdmin;
