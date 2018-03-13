import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import DoggosListComponent from './components/doggos-list/doggos-list.component';
import reducers from './reducers';
import './App.css';

const store = createStore(
		reducers,
		applyMiddleware(thunk)
);

class App extends Component {
		render() {
				return (
						<Provider store={store}>
								<div className="App">
										<header className="App-header">
												<h1 className="App-title">Welcome to Doggos app</h1>
										</header>
										<div>
												<DoggosListComponent/>
										</div>
								</div>
						</Provider>
				);
		}
}

export default App;
