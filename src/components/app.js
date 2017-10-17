import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import SearchBar from './search_bar';
import EventsList from './events_list';
import EventDescription from './event_description';

import {searchForEvents} from '../actions';

class App extends Component {

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

	render() {
		const eventSearchByLocation = _.debounce(searchValueByLocation => {
			this.setState({searchValueByLocation});
			this.getListOfEvents()
		}, 300);
		const eventSearchByTerm = _.debounce(searchValueByTerm => {
			this.setState({searchValueByTerm});
			this.getListOfEvents()
		}, 300);
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
