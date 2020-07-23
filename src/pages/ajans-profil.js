import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import Avatar from '../components/Avatar'
import Rating from '../components/Rating'
import JobReference from '../components/JobReference';
import Comment from '../components/Comment';
import AgencyEmployees from '../components/AgencyEmployees'
//data
import Data from '../data/Agency.json'
import { FaCheckCircle, FaUser, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';


export default class AjansProfil extends Component {
    constructor() {
        super();

        this.state = {
            data: Data,
        }
    }

    complaint(id) { //job id
        alert(id + ' IDli kullanicida sorun var')
    }
    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="3" className="text-center">
                                <Avatar src={this.state.data.avatar} alt={this.state.data.name} className="portrait-avatar" />
                                <Link className="send-msg" to={`chat?userid=${this.state.data.id}`}><FaEnvelope fontSize="19px" /> <span>Mesaj Gönder</span></Link>
                                <p className="profile-complaint" onClick={() => this.complaint(this.state.data.id)}><FaExclamationCircle fontSize="19px" /> <span>Sorun Bildir</span></p>
                            </Col>
                            <Col sm="9">
                                <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                                <p class="profile-badge usertype-badge"><FaUser /><span>AJANS</span></p>
                                <div className="profile-section">
                                    <p className="profile-username">{this.state.data.name}</p>
                                    <Rating stars={this.state.data.userRating} />
                                    <p className="rated-by">{this.state.data.ratingCount} İşveren tarafından puanlandı.</p>
                                </div>
                                <div className="profile-section">

                                    <h3 className="subheader">GENEL BİLGİ</h3>
                                    <p>{this.state.data.info}</p>
                                </div>
                                
                                <div className="profile-section">
                                    <h3 className="subheader">ÖNE ÇIKAN ÇALIŞANLAR</h3>
                                    {this.state.data.topEmployees.map(emp => {
                                        return <AgencyEmployees key={emp.id} employee={emp} />
                                    }
                                    )}
                                </div>

                                <div className="profile-section">
                                    <h3 className="subheader">İŞ GEÇMİŞİ</h3>
                                    {this.state.data.jobReference.map(job => {
                                        return <JobReference key={job.jobId} jobData={job} />
                                    }
                                    )}
                                </div>
                                <div className="profile-section">
                                    <h3 className="subheader">MÜŞTERİ YORUMLARI</h3>
                                    {this.state.data.comments.map(comment => {
                                        return <Comment key={comment.jobId} commentData={comment} />
                                    }
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Layout>
        );
    }
}