import axios from "axios";

const REST_API_URL = "http://localhost:8080";

  axios.interceptors.request.use(function (config ) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

class Service {

  //signup traffic cop
  createTrafficCop(trafficcop) {
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
    return axios.post(REST_API_URL + "/signin", login);
  }

  //check email for traffic cob
  checkemail(email) {
    return axios.get(REST_API_URL + "/trafficcop/email/" + email);
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

  //reset password
  updatePassword(email,password) {
    return axios.post(REST_API_URL+"/resetpassword/"+ email+"/"+ password);
  }
  //violation details CURD Operation
  Addviolationdetails(violationdetails) {
    return axios.post(REST_API_URL + "/violationdetail", violationdetails);
  }
  FindViolationdetailsById(id) {
    return axios.get(REST_API_URL + "/violationdetail/" + id);
  }
  viewViolationdetails() {
    return axios.get(REST_API_URL + "/violationdetails");
  }
  UpdateViolationdetails(violationdetails) {
    return axios.put(REST_API_URL + "/violationdetails/violationdetail",violationdetails);
  }
  deleteViolationdetails(id) {
    return axios.delete(REST_API_URL + "/violationdetails/violationdetail/" + id);
  }
  FindViolationdetailsByKeyword(search) {
    return axios.get(REST_API_URL + "/violationdetails/" + search);
  }
    
  //medical emergency CURD Operation
  AddMedicalemergency(medicalemergency) {
    return axios.post(REST_API_URL + "/medicalemergency", medicalemergency);
  }
  FindMedicalemergencyById(id) {
    return axios.get(REST_API_URL + "/medicalemergencies/" + id);
  }
  viewMedicalemergency() {
    return axios.get(REST_API_URL + "/medicalemergencies");
  }
  UpdateMedicalemergency(medicalemergency) {
    return axios.put(REST_API_URL + "/medicalemergencies/medicalemergency",medicalemergency);
  }
  deleteMedicalemergency(id) {
    return axios.delete(REST_API_URL + "/medicalemergencies/medicalemergency/" + id);
  }
  FindMedicalemergencyByKeyword(search) {
    return axios.get(REST_API_URL + "/medicalemergencies/" + search);
  }

  //additional cop CURD Operation
  AddAdditionalcop(additionalcop) {
    return axios.post(REST_API_URL + "/additionalcop", additionalcop);
  }
  FindAdditionalcopById(id) {
    return axios.get(REST_API_URL + "/additionalcop/" + id);
  }
  viewAdditionalcop() {
    return axios.get(REST_API_URL + "/additionalcops");
  }
  UpdateAdditionalcop(additionalcop) {
    return axios.put(REST_API_URL + "/additionalcops/additionalcop",additionalcop);
  }
  deleteAdditionalcop(id) {
    return axios.delete(REST_API_URL + "/additionalcops/additionalcop/" + id);
  }
  FindAdditionalcopByKeyword(search) {
    return axios.get(REST_API_URL + "/additionalcops/" + search);
  }
}
export default new Service();
