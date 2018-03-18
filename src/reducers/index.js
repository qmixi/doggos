import {combineReducers} from 'redux';
import { reducer as form } from 'redux-form';

import doggos from './doggos';


export default combineReducers({
		doggos: doggos,
		form
});