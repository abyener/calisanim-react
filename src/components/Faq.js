import React, { Component } from 'react';
import {CardBody, Collapse, Card } from 'reactstrap';
import classNames from 'classnames';

export default class SSS extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, chevron: false };
    }
    toggle() {
        this.setState(state => ({ collapse: !state.collapse, chevron: !state.chevron }));
    }

    render() {

        return (

            <div id="faq" className="accordion">
                <div className="panel-heading">
                    <button onClick={this.toggle} className="panel-title col-sm-12">
                        <span> {this.props.question}</span>
                        <i className={classNames('fa fa2x', {
                            'fa-chevron-down': this.state.chevron,
                            'fa-chevron-left': !this.state.chevron
                        })}></i>
                    </button>
                </div>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.props.answer}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>

        );
    }
}





