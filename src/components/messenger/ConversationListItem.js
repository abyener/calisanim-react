import React, { Component } from 'react';
import shave from 'shave';


export default class ConversationListItem extends Component {
  componentDidMount() {
    shave('.conversation-snippet', 40);
  }

  render() {
    const { userId, photo, name, text, notRead } = this.props.data;

    return (
      <div className="conversation-list-item" onClick={ () => {this.props.click(userId); this.props.toggleSidebar();}} >
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className={`conversation-snippet ${notRead && 'notread'}`}>{text}</p>
        </div>
      </div>
    );
  }
}