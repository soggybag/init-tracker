import { combineReducers } from 'redux'
import everythingReducer from './everythingReducer'

export default combineReducers({
	tracker: everythingReducer
})
