import React from 'react';
import App from './App';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App name="app"/>);
    expect(component).toHaveLength(1);
  });
});

// describe('prop test', () => {
//   it('it renders props correctly', () => {
//     const component = shallow(<App name="app/>");
//   })
// })

describe('Prop test', () => {
  it('renders props', () => {
    const component = shallow(<App name="app"/>);
    // console.log(component.instance().props);
    expect(component.instance().props.name).toBe("app");
  });
});

describe('Testing the button', () => {
  it('updates the counter on button click', () => {
    const component = shallow(<App name="app"/>);
    // console.log(component.instance().props);
    const button = component.find('button');
    // console.log(button.props());
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    button.props().onClick();
    console.log(component.state());
    expect(component.state().counter).toEqual(6);
  });
});
