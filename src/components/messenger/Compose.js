import React, { Component } from 'react';
import { IoIosSend } from 'react-icons/io';

export default class Compose extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.state = {message: ''}
  }
  handleChange(e) {
    this.setState({message: e.target.value});
  }
  

  onFormSubmit = e => {
    e.preventDefault()
    alert('Mesaj gönderildi: ' + this.state.message)

    //send msg api call & rerender messages
    this.setState({
      message : ''
    })
    this.props.getMessages();
  }
  
  render() {
    const message = this.state.message;
    return (
      <div className="compose">
        <form onSubmit={this.onFormSubmit}>
        <input
          type="text" name="compose"
          className="compose-input"
          placeholder="Mesajınızı yazın"
          value={message}
          onChange={this.handleChange}
        />
          <IoIosSend className="msg-icon" onClick={this.onFormSubmit} />
          </form>
      </div>
    );
  }
}