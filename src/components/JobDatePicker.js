import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup, Input, InputGroupAddon, Row, Col } from 'reactstrap';

import { FaRegCalendarAlt } from 'react-icons/fa';


const DateAddon = ({ value, onClick }) => (
  <InputGroup>
    <Input placeholder="username" onClick={onClick} value={value} />
    <InputGroupAddon className="input-group-text" addonType="append">
      <FaRegCalendarAlt />
    </InputGroupAddon>
  </InputGroup>
);


export default class JobDatePicker extends Component {
  constructor() {
    super()
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    }
  }


  handleStart = date => {
    this.props.dates("start",date)
  }
  handleEnd = date => {
    this.props.dates("end",date)
  }

  render() {
    return (
      <Row>
        <Col size="3">
          <p>Başlangıç:</p>
          <DatePicker
            selected={this.props.startDate}
            onChange={this.handleStart}
            locale="tr"
            selectsStart
            minDate={new Date()}
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            withPortal
            dateFormat="dd.MM.yyyy"
            customInput={<DateAddon />}

          />
        </Col>
        <Col size="3">
          <p>Bitiş:</p>
          <DatePicker
            selected={this.props.endDate}
            onChange={this.handleEnd}
            locale="tr"
            selectsEnd
            minDate={this.props.startDate}
            endDate={this.props.endDate}
            dateFormat="dd.MM.yyyy"
            withPortal
            customInput={<DateAddon />}

          />
        </Col>
      </Row>
    );
  }
}

// function JobDatePicker(){
//     const [startDate, setStartDate] = useState(null);
//     const years = range(1990, getYear(new Date()) + 1, 1);
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December"
//     ];
//     return (
//       <DatePicker
//         selected={startDate}
//         onChange={date => setStartDate(date)}
//         //locale tr yok
//         locale="en-GB"
//         minDate={new Date()}
//         maxDate={addMonths(new Date(), 2)}
//         showTimeSelect
//         timeFormat="HH:mm"
//         timeIntervals={60}
//         timeCaption="Saat"

//         //minTime={setHours(setMinutes(new Date(), 0), 9)}
//         //maxTime={setHours(setMinutes(new Date(), 0), 20)}

//         dateFormat="MMMM d, yyyy h:mm aa"
//         showDisabledMonthNavigation
//       />
//     );
//   };

// export default JobDatePicker