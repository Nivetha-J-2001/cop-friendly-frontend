import axios from "axios";

const REST_API_URL = "http://localhost:8080";

// axios.interceptors.request.use(function (config ) {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

class Service {

  //signup traffic cop
  createTrafficCop(trafficcop) {
    // console.log(axios.post(REST_API_URL +"/trafficcop/signup" , trafficcop))
    return axios.post(REST_API_URL +"/trafficcop/signup" , trafficcop);
  }

  //signup medical team
  createMedicalTeam(medicalteam) {
    return axios.post(REST_API_URL +"/medical/signup" , medicalteam);
  }

  //signup traffic central team
  createCentralTeam(centralteam) {
    return axios.post(REST_API_URL +"/trafficcentral/signup" , centralteam);
  }

  //signin 
  signin(login) {
    return axios.post(REST_API_URL + "/role/signin", login);
  }

  //check email for traffic cob
  checkcopemail(email) {
    return axios.get(REST_API_URL + "/trafficcop/email/" + email);
  }

  //check email for traffic central team
  checkcentralemail(email) {
    return axios.get(REST_API_URL + "/trafficcentral/email/" + email);
  }

  //check email for medical team
  checkmedicalemail(email) {
    return axios.get(REST_API_URL + "/medical/email/" + email);
  }
  //get user name
//checkUserName(userName) {
//  return axios.get(REST_API_URL + "/role/current-user" + userName);
//}

  //forget password
  forgetPassword(email) {
    return axios.post(REST_API_URL+"/forgetpassword/"+email);
  }

  //verify otp
  verifyOtp(email,otp) {
    return axios.post(REST_API_URL+"/verifyotp/"+email+"/"+otp);
  }

  //resset password
  updatePassword(user,password) {
    return axios.post(REST_API_URL+"/resetpassword" , user , password);
  }
  //violation details CURD Operation
  Addviolationdetails(violationdetails) {
    return axios.post(REST_API_URL + "/violationdetails/addviolationdetails", violationdetails);
  }
  FindViolationdetailsById(id) {
    return axios.get(REST_API_URL + "/violationdetails/" + id);
  }
  viewViolationdetails() {
    return axios.get(REST_API_URL + "/violationdetails/viewviolationdetails");
  }
  UpdateViolationdetails(violationdetails) {
    return axios.put(REST_API_URL + "/violationdetails/editviolationdetails",violationdetails);
  }
  deleteViolationdetails(id) {
    return axios.delete(REST_API_URL + "/violationdetails/deleteviolationdetails/" + id);
  }
  FindViolationdetailsByKeyword(search) {
    return axios.get(REST_API_URL + "/violationdetails/search/" + search);
  }
    
  //medical emergency CURD Operation
  AddMedicalemergency(medicalemergency) {
    return axios.post(REST_API_URL + "/medicalemergency/addmedicalemergency", medicalemergency);
  }
  FindMedicalemergencyById(id) {
    return axios.get(REST_API_URL + "/medicalemergency/" + id);
  }
  viewMedicalemergency() {
    return axios.get(REST_API_URL + "/medicalemergency/viewmedicalemergencies");
  }
  UpdateMedicalemergency(medicalemergency) {
    return axios.put(REST_API_URL + "/medicalemergency/editmedicalemergency",medicalemergency);
  }
  deleteMedicalemergency(id) {
    return axios.delete(REST_API_URL + "/medicalemergency/deletemedicalemergency/" + id);
  }
  FindMedicalemergencyByKeyword(search) {
    return axios.get(REST_API_URL + "/medicalemergency/search/" + search);
  }

  //additional cop CURD Operation
  AddAdditionalcop(additionalcop) {
    return axios.post(REST_API_URL + "/additionalcop/addadditionalcop", additionalcop);
  }
  FindAdditionalcopById(id) {
    return axios.get(REST_API_URL + "/additionalcop/" + id);
  }
  viewAdditionalcop() {
    return axios.get(REST_API_URL + "/additionalcop/viewadditionalcop");
  }
  UpdateAdditionalcop(additionalcop) {
    return axios.put(REST_API_URL + "/additionalcop/editadditionalcop",additionalcop);
  }
  deleteAdditionalcop(id) {
    return axios.delete(REST_API_URL + "/additionalcop/deleteadditionalcop/" + id);
  }
  FindAdditionalcopByKeyword(search) {
    return axios.get(REST_API_URL + "/additionalcop/search/" + search);
  }
}
export default new Service();
