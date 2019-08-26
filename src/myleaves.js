import React from 'react';
import { Button} from 'reactstrap';

export default class MyLeaves extends React.Component {
    constructor() {
        super();
        this.state = {
            getLeaves: []
        }
    }

    componentDidMount() {
        let email = localStorage.getItem("useremail")
        let array = JSON.parse(localStorage.getItem("arrayData"));
        array.map((item, index) => {
            if (item.username == email) {
                console.log("..........")
                var newArray = array[index].userdata;
                this.setState({
                    getLeaves: newArray
                })
            }

        })


    }


    handleHome = () => {
        this.props.history.push("/user")

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




    render() {
        return (
            <div>
                <h4>
                    Check all the leaves Applied
            </h4>

                <h5>
                    {this.state.getLeaves.map((item, index) => {
                        return <ul className="display">
                            Leave {index + 1}.
                           <ol key={index}>
                                <div className="display">  <p style={{ marginRight: "12px" }}>from</p>
                                    <span style={{ color: "#0000FF" }}> {this.handleItem(item)}</span>
                                    <p style={{ marginLeft: "12px", marginRight: "12px" }}     >to</p>
                                    <span style={{ color: "#0000FF" }}>{this.handleItem2(item)}</span></div>
                            </ol>
                        </ul>
                    })}
                </h5>
                <Button
                color="success"
                style={{marginLeft:"20rem"}}
                onClick={this.handleHome}>
                    Go to Home
        </Button>

            </div>
        );
    }

}