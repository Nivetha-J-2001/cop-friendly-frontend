import { faFilePen, faPeopleGroup, faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/card.css';
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
        history.push("/trafficcop/violationdetail");
    }
    const handlesubmitmedical = (e)=>{
        e.preventDefault();
        history.push("/trafficcop/medicalemergency");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/trafficcop/additionalcop");
    }
    return (
        <>
        { cop &&
            <div className="main">
                <Header/>
                <div className="flexbox">
                    <div className="responsive">
                        <div className="gallery">
                            <FontAwesomeIcon icon={faFilePen} className="img" />
                            <div className="desc">
                                <h3 >Violation Details</h3>
                                <input type="button"  onClick={handlesubmitviolation} value="Add" />
                            </div>
                        </div>
                    </div>
                    <div className="responsive">
                        <div className="gallery">
                            <FontAwesomeIcon icon={faPeopleGroup} className="img" />
                            <div className="desc">
                                <h3>Additional Cop</h3>
                                <input type="button" onClick={handlesubmitaddition} value="Add" />
                            </div>
                        </div>
                    </div>
                    <div className="responsive">
                        <div className="gallery">
                            <FontAwesomeIcon icon={faTruckMedical} className="img" />
                            <div className="desc">
                                <h3 >Medical Team</h3>
                                <input type="button"  onClick={handlesubmitmedical} value="Add" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        { !cop &&
            <ErrorPage />
        }
        </>
    );
}
