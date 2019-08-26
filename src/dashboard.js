import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            getLeaves: [],
            approved: [],
            pending: []
        }
    }

    componentDidMount() {
        let array = JSON.parse(localStorage.getItem("arrayData"));
        var refArray = [];
      
if(array != null){
	 array.map((item, index) => {
            let arr = [];
            let newArray = item.userdata;
            if (newArray.length != 0) {
                newArray.map((item, index) => {
                    refArray.push(item);
                })
            }
        })
        var arr1 = [], arr2 = [];
        refArray.map((item, index) => {
            if (item.flag == false) {
                arr1.push(item);
            }
            else {
                arr2.push(item);
            }
        })
        this.setState({
            getLeaves: refArray,
            pending: arr1,
            approved: arr2

        })
}
	 
    }

    handleItem = (item) => {
        var d1 = new Date(item.from);
        var d2 = new Date(item.to);
        return d1.toDateString()
    }

    handleItem2 = (item) => {
        var d2 = new Date(item.to);
        return d2.toDateString()
    }


    buttonChange = () => {
        this.props.history.push("/admin")
    }

    approveRequest(item, index) {
        let arr = this.state.pending;
        arr[index].flag = true;
        let newArray = this.state.approved;
        newArray.push(arr[index])
        arr.splice(index, 1)
        this.setState({
            approved: newArray
        })

    }
    render() {
        return (
            <div>
                <h4>
                    Dashboard
                      </h4>
                <div class="row">
                    <div className="col-lg-5">
                        Pending Leave Requests
            <h5>
                            {this.state.pending.map((item, index) => {
                                return <ul className="display">
                                    <div style={{ marginTop: "9px" }}>Leave {index + 1}.</div>
                                    <ol key={index}>

                                        <div className="display">
                                            <p style={{ marginRight: "12px", marginTop: "9px" }}>from</p>
                                            <span style={{ color: "#0000FF", marginTop: "9px" }}> {this.handleItem(item)}</span>
                                            <p style={{ marginLeft: "12px", marginTop: "9px", marginRight: "12px" }}     >to</p>
                                            <span style={{ color: "#0000FF", marginTop: "9px" }}>{this.handleItem2(item)}</span>
                                            <Button className="btn-approve" onClick={this.approveRequest.bind(this, item, index)}>Approve</Button></div>
                                    </ol>
                                </ul>
                            })}
                        </h5>

                    </div>
                    <div className="col-lg-5">
                        Approved Leaves
                                    {this.state.approved.map((item, index) => {
                            return <ul className="display">
                                <div style={{ marginTop: "9px" }}>Leave {index + 1}.</div>
                                <ol key={index}>

                                    <div className="display">
                                        <p style={{ marginRight: "12px", marginTop: "9px" }}>from</p>
                                        <span style={{ color: "#0000FF", marginTop: "9px" }}> {this.handleItem(item)}</span>
                                        <p style={{ marginLeft: "12px", marginTop: "9px", marginRight: "12px" }}     >to</p>
                                        <span style={{ color: "#0000FF", marginTop: "9px" }}>{this.handleItem2(item)}</span>
                                        <div className="btn-approve" onClick={this.approveRequest.bind(this, item, index)}>Approved</div>
                                    </div>
                                </ol>
                            </ul>
                        })}

                    </div>
                </div>
                <Button color="info"
                    style={{ marginTop: "10rem", marginLeft: "5rem" }}
                    onClick={this.buttonChange}>
                    Go Home
                </Button>
            </div>
        );
    }

}