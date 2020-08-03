import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
// import './NavBar.css';

import SideNavBar from './SideNavBar/SideNavBar';


import AutoComplete from './Autocomplete/Autocomplete';
import NavBar from './NavBar/NavBar';
import Accordion from './Accordion/Accordion';
import Tabs from './Tabs/Tabs';
import ErrorComponent from './Error/Error';
import CounterComponent from './Counter/Counter';

const App = () => {
  const arrAutoComplete: any = ['Mathematics', 'Science', 'English', 'Physics', 'Chemistry', 'Biology'];
  console.log(window.location.pathname);

  const tabNames: string[] = ['Personal', 'Academic', 'Professional', 'Skills'];

  return (

    <BrowserRouter>
      <div className=''>
        <div className='wrapper'>
          <SideNavBar />
          <div id='content'>
            <NavBar />
            <div className='content-padding container'>
              {/* <h2>Test Heading</h2> */}
              <div style={{ minHeight: '350px' }}>
                <Switch>
                  <Route path='/' exact={true} component={() => <AutoComplete suggestions={arrAutoComplete} />} />
                  <Route path='/tab' component={() => <Tabs tabNames={tabNames} />} />
                  <Route path='/autocomplete' exact={true} component={() => <AutoComplete suggestions={arrAutoComplete} />} />
                  <Route path='/accordion' exact={true} render={renderMultipleAccordion} />
                  <Route path="/counters" render={renderCounterComponent} />
                  <Route component={ErrorComponent} />
                </Switch>
              </div>
              <div className='line' />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

const renderCounterComponent = () => {
  return <CounterComponent />;
};

const renderMultipleAccordion = () => {
  const accordionTitleOne: string = 'From where I can login and avail services.';
  const accordionContentOne: string = 'Currently there is no login facility available.';

  const accordionTitleTwo: string = 'How can I register for the Website.';
  const accordionContenTwo: string = 'Register for the website will come soon.';


  return (
    <React.Fragment>
      <Accordion title={accordionTitleOne} content={accordionContentOne} />
      <Accordion title={accordionTitleTwo} content={accordionContenTwo} />
    </React.Fragment>
  );
}

export default App;
