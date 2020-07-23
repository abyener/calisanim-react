import React from 'react'
import { Col, Row } from 'reactstrap'

function Cart(props) {
    return (

        <Col xs="12" className="cls-box service-cart" >
            <Row style={{ borderBottom: "1px solid #eee" }}>
                <Col xs="6"><strong>HİZMET</strong></Col>
                <Col xs={{ size: 2, offset: 4 }}><strong>TUTAR</strong></Col>
            </Row>
            <Row>
                <Col xs="6">{props.data.serviceTitle}</Col>
                <Col xs={{ size: 2, offset: 4 }}>{props.data.salary} TL</Col>
            </Row>
            <Row>
                <Col xs="6">Sigorta ve Hizmet Bedeli</Col>
                <Col xs={{ size: 2, offset: 4 }}>{props.data.insurance} TL</Col>
            </Row>
            <Row style={{ fontWeight: 600 }}>
                <Col xs="6">Toplam</Col>
                <Col xs={{ size: 2, offset: 4 }}>{props.data.total} TL</Col>
            </Row>
        </Col>

    )
}
export default Cart