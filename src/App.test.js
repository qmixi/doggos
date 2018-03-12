import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains proper text', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('h1').text()).to.equal('Welcome to React')
});
