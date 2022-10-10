import { faUsers, faFileInvoice, faPeopleGroup, faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

import '../../CSS/trafficcentral.css';

export default function TrafficCentral()
{
    const history= useHistory();
    const handlesubmituser = (e)=>{
        e.preventDefault();
        history.push("/addusers");
    }
    const handlesubmitviolation = (e)=>{
        e.preventDefault();
        history.push("/viewviolation");
    }
    const handlesubmitmedical = (e)=>{
        e.preventDefault();
        history.push("/viewmedicalteam");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/additionalcop");
    }
    return (
        <div className="home">
            <h1>Cop eSeva portal</h1>
            <div className='flexbox'>
            <div className="card">
                        <div className="card-body">
                            <div alt="user1" >
                                <FontAwesomeIcon icon={faUsers} className="card-img"/>
                            </div>
                            <h4 className="card-title">Add Users</h4>
                            <button className="btn btn-primary" onClick={handlesubmituser}>add</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div alt="user1" >
                                <FontAwesomeIcon icon={faFileInvoice} className="card-img" />
                            </div>
                            <h4 className="card-title">Violation Details</h4>
                            <button className="btn btn-primary" onClick={handlesubmitviolation}>view</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div alt="user1" >
                                <FontAwesomeIcon icon={faPeopleGroup} className="card-img" />
                            </div>
                            <h4 className="card-title">Additional Cop</h4>
                            <button className="btn btn-primary" onClick={handlesubmitaddition}>Option</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div  alt="user1" >
                                <FontAwesomeIcon icon={faTruckMedical} className="card-img" />
                            </div>
                            <h4 className="card-title">Medical Team</h4>
                            <button className="btn btn-primary" onClick={handlesubmitmedical}>view</button>
                        </div>
                    </div>
                    
                </div>
        </div>
      
    );
}
