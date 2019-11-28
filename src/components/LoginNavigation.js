import React, {Component} from 'react';
import './assests/css/admin.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



class LoginNavigation extends Component{

	render(){
		return(
			<div id="admin-page">
				<AppBar>
					<Toolbar></Toolbar>
				</AppBar>
				{this.props.children}
			</div>
			);
	}
}

export default LoginNavigation;