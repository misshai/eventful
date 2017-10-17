import {
	renderComponent,
	expect
} from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('SearchBar', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(SearchBar, {
			onSearchChange: () => {},
			placeHolder: 'some placeholder text'
		});
	});

	it('has correct class name', () => {
		expect(component).to.have.class('search-bar');
	});

	it('has input element', () => {
		expect(component.find('input')).to.exist;
	});

	it('displays placeholder text in input', () => {
		expect(component.find('input')).to.have.attr('placeholder', 'some placeholder text');
	});

	describe('correctly handles input text', () => {

		beforeEach(() => {
			component.find('input').simulate('change', 'my search string')
		});

		it('displays entered text', () => {
			expect(component.find('input')).to.have.value('my search string');
		});

	});

});
