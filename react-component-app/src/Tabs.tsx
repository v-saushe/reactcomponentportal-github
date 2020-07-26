import React from 'react';
import './Wizard.css';
import './Tabs.css';
import Tab from './Tab';
import TabContent from './TabContent';
import Pagination from './Pagination';

interface ITabProps {
    tabNames: string[];
    'aria-exapanded'?: boolean;
}

interface ITabState {
    activeTab?: boolean;
    activeIndex?: number;
}

class Tabs extends React.Component<ITabProps, ITabState> {
    public props: ITabProps;
    public state: ITabState;

    constructor(incomingProps: ITabProps) {
        super(incomingProps);
        this.props = incomingProps;
        this.state = {
            activeTab: true,
            activeIndex: 0
        }
    }

    onClickTab = (index: number) => {
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className='wizard clearfix'>
                    <div className='steps clearfix'>
                        {/* <ul className='nav nav-tabs'> */}
                        <ul role='tablist'>
                            {this.props.tabNames.map((tabName: string, index: number) => {
                                // const className: string = this.state.activeIndex === index ? 'active' : ''
                                const className: string =  this.state.activeIndex === index ? 'first current' : 'disabled';
                                const ariaExpanded: boolean = this.state.activeIndex === index ? this.state.activeTab! : false;
                                return (
                                    <Tab
                                        className={className}
                                        index={index.toString()}
                                        tabName={tabName}
                                        aria-expanded={ariaExpanded}
                                        onClickTab={() => this.onClickTab(index)}
                                    />
                                );
                            })}
                        </ul>

                    </div>
                    <div className='content clearfix'>
                        <div className='tab-content'>
                            {this.props.tabNames.map((tabName: string, index: number) => {
                                const className: string = this.state.activeIndex === index ? ' active in' : ''
                                return (
                                    <TabContent
                                        className={className}
                                        index={index}
                                        tabName={tabName}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    <div className='actions clearfix'>
                        <Pagination/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Tabs;