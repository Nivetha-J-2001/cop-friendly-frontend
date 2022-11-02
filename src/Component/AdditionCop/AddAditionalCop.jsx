import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import Header from "../Header/Header"
import '../../CSS/form.css';
import { toast } from "react-toastify";
import ErrorPage from "../Error Page/ErrorPage";

export default function AddAdditioncalCop() {
    const history = useHistory();
    const [name,setname]=useState('');
    const [mobileNumber,setMobileName]=useState('');
    const [noOfRequired,setNoOfRequired]=useState('');
    const [location,setLocation]=useState('');
    let priority='';
    const level={priority};
    const [cop,setCop]=useState(false);
   useEffect(()=>{
        if(localStorage.getItem('role') === '[TRAFFIC COP]')
        {
            setCop(true);
        }
   },[])

    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let cop={name:name,phoneNumber:mobileNumber,noOfRequired:noOfRequired,location:location,priority:priority
            ,user:{id:localStorage.getItem('userid')}};
        Service.AddAdditionalcop(cop).then((response) => {
            // console.log(response);
            toast.success("Added Successfully");
            history.push('/trafficcop/home');
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
            // console.log(error);
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
        { cop && 
        <section>
            <div className="imgBx">
                <img src="/Images/home.jpg" alt="home"></img>
            </div>
            <div className="content">
                <div className="formBx">
                    <h2>Add Additional Cop</h2>
                    <form>
                        <div className="inputBx">
                            <input type="text"
                            placeholder="Enter name"
                            id="name"
                            value={name}
                            onChange={(e)=> {setname(e.target.value);}} required />
                            <p>{ validatename(name)}</p>
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
                            <input type="number"
                            className="form-control"
                            placeholder="Enter No of Required cop"
                            id="noOfRequired"
                            value={noOfRequired}
                            onChange={(e)=>{setNoOfRequired(e.target.value); }}
                            required />
                            <p>{validatenoofreqired(noOfRequired)}</p>
                        </div>
                        <div className="inputBx">
                            <input type="text"
                            className="form-control"
                            placeholder="Enter Loctaion"
                            id="location"
                            value={location}
                            onChange={(e)=>{setLocation(e.target.value); }}
                            required />
                            <p>{validatelocation(location)}</p>
                        </div>
                        <div className="inputBx">
                        <select  onChange={(e)=>{ priority = e.target.value}}>           
                            <option >select Priority</option>
                            <option value="Very Low">Very Low</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                            <option value="Very High">Very High</option>
                        </select>
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Submit" disabled={ !(name && mobileNumber && level && noOfRequired && location)? true : false}
                        onClick={handleSubmitClick} />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Reset" id="reset"
                        onClick={handleresetClick} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        }
        {!cop && 
            <ErrorPage />
        }
        </>
    );
}
