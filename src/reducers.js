import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import ComponentNameReducer from './ComponentName/reducer'


export default (history) => combineReducers({
	router: connectRouter(history),
	ComponentName: ComponentNameReducer,
})
