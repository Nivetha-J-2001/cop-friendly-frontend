import { faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/trafficcentral.css';

export default function AdditionalCop()
{
    const history= useHistory();
    const handlesubmitrequestaddition = (e)=>{
        e.preventDefault();
        history.push("/updateadditionalcop");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/viewadditioncop");
    }
    return (
        <div className="home">
            <Header />
            <div className='flexbox'>
                <div className="card">
                    <div className="card-body">
                        <div alt="user1" >
                            <FontAwesomeIcon icon={faPeopleGroup} className="card-img" />
                        </div>
                        <h4 className="card-title">Additional Cop</h4>
                        <button className="btn btn-primary" onClick={handlesubmitaddition}>view</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div  alt="user1" >
                            <FontAwesomeIcon icon={faPeopleGroup} className="card-img" />
                        </div>
                        <h4 className="card-title">Additional Cop</h4>
                        <button className="btn btn-primary" onClick={handlesubmitrequestaddition}>Request</button>
                    </div>
                </div>                    
            </div>
        </div>
    );
}
