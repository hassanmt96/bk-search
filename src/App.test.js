import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

it("renders without crashing", () => {
    shallow(<App />)
});

it("renders the title for the application", () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>Google Books Search</h1>
    expect(wrapper.contains(welcome)).toEqual(true);
})