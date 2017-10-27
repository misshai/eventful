import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import SearchBar from './search_bar';
import EventsList from './events_list';
import EventDescription from './event_description';

import {searchForEvents} from '../actions';

export class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchValueByLocation: 'Berlin',
			searchValueByTerm: ''
		};
	}

	getListOfEvents() {
		this.props.searchForEvents(this.state.searchValueByLocation, this.state.searchValueByTerm);
	}

	componentWillMount() {
		this.getListOfEvents();
	}

	searchByLocation(searchValueByLocation) {
		this.setState({searchValueByLocation});
		this.getListOfEvents();
	}

	searchByTerm(searchValueByTerm) {
		this.setState({searchValueByTerm});
		this.getListOfEvents();
	}

	render() {
		const eventSearchByLocation = _.debounce(this.searchByLocation.bind(this), 300);
		const eventSearchByTerm = _.debounce(this.searchByTerm.bind(this), 300);
		return (
			<div className='container'>
				<div className='row'>
					<SearchBar onSearchChange={eventSearchByLocation} placeHolder='Where'/>
					<SearchBar onSearchChange={eventSearchByTerm} placeHolder='What'/>
				</div>
				<div className='row'>
					<EventDescription/>
					<EventsList/>
				</div>
			</div>

		);
	}
}

export default connect(null, {searchForEvents})(App);
