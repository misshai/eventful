import {
	renderComponent,
	expect
} from '../test_helper';

import EventsList from '../../src/components/events_list';

describe('EventsList', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(EventsList, {
			onEventSelect: () => {}
		}, {
			events: [{
				title: 'show',
				image: '',
				id: 1
			}, {
				title: 'concert',
				image: '',
				id: 2
			}]

		});
	});

	it('has class events-list', () => {
		expect(component).to.have.class('events-list');
	});

	it('renders each event in event-item component', () => {
		expect(component.find('.event-item').length).to.equal(2);
	});

	it('renders each event that is provided', () => {
		expect(component).to.contain('show');
		expect(component).to.contain('concert');
	});
});
