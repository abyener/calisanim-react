import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import ContactForm from '../components/ContactForm'

export default class Iletisim extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Layout>
                <div className="header-section ilt" ><img className="header-img" src="https://calisanim.monisana.com/public/assets/images/banner/iletisimstock2.jpg" alt="" /></div>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="5">
                                <h2>Bizimle İletişime Geçin</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                            </Col>
                            <Col sm="7">
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        );
    }
}



