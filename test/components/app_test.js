import {
	renderComponent,
	expect,
	renderShallow,
	chai
} from '../test_helper';

import AppComponent, {
	App
} from '../../src/components/app';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

describe('App', () => {
	describe('has', () => {
		let component;
		beforeEach(() => {
			const mockStore = configureStore([thunk]);
			component = renderComponent(AppComponent);
		});
		it('correct class', () => {
			expect(component).to.have.class('container');

		});

		it('search bar', () => {
			expect(component.find('.search-bar')).to.exist;
		});

		it('event description', () => {
			expect(component.find('.event-description')).to.exist;
		});

		it('events list', () => {
			expect(component.find('.events-list')).to.exist;
		});
	});
	describe('updates state', () => {
		let component;
		let spy = chai.spy(() => {});
		beforeEach(() => {
			component = renderShallow(App, {
				searchForEvents: spy
			});
		});
		it('correctly on change of search location', () => {

			component.instance().searchByLocation('my location');
			expect(component.state('searchValueByLocation')).to.be.eql('my location');
			expect(spy).to.have.been.called;
		});
		it('correctly on change of search term', () => {
			component.instance().searchByTerm('my term');
			expect(component.state('searchValueByTerm')).to.be.eql('my term');
			expect(spy).to.have.been.called;
		});
	});
});
