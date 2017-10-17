import _$ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import jsdom from 'jsdom';
import chai, {expect} from 'chai';
import chaiJquery from 'chai-jquery';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import reducers from '../src/reducers';
import thunk from 'redux-thunk';
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

global.EVDB = {
	API: {
		call: () => {}
	}
};

const $ = _$(window);

chaiJquery(chai, chai.util, $);

function renderComponent(ComponentClass, props = {}, state = {}) {
	const mockStore = configureStore([thunk]);
	const componentInstance = TestUtils.renderIntoDocument(
		<Provider store={mockStore(state)}>
			<ComponentClass {...props}/>
		</Provider>
	);

	return $(ReactDOM.findDOMNode(componentInstance));
}

$.fn.simulate = function(eventName, value) {
	if (value) {
		this.val(value);
	}
	TestUtils.Simulate[eventName](this[0]);
};

export {renderComponent, expect};
