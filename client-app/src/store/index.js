import { createStore , applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';


const composeEnhancers = composeWithDevTools({
	// options like actionSanitizer, stateSanitizer
});

let middleware;
// if (process.env.NODE_ENV === 'development') {
	middleware = applyMiddleware(thunk, logger);
// } else {
	// middleware = applyMiddleware(thunk);
// }

//TODO: add midlewares here like logger, thunk, promise 
export const store = createStore(rootReducer, composeEnhancers(middleware));