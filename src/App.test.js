import React from 'react';
import Enzyme, { shallow, configure, mount } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import Button from './App'

Enzyme.configure({ adapter: new Adapter() })

it("renders without crashing", () => {
    shallow(<App />)
});

it("renders the title for the application", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Google Books Search</h1>
    expect(wrapper.contains(welcome)).toEqual(true);
})


describe('Button', () => {
    it('should be defined', () => {
        expect(Button).toBeDefined();
    });
    it('should render correctly', () => {
        const tree = shallow(
            <Button name='button test' />
        )
        expect(tree).toMatchSnapshot()
    })

})
