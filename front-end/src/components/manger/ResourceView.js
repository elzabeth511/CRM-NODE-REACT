import axios from "axios";
import { useEffect, useState } from "react";
const ViewResourcesManger = (props) => {
    const [resources, setResource] = useState([])
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
    return (
        <section class="py-5">
        <div class="container text-center">
        <h1  style ={{marginBottom:20}}>Resource List </h1>

        <label>Search</label><input type='text' 
name='search' placeholder='Search By Resource Name'
onChange={event =>setSearch(event.target.value)} />
        
        <div>
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Resource Name</th>
                        {/* <th>Availabilty</th> */}
                        <th scope="col">Status</th>
                        <th scope="col"> Rent</th>
                        
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
                            <tr className="table-info" key={resource.resource_id}>
                                <th scope="row">{resource.resource_name}</th>
                                {/* <td>{resource.slot_availability.split("T")[0]}</td> */}
                                <td>{resource.status}</td>
                                <td>{resource.rent}</td>
                                
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            
        </div>
        </div>
        </section>
        
        
    )
}
export default ViewResourcesManger;