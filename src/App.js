import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
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


function App() {
 return (
  <div>
    <Router>
      <div> 
        <Route path = "/" exact component={Signin} />
        <Route path = "/forgetpassword" component={ForgetPassword} />
        <Route path = "/addcop" component={AddTrafficCop}/>
        <Route path = "/addcentral" component={AddTrafficCentral}/>
        <Route path = "/addmedical" component={AddMedicalTeam}/>
        <Route path = "/trafficcop" component={TrafficCop} />
        <Route path = "/trafficcentral" component={TrafficCentral} />
        <Route path = "/medicalteam" component={MedicalTeam} />
        <Route path = "/addusers" component = {Addusers} />
        <Route path = "/viewadditioncop" component={ViewAdditionalCop} />
        <Route path = "/viewmedicalteam" component={ViewMedicalTeam} />
        <Route path = "/viewviolation" component={ViewViolationDetails} />
        <Route path = "/addadditionalcop" component={AddAdditionalCop} />
        <Route path = "/addmedicalemergency" component={AddMedicalEmergency} />
        <Route path = "/addviolationdetails" component={AddViolationDetails} />
        <Route path = "/updateadditionalcop" component={updateAdditionalCop} />
        <Route path = "/additionalcop" component={AdditionalCop} />
      </div>
    </Router>
  </div>
 );
}

export default App;
