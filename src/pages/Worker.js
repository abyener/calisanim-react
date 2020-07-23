import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../components/layout"
import { Row, Col, Container, Modal, ModalBody } from 'reactstrap'
import ReactPlayer from 'react-player'


import Avatar from '../components/Avatar'
import Rating from '../components/Rating'
import JobReference from '../components/JobReference'
import Comment from '../components/Comment'
import Ability from '../components/profile/Ability'
import Schedule from '../components/profile/Schedule'
//data
import Data from '../data/Worker.json'
import { FaCheckCircle, FaUser, FaEnvelope, FaExclamationCircle, FaMoneyBill, FaPlay } from 'react-icons/fa';

import { Worker as APIWorker } from '../backend'

export default class Worker extends Component {
    constructor() {
        super();

        this.state = {
            data: Data,
            worker: null,
            videoModal: false

        }
        this.toggleVideoModal = this.toggleVideoModal.bind(this)
        this.renderVideo = this.renderVideo.bind(this)
    }

    componentDidMount() {
        var params = this.props.match.params
        APIWorker.get(params.id)
            .then(worker => this.setState({
                worker: worker
            }))
      }

    toggleVideoModal() {
        this.setState(prevState => ({
            videoModal: !prevState.videoModal
        }));
    }


    complaint(id) { //job id
        alert(id + ' IDli kullanicida sorun var')
    }
    render() {
        if (!this.state.worker) return <p>Yükleniyor...</p>;
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="3" className="text-center">
                                <Avatar src={this.state.data.avatar} alt={this.state.data.name} className="portrait-avatar" />
                                {this.state.data.videoUrl !== null ? this.renderVideo() : null}
                                <Link className="send-msg" to={`chat?userid=${this.state.data.id}`}><FaEnvelope fontSize="19px" /> <span>Mesaj Gönder</span></Link>
                                <Link className="profile-offer" to={`teklif?userid=${this.state.data.id}`}><FaMoneyBill fontSize="19px" /> <span>Teklif Ver</span></Link>
                                <p className="profile-complaint" onClick={() => this.complaint(this.state.data.id)}><FaExclamationCircle fontSize="19px" /> <span>Sorun Bildir</span></p>
                            </Col>
                            <Col sm="9">
                                <Row>
                                    <Col lg="5">
                                        <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                                        <p class="profile-badge usertype-badge"><FaUser /><span>ÇALIŞAN</span></p>
                                        <div className="profile-section">
                                            <p className="profile-username">{this.state.worker.user.name} {this.state.worker.user.surname}</p>
                                            <p><strong>{this.state.worker.gender === 'male' ? 'Erkek' : 'Kadın'} - {this.state.data.title} - {this.state.data.location}</strong></p>
                                            <Rating stars={this.state.data.userRating} />
                                            <p className="rated-by">{this.state.data.ratingCount} İşveren tarafından puanlandı.</p>
                                        </div>

                                    </Col>
                                    <Col lg="7">
                                        <div className="salary-rates">
                                            <p><span>{this.state.data.experience}</span> <br /> Tecrübe</p>
                                            <p><span>{this.state.data.salary.hourly} &#8378; </span><br />Saatlik Ücret</p>
                                            <p><span>{this.state.data.salary.daily} &#8378;</span><br />Günlük Ücret</p>
                                            <p><span>{this.state.data.salary.weekly} &#8378;</span><br />Haftalık Ücret</p>
                                            <p><span>{this.state.data.salary.monthly} &#8378;</span><br />Aylık Ücret</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="profile-section">
                                            {this.state.data.abilities.map(abil => {
                                                return abil.position === "top" ? <Ability key={abil.id} abil={abil} /> : null
                                            }
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12">
                                        <div className="profile-section">
                                            <h3 className="subheader">GENEL BİLGİ</h3>
                                            <p>{this.state.data.info}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs="12">
                                        <div className="profile-section">
                                            <h3 className="subheader">ÖZELLİKLER</h3>
                                            <Row>
                                                {this.state.data.abilities.map(abil => {
                                                    return abil.position === "mid" ? <Col xs="2"><Ability key={abil.id} abil={abil} /></Col> : null
                                                }
                                                )}
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>

                                <div className="profile-section">
                                    <h3 className="subheader">İŞ GEÇMİŞİ</h3>
                                    {this.state.data.jobReference.map(job => {
                                        return <JobReference key={job.jobId} jobData={job} />
                                    }
                                    )}
                                </div>
                                <div className="profile-section abilities-bot">
                                    <h3 className="subheader">YETENEKLER VE DENEYİM</h3>
                                    <h4>Yetenekler</h4>
                                    {this.state.data.abilities.map(abil => {
                                        return abil.position === "bot" ? <Ability key={abil.id} abil={abil} /> : null
                                    }
                                    )}
                                    <h4>Deneyimler</h4>
                                    {this.state.data.abilities.map(abil => {
                                        return abil.type === "experience" ? <Ability key={abil.id} abil={abil} /> : null
                                    }
                                    )}
                                    <h4>Diller</h4>
                                    {this.state.data.abilities.map(abil => {
                                        return abil.type === "language" ? <Ability key={abil.id} abil={abil} /> : null
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
                                <div className="profile-section">
                                    <h3 className="subheader">Uygunluk Durumu</h3>
                                    <Schedule data={this.state.data.schedule} />
                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Layout>
        );
    }
    renderVideo() {
        return (
            <div>
                <p className="profile-video" onClick={this.toggleVideoModal}><FaPlay fontSize="19px" /> <span>Videoyu Oynat</span></p>
                <Modal size="lg" centered="true" isOpen={this.state.videoModal} toggle={this.toggleVideoModal}>
                    <ModalBody>
                        <ReactPlayer url={this.state.data.videoUrl} style={{ margin: "0 auto" }} />
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}