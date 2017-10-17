import {
	renderComponent,
	expect
} from '../test_helper';

import App from '../../src/components/app';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('App', () => {
	let component;
	beforeEach(() => {
		const mockStore = configureStore([thunk]);
		component = renderComponent(App);
	});
	it('shows some child comps', () => {
		expect(component).to.have.class('container');

	});

	it('has search bar', () => {
		expect(component.find('.search-bar')).to.exist;
	});

	it('has  event description', () => {
		expect(component.find('.event-description')).to.exist;
	});

	it('has  events list', () => {
		expect(component.find('.events-list')).to.exist;
	});
});
