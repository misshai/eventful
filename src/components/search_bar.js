import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchValue: ''
		};
	}

	render() {
		return (
			<div className='search-bar'>
				<input placeholder={this.props.placeHolder} onChange={this.inputChange.bind(this)} value={this.state.searchValue}/>
			</div>
		)
	}

	inputChange(event) {
		this.setState({searchValue: event.target.value});

		this.props.onSearchChange(event.target.value);
	}

}

export default SearchBar;
