import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container, Button, Form, FormGroup, Input } from 'reactstrap';
import CardReactFormContainer from 'card-react';

import '../dist/css/card.css';

export default class Odeme extends Component {
    constructor(props) {
        super(props);


        this.state = {

        };
    }

    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }}>
                                <div className="odeme-tablo">
                                    <Row>
                                        <Col className="lefty table-head"><span><strong>HİZMET</strong></span></Col>
                                        <Col className="righty table-head"><span><strong>TUTAR</strong></span></Col>
                                    </Row>
                                    <div className="dropdown-divider"></div>
                                    <Row>
                                        <Col className="lefty"><span>Özel Ders - Fransızca - Mehmet B.</span></Col>
                                        <Col className="righty"><span>550 TL</span></Col>
                                    </Row>
                                    <Row>
                                        <Col className="lefty"><span>Sigorta ve Hizmet Bedeli</span></Col>
                                        <Col className="righty"><span>200 TL</span></Col>
                                    </Row>
                                    <Row>
                                        <Col className="lefty toplam"><span>Toplam</span></Col>
                                        <Col className="righty toplam"><span>720 TL</span></Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{ size: 12, offset: 0 }} sm={{ size: 8, offset: 2 }}>
                                <div className="credit-cart-ct">
                                    <div id="card-wrapper"></div>
                                    <CardReactFormContainer


                                        container="card-wrapper" // required


                                        formInputsNames={
                                            {
                                                number: 'CCnumber', // optional — default "number"
                                                expiry: 'CCexpiry',// optional — default "expiry"
                                                cvc: 'CCcvc', // optional — default "cvc"
                                                name: 'CCname' // optional - default "name"
                                            }
                                        }

                                        classes={
                                            {
                                                valid: 'valid-input',
                                                invalid: 'invalid-input'
                                            }
                                        }

                                        formatting={true}
                                    >

                                        <Form>
                                            <FormGroup row>
                                                <Col sm={12}>
                                                    <Input placeholder="Kart Numarası" type="text" name="CCnumber" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col sm={8}>
                                                    <Input placeholder="Full name" type="text" name="CCname" />
                                                </Col>
                                                <Col sm={4}>
                                                    <Input placeholder="MM/YY" type="text" name="CCexpiry" />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col sm={4}>
                                                    <Input placeholder="CVC" type="text" name="CCcvc" />
                                                </Col>
                                                <Col sm={8}>
                                                    <Button className="btn-success col-12">Ödeme Yap</Button>
                                                </Col>
                                            </FormGroup>
                                        </Form>

                                    </CardReactFormContainer>

                                    
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout >
        );
    }
}

