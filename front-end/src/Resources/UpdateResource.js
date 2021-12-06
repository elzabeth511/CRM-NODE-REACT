import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
function UpdateResource(props){
    const navigate = useNavigate();
    let {id} = useParams();
    const [formData, setFormData] = useState({
        resource_name: '',
        thumbnail: '',
        status: '',
        rent: 0
    })
    useEffect(()=>{
        getResourceById();
    },[])
    
    const getResourceById = () =>{
        axios.get("http://localhost:5001/resource/"+id)
            .then(response=>{
                console.log(response.data.data);
                const resourceData = response.data.data;
                //resourceData.slot_availability = resourceData.slot_availability.split("T")[0];
                setFormData(resourceData);
            })
            .catch(error =>{
                console.log(error);
            })
    }

    const handleFormData = (value, type) => {
        const changeFormData = {...formData};
        changeFormData[type] = value;
        setFormData(changeFormData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:5001/resource/" + id , formData)
            .then((response) => {
                toast.success("Resource updated successfully");
                setTimeout(() => {
                    navigate("/resourceList")
                }, 5000)
                
            })
            .catch((error) => {
                toast.error("error in updating resource");
            })
       // window.location="/resourceList"
    }
    return(
        <div className="d-flex justify-content-center" >
           
            <form className="row col-md-6 g-3 needs-validation" 
                style={{backgroundColor: "#43c1439e", padding: 10}}
                onSubmit={handleFormSubmit}
            novalidate>
                 <h2 style={{textAlign: "center"}}>Edit Resource</h2>
                <div className="col-md-12">
                    <label for="validationCustom01" className="form-label">Resource Name</label>
                    <input type="text" className="form-control" id="validationCustom01"
                    onChange={(event)=>{handleFormData(event.target.value, 'resource_name')}}
                     value={formData.resource_name} placeholder="Enter Resource name" required />
                </div>
                <div className="col-md-12">
                    <label for="validationCustom02" className="form-label">Thumbnail URL </label>
                    <input type="text" className="form-control" id="validationCustom02" 
                     onChange={(event)=>{handleFormData(event.target.value, 'thumbnail')}}
                    value={formData.thumbnail}  required />
                </div>
                <div className="col-md-12">
                    <label for="validationCustom03" className="form-label">Status</label>
                    <input type="text" className="form-control" id="validationCustom03" 
                     onChange={(event)=>{handleFormData(event.target.value, 'status')}}
                    value={formData.status} placeholder="Status" required />
                </div>
                <div className="col-md-12">
                    <label for="validationCustom04" className="form-label">Rent</label>
                    <input type="text" className="form-control" id="validationCustom04"
                     onChange={(event)=>{handleFormData(event.target.value, 'rent')}}
                    value={formData.rent} placeholder="Rent" required />
                </div>
            
                <div className="col-12">
                    <button className="btn" style={{marginLeft: "45%", backgroundColor: "#e9ecef"}} type="submit">Save</button>
                </div>
            </form>
            <ToastContainer />
        </div>
        
    )
}
export default UpdateResource;