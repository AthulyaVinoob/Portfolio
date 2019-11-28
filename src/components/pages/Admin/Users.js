import React ,{Component} from 'react';
import TableView from '../../common/tableView';

const columns = [
    {label: 'ID', name: 'id'},
    {label: 'Email', name: 'email'},
    {label: 'Name', name: 'name'}
]



class Users extends Component{
	render(){
		return (
			<div>
			<h1>Users</h1>
			<TableView
			columns={columns}
			rows={[]}
			/>
			</div>
			);
	}
}

export default Users;