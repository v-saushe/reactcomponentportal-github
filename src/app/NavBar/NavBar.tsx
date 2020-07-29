import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export interface INavBarState {
    showMenu: boolean;
    menuLinks?: any;
}

export interface INavBarProps {
    hello?: any;
}

class NavBar extends React.Component<INavBarProps, INavBarState> {
    public props: INavBarProps;
    public state: INavBarState;

    constructor(props: INavBarProps) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.props = props;

        this.state = {
            showMenu: true
        };
    }

    public onClickBtn(event: any, eventNumber: number) {
        this.setState((prevState: Readonly<INavBarState>) => {
            return {
                showMenu: !prevState.showMenu
            };
        });
    }

    public onClick(): void {
        this.setState((prevState: Readonly<INavBarState>) => {
            return {
                showMenu: !prevState.showMenu
            };
        });
    }

    public render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-violet'>
                <div className='container-fluid'>
                    <Link to='/' className='' style={{ color: '#fff' }}>
                        Home
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-toggle='collapse'
                        data-target='#navbarColor01'
                        aria-controls='navbarColor01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        // onClick={this.onClick}
                        onClick={(event: any) => {
                            this.onClickBtn(event, event.target.index);
                        }}
                    >
                        <span className='navbar-toggler-icon' />
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'
                        style={{ display: !this.state.showMenu ? 'block' : 'none' }}>
                        <ul className='nav navbar-nav'>
                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-link'>Home</Link>
                            </li> */}
                            <li className='nav-item'>
                                <Link to='/tab' className='nav-link'>Tab</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/accordion' className='nav-link'>Accordion</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/autocomplete' className='nav-link'>Auto Suggest</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/counters' className='nav-link'>Counters</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;