import React, { Component} from 'react';
import Service from '../../Service/Service';
import "../../CSS/view.css";
export default class ViewAdditionalCop  extends Component{
    constructor(props) {
        super(props)
        this.state = {
            AdditionalCop: [],
                search : '',
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        Service.viewAdditionalcop().then((res)=>{
            this.setState( { AdditionalCop : res.data} );
                // console.log(AdditionalCop);
            },(Error)=>{
                console.error(Error);
            });
    }

    handleSearch(e){
        this.setState({search: e.target.value}); 
        Service.FindAdditionalcopByKeyword(this.state.search).then((res)=>{
            this.setState( {AdditionalCop : res.data });
            // console.log(this.state.AdditionalCop);
        },(error)=>{
            console.log(error);
        });
    };

    render() {
        return (
            <div>
                <div className='head'>
                    <h1>Additional Cop</h1>
                </div>
                <div className='body'>
                    <h2 className="text-center">Additional Cop</h2>
                    <div className="input-group search">
                        <input className='inputvalue' type="text"
                        placeholder='Enter the status or priority to filter...'
                        onChange={this.handleSearch} />
                    </div>
                    <div className = "listtable">
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
