import { faUsers, faFileInvoice, faPeopleGroup, faTruckMedical} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import '../../CSS/card.css';
import ErrorPage from "../Error Page/ErrorPage";
import Header from "../Header/Header";

export default function TrafficCentral()
{
    const history= useHistory();
    const [central,setCentral]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            setCentral(true);
        }
    },[])
    const handlesubmituser = (e)=>{
        e.preventDefault();
        history.push("/trafficcentral/users");
    }
    const handlesubmitviolation = (e)=>{
        e.preventDefault();
        history.push("/trafficcentral/violationdetails");
    }
    const handlesubmitmedical = (e)=>{
        e.preventDefault();
        history.push("/trafficcentral/medicalteams");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/trafficcentral/additioncop/home");
    }
    return (
        <>
        { central &&
        <div className="main">
            <Header />
            <div className='flexbox'>
                <div className="responsive">
                    <div className="gallery">
                        <FontAwesomeIcon icon={faUsers} className="img"/>
                        <div className="desc">
                            <h3>Add Users</h3>
                            <input type="button"  onClick={handlesubmituser}value="Add" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <FontAwesomeIcon icon={faFileInvoice} className="img" />
                        <div className="desc">
                            <h3>Violation Details</h3>
                            <input type="button" onClick={handlesubmitviolation} value="view" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <FontAwesomeIcon icon={faPeopleGroup} className="img" />
                        <div className="desc">
                            <h3>Additional Cop</h3>
                            <input type="button" onClick={handlesubmitaddition} value="Option" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <FontAwesomeIcon icon={faTruckMedical} className="img" />
                        <div className="desc">
                            <h3>Medical Team</h3>
                            <input type="button" onClick={handlesubmitmedical} value="View" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        { !central &&
            <ErrorPage/>
        }
        </>
    );
}
