import React from 'react';


class Pagination extends React.Component {

    render() {
        return (
            <ul role='menu'>
                <li className='disabled' aria-disabled='true'>
                    <a href='#previous' role='menuitem'>Previous</a>
                </li>
                <li aria-hidden='false' aria-disabled='false' className='' style={{ display: 'list-item' }}>
                    <a href='#next' role='menuitem'>Next</a>
                </li>
                <li aria-hidden='true' style={{ display: 'none' }}>
                    <a href='#finish' role='menuitem'>Finish</a>
                </li>
            </ul>
        );
    }

}

export default Pagination;