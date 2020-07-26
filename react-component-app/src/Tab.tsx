import React from 'react';

interface ITabProps {
    'aria-exapanded'?: boolean;
    className?: string;
    onClickTab?: any;
    tabName?: string;
    index?: string;
}


const Tab = (props: ITabProps) => {
    return (
        // <li className={props.className} id={'tabId_' + props.index} onClick={props.onClickTab} key={'li_' + props.index}>
        //     <a data-toggle='tab' aria-expanded={props["aria-exapanded"]} href={'#' + props.tabName!.toLowerCase()}>
        //         {props.tabName}</a>
        // </li>

        <li className={props.className} id={'tabId_' + props.index} onClick={props.onClickTab} key={'li_' + props.index}>
            <a aria-controls= {'wizard-p-'+ props.tabName!.toLowerCase()}
             data-toggle='tab' aria-expanded={props["aria-exapanded"]} href={'#wizard-h-' + props.tabName!.toLowerCase()}>
                <span className="current-info audible">current step: </span>
                <div className="media">
                    <div className="bd-wizard-step-icon"><i className="mdi mdi-account-outline"></i></div>
                    <div className="media-body">
                        <div className="bd-wizard-step-title">{props.tabName}</div>
                        <div className="bd-wizard-step-subtitle">Step {props.index}</div>
                    </div>
                </div>
            </a>
        </li>

    );
}

export default Tab;