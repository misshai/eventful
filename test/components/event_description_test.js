import {
	renderComponent,
	expect
} from '../test_helper';
import EventDescription from '../../src/components/event_description';

describe('EventDescription', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(EventDescription, {}, {
			selectedEvent: {
				image: '',
				title: 'some nice title'
			}
		});
	});

	it('has correct class name', () => {
		expect(component).to.have.class('event-description');
	});

	it('has img element', () => {
		expect(component.find('img')).to.exist;
	});

	it('has provided title of event', () => {
		expect(component).to.contain('some nice title');
	});
	it('has provided image url', () => {
		component = renderComponent(EventDescription, {}, {
			selectedEvent: {
				image: {
					medium: {
						url: 'my url'
					}
				},
				title: 'some nice title'
			}
		});
		expect(component.find('.media-object')).to.have.attr('src', 'my url');
	});
});
