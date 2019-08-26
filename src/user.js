import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class User extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
            name: ""
        };
    }
    componentDidMount() {
        let name = localStorage.getItem("useremail");
        this.setState({
            name
        })
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <div className="sidebar">

                    <Nav>
                        <NavItem>
                            <NavLink href="/myleaves">My Leaves</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/newLeave">Apply Leave</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">LogOut</NavLink>
                        </NavItem>
                    </Nav>
                    <hr />

                </div>
                <div class="row">
                    <div className="col-lg-5" />
                    <div className="col-lg-5">
                        <p>
                            logged in : {this.state.name}
                        </p>
                    </div> </div>
            </div>

        );
    }
}