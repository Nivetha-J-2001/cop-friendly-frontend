import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/card.css';
import ErrorPage from "../Error Page/ErrorPage";

export default function Addusers()
{
    const history= useHistory();
    const [central,setCentral]=useState(false);
    useEffect(()=>{
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            setCentral(true);
        }
    },[])
    const handlesubmitcop = (e)=>{
        e.preventDefault();
        history.push("/addcop");
    }
    const handlesubmitcentral = (e)=>{
        e.preventDefault();
        history.push("/addcentral");
    }
    const handlesubmitmedical = (e)=>{
        e.preventDefault();
        history.push("/addmedical");
    }
    return (
        <>
        { central &&            
        <div className="main">
            <Header />
            <div className='flexbox'>
                <div className="responsive">
                    <div className="gallery">
                        <img className="img" src="/Images/user1.jpg" alt="user1" />
                        <div className="desc">
                            <h3> Traffic Cop</h3>
                            <input type="button" onClick={handlesubmitcop} value="Add" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img  className="img" src="/Images/user2.jpg" alt="user1" />
                        <div className="desc">
                            <h3>Traffic Central</h3>
                            <input type="button"  onClick={handlesubmitcentral} value="Add" />
                        </div>
                    </div>
                </div>
                <div className="responsive">
                    <div className="gallery">
                        <img className="img" src="/Images/user3.jpg" alt="user1" />
                        <div className="desc">
                            <h3>Medical Team</h3>
                            <input type="button" onClick={handlesubmitmedical} value="Add" />
                        </div>
                    </div>
                </div>
            </div>
        </div>}
        { !central &&
            <ErrorPage />
        }
      </>
    );
}