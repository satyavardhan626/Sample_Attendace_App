import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import DatePicker from 'react-date-picker';
var date = new Date();
export default class NewLeave extends React.Component {
    constructor() {
        super();
        this.state = {
            fromDate: date,
            toDate: date,
            date: date,
        }
        this.handleCancel=this.handleCancel.bind(this);
    }
    componentDidMount(){
        this.setState({
            fromDate:null,
            toDate: null,
        })
    }

    onToChange = (date) => {
        this.setState({
            toDate: date
        })

    }
    onFromChange = (date) => {
        this.setState({
            fromDate: date
        })

    }

    buttonChange = () => {
        var from = this.state.fromDate;
        var to = this.state.toDate;
        if(from === null || to === null){
            alert("Select dates to apply leave");
        }
        else{
            var obj = {};
            obj.from = from;
            obj.to = to;
            obj.flag=false;
         var email=   localStorage.getItem("useremail")
            let arr=JSON.parse(localStorage.getItem("arrayData"));
               arr.map((item,index)=>{
                    if(item.username == email){
                        var refArray=arr[index].userdata;
                        refArray.push(obj);
                    }
                });
                       localStorage.setItem("arrayData", JSON.stringify(arr));
    
            alert("leave successfully applied");
            this.props.history.push("/myleaves")
        }
       

    }
    handleCancel(){
        this.props.history.push("/user")
    }
    render() {
        return (
            <div>
                <h2 className="from-top-text">
                    Apply For Leave
                </h2>
                <h5>
                    select Date
                     </h5>
                <div className="display">
                    <div className="date1">
                        <div className="display">
                            <h5 className="from-text">  From:</h5>
                            <DatePicker
                                onChange={this.onFromChange}
                                value={this.state.fromDate}
                                dateFormat="DD/MM/YYYY"
                            />
                        </div>
                    </div>
                    <div className="date1">
                        <div className="display">
                            <h5 className="from-text">  To:</h5>
                            <DatePicker
                                onChange={this.onToChange}
                                value={this.state.toDate}
                            />
                        </div>
                    </div>
                </div>
                  <Button 
                  color="warning"
                  onClick={this.handleCancel} className="date1">
                   Cancel
        </Button>
                <Button
                color="primary"
                style={{marginTop:"10rem",marginLeft:"5rem"}}
                    onClick={this.buttonChange}>
                    Apply
                </Button>
            </div>
        );
    }
}