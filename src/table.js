import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './redux/action';
import { Button } from 'reactstrap';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.props.fetchProductsPending();
    }
    final=()=>{
        this.props.history.push("/admin")

    }
    render() {
        const data = this.props.products
        return (
            <div className="App">

                <div class="container">
                    <h2>DashBoard Page</h2>

                    <table class="table">
                        <thead>
                            <tr >
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody >
                            {data.map((item, index) => {
                                return (<tr key={index}>
                                    <td >{item.id}</td>
                                    <td >{item.name}</td> <td >{item.age}</td> <td >{item.gender}</td> <td >{item.email}</td> <td >{item.phoneNo}</td>
                                </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
                <Button color="info" onClick={this.final}>
                    cancel
                </Button>
            </div>
        );
    };

}

const mapStateToProps = ({ products }) => {
    return {
        products
    };
};

export default connect(
    mapStateToProps,
    {
        fetchProductsPending,
        fetchProductsSuccess,
        fetchProductsError
    }
)(Table);



