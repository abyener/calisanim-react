import React, { Component } from 'react'
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap'
import LoginForm from '../components/LoginForm'

export default class UyeGiris extends Component {
    render() {
        return (
            <Layout>
                <section className="login-bg">
                    <Container>
                        <Row>
                            <Col sm={4} >
                            <div id="register-form" className="login">
                                <h3 className="h3 text-center">GİRİŞ YAP</h3>
                                   <LoginForm />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}
