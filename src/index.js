import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {composeWithDevTools} from "redux-devtools-extension";


import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import App from './App';
import Dashboard from './components/dashboard';
import Signin from './components/auth/signin';
import './index.css';


const store = createStore(
		reducers,
		composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
		<Provider store={store}>
				<BrowserRouter>
						<App>
								<Switch>
										<Route exact path='/' component={Dashboard}/>
										<Route path='/signin' component={Signin}/>
								</Switch>
						</App>
				</BrowserRouter>
		</Provider>,
		document.getElementById('root'));
registerServiceWorker();
