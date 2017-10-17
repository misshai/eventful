import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/app';
import ErrorBoundary from './components/error_boudary';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	<ErrorBoundary>
		<App/>
	</ErrorBoundary>
</Provider>, document.querySelector('.container'));
