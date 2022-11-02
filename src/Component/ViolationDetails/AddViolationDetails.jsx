import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/addviolation.css';
import Header from "../Header/Header";
import { toast } from "react-toastify";
import ErrorPage from "../Error Page/ErrorPage";

export default function Addviolationdetails() {
    const history = useHistory();
    const [ViolatorName,setViolatorName]=useState('');
    const [LicenceNo,setLicenceNo]=useState('');
    const [violationType,setViolationType]=useState('');
    const [VehicleType,setVehicleType]=useState('');
    const [Location,setLocation]=useState('');
    const [MailId,setMailId]=useState('');
    const [mobileNumber,setMobileName]=useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('');
    const [fineAmount,setFineAmount]=useState(0);
    const [paymentType,setPaymentType]=useState('');
    let PaymentStatus = '';
    const [visible,setVisible]=useState(false);
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
        if(!visible)
        {
            setFineAmount(0);
            setPaymentType(null);
            PaymentStatus=null;
        }
        let details={name:ViolatorName,licenceNo:LicenceNo,violationType:violationType,vehicleType:VehicleType,
            location:Location,mailId:MailId,mobileNumber:mobileNumber,date:date,time:time,
            fineAmount:fineAmount,paymentType:paymentType,paymentStatus:PaymentStatus,user:{id:localStorage.getItem('userid')}};
        // console.log(details);
       Service.Addviolationdetails(details).then((response) => {
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
          });
        
    };
    
    const handleresetClick = (e) => {
        e.preventDefault();
        setViolatorName('');
        setLicenceNo('');
        setViolationType('');
        setVehicleType('');
        setLocation('');
        setMailId('');
        setMobileName('');
        setDate('');
        setTime('');
        setFineAmount('');
        setPaymentType('');
        PaymentStatus='';
        
    
    }
    const validate = (name)=>{
        if (!name) {
            return  "required!";
        }
    };
    const validatemobile=(mobileNumber)=>{
        
        if (!mobileNumber) {
            return  "required!";
        }
        else if (mobileNumber.length < 10 ) {
            return  "Enter a valid mobile number";
        }
    };
    const validatelicenceno =(LicenceNo)=>{

        if(! LicenceNo)
        {
            return "required!";
        }
        else if(LicenceNo.length < 15)
        {
            return "Valid format : AA1234567890000";
        }
        
    };
    
    const validatemailid =(MailId)=>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        
        if (!MailId) {
            return "required!";
        } else if (!regex.test(MailId)) {
            return "This is not a valid email format!";
        }
    };
        
    return (
        <>
            <Header />
        { cop &&
        <section>
            <div className="imgbx">
                <img src="/Images/home.jpg" alt="home"></img>
            </div>
            <div className="contentbx">
                <div className="formbx">
                <h2>Add Violation Details</h2>
                <form>
                    <div className="inputbx">
                        <input type="text"
                            placeholder="Enter Violator Name"
                            id="name"
                            value={ViolatorName}
                            onChange={(e)=> {setViolatorName(e.target.value);}} required />
                        <p>{ validate(ViolatorName)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="text"
                            pattern="[A-za-z]{2}[0-9]{13}"
                            placeholder="Enter Licence Number"
                            id="licenceNo"
                            value={LicenceNo}
                            onChange={(e)=> {setLicenceNo(e.target.value); }}
                            required />
                    <p>{validatelicenceno(LicenceNo)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="text"
                            placeholder="Enter Violation Type"
                            id="violationtype"
                            value={violationType}
                            onChange={(e)=> {setViolationType(e.target.value); }}
                            required />
                        <p>{validate(violationType)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="text"
                            placeholder="Enter Vehicle Number"
                            id="vehicletype"
                            value={VehicleType}
                            onChange={(e)=> {setVehicleType(e.target.value); }}
                            required />
                        <p>{validate(VehicleType)}</p>
                    </div>
                    <div className="inputbx">
                    <input type="text"
                           placeholder="Enter Location"
                            id="location"
                            value={Location}
                            onChange={(e)=> {setLocation(e.target.value); }}
                            required />
                    <p>{validate(Location)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="email"
                            placeholder="Enter email"
                            id="email"
                            value={MailId}
                            onChange={(e)=> {setMailId(e.target.value); }}
                            required />
                        <p>{validatemailid(MailId)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="text"
                            maxLength="10"
                            pattern="[1-9]{1}[0-9]{9}"
                            placeholder="Enter Mobilenumber"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={(e)=> {setMobileName(e.target.value); }}
                            required />
                        <p>{validatemobile(mobileNumber)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="date"
                            className="form-control"
                            placeholder="Enter date"
                            id="date"
                            value={date}
                            onChange={(e)=> {setDate(e.target.value); }}
                            required />
                        <p>{validate(date)}</p>
                    </div>
                    <div className="inputbx">
                        <input type="time"
                            className="form-control"
                            placeholder="Enter Time"
                            id="time"
                            value={time}
                            onChange={(e)=>{setTime(e.target.value); }}
                            required />
                        <p>{validate(time)}</p>
                    </div>
                    <div className="inputbx" >
                    <span>Fine :</span>
                        <button value="Yes" onClick={ ()=>setVisible(true)} className="fine">Yes</button>
                        <button value="No" onClick={ ()=>setVisible(false)} className="fine">No</button>
                    </div>
                    { visible &&
                        <>
                            <div className="inputbx">
                                <input type="number"
                                    placeholder="Enter fine amount"
                                    id="fineamount"
                                    value={fineAmount}
                                    onChange={(e)=> {setFineAmount(e.target.value); }}
                                    required />
                                <p>{validate(fineAmount)}</p>
                            </div>                            
                            <div className="inputbx">
                                <input type="text"
                                    placeholder="Enter Payment Type"
                                    id="paymentType"
                                    value={paymentType}
                                    onChange={(e)=>{setPaymentType(e.target.value); }}
                                    required />
                                <p>{validate(paymentType)}</p>
                            </div>
                            <div className="inputbx">
                                <select  onChange={(e)=>{ PaymentStatus = e.target.value; console.log(PaymentStatus); }}>           
                                    <option >select Payment Status</option>
                                    <option value="Success">Success</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div> 
                        </>                   
                    }
                    <div className="inputbx">
                    <input type="submit" value="Submit" 
                    disabled={ !(ViolatorName && violationType && LicenceNo && VehicleType && 
                        Location && MailId && mobileNumber && date && time)? true : false}
                    onClick={handleSubmitClick} />
                    </div>
                    <div className="inputbx">
                    <input type="submit" value="Reset" id="reset"
                        onClick={handleresetClick} />
                    </div>                    
                </form>
                </div>
            </div>
        </section>
        }
        { !cop &&
            <ErrorPage />
        }
        </>
    );
}
