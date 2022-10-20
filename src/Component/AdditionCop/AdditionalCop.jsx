import { faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/trafficcentral.css';
import ErrorPage from "../Error Page/ErrorPage";

export default function AdditionalCop()
{
    const [central,setCentral]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            setCentral(true);
        }
    },[])
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
        <>
        { central && 
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
        }
        { !central &&
            <ErrorPage />
        }
        </>
    );
}
