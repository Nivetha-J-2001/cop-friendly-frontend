import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/addviolation.css';

export default function AddAdditioncalCop() {
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
    const level={PaymentStatus};

    
    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let details={name:ViolatorName,licenceNo:LicenceNo,violationType:violationType,vehicleType:VehicleType,
            location:Location,mailId:MailId,mobileNumber:mobileNumber,date:date,time:time,
            fineAmount:fineAmount,paymentType:paymentType,paymentStatus:level};
        console.log(details);
        Service.Addviolationdetails(details).then((response) => {
            // console.log(response);
            alert("Added Successfully");
            history.push('/trafficcop');
          }, (error) => {
            console.log(error);
          });
        
    };
    
    const handleresetClick = (e) => {
        e.preventDefault();
        
    
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
        <div className="head">
            <h1>Violation Detail</h1>

        <div className="signupform" >
            <form className="register">
                <h3 className="text-white">Register</h3>
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
                            placeholder="Enter Vehicle Type"
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
                        <select  onChange={(e)=>{ PaymentStatus = e.target.value; }}>           
                            <option >select Payment Status</option>
                            <option value="Success">Success</option>
                            <option value="Failed">Failed</option>
                        </select>
                    </div>                    
                    
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" id="submitButton"
                        disabled={ !(ViolatorName && violationType && LicenceNo && VehicleType && 
                            Location && MailId && mobileNumber && date && time && fineAmount
                            && paymentType )? true : false}
                        onClick={handleSubmitClick}>Submit</button>

                        <button type="reset" className="btn btn-danger" id="resetButton"
                        onClick={handleresetClick}>Reset</button>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
}