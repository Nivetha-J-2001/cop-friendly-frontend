import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/form.css';
import Header from "../Header/Header";
import { toast } from "react-toastify";
import ErrorPage from "../Error Page/ErrorPage";

function AddTrafficCop() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [name,setname]=useState('');
    const [mobileNumber,setMobileName]=useState('');
    const [password,setPassword]=useState('');
    const [central,setCentral]=useState(false);
    useEffect(() => {
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            setCentral(true);
        }
      },[]);

    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let trafficcop={email:email,username:name,password:password,mobileNo:mobileNumber};
        Service.createTrafficCop(trafficcop).then((response) => {
            console.log(response);
            toast.success("Signup Successfully");
            history.push('/trafficcentral');
          }, (Error) => {
            let message;    
                if (Error['response'].status === 409) {
                    message = 'Details Already Present !'
                } else if(Error['response'].status === 401 )
                {
                    message = "Invalid Credentials"
                }else if(Error['response'].status === 404 )
                {
                    message = "Page Not Found";
                } else {
                    message = 'OPPS! Network error';
                }    
                toast.error(message);
          });
        
    };
    const handleCancelClick = (e)=>{
        e.preventDefault();
        history.push('/addusers');
    }
    
    const validateemail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!email) {
            return "Email is required!";
        } else if (!regex.test(email)) {
            return "This is not a valid email format!";
        }
        
    };
    const validateusername = (name)=>{
        if (!name) {
            return  "Username is required!";
        }
    };
    const validatemobile=(mobileNumber)=>{

        if (!mobileNumber) {
            return  "mobileNumber is required!";
        }
        else if (mobileNumber.length < 10) {
            return  "Enter a valid mobile number";
        }
    };
    const validatepassword=(password)=>{
        var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
        if (!password) {
            return  "Password is required";
        } 
        else if(!paswd.test(password))
        {
            return  "password must contain one capital letter , one small letter,"+
            "one digit and one special character"
        }
        
    };
        
    return (
        <>
        <Header />
        { central &&
        <section>
            <div className="imgBx">
                <img src="/Images/home.jpg" alt="home"></img>
            </div>
            <div className="content">
                <div className="formBx">
                    <h2>Add Traffic Cop</h2>
                    <form>
                        <div className="inputBx">
                            <input type="email"
                                placeholder="Enter email"
                                id="email"
                                value={email}
                                onChange={(e)=> {setEmail(e.target.value);}} required />
                            <p>{ validateemail(email)}</p>
                        </div>
                        <div className="inputBx">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                id="username"
                                value={name}
                                onChange={(e)=>{setname(e.target.value);}} required />
                            <p>{validateusername(name)}</p>
                        </div>
                        <div className="inputBx">
                            <input type="text"
                                maxLength="10"
                                className="form-control"
                                pattern="[1-9]{1}[0-9]{9}"
                                placeholder="Enter Mobilenumber"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e)=> {setMobileName(e.target.value); }}
                                required />
                            <p>{validatemobile(mobileNumber)}</p>
                        </div>
                        <div className="inputBx">
                            <input type="password"
                                className="form-control"
                                placeholder="Password"
                                id="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value); }}
                                required />
                            <p>{validatepassword(password)}</p>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Submit" id="submit"
                            disabled={ !(email && mobileNumber && password && name)? true : false}
                            onClick={handleSubmitClick} />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Cancel"  id="reset"
                            onClick={handleCancelClick} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        }        
        { !central &&
            <ErrorPage />
        }
        </>
    );
}
export default AddTrafficCop;