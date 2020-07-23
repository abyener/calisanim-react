import React, { Component } from 'react';
import ConversationList from '../messenger/ConversationList';
import MessageList from '../messenger/MessageList';
import VideoChat from '../messenger/VideoChat'

import { IoIosMenu } from 'react-icons/io';


const user = {
    id: 10,
    name: 'Mehmet C.',
    avatar: 'dummy-avatar.jpeg'
}
const self = {
    id: 55,
    name: 'Selma K.',
    avatar: 'dummy-avatar.jpeg'
}

export default class Messenger extends Component {
    constructor() {
        super()
        this.state = {
            activeUser: user,
            selfInfo: self,
            videoChatStatus: false,
            showConversationList: true,
            sidebar: false
        }
        this.toggleVideoStatus = this.toggleVideoStatus.bind(this)
        this.toggleActiveUser = this.toggleActiveUser.bind(this)
        this.toggleConversationList = this.toggleConversationList.bind(this)
        this.toggleSidebar = this.toggleSidebar.bind(this)

    }

    toggleSidebar(){
        this.setState(prevState => ({ sidebar: !prevState.sidebar }))
    }

    toggleVideoStatus()  {
        this.setState(prevState => ({ videoChatStatus: !prevState.videoChatStatus }))
    }

    toggleActiveUser(userId){
        //get user info by userId and check if userSelf has subscription
        alert('getting msg of' +userId)
        const user2 = {
            id: userId,
            name: 'Mehmet C.',
            avatar: 'dummy-avatar.jpeg'
        }

        this.setState({ activeUser: user2 })
        
    }
    toggleConversationList()  {
        this.setState(prevState => ({ showConversationList: !prevState.showConversationList }))
    }
    render() {

        return (
            <div className={`messenger ${this.state.sidebar ? 'sidebar-opened' : ''}`}>
                 
                <div className="scrollable sidebar">
                <IoIosMenu className="msg-icon sidebar-toggle" onClick={()=> this.toggleSidebar()}  />
                    {this.state.showConversationList
                        ? <ConversationList self={this.state.selfInfo} activeUser={this.state.activeUser} toggleActiveUser={this.toggleActiveUser} toggleSidebar={this.toggleSidebar}  />
                        : <MessageList activeUser={this.state.activeUser} toggleVideoStatus={this.toggleVideoStatus} />
                    }
                </div>

                <div className="scrollable content">
                <IoIosMenu className="msg-icon sidebar-toggle" onClick={()=> this.toggleSidebar()}  />

                    {this.state.videoChatStatus
                        ? <VideoChat activeUser={this.state.activeUser} 
                        toggleVideoStatus={this.toggleVideoStatus} 
                        toggleConversationList={this.toggleConversationList} 
                        toggleActiveUser={this.toggleActiveUser}  />
                        : <MessageList toggleVideoStatus={this.toggleVideoStatus} activeUser={this.state.activeUser} />
                    }
                </div>
            </div>
        );

    }
}