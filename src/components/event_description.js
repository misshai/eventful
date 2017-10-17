import React from 'react';
import {connect} from 'react-redux';

const EventDescription = ({selectedEvent}) => {
	if (!selectedEvent) {
		return <div className='event-description'>Loading...</div>;
	}
	const {image, title, start_time, venue_name, venue_url} = selectedEvent;
	return <div className='col-md-6 event-description'>
		<img className='media-object' src={(image)
			? image.medium.url
			: ''}/>
		<div className='event-description-details'>
			<div>{title}</div>
			<div>{start_time}</div>
			<div>
				<a href={venue_url}>{venue_name}</a>
			</div>
		</div>
	</div>
}
function mapStateToProps(state) {
	return {selectedEvent: state.selectedEvent}
}
export default connect(mapStateToProps)(EventDescription);
