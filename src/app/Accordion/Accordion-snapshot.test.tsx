import React from 'react';
import { shallow } from 'enzyme'; 
import Acccordion from './Accordion';

test('renders the component', () => {
  const component = shallow(
  <Acccordion 
    title='From where I can login and avail services.'
   content='Currently theres no login facility available'
   />
   );
  expect(component).toMatchSnapshot();
});