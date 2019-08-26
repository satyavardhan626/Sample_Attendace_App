import React, { Component, Fragment } from 'react';
import './App.css';
import data from "./login.json"
import { withRouter } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
    this.checkForm = this.checkForm.bind(this);


  }
  checkForm(e) {
    e.preventDefault();
    let name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (name.length === 0 || name.length > 200) {
      alert("Username is required!");
      return false;
    }

    if (password.length === 0 || password.length > 200) {
      alert("Username is required!");
      return false;
    }

    if (name === "hruday@gmail.com" && password === "hruday123" ||
      name === "satya@gmail.com" && password === "hruday123" ||
      name === "vinay@gmail.com" && password === "hruday123" ||
      name === "chandra@gmail.com" && password === "hruday123"
    ) {
      let arr = data.data;
      let array = JSON.parse(localStorage.getItem("arrayData"));
      if (array.length == 0) {
        localStorage.setItem("arrayData", JSON.stringify(arr))
      }
      localStorage.setItem("useremail", name)
      this.props.history.push("/user")
    }
    else if (name === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("adminemail", name)
      this.props.history.push("/admin")
    }
    else {
      alert("Entered creadentials are incorrect")
    }
  }
  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }
  handlePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div className="container">
            <h2 style={{ marginBottom: "6%" }}>LogIn</h2>
            <form onSubmit={this.checkForm}>
              <div style={{ display: "flex", marginLeft: "35%" }}>
                <label htmlFor="usr">Name:</label>
                <input type="text" className="form-control" name="username" id="username" style={{ width: "40%", marginLeft: "16%" }} onChange={this.handleName.bind(this)} />
              </div>
              <div style={{ display: "flex", marginLeft: "35%" }}>
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="password" name="pwd1" style={{ width: "40%", marginLeft: "10%" }} onChange={this.handlePassword.bind(this)} />
              </div>
              <button type="submit" class="btn btn-success" style={{ marginLeft: "20%" }} onClick={this.handleLogin} >login</button>

            </form>
          </div>
        </header>
      </div>
    );
  };
}
export default withRouter(Login);


