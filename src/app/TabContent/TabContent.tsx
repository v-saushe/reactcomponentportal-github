import React from 'react';

interface ITabContentProps {
    className?: string;
    tabName?: string;
    index?: number;
}

// https://www.bootstrapdash.com/demo/wizard-free-2/index.html
// https://codepen.io/bencull/pen/CHqwn

const TabContent = (props: ITabContentProps) => {
    return (
        // <div id={props.tabName!.toLowerCase()} className={'tab-pane fade' + props.className} key={'content_' + props.index}>
        //     <h3>{props.tabName!.toUpperCase()}</h3>
        //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        // </div>

        <React.Fragment>
            <h3 id={'wizard-h-' + props.tabName!.toLowerCase()} tabIndex={1} className="title current">
                <div className="media">
                    <div className="bd-wizard-step-icon"><i className="mdi mdi-account-outline"></i></div>
                    <div className="media-body">
                        <div className="bd-wizard-step-title">Personal Details</div>
                        <div className="bd-wizard-step-subtitle">Step 1</div>
                    </div>
                </div>
            </h3>
            <section id={'wizard-p-' + props.tabName!.toLowerCase()} className={'body current tab-pane fade' + props.className}
                key={'content_' + props.index}
                role='tabpanel' aria-labelledby={'wizard-h-' + props.tabName!.toLowerCase()} aria-hidden='false' >
                <div className='content-wrapper'>
                    <h4 className='section-heading'>{props.tabName!.toUpperCase()} </h4>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label className='sr-only'>First Name</label>
                            <input type='text' name='firstName' id='firstName' className='form-control' placeholder='First Name' />
                        </div>
                        <div className='form-group col-md-6'>
                            <label className='sr-only'>Last Name</label>
                            <input type='text' name='lastName' id='lastName' className='form-control' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-md-6'>
                            <label className='sr-only'>Phone Number</label>
                            <input type='text' name='phoneNumber' id='phoneNumber' className='form-control' placeholder='Phone Number' />
                        </div>
                        <div className='form-group col-md-6'>
                            <label className='sr-only'>Email Address</label>
                            <input type='email' name='emailAddress' id='emailAddress' className='form-control' placeholder='Email Address' />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );

}

export default TabContent;