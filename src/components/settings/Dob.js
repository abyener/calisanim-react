import React, { Component } from 'react';
import { Col, FormGroup, Label } from 'reactstrap';

import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import tr from 'date-fns/locale/tr';
registerLocale('tr', tr)

export default class Dob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dueDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
    }
    setFieldValueAndTouched(date, touched) {
        const { setFieldValue, setFieldTouched } = this.props.form;
        const { name } = this.props.field;
        setFieldValue(name, date, true); //field,value,shouldValidate
        setFieldTouched(name, touched, true); //field,touched,shouldValidate
    }
    handleChange(date) {
        this.setState(() => ({ dueDate: date }));
        this.setFieldValueAndTouched(date, true);
    }

    render() {
        const { dueDate } = this.state;
        const {
            label,
            field,
            form: { touched, errors },
        } = this.props;
        // field and form props are passed to this component automatically because we render this inside component of the Field. 
        return (
            <FormGroup row>
                <Label sm={3} size="lg" For={field}>{label} </Label>
                <Col sm={5}>
                    <DatePicker
                        selected={dueDate}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={new Date()}
                        dropdownMode="select"
                        locale="tr"
                        dateFormat="dd/MM/yyyy" />
                </Col>
            </FormGroup>
        );
    }
}
