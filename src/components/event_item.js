import React, {Component} from 'react';
import {connect} from 'react-redux';
import {eventSelected} from '../actions';

const EventItem = (props) => {

	const {title, image} = props.event;
	return <li className='list-group-item event-item' onClick= {()=>{props.eventSelected(props.event)}}>
		<div className='media'>
			<div className='media-left'>
				<img className='media-object' src={(image && image.small)
					? image.small.url
					: ''}/>

			</div>
			<div className='media-body'>
				<div className='media-heading'>
					{title}
				</div>
			</div>

		</div>
	</li>
}
export default connect(null, {eventSelected})(EventItem);
