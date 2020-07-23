import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Row, Button, Col, Container } from 'reactstrap';
import Avatar from '../components/Avatar'
import Rating from '../components/Rating'
import JobReference from '../components/JobReference';
import Comment from '../components/Comment';

import { FaCheckCircle, FaUser, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';


export default class Employer extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.submitToJob = this.submitToJob.bind(this)
    }
    submitToJob(id){
        alert(id + '  nolu ilana başvuruldu')
    }
    render() {
        const employerData = this.props.data
        return (
            <Container>
                {/* <Row>
                    <Col sm="3" className="text-center">
                        <Avatar src={this.state.data.avatar} alt={this.state.data.name} className="portrait-avatar" />
                        <Link className="send-msg" to={`chat?userid=${this.state.data.id}`}><FaEnvelope fontSize="19px" /> <span>Mesaj Gönder</span></Link>
                        <p className="profile-complaint" onClick={() => this.complaint(this.state.data.id)}><FaExclamationCircle fontSize="19px" /> <span>Sorun Bildir</span></p>
                    </Col>
                    <Col sm="9">
                        <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                        <p class="profile-badge usertype-badge"><FaUser /><span>İŞVEREN</span></p>
                        <div className="profile-section">
                            <p className="profile-username">Mehmet C.</p>
                            <Rating stars={this.state.data.userRating} />
                            <p className="rated-by">{this.state.data.ratingCount} Çalışan tarafından puanlandı.</p>
                        </div>
                        <div className="profile-section">

                            <h3 className="subheader">GENEL BİLGİ</h3>
                            <p>{this.state.data.info}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="subheader">EV HAKKINDA</h3>
                            <p><strong>Oda Sayısı</strong>: {this.state.data.homeInfo.roomCount}</p>
                            <p><strong>Çocuk Sayısı</strong>: {this.state.data.homeInfo.childrenCount}</p>
                            <p><strong>Yaşlı Sayısı</strong>: {this.state.data.homeInfo.seniorCount}</p>
                            <p><strong>Evcil Hayvan</strong>: {this.state.data.homeInfo.pet} {this.state.data.homeInfo.petInfo}</p>
                            <p><strong>Kamera Sistemi</strong>: {this.state.data.homeInfo.camera}</p>
                            <p><strong>Güvenlik</strong>: {this.state.data.homeInfo.security}</p>
                        </div>
                        <div className="profile-section">
                            <h3 className="subheader">İŞ GEÇMİŞİ</h3>
                            {this.state.data.jobReference.map(employer => {
                                return <JobReference key={employer.jobId} employerData={employer} />
                            }
                            )}
                        </div>
                        <div className="profile-section">
                            <h3 className="subheader">ÇALIŞAN YORUMLARI</h3>
                            {this.state.data.comments.map(comment => {
                                return <Comment key={comment.employer} commentData={comment} />
                            }
                            )}
                        </div>
                    </Col>
                </Row> */}
            </Container>
        );
    }
}



