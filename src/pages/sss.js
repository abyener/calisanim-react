import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import Faq from '../components/Faq'
// import data from '../data/Faq.json'
import { FAQ } from '../backend'

export default class SSS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqs: []
        }
    }

    componentDidMount() {
        FAQ.all()
        .then(data => this.setState({faqs: data}))
    }

    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                        <Col sm="12">
                            <h1 className="page-title">Sıkça Sorulan Sorular</h1>
                        </Col>
                            <Col sm="12">
                                { this.state.faqs.map(faq =>  <Faq key={faq.id} question={faq.question} answer={faq.answer} />) }  
                                                        
                            </Col>
                        </Row>
                    </Container>

                </section>
            </Layout>
        );  
    }
}



