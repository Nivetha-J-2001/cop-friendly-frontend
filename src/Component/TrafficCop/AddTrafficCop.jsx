import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/signin.css';

function AddTrafficCop() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [mobileNumber,setMobileName]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let trafficcop={email:email,username:username,password:password,mobileNo:mobileNumber};
        Service.createTrafficCop(trafficcop).then((response) => {
            console.log(response);
            alert("Signup Successfully");
            history.push('/trafficcentral');
          }, (error) => {
            console.log(error);
            alert("User already present");
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
    const validateusername = (username)=>{
        if (!username) {
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
    const validateconfirmpassword=(confirmPassword)=>{
        if (password !== confirmPassword) {
            return  "Password doest not match";
        }
        
    };
        
    return (
        <div className="signupform">
            {/* { isSubmit } */}
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
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            id="username"
                            value={username}
                            onChange={(e)=>{setUsername(e.target.value);}} required />
                    </div>
                    <p>{validateusername(username)}</p>

                    <div className="form-group">
                        <input type="text"
                            maxLength="10"
                            className="form-control"
                            pattern="[1-9]{1}[0-9]{9}"
                            placeholder="Enter Mobilenumber"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={(e)=> {setMobileName(e.target.value); }}
                            required />
                    </div>
                    <p>{validatemobile(mobileNumber)}</p>

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

                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            id="confirmPassword"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            value={confirmPassword}
                            onChange={(e)=>{setConfirmPassword(e.target.value); }}
                            required />
                    </div>
                    <p>{validateconfirmpassword(confirmPassword)}</p>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(email && mobileNumber && password && username && confirmPassword)? true : false}
                        onClick={handleSubmitClick}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default AddTrafficCop;