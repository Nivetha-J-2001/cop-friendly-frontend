import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signin from "./Component/Signin/SignInpage";
import AddMedicalTeam from "./Component/MedicalTeam/AddMedicalTeam";
import AddTrafficCentral from "./Component/TrafficCentral/AddTrafficCentral";
import AddTrafficCop from "./Component/TrafficCop/AddTrafficCop";
import TrafficCop from "./Component/TrafficCop/TrafficCop";
import TrafficCentral from "./Component/TrafficCentral/TrafficCentral";
import MedicalTeam from "./Component/MedicalTeam/UpdateMedicalEmergency";
import Addusers from './Component/TrafficCentral/Addusers';
import ViewAdditionalCop from './Component/AdditionCop/ViewAdditionCop';
import ViewMedicalTeam from "./Component/MedicalTeam/ViewMedicalEmergency";
import ViewViolationDetails from "./Component/ViolationDetails/ViewViolationDetails";
import AddAdditionalCop from "./Component/AdditionCop/AddAditionalCop";
import AddMedicalEmergency from "./Component/MedicalTeam/AddMedicalEmergency";
import AddViolationDetails from "./Component/ViolationDetails/AddViolationDetails"
import updateAdditionalCop from "./Component/AdditionCop/updateAdditionalCop";
import AdditionalCop from "./Component/AdditionCop/AdditionalCop";
import ForgetPassword from "./Component/Signin/ForgetPassword";

export default function Routing() {

 return (
  <div>
    <Router>
      <div>  
              <Route path = "/" exact component={Signin} />
              <Route path = "/forgetpassword" component={ForgetPassword} />
              <Route path = "/trafficcentral/users/trafficcop" component={AddTrafficCop } />
              <Route path = "/trafficcentral/users/trafficcentral" component={AddTrafficCentral}/>
              <Route path = "/trafficcentral/users/medicalteam" component={AddMedicalTeam}/>
              <Route path = "/trafficcentral/users" component = {Addusers} />
              <Route path = "/trafficcentral/additionalcops" component={ViewAdditionalCop} />
              <Route path = "/trafficcentral/medicalteams" component={ViewMedicalTeam} />
              <Route path = "/trafficcentral/home" component={TrafficCentral} />
              <Route path = "/trafficcentral/violationdetails" component={ViewViolationDetails} />
              <Route path = "/trafficcentral/additionalcop" component={updateAdditionalCop} />
              <Route path = "/trafficcentral/additioncop/home" component={AdditionalCop} />
              <Route path = "/trafficcop/home" component={TrafficCop } />
              <Route path = "/trafficcop/additionalcop" component={AddAdditionalCop} />
              <Route path = "/trafficcop/medicalemergency" component={AddMedicalEmergency} />
              <Route path = "/trafficcop/violationdetail" component={AddViolationDetails} />
              <Route path = "/medicalteam/home" component={MedicalTeam} />
      </div>
    </Router>
    <ToastContainer 
    position="top-center"
    autoClose={3000}
    newestOnTop={true}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}/>
  </div>
 );
}

