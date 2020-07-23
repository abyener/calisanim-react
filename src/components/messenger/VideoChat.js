import React, { Component } from 'react';
import { IoIosCall, IoIosMore, IoIosChatboxes } from 'react-icons/io';
import { FaMicrophoneSlash ,FaMicrophone} from 'react-icons/fa'

export default class VideoChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoStatus: false,
            micStatus: true
        }
        this.toggleMic = this.toggleMic.bind(this);
    }

    componentDidMount() {
        this.setState({
            videoStatus: true
        })
    }

    toggleMic() {
        this.setState(prevState => ({ micStatus: !prevState.micStatus }))
        // alert("mic toggled" + this.state.micStatus)
    }

    render() {
        return (
            this.state.videoStatus ?
                <div className="video-container">
                    <div className="video-toolbar">
                        <div className="vid-items">
                            {this.state.micStatus
                                ? <FaMicrophoneSlash className="video-icon" onClick={() => this.toggleMic()} />
                                : <FaMicrophone className="video-icon" onClick={() => this.toggleMic()} />
                            }
                            <IoIosCall className="video-icon hangup" onClick={() => this.props.toggleVideoStatus()} />
                            <IoIosChatboxes className="video-icon" onClick={() => this.props.toggleConversationList()}  />
                            <IoIosMore className="video-icon" />
                        </div>
                    </div>
                    <div className="self-cam">
                    </div>
                </div> : null
        );

    }
}