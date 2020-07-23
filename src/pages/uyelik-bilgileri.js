import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import GeneralInfo from '../components/settings/GeneralInfo'

export default class UyelikBilgileri extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <GeneralInfo />
                                
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        );
    }
}



