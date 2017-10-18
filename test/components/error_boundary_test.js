import {
	renderComponent,
	expect,
	renderShallow
} from '../test_helper';
import ErrorBoundary from '../../src/components/error_boudary';

describe('ErrorBoundary', () => {
	let component;
	beforeEach(() => {
		component = renderShallow(ErrorBoundary);
	});
	it('should have correct class name error_boundary', () => {

		component.setState({
			hasError: true
		});
		expect(component.find('.error_boundary')).to.exist;
	});
	it('should render h1 when there is an error', () => {

		component.setState({
			hasError: true
		});
		expect(component.find('h1')).to.exist;
	});
	it('should render children when there is no error', () => {
		expect(component.children()).to.have.length(0);
	});

});
