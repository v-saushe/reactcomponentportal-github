import React from 'react';
import './Accordion.css';
import Chevron from './Chevron';

interface IAccordionProps {
    content: string;
    title: string;
}

interface IAccordionState {
    active: boolean;
}

class Accordion extends React.Component<IAccordionProps, IAccordionState> {
    public prop: IAccordionProps;
    public state: IAccordionState;
    divContentText: React.RefObject<HTMLDivElement>;

    constructor(props: IAccordionProps) {
        super(props);
        this.prop = props;
        this.divContentText = React.createRef();

        this.state = {
            active: false
        }
    }

    toggleAccordion = (e: any) => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const { content, title } = this.props;
        let accordionClass = 'accordion';
        let chevronClass = 'accordion__icon';
        let contentHeight = '0px';
        accordionClass = this.state.active ? accordionClass + ' active' : accordionClass;
        chevronClass = this.state.active ? chevronClass + ' rotate' : chevronClass;
        contentHeight = this.state.active ? this.divContentText.current!.scrollHeight + 'px' : contentHeight;
        
        return (
            <React.Fragment>
                <div className='accordion__section'>
                    <button className={accordionClass} onClick={this.toggleAccordion} >
                        <p className='accordion__title'>{title}</p>
                        <Chevron className={chevronClass} width={10} fill={'#777'} />
                    </button>
                    <div
                        ref={this.divContentText}
                        style={{ maxHeight: contentHeight }}
                        className='accordion__content'
                    >
                        <div
                            className='accordion__text'
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Accordion;