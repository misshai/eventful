import React from 'react';
import {connect} from 'react-redux';
import EventItem from './event_item';

const EventsList = (props) => {
	return (
		<ul className='col-md-6 list-group events-list'>
			{(props.events)
				? props.events.map((event) => {
					return (<EventItem key={event.id} event={event} onEventSelect={props.onEventSelect}/>)
				})
				: ''}
		</ul>
	)
}
function mapStateToProps(state) {
	return {events: state.events};
}
export default connect(mapStateToProps)(EventsList);
