import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import Avatar from "../components/Avatar"
import data from '../data/Payments.json'
import { FaAngleRight } from 'react-icons/fa';

export default class Odemelerim extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postData: data,
            awaitingPayments: [],
            donePayments: []
        }
    }

    componentDidMount() {
        const payments = this.state.postData
        const paymentsAwaiting = [], paymentsDone = []

        payments.forEach(elem => {
            if(elem.statusCode === 0) {
                paymentsAwaiting.push(elem)
            } else if (elem.statusCode === 1){
                paymentsDone.push(elem)
            }
        })
        
        this.setState({ awaitingPayments: paymentsAwaiting, donePayments: paymentsDone })
    }
    render() {

        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h1 className="page-title">Ödemelerim</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12">
                                <h4>BEKLEYEN ÖDEMELER</h4>

                                {this.state.awaitingPayments.map(pay => {
                                    return (
                                        <Row className="payment-box awaiting" key={pay.id}>
                                            <Col xs="1">
                                                <Avatar className="tiny" src={pay.avatar} alt={pay.name} />
                                            </Col>
                                            <Col xs="2">
                                                <p className="av-name">{pay.name}</p>
                                            </Col>
                                            <Col xs={{ size: 2, offset: 2 }}>
                                                <p className="status-button aw-status">{pay.statusMsg}</p>
                                            </Col>
                                            <Col xs="2">
                                                <p>{pay.date}</p>
                                            </Col>
                                            <Col xs="1">
                                                <p>{pay.salary} TL</p>
                                            </Col>
                                            <Col xs="2" >
                                                <Link className="butn-red pay-btn" to={`odemedetay/${pay.jobId}/${pay.id}`}>ÖDE</Link>
                                            </Col>
                                        </Row>
                                    )
                                })}

                            </Col>
                        </Row>
                        <Row style={{ marginTop: '50px' }}>
                            <Col xs="12">
                                <h4>GEÇMİŞ ÖDEMELER</h4>

                                {this.state.donePayments.map(pay => {
                                    return (
                                        <Row className="payment-box done" key={pay.id}>
                                            <Col xs="1">
                                                <Avatar className="tiny" src={pay.avatar} alt={pay.name} />
                                            </Col>
                                            <Col xs="2">
                                                <p className="av-name">{pay.name}</p>
                                            </Col>
                                            <Col xs={{ size: 2, offset: 2 }}>
                                                <p className="status-button done-status">{pay.statusMsg}</p>
                                            </Col>
                                            <Col xs="2">
                                                <p>{pay.date}</p>
                                            </Col>
                                            <Col xs="1">
                                                <p>{pay.salary} TL</p>
                                            </Col>
                                            <Col xs="2" >
                                                <Link className="pay-btn" to={`odemedetay/${pay.jobId}/${pay.id}`}><FaAngleRight size={25} /></Link>
                                            </Col>
                                        </Row>
                                    )
                                })}

                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        );
    }
}


