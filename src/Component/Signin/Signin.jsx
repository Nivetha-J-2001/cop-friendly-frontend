import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/signin.css';

export default function Signin()
{
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let login={email:email,password:password}
        Service.signin(login).then((response) => {
            // console.log(response);
            alert("Signin Successfully");
            // console.log(response.data);
            if(response.data === 1)
            {
                history.push('/trafficcentral');
            }
            else if(response.data === 2)
            {
                history.push('/trafficcop');
            }
            else{
                history.push('/medicalteam');
            }
          }, (error) => {
            console.log(error);
            alert("Invalid email or password");
          });
           
    };
    
    const validateemail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!email) {
            return "Email is required!";
        } else if (!regex.test(email)) {
            return "This is not a valid email format!";
        }
    };
    const validatepassword=(password)=>{
        if (!password) {
            return  "Password is required";
        }         
    };
        
    return (
        <div className="Head">
            <h1>SignIn</h1>
        <div className="signupform">
            <form>
                <h3 className="text-white">Register</h3>
                <div className="form-item">
                    
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            value={email}
                            onChange={(e)=> {setEmail(e.target.value);}} required />
                    </div>
                    <p>{ validateemail(email)}</p>

                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value); }}
                            required />
                    </div>
                    <p>{validatepassword(password)}</p>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(email && password)? true : false}
                        onClick={handleSubmitClick}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}
