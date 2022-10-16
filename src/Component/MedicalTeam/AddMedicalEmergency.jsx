import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/signin.css';
import Header from "../Header/Header";
import { toast } from "react-toastify";
import ErrorPage from "../ErrorPage/ErrorPage";

export default function AddMedicalEmergency() {
    const history = useHistory();
    const [name,setname]=useState('');
    const [mobileNumber,setMobileName]=useState('');
    const [noOfRequired,setNoOfRequired]=useState('');
    const [location,setLocation]=useState('');
    let priority='';
    const level={priority};
    
    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let medical={name:name,phoneNumber:mobileNumber,noOfAffected:noOfRequired,location:location,priority:priority
            ,user:{id:localStorage.getItem('userid')}};
        Service.AddMedicalemergency(medical).then((response) => {
            // console.log(response);
            toast.success("Added Successfully");
            history.push('/trafficcop');
          }, (Error) => {
            let message;    
                if (Error['response'].status === 409) {
                    message = 'Details Already Present !'
                } else if(Error['response'].status === 401 )
                {
                    message = "Invalid Credentials"
                }else if(Error['response'].status === 404 )
                {
                    <ErrorPage/>
                } else {
                    message = 'OPPS! Network error';
                }    
                toast.error(message);
          });
        
    };
    
    const handleresetClick = (e) => {
        e.preventDefault();
        setname('');
        setMobileName('');
        setNoOfRequired('');
        setLocation('');
        priority='';
    
    }
    const validatename = (name)=>{
        if (!name) {
            return  "Name is required!";
        }
    };
    const validatemobile=(mobileNumber)=>{
        
        if (!mobileNumber) {
            return  "mobile Number is required!";
        }
        else if (mobileNumber.length < 10 ) {
            return  "Enter a valid mobile number";
        }
    };
    
    const validatenoofreqired =(noofrequired) => {
        if(! noofrequired) {
            return "No of Required is required";
        }
        
    };
    const validatelocation =(location) => {

        if(! location) {
            return "Location is required";
        }
    };
    
        
    return (
        <>
        <Header/>
        <div className="signupform">
            <form>
                <h3 className="text-white">Add Medical Emergency</h3>
                <div className="form-item">
                    
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter name"
                            id="name"
                            value={name}
                            onChange={(e)=> {setname(e.target.value);}} required />
                    </div>
                    <p>{ validatename(name)}</p>

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
                        <input type="number"
                            className="form-control"
                            placeholder="Enter No of Required Meadical Team"
                            id="noOfRequired"
                            value={noOfRequired}
                            onChange={(e)=>{setNoOfRequired(e.target.value); }}
                            required />
                    </div>
                    <p>{validatenoofreqired(noOfRequired)}</p>

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Loctaion"
                            id="location"
                            value={location}
                            onChange={(e)=>{setLocation(e.target.value); }}
                            required />
                    </div>
                    <p>{validatelocation(location)}</p>

                    <div className="form-group">
                    <select  onChange={(e)=>{ priority = e.target.value ;}}>           
                        <option >select Priority</option>
                        <option value="Very Low">Very Low</option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                        <option value="Very High">Very High</option>
                    </select>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(name && mobileNumber && level && noOfRequired && location)? true : false}
                        onClick={handleSubmitClick}>Submit</button>

                        <button type="reset" className="btn btn-danger" id="resetButton"
                        onClick={handleresetClick}>Reset</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}
