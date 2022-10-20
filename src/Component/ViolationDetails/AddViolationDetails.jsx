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
    const [fineAmount,setFineAmount]=useState('');
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
        { cop &&
        <div>
            <Header />

        <div className="signupform" >
            <form className="register">
                <h3 className="text-white">Violation Detail</h3>
                <div className="form-item">
                    
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Violator Name"
                            id="name"
                            value={ViolatorName}
                            onChange={(e)=> {setViolatorName(e.target.value);}} required />
                    </div>
                    <p>{ validate(ViolatorName)}</p>

                    <div className="form-group">
                        <input type="text"
                            // max="15"
                            pattern="[A-za-z]{2}[0-9]{13}"
                            className="form-control"
                            placeholder="Enter Licence Number"
                            id="licenceNo"
                            value={LicenceNo}
                            onChange={(e)=> {setLicenceNo(e.target.value); }}
                            required />
                    </div>
                    <p>{validatelicenceno(LicenceNo)}</p>

                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Violation Type"
                            id="violationtype"
                            value={violationType}
                            onChange={(e)=> {setViolationType(e.target.value); }}
                            required />
                    </div>
                    <p>{validate(violationType)}</p>
                    
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Vehicle Number"
                            id="vehicletype"
                            value={VehicleType}
                            onChange={(e)=> {setVehicleType(e.target.value); }}
                            required />
                    </div>
                    <p>{validate(VehicleType)}</p>
                    
                    <div className="form-group">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Location"
                            id="location"
                            value={Location}
                            onChange={(e)=> {setLocation(e.target.value); }}
                            required />
                    </div>
                    <p>{validate(Location)}</p>
                                 
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            placeholder="Enter email"
                            id="email"
                            value={MailId}
                            onChange={(e)=> {setMailId(e.target.value); }}
                            required />
                    </div>
                    <p>{validatemailid(MailId)}</p>
                           
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
                        <input type="date"
                            className="form-control"
                            placeholder="Enter date"
                            id="date"
                            value={date}
                            onChange={(e)=> {setDate(e.target.value); }}
                            required />
                    </div>
                    <p>{validate(date)}</p>
                    
                    <div className="form-group">
                        <input type="time"
                            className="form-control"
                            placeholder="Enter Time"
                            id="time"
                            value={time}
                            onChange={(e)=>{setTime(e.target.value); }}
                            required />
                    </div>
                    <p>{validate(time)}</p>
                    
                    <div className="form-group row" id="radioselect">
                        <label className="col-sm-3 col-form-label" id="fine">Fine :</label>
                        <div className="col-sm-2 mt-2">
                        Yes<input type="radio" className="mx-2" name="isyes" value="1" onClick={ ()=>setVisible(true)} />
                        </div>
                        <div className="col-sm-2 mt-2"> 
                        No<input type="radio" className="mx-2 mt-1" name="isyes" value="0" onClick={ ()=>setVisible(false)} />
                        </div>
                    </div>
                    { visible &&
                        <>
                            <div className="form-group">
                                <input type="number"
                                    className="form-control"
                                    placeholder="Enter fine amount"
                                    id="fineamount"
                                    value={fineAmount}
                                    onChange={(e)=> {setFineAmount(e.target.value); }}
                                    required />
                            </div>
                            <p>{validate(fineAmount)}</p>
                            
                            <div className="form-group">
                                <input type="text"
                                    className="form-control"
                                    placeholder="Enter Payment Type"
                                    id="paymentType"
                                    value={paymentType}
                                    onChange={(e)=>{setPaymentType(e.target.value); }}
                                    required />
                            </div>
                            <p>{validate(paymentType)}</p>

                            
                            <div className="form-group">
                                <select  onChange={(e)=>{ PaymentStatus = e.target.value; console.log(PaymentStatus); }}>           
                                    <option >select Payment Status</option>
                                    <option value="Success">Success</option>
                                    <option value="Failed">Failed</option>
                                </select>
                            </div> 
                        </>                   
                    }
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(ViolatorName && violationType && LicenceNo && VehicleType && 
                            Location && MailId && mobileNumber && date && time)? true : false}
                        onClick={handleSubmitClick}>Submit</button>

                        <button type="reset" className="btn btn-danger" id="resetButton"
                        onClick={handleresetClick}>Reset</button>
                        
                    </div>
                </div>
            </form>
        </div>
        </div>}
        { !cop &&
            <ErrorPage />
        }
        </>
    );
}
