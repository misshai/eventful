import {
	expect
} from '../test_helper';
import {
	SEARCH_FOR_EVENTS,
	SELECTED_EVENT
} from '../../src/actions/types';
import {
	searchForEvents,
	eventSelected
} from '../../src/actions';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';

describe('actions', () => {
	describe('search for an events', () => {
		const mockStore = configureStore([thunk]);

		it('has correct type when sending', () => {
			const store = mockStore({});
			expect((store.dispatch(searchForEvents('my search string', 'my second search string'))).type).to.equal(SEARCH_FOR_EVENTS);

		});
		it('has correct payload when sending', () => {
			const store = mockStore({});
			expect((store.dispatch(searchForEvents('my search string', 'my second search string'))).payload).to.equal('');

		});
		it('has correct type when received result', () => {
			const store = mockStore({});

			// return store.dispatch(searchForEvents('my search string', 'my second search string')).then(() => {
			// 	const action = store.getActions()[0];
			//
			// 	expect(action.type).to.equal(RECEIVED_EVENTS);
			// });
		});
		it('has correct payload when received result', () => {
			const store = mockStore({});

			// return store.dispatch(searchForEvents('my search string', 'my second search string')).then(() => {
			// 	const action = store.getActions()[0];
			//
			// 	expect(action.type).to.equal(SEARCH_FOR_EVENTS);
			// });
		});
	});


	//
	// let action;
	// beforeEach(() => {
	// 	action = searchForEvents('my search string', 'my second search string');
	// });
	// it('has the correct type', () => {
	// 	//expect(action.type).to.equal(SEARCH_FOR_EVENTS);
	// });
	// it('has the correct payload', () => {
	// 	//expect(action.payload).to.equal('my search string');
	// })
	//});
	describe('event selection', () => {
		let action;
		beforeEach(() => {
			action = eventSelected('some string');
		});

		it('has the correct type', () => {
			expect(action.type).to.equal(SELECTED_EVENT);
		});
		it('has the correct payload', () => {
			expect(action.payload).to.equal('some string');
		})
	})
})
