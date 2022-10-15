import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/signin.css';
import { toast } from "react-toastify";

export default function ForgetPassword() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [visibleotp,setVisibleotp]=useState(false);
    const [otp,setOtp]=useState('');
    const [visiblepass,setVisiblepass]=useState(false);
    const [password,setPassword]=useState('');

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

    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        if(otp.length === 0 && setVisibleotp)
        {
        Service.forgetPassword(email).then((response) => {
            setVisibleotp(true);
            toast.success("Mail Send Successfully");
            setVisibleotp(true);
          }, (error) => {
            console.log(error);
            toast.error("Invalid email");
          });
        }
        else if(otp.length>0 && visibleotp)
        {
            Service.verifyOtp(email,otp).then((response) =>{
                setVisibleotp(false);
                setVisiblepass(true);
                toast.success("Verified !!");
            }, (error)=>{
                console.log(error);
                toast.error("invalid Otp");
            });
        }
        else {
            Service.updatePassword(email,password).then((response) => {
                toast.success("Password changed");
                history.push("/");
            },(error)=>{
                toast.error("Unsuccessful");
                console.log(error);
            });
        }
        
    };
    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push('/');
    };
    
    const validateemail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!email) {
            return "Email is required!";
        } else if (!regex.test(email)) {
            return "This is not a valid email format!";
        }
    }
    return (
        <div className="Head">
            <h1>Forget Password</h1>
        <div className="signupform">
            <form>
                <h3 className="text-white">Forget password</h3>
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
                    {
                        visibleotp &&

                        <div className="form-group">
                            <input type="number"
                            maxLength="6"
                            className="form-control"
                            placeholder="Enter Otp"
                            id="otp"
                            value={otp}
                            onChange={ (e) => {setOtp(e.target.value);}}
                            required/>
                        </div>
                    }
                    {
                        visiblepass && 
                        <>
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
                        </>
                        
                    }
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(email)? true : false}
                        onClick={handleSubmitClick}>Submit</button>
                        <button type="submit" className="btn btn-primary" id="resetButton"
                        onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}