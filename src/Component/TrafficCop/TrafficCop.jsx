import { faFileInvoice, faPeopleGroup, faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/trafficcentral.css';
import ErrorPage from "../Error Page/ErrorPage";

export default function TrafficCop()
{    
    const history= useHistory();
    const [cop,setCop]=useState(false);
    useEffect(() => {
        if(localStorage.getItem('role') === '[TRAFFIC COP]')
        {
            setCop(true);
        }
        
    }, [])
    
    
    const handlesubmitviolation = (e)=>{
        e.preventDefault();
        history.push("/AddViolationDetails");
    }
    const handlesubmitmedical = (e)=>{
        e.preventDefault();
        history.push("/addmedicalemergency");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/addadditionalcop");
    }
    return (
        <>
        { cop &&
            <div className="home">
                <Header />
                <div className='flexbox'>
                        <div className="card">
                            <div className="card-body">
                                <div alt="user1" >
                                    <FontAwesomeIcon icon={faFileInvoice} className="card-img" />
                                </div>
                                <h4 className="card-title">Violation Details</h4>
                                <button className="btn btn-primary" onClick={handlesubmitviolation}>Add</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div alt="user1" >
                                    <FontAwesomeIcon icon={faPeopleGroup} className="card-img" />
                                </div>
                                <h4 className="card-title">Additional Cop</h4>
                                <button className="btn btn-primary" onClick={handlesubmitaddition}>Add</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div  alt="user1" >
                                    <FontAwesomeIcon icon={faTruckMedical} className="card-img" />
                                </div>
                                <h4 className="card-title">Medical Team</h4>
                                <button className="btn btn-primary" onClick={handlesubmitmedical}>Add</button>
                            </div>
                        </div>
                        
                    </div>
            </div>}
        { !cop &&
            <ErrorPage />
        }
        </>
    );
}
