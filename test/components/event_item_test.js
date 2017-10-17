import {
	renderComponent,
	expect
} from '../test_helper';

import EventItem from '../../src/components/event_item';

describe('EventItem', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(EventItem, {
			event: {
				image: '',
				title: 'some nice title'
			},
			onEventSelect: () => {}
		});
	});

	it('has class event-item', () => {
		expect(component).to.have.class('event-item');
	});
	it('has img element', () => {
		expect(component.find('img')).to.exist;
	});

	it('has provided title of event', () => {
		expect(component).to.contain('some nice title');
	});
});
