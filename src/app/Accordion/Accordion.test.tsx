import { mount } from 'enzyme';
import * as React from 'react';

import Acccordion from './Accordion';

describe('<App />', () => {
    beforeEach(() => {
     
    });
 
    it('renders Unknown Name when no name entered', () => {
       const app = mount(<Acccordion title='First Accordion Title' content='First Accordion' />);
       expect(app.find('.accordion__title').text()).toEqual('First Accordion Title');
    });
  
 });