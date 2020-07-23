import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import JobDetail from '../components/job/JobDetail'
import Cart from '../components/job/Cart'
import JobConfirmation from '../components/job/JobConfirmation'
import data from '../data/JobDetail.json'

export default class IsDetay extends Component {
    constructor() {
        super()
        this.state = {
            postData: data,
            view: "worker"
        }
    }
    render() {

        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col xs={{ size: 6, offset: 3 }}>
                                <Row>
                                    <JobDetail view={this.state.view} data={this.state.postData} />
                                </Row>
                                <Row>
                                    <Cart data={this.state.postData.cart} />
                                </Row>
                                <Row>
                                    <JobConfirmation view={this.state.view} data={this.state.postData} />
                                </Row>
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Layout>
        )
    }
}







