import React, { Component } from 'react'
import Avatar from '../components/Avatar'
import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

export default class JobPostingCard extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      const jobData = this.props.data
      return (
         <div className="profile-wrapper">
            <div className="profile">
               <Link to={`/ilan/${jobData.id}`}>

                  <div className="inner-container">
                     <Row>
                        <Col md="3" className="profile-left">
                           <div className="profile-avatar avatar-xlg">
                              <div>
                                 <Avatar src={jobData.avatar} />
                              </div>
                           </div>
                        </Col>
                        <Col md="9" className="profile-right">
                           <div className="profile-details p-details">
                              <p><strong>{jobData.title}</strong></p>
                              <span> {jobData.location}  </span><span>{jobData.type}</span><span>{jobData.salary} ₺ </span>
                           </div>
                           <button type="button"
                              className="btn btn-primary-2 btn-sm btn-message">
                              <span>Başvur</span>
                           </button>
                        </Col>
                     </Row>
                  </div>
               </Link>
            </div>
         </div>


      )
   }
}