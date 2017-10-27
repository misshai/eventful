import {
	renderComponent,
	expect,
	chai,
	renderShallow
} from '../test_helper';

import {
	EventItem
} from '../../src/components/event_item';

describe('EventItem', () => {
	let component;
	describe('has', () => {
		beforeEach(() => {
			component = renderComponent(EventItem, {
				event: {
					image: '',
					title: 'some nice title'
				},
				onEventSelect: () => {
					return 3;
				}
			});
		});

		it(' class event-item', () => {
			expect(component).to.have.class('event-item');
		});
		it(' img element', () => {
			expect(component.find('img')).to.exist;
		});

		it(' provided title of event', () => {
			expect(component).to.contain('some nice title');
		});
		it(' provided image URL', () => {
			component = renderComponent(EventItem, {
				event: {
					image: {
						small: {
							url: 'my url'
						}
					},
					title: 'some nice title'
				},
				onEventSelect: () => {
					return 3;
				}
			});
			expect(component.find('img')).to.attr('src', 'my url');
		});
	});
	describe('calls', () => {
		let spy, component, config;
		beforeEach(() => {
			spy = chai.spy(() => {
				return 3;
			});
			config = {
				event: {
					image: '',
					title: 'some nice title'
				},
				eventSelected: spy
			};
			component = renderShallow(EventItem, config);
			component.find('li').simulate('click');
		});
		it('provided callack on click', () => {
			expect(spy).to.have.been.called();
		});
		it('provided callack with correct arguments', () => {
			expect(spy).to.have.been.called.with(config.event);
		});
	});
});
