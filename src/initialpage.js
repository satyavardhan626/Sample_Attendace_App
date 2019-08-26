import React, { Component, Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import login from './App'
import Table from "./table.js";
import User from "./user.js";
import NewLeave from "./newleave.js";
import MyLeaves from "./myleaves.js";
import Admin from "./admin.js";
import Dashboard from "./dashboard";

export default class Initial extends Component {
	render() {

		const { location, match, user, locale } = this.props;
		return (
			<Fragment>
				<BrowserRouter>
					<Switch>
						<Route exact path={`/`} component={login} />
						<Route path={`/table`} component={Table} />
						<Route path={`/user`} component={User} />
						<Route path={`/newLeave`} component={NewLeave} />
						<Route path={`/myleaves`} component={MyLeaves} />
						<Route path={`/admin`} component={Admin} />
						<Route path={`/dashboard`} component={Dashboard} />
						<Redirect to="/error" />
					</Switch>
				</BrowserRouter>
			</Fragment>
		);
	}
}