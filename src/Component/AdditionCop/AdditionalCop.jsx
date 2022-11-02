import { faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/form.css';
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
        history.push("/trafficcentral/additionalcop");
    }
    const handlesubmitaddition =(e)=>{
        e.preventDefault();
        history.push("/trafficcentral/additionalcops");
    }
    return (
        <>
        { central && 
        <div className="main">
            <Header />
            <div className='flexbox'>
                <div className="responsive">
                    <div className="gallery">
                        <FontAwesomeIcon icon={faPeopleGroup} className="img" />
                        <div className="desc">
                            <h3>Additional Cop</h3>
                            <input type="button" onClick={handlesubmitaddition} value="View" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                        <div className="gallery">
                            <FontAwesomeIcon icon={faPeopleGroup} className="img" />
                            <div className="desc">
                                <h3>Additional Cop</h3>
                                <input type="button" onClick={handlesubmitrequestaddition} value="Request" />
                            </div>
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
