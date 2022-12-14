import React, { Component} from 'react';
import Service from '../../Service/Service';
import "../../CSS/view.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../Header/Header';
import { toast } from 'react-toastify';
import ErrorPage from '../Error Page/ErrorPage';

export default class UpdateAdditionalCop  extends Component{
    constructor(props) {
        super(props)
        this.state = {
                AdditionalCop: [],
                search : '',
                central: false ,
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('role') === '[TRAFFIC CENTRAL]')
        {
            this.setState({ central : true });
        }
        Service.viewAdditionalcop().then((res)=>{
            this.setState( { AdditionalCop : res.data} );
                // console.log(AdditionalCop);
            },(Error)=>{
                let message;    
                if (Error['response'].status === 409) {
                    message = 'Details Already Present !'
                } else if(Error['response'].status === 401 )
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
        e.preventDefault();
        this.setState({search: e.target.value}); 
        Service.FindAdditionalcopByKeyword(this.state.search).then((res)=>{
            this.setState( {AdditionalCop : res.data });
            // console.log(this.state.AdditionalCop);
        },(error)=>{
            console.log(error);
        });
    };

    onEdit(additional,e){
        // additional.status="Send";
        let cop={additionalId:additional.additionalId,name:additional.name,phoneNumber:additional.phoneNumber,noOfRequired:additional.noOfRequired,location:additional.location,priority:additional.priority,
           status:"Sent",user:{id:additional.user.id}
        }
        Service.UpdateAdditionalcop(cop).then((res)=>{
            toast.success('Updated...');
            // console.log("you are here");
            this.componentDidMount();
        },error=>{
            console.log(error);
        }
        
        );
    };
    onDelete(additional,e){
        let cop={additionalId:additional.additionalId,name:additional.name,phoneNumber:additional.phoneNumber,noOfRequired:additional.noOfRequired,location:additional.location,priority:additional.priority,
                 status:"Rejected",user:{id:additional.user.id}
         }
        Service.UpdateAdditionalcop(cop).then((res)=>{
            toast.success('Updated...');
            console.log(res);
            this.componentDidMount();
        },error=>{
            console.log(error);
        }
        
        );
    };

    render() {
        return (
            <div>
                { this.state.central && 
                <>
                    <Header />
                <div className='body'>
                    <h2 className="text-center">Additional Cop</h2>
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
                                    this.state.AdditionalCop.map(
                                    additionalcop =>
                                        <tr key = {additionalcop.additionalId}>
                                            <td> {additionalcop.additionalId}</td>
                                            <td> {additionalcop.name}</td>
                                            <td> {additionalcop.phoneNumber}</td>   
                                            <td> {additionalcop.noOfRequired}</td>
                                            <td> {additionalcop.location}</td>
                                            <td> {additionalcop.priority}</td>
                                            <td> {additionalcop.createdAt}</td>
                                            <td> {additionalcop.status}</td>
                                            <td>
                                                <div className='action' aria-disabled={this.state.enable}>
                                                    <button onClick={(e) => this.onEdit(additionalcop, e)} className="check" >
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                        Accept
                                                    </button>
                                                    <button onClick={(e) => this.onDelete(additionalcop,e)} className="delete">
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
                    </>
                    }
                    {   !this.state.central &&
                        <ErrorPage />
                    }
            </div>
        )
    }
}
