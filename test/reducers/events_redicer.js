import {
	expect
} from '../test_helper';
import {
	SEARCH_FOR_EVENTS,
	RECEIVED_EVENTS
} from '../../src/actions/types';
import eventsReducer from '../../src/reducers/events_reducer';

describe('events reducer', () => {
	it('handles action with uknown type', () => {
		expect(eventsReducer(undefined, {})).to.be.instanceof(Array);
	});
	it('handles action with SEARCH_FOR_EVENTS type', () => {
		const action = {
			type: SEARCH_FOR_EVENTS,
			payload: 'new event'
		}
		expect(eventsReducer([], action)).to.be.eql([]);
	});
	it('handles action with RECEIVED_EVENTS type', () => {
		const action = {
			type: RECEIVED_EVENTS,
			payload: ['new event']
		}
		expect(eventsReducer([], action)).to.be.eql(['new event']);
	});
});
