import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/react-toastify.esm'
import { confirmAlert } from 'react-confirm-alert';


function Login() {
    toast.configure()
    localStorage.clear();
    return (<>
        {/* <h1>Please Login</h1> */}
        <MyForm />
    </>);

}

function MyForm(props) {
    const navigate =useNavigate();

    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        //during change of every element.
        //save name in 'name' and its value in value
        const name = event.target.name;
        const value = event.target.value;
        // setInputs is the function that updates the state.
        setInputs(values => ({ ...values, [name]: value }))

    }

    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);

        axios
            .post('http://localhost:5001/authentications/login', inputs,)//connection url with backend
            .then(response => {
                //alert(response.data.user.id)
                //alert(response.data.accessToken)
                localStorage.setItem('mytoken', response.data.accessToken)
                localStorage.setItem('role', response.data.user.RoleID)
                localStorage.setItem('test', response.data.user.RoleID)

                if (response.data.user.RoleID === 1)
                    window.location='/admin'
                else if (response.data.user.RoleID === 2)
                    window.location='/manager'

            })
            .catch(error => {
                toast.error(error.response.data,{position:toast.POSITION.TOP_CENTER})
        console.log(error.response.data)
        localStorage.clear();

            })

    }
    
    return (
        <div className="content mt-3 ">
        <div className="container  pt-3 ">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src="https://m.foolcdn.com/media/the-blueprint/images/GettyImages-1245953309.original.jpg" 
           
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3 className="fs-2">
                      Sign In to <strong>CRM</strong>
                    </h3>
                    <p className="mb-4 fs-5">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>

        <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group first">
                      <label className=" fs-5">Username</label>
                      <input
                       
                        className="form-control "
                        type="text"
                        name="UserName"
                        value={inputs.UserName || ""}
                        onChange={handleChange}
                        required                    />
                    </div>
                    <div className="form-group last mb-4 fs-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control "
                         name="Password"
                value={inputs.Password || ""}
                onChange={handleChange}
                required
                      />
                    </div>
                
                    <input
                      type="submit"
                      value="Log In"
                      className="btn text-white btn-lg btn-primary mb-4"
                   
                    />
                    
                  </form>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

)

}
export default Login;

/*

*/