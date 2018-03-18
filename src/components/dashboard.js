import React, {Component} from 'react';
import DoggosListComponent from './doggos-list/doggos-list.component';
import '../styles/dashboard.css';

class Dashboard extends Component {

		render() {
				return (
						<div className="App">
								<header className="App-header">
										<h1 className="App-title">Welcome to Doggos app</h1>
								</header>
								<div>
										<DoggosListComponent/>
								</div>
						</div>
				)
		}
}

export default Dashboard;