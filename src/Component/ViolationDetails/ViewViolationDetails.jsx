import React, { Component} from 'react';
import Service from '../../Service/Service';
import "../../CSS/view.css";

export default class viewViolationdetails extends Component{
    constructor(props) {
        super(props)
        this.state = {
                ViolationDetails: [],
                search : '',
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        Service.viewViolationdetails().then((res)=>{
            this.setState( { ViolationDetails : res.data} );
            },(Error)=>{
                console.error(Error);
            });
    }

    handleSearch(e){
        this.setState({search: e.target.value}); 
        Service.FindViolationdetailsByKeyword(this.state.search).then((res)=>{
            this.setState( {ViolationDetails : res.data });
            // console.log(this.state.ViolationDetails);
        },(error)=>{
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                <div className='head'>
                    <h1>Violation Details</h1>
                </div>
                <div className='body'>
                    <h2 className="text-center">Violation Details</h2>
                    <div className="input-group search">
                        <input className='inputvalue' type="text"
                        placeholder='Enter the Licence no to filter..'
                        onChange={this.handleSearch} />
                    </div>
                    <div className = "listtable table-responsive">
                        <table className = "table table-bordered ">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Licence No</th>
                                    <th>Violation Type</th>
                                    <th>Vehicle Type</th>
                                    <th>Location</th>
                                    <th>Mail Id</th>
                                    <th>Mobile Number</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Fee amount</th>
                                    <th>Fine status</th>
                                </tr>
                        </thead>
                            <tbody>
                                {
                                    this.state.ViolationDetails.map(
                                        ViolationDetail =>
                                        <tr key = {ViolationDetail.violationId}>
                                            <td> {ViolationDetail.violationId}</td>
                                            <td> {ViolationDetail.name}</td>
                                            <td> {ViolationDetail.licenceNo}</td>   
                                            <td> {ViolationDetail.violationType}</td>
                                            <td> {ViolationDetail.vehicleType}</td>   
                                            <td> {ViolationDetail.location}</td>
                                            <td> {ViolationDetail.mailId}</td>   
                                            <td> {ViolationDetail.mobileNumber}</td>
                                            <td> {ViolationDetail.date}</td>   
                                            <td> {ViolationDetail.time}</td>
                                            <td> {ViolationDetail.fineAmount}</td>
                                            <td> {ViolationDetail.paymentStatus}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
            </div>
        )
    }
}
