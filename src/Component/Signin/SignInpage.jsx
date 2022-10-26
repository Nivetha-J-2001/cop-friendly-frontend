import React , {useState} from "react";
import { useHistory } from "react-router-dom";
import Service from "../../Service/Service";
import '../../CSS/signinpage.css';
import { toast } from "react-toastify";

export default function SignInpage() {
    localStorage.clear();
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmitClick = (e) => 
    {
        e.preventDefault();
        let login={email:email,password:password}
        Service.signin(login).then((res) => {
            // console.log(JSON.stringify(res));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('useremail',res.data.email);
            localStorage.setItem('role',res.data.roles);
            localStorage.setItem('userid',res.data.id);
            toast.success("SignIn Successfully...");
            if(localStorage.getItem('role') === '[TRAFFIC COP]'){
                history.push("/trafficcop");
            }
            else if(localStorage.getItem('role') === '[MEDICAL TEAM]'){
                history.push("/medicalteam");
            }else if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]'){
                history.push("/trafficcentral");
            }
          }, (error) => {
            console.log(error);
            toast.error("Invalid email or password");
          });
           
    };
    
    const handleForgetClick = (e) =>{
        history.push("/forgetpassword");
    }

    // const validateemail = (email) => {
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
    //     if (!email) {
    //         return "Email is required!";
    //     } else if (!regex.test(email)) {
    //         return "This is not a valid email format!";
    //     }
    // };
    // const validatepassword=(password)=>{
    //     if (!password) {
    //         return  "Password is required";
    //     }         
    // };

    return(
        <section>
            <div className="imgBx">
                <img src="/Images/home.jpg" alt="home"></img>
            </div>
            <div className="contentBx">
                <div className="formBx">
                    <h2>Login</h2>
                    <form>
                        <div className="inputBx">
                            <span>Email</span>
                            <input type="email"
                            id="email"
                            value={email}
                            onChange={(e)=> {setEmail(e.target.value);}} required />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password"
                            id="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value); }}
                            required />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Submit" disabled={ !(email && password)? true : false}
                            onClick={handleSubmitClick} />
                        </div>
                        <div className="inputBx">
                            <input type="submit" value="Forget Password" id="reset"
                            onClick={handleForgetClick} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}