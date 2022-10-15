import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import '../../CSS/trafficcentral.css';

export default function Addusers()
{
    const history= useHistory();
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
        <div className="home">
            <Header />
            <div className='flexbox'>
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top" src="/Images/user1.jpg" alt="user1" />
                            <h4 className="card-title">Traffic cop</h4>
                            <button className="btn btn-primary" onClick={handlesubmitcop}>Add</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top" src="/Images/user2.jpg" alt="user1" />
                            <h4 className="card-title">Traffic Central Team</h4>
                            <button className="btn btn-primary" onClick={handlesubmitcentral}>Add</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top" src="/Images/user3.jpg" alt="user1" />
                            <h4 className="card-title">Medical Team</h4>
                            <button className="btn btn-primary" onClick={handlesubmitmedical}>Add</button>
                        </div>
                    </div>
                </div>
        </div>
      
    );
}