import React, {Component} from 'react';
import './assests/css/admin.css'

class AdminNavigation extends Component{

	render(){
		return(
			<div id="admin-page">
				{this.props.children}
			</div>
			);
	}
}

export default AdminNavigation;