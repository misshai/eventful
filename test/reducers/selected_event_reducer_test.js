import {
	expect
} from '../test_helper';
import {
	SELECTED_EVENT,
	RECEIVED_EVENTS
} from '../../src/actions/types';
import selectedEventReducer from '../../src/reducers/selected_event_reducer';

describe('selected event reducer', () => {
	it('handles action with uknown type', () => {
		expect(selectedEventReducer(undefined, {})).to.be.null;
	});
	it('handles action with SELECTED_EVENT type', () => {
		const action = {
			type: SELECTED_EVENT,
			payload: 'new event'
		}
		expect(selectedEventReducer([], action)).to.be.eql('new event');
	});
	it('handles action with RECEIVED_EVENTS type', () => {
		let action = {
			type: RECEIVED_EVENTS,
			payload: ['new event', 'second new event']
		}
		expect(selectedEventReducer([], action)).to.be.eql('new event');
		action = {
			type: RECEIVED_EVENTS,
			payload: []
		}
		expect(selectedEventReducer([], action)).to.be.eql([]);
	});
});
