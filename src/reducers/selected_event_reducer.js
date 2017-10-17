import {
	RECEIVED_EVENTS,
	SELECTED_EVENT
} from '../actions/types';

export default function (state = null, action) {
	switch(action.type) {
	case RECEIVED_EVENTS:
		return(action.payload.length) ? action.payload[0] : state;
	case SELECTED_EVENT:
		return action.payload;
	}
	return state;
}
