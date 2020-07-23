import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import Avatar from '../components/Avatar'
import Rating from '../components/Rating'
import JobReference from '../components/JobReference';
import Comment from '../components/Comment';

//import NotFoundPage from "./404"
import { Employer } from "../backend"
import { FaCheckCircle, FaUser, FaEnvelope, FaExclamationCircle } from 'react-icons/fa';


export default class IsverenProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: props.match.params.id,
      isValid: false,
    }
  }
  componentDidMount() {
    Employer.all().then(data => data.map(emp => {
      if (emp.id == this.state.id) {
        this.setState({
          isValid: true,
          data: emp,
        })
      }
    }))
  }
  complaint(id) { //job id
    alert(id + ' IDli kullanicida sorun var')
  }
  render() {
    let data = this.state.data;
    let user = this.state.data.user;

    return this.state.isValid ? (
      <Layout>
        <section className="content-inner">
          <Container>
            <Row>
              <Col sm="3" className="text-center">
                <Avatar src={user.image} alt={user.name} className="portrait-avatar" />
                <Link className="send-msg" to={`chat?userid=${data.id}`}><FaEnvelope fontSize="19px" /> <span>Mesaj Gönder</span></Link>
                <p className="profile-complaint" onClick={() => this.complaint(data.id)}><FaExclamationCircle fontSize="19px" /> <span>Sorun Bildir</span></p>
              </Col>
              <Col sm="9">
                <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                <p class="profile-badge usertype-badge"><FaUser /><span>İŞVEREN</span></p>
                <div className="profile-section">
                  <p className="profile-username">{user.name}</p>
                  <Rating stars={1} />
                  <p className="rated-by">{0} Çalışan tarafından puanlandı.</p>
                </div>
                <div className="profile-section">

                  <h3 className="subheader">GENEL BİLGİ</h3>
                  <p>{user.info}</p>
                </div>
                {user.addresses[0] ?
                  <div className="profile-section">
                    <h3 className="subheader">EV HAKKINDA</h3>
                    <p><strong>Oda Sayısı</strong>: {user.addresses[0].room_count}</p>
                    <p><strong>Çocuk Sayısı</strong>: {"user.addresses[0].children_count"}</p>
                    <p><strong>Yaşlı Sayısı</strong>: {"user.addresses[0].senior_count"}</p>
                    <p><strong>Evcil Hayvan</strong>: {user.addresses[0].pets} {"user.addresses[0].pet_count"}</p>
                    <p><strong>Kamera Sistemi</strong>: {user.addresses[0].camera}</p>
                    <p><strong>Güvenlik</strong>: {"user.addresses[0].security"}</p>
                  </div> : ""}
                <div className="profile-section">
                  <h3 className="subheader">İŞ GEÇMİŞİ</h3>
                  {data.contracts.map(job => {
                    return <JobReference key={job.jobId} jobData={job} />
                  }
                  )}
                </div>
                <div className="profile-section">
                  <h3 className="subheader">ÇALIŞAN YORUMLARI</h3>
                  {user.reviews.map(comment => {
                    return <Comment key={comment.id} commentData={comment} />
                  }
                  )}
                </div>
              </Col>
            </Row>
          </Container>

        </section>
      </Layout>) : ("");
  }
}