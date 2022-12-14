import React, { Component} from 'react';
import Service from '../../Service/Service';
import "../../CSS/view.css";
import Header from '../Header/Header';
import { toast } from 'react-toastify';
import ErrorPage from '../Error Page/ErrorPage';
export default class ViewMedicalTeam  extends Component{
    constructor(props) {
        super(props)
        this.state = {
                MedicalEmergency: [],
                search : '',
                central: false,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    componentDidMount(){
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            this.setState({central : true});
        }
        Service.viewMedicalemergency().then((res)=>{
            this.setState( { MedicalEmergency : res.data} );
                // console.log(MedicalEmergency);
            },(Error)=>{
                let message;    
                if(Error['response'].status === 401 )
                {
                    message = "Invalid Credentials"
                }else if(Error['response'].status === 404 )
                {
                    message = "Page Not Found";
                } else {
                    message = 'OPPS! Network error';
                }    
                toast.error(message);
            });
    }

    handleSearch(e){
        this.setState({search: e.target.value});
        Service.FindMedicalemergencyByKeyword(this.state.search).then((res)=>{
            this.setState( {MedicalEmergency : res.data });
            // console.log(this.state.MedicalEmergency);
        },(error)=>{
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                { this.state.central &&
                <>
                    <Header />
                <div className='body'>
                    <h2 className="text-center">Medical Emergency</h2>
                    <div className="input-group search">
                        <input className='inputvalue' type="search" 
                        placeholder='Enter the status or priority to filter...'
                        onChange={this.handleSearch} />
                    </div>
                    <div className = "listtable table-responsive">
                        <table className = "table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>phone Number</th>
                                    <th>No of Affected</th>
                                    <th>Location</th>
                                    <th>Priority</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                </tr>
                        </thead>
                            <tbody>
                                {
                                    this.state.MedicalEmergency.map(
                                    medical =>
                                        <tr key = {medical.medicalId}>
                                            <td> {medical.medicalId}</td>
                                            <td> {medical.name}</td>
                                            <td> {medical.phoneNumber}</td>   
                                            <td> {medical.noOfAffected}</td>
                                            <td> {medical.location}</td>
                                            <td> {medical.priority}</td>
                                            <td> {medical.createdAt}</td>
                                            <td> {medical.status}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                    </>}
                    { !this.state.central &&
                        <ErrorPage />
                    }
            </div>
        )
    }
}
