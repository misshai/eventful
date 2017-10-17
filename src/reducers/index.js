import {
	combineReducers
} from 'redux';

import eventsReducer from './events_reducer';
import selectedEventReducer from './selected_event_reducer';

const rootReducer = combineReducers({
	events: eventsReducer,
	selectedEvent: selectedEventReducer
});

export default rootReducer;
