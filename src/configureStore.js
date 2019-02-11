import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'

export const history = createBrowserHistory()

const enhancers = []
const middleware = [
	routerMiddleware(history),
	thunk,
	promise
]

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const configureStore = (initialState = {}) => {
	const store = createStore(
		createRootReducer(history),
		initialState,
		composedEnhancers
	)
	return store
}

export default configureStore
