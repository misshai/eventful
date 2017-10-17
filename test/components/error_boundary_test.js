import {
	renderComponent,
	expect
} from '../test_helper';
import ErrorBoundary from '../../src/components/error_boudary';

describe('ErrorBoundary', () => {
	let component;
	it('should have correct class name error_boundary', () => {
		component = renderComponent(ErrorBoundary, {
			children: [1, 2, 3]
		});
		console.log(component)
		// component.setState({
		// 	hasError: true
		// });
		//expect(component).to.have.class('error_boundary');
	});
	it('should render h1 when there is an error', () => {
		// component = renderComponent(ErrorBoundary, {}, {
		// 	hasError: true
		// });
		//expect(component.find('h1')).to.exist;
	});
	it('should render children when there is no error', () => {
		//component = renderComponent(ErrorBoundary);
		//expect(component).to.have.class('error_boundary');
	});

});
