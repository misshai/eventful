import {
	SEARCH_FOR_EVENTS,
	RECEIVED_EVENTS
} from '../actions/types';

export default function (state = [], action) {
	switch(action.type) {

	case SEARCH_FOR_EVENTS:
		return [...state];

	case RECEIVED_EVENTS:
		if(action.payload.length)
			return [...action.payload];
		else {
			return state;
		}

	}
	return state;
}
