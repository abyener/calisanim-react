import React, { Component } from 'react';
import ConversationListItem from '../messenger/ConversationListItem';
import Toolbar from '../messenger/Toolbar';
import axios from 'axios';


export default class ConversationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: []
    }
  }

  componentDidMount() {
    this.getConversations()
  }

  getConversations = () => {
    axios.get('https://randomuser.me/api/?results=20').then(response => {
      this.setState(prevState => {
        let conversations = response.data.results.map(result => {
          return {
            userId: result.login.uuid,
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello world! This is a long message that needs to be truncated.',
            notRead: true
          }
        })

        return { ...prevState, conversations }
      })
    })
  }

  render() {
    return (
      <div className="conversation-list">
        <Toolbar
          activeUser={this.props.self}
          
        />
        {
          this.state.conversations.map(conversation =>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
              click={this.props.toggleActiveUser}
              toggleSidebar={this.props.toggleSidebar}
            />
          )
        }
      </div>
    );
  }
}