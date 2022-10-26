import React, { Component} from 'react';
import Service from '../../Service/Service';
import "../../CSS/view.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import { toast } from 'react-toastify';
import ErrorPage from '../Error Page/ErrorPage';

export default class MedicalTeam  extends Component{
    constructor(props) {
        super(props)
        this.state = {
                MedicalEmergency: [],
                search : '',
                medical : false,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount(){
        if(localStorage.getItem('role') === '[MEDICAL TEAM]')
        {
            this.setState( {medical : true});
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
    
    onEdit(medical){
        medical.status="Send";
        Service.UpdateMedicalemergency(medical).then((res)=>{
            this.componentDidMount();
        },error=>{
            console.log(error);
        }
        
        );
    };
    onDelete(medical){
        medical.status="Rejected";
        Service.UpdateMedicalemergency(medical).then((res)=>{
            this.componentDidMount();
        },error=>{
            console.log(error);
        }
        
        );
    };

    render() {
        return (
            <div>
                { this.state.medical &&
                <>
                    <Header />
                <div className='body'>
                    <h2 className="text-center" >Medical Emergency</h2>
                    <div className="input-group search">
                        <input className='inputvalue' type="text"
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
                                    <th>Action</th>
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
                                            <td>
                                                <div className='action'>
                                                    <button onClick={(e) => this.onEdit(medical)} className="check">
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                        Accept
                                                    </button>
                                                    <button onClick={(e) => this.onDelete(medical)} className="delete">
                                                        <FontAwesomeIcon icon={faCircleXmark} />
                                                        Reject
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </>}
                { !this.state.medical &&
                    <ErrorPage/>
                }
            </div>
        )
    }
}
