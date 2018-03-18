import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route} from 'react-router-dom';


import reducers from './reducers';
import Dashboard from './components/dashboard';
import './App.css';

const store = createStore(
		reducers,
		applyMiddleware(thunk)
);

class App extends Component {
		render() {
				return (
						<Provider store={store}>
								<BrowserRouter>
										<div>
												<Route path='/' component={Dashboard}/>
										</div>
								</BrowserRouter>
						</Provider>
				);
		}
}

export default App;
