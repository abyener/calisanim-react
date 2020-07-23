import React, { Component } from 'react';
import Avatar from '../Avatar';


export default class Toolbar extends Component {
  render() {
    const { activeUser, leftItems, rightItems } = this.props;
    return (
      <div className="toolbar">
        <div className="left-items">{leftItems}</div>
        
        <Avatar src={activeUser.avatar} className="conversation-photo" />
        <div className="conversation-info"><h1 className="conversation-title">{activeUser.name}</h1></div>
        <div className="right-items">{rightItems}</div>
      </div>
    );
  }
}