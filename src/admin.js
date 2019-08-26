import React, { Component, Fragment } from 'react';


export default class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }
    componentDidMount() {
        let name = localStorage.getItem("adminemail");
        this.setState({
            name
        })
    }

    render() {
        return (
            <div>  <div class="row">
                <div className="col-lg-5" />
                <div className="col-lg-5">
                    <p style={{ color: "#fff" }}>
                        logged in : {this.state.name}
                    </p>
                </div> </div>
                <hr />
                <div>
                    <h4>
                        Admin Here
            </h4>
                    <div className="sidenav">
                        <p style={{ color: "#fff" }}>
                            logged in : {this.state.name}
                        </p>
                        <a href="/dashboard">Dashboard</a>
                        <a href="/table">Redux</a>

                        <a href="/">Log Out</a>
                    </div>
                </div>
            </div>
        );
    }

}