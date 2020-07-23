import React, { Component } from 'react'
import Layout from "../components/layout"
import { Row, Col, Container } from 'reactstrap';
import SubscriptionPlans from '../components/SubscriptionPlan'


export default class UyelikPlanlari extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userHasSubPlan: false,
            subPlans: [
                {
                    id: 1,
                    title: "Aylık",
                    image: "sub1.png",
                    specs: ["Sınırsız Mesaj", "Sınırsız İlan", "Görüntülü Konuşma"],
                    monthlyPrice: "10",
                    discountedPrice: null
                },
                {
                    id: 2,
                    title: "3 Aylık",
                    image: "sub2.png",
                    specs: ["Sınırsız Mesaj", "Sınırsız İlan", "Görüntülü Konuşma"],
                    monthlyPrice: 40,
                    discountedPrice: 45
                },
                {
                    id: 3,
                    title: "Yıllık",
                    image: "sub3.png",
                    specs: ["Sınırsız Mesaj", "Sınırsız İlan", "Görüntülü Konuşma"],
                    monthlyPrice: 35,
                    discountedPrice: 45
                }
            ]
        }
    }

    componentDidMount() {
        //check if user has subs

    }
    render() {

        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h1 className="page-title">Üyelik Planları</h1>
                            </Col>
                        </Row>
                        <Row>
                        { this.state.subPlans.map(plan => {
                         return  <SubscriptionPlans plans={plan} />
                        })}
                        </Row>
                    </Container>
                </section>
            </Layout>
        );
    }
}


