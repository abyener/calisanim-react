import React, { Component } from 'react';


export default class VideoToolbar extends Component {
  render() {
    const { activeUser, items } = this.props;
    return (
      <div className="video-toolbar">
        <div className="vid-items">{items}</div>
      </div>
    );
  }
}