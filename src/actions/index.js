import {
	SEARCH_FOR_EVENTS,
	RECEIVED_EVENTS,
	SELECTED_EVENT
} from './types';

const API_KEY = 'F5spZgS9VjXhbggs';
const ROOT_URL = `http://api.eventful.com/json/events/search?app_key=${API_KEY}`

export function searchForEvents(searchStringLocation, searchStringTerm) {
	const oArgs = {
		app_key: API_KEY,
		where: searchStringLocation,
		q: searchStringTerm,
		page_size: 5,
		sort_order: 'popularity'
	};
	return dispatch => {
		EVDB.API.call('/events/search', oArgs, ({
			events
		}) => {
			dispatch(receivedEvents(events));

		});

		return {
			type: SEARCH_FOR_EVENTS,
			payload: ''
		}
	}
}

function receivedEvents(events) {
	return {
		type: RECEIVED_EVENTS,
		payload: (events) ? events.event : []
	}
}

export function eventSelected(event) {
	return {
		type: SELECTED_EVENT,
		payload: event
	}
}
