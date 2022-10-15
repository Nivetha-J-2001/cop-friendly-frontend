import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signin from "./Component/Signin/Signin";
import AddMedicalTeam from "./Component/MedicalTeam/AddMedicalTeam";
import AddTrafficCentral from "./Component/TrafficCentral/AddTrafficCentral";
import AddTrafficCop from "./Component/TrafficCop/AddTrafficCop";
import TrafficCop from "./Component/TrafficCop/TrafficCop";
import TrafficCentral from "./Component/TrafficCentral/TrafficCentral";
import MedicalTeam from "./Component/MedicalTeam/MedicalTeam";
import Addusers from './Component/TrafficCentral/Addusers';
import ViewAdditionalCop from './Component/AdditionCop/ViewAdditionCop';
import ViewMedicalTeam from "./Component/MedicalTeam/ViewMedicalTeam";
import ViewViolationDetails from "./Component/ViolationDetails/ViewViolationDetails";
import AddAdditionalCop from "./Component/AdditionCop/AddAditionalCop";
import AddMedicalEmergency from "./Component/MedicalTeam/AddMedicalEmergency";
import AddViolationDetails from "./Component/ViolationDetails/AddViolationDetails"
import updateAdditionalCop from "./Component/AdditionCop/updateAdditionalCop";
import AdditionalCop from "./Component/AdditionCop/AdditionalCop";
import ForgetPassword from "./Component/Signin/ForgetPassword";


export default class Routing  extends Component {
  constructor(props) {
    super(props)
    this.state = {
            cop : false,
            central : false,
            medical : false,
    }
  }
render(){
 return (
  <div>
    <Router>
      <div>  
          <Route path = "/" exact component={Signin} />
          <Route path = "/forgetpassword" component={ForgetPassword} />
          <Route path = "/addcop" component={AddTrafficCop}/>
          <Route path = "/addcentral" component={AddTrafficCentral}/>
          <Route path = "/addmedical" component={AddMedicalTeam}/>
          <Route path = "/addusers" component = {Addusers} />
          <Route path = "/viewadditioncop" component={ViewAdditionalCop} />
          <Route path = "/viewmedicalteam" component={ViewMedicalTeam} />
          <Route path = "/trafficcentral" component={TrafficCentral} />
          <Route path = "/viewviolation" component={ViewViolationDetails} />
          <Route path = "/updateadditionalcop" component={updateAdditionalCop} />
          <Route path = "/additionalcop" component={AdditionalCop} />
          <Route path = "/trafficcop" component={TrafficCop} />
          <Route path = "/addadditionalcop" component={AddAdditionalCop} />
          <Route path = "/addmedicalemergency" component={AddMedicalEmergency} />
          <Route path = "/addviolationdetails" component={AddViolationDetails} />
          <Route path = "/medicalteam" component={MedicalTeam} />
      </div>
    </Router>
    <ToastContainer/>
  </div>
 );
}
}

