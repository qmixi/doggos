import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Router, Route, Switch} from 'react-router-dom';
import {composeWithDevTools} from "redux-devtools-extension";


import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import App from './App';
import Dashboard from './components/dashboard';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import history from './utils/history';
import './index.css';


const store = createStore(
		reducers,
		composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
		<Provider store={store}>
				<Router history={history}>
						<App>
								<Switch>
										<Route exact path='/' component={Dashboard}/>
										<Route path='/signin' component={Signin}/>
										<Route path='/signout' component={Signout}/>
										<Route path='/signup' component={Signup}/>
								</Switch>
						</App>
				</Router>
		</Provider>,
		document.getElementById('root'));
registerServiceWorker();
