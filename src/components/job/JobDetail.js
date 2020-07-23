import React from 'react';
import { Row, Col } from 'reactstrap';
import Avatar from '../Avatar'


function JobDetail(props) {
    const userType = (props.view === "worker" ? props.data.worker : props.data.employer)
    return (

        <Col xs="12" className="cls-box">
            <Row>
                <Col xs={{ size: 4, offset: 2 }}>
                    <Avatar className="job-avatar" src={userType.avatar}
                        alt={userType.name} />

                </Col>
                <Col xs="6">
                    <p className="job-user">{userType.name}</p>
                    <p className="job-location">{userType.service}</p>
                </Col>
            </Row>
            <Row className="job-detail-info">
                <Col xs="6">
                <p className="mini-title">Telefon Numarası</p>
                <p className="inner-data">{userType.tel}</p>
                </Col>
                <Col xs="6">
                <p className="mini-title">İşe Başlama Durumu</p>
                <p className="inner-data">{props.data.jobStatus}</p>
                </Col>
                <Col xs="6">
                <p className="mini-title">Maaş Tarihi</p>
                <p className="inner-data">{props.data.payday}</p>
                </Col>
                <Col xs="6">
                <p className="mini-title">İşe Başlama Tarihi</p>
                <p className="inner-data">{props.data.dateStart}</p>
                </Col>
                <Col xs="6">
                <p className="mini-title">Bitiş Tarihi</p>
                <p className="inner-data">{props.data.dateEnd}</p>
                </Col>
            </Row>
        </Col>

    )

}
export default JobDetail


