import React, {Component} from 'react';
import {connect} from 'react-redux';
import {eventSelected} from '../actions';

export class EventItem extends Component {

	render() {
		const {title, image} = this.props.event;
		return <li className='list-group-item event-item' onClick= {()=>{this.props.eventSelected(this.props.event)}}>
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
}
export default connect(null, {eventSelected})(EventItem);
