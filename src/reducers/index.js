import {combineReducers} from "redux";
import { reducer as form } from "redux-form";

import doggos from './doggos';
import auth from './auth';


export default combineReducers({
		doggos,
		auth,
		form
});