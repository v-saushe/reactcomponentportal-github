import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css';

const SideNavBar = () => {
    return (
        <nav id='sidebar'>
            <div className='sidebar-header'>
                <h3>
                    <Link to='/'>Home</Link>
                </h3>
            </div>
            <ul className='list-unstyled components'>
                <li className='active'>
                    <Link to='/tab' className='nav-link'>Tab</Link>
                </li>
                <li>
                    <Link to='/accordion'>Accordion</Link>
                </li>
                <li>
                    <Link to='/autocomplete'>Auto Suggest</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/counters' className='nav-link'>Counters</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideNavBar;