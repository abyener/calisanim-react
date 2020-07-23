import React  from 'react';
import { Row, Col} from 'reactstrap';
import Avatar from '../Avatar'
import { Link } from 'react-router-dom'


function JobCard(props) {
    const userType = (props.view === "worker" ? props.data.worker : props.data.employer)
    return (

        <Row>
            <Col sm={{ size: 10, offset: 1 }}>
                <div className="card testimonial-card">
                    <div className="card-up indigo lighten-1"></div>
                    <Row>
                        <Col lg="4">
                            <div className="avatar mx-auto white">
                                <Avatar className="rounded-circle" src={userType.avatar}
                                    alt={userType.name} />
                            </div>

                        </Col>
                        <Col lg="4">
                            <div className="card-inner m-4">
                                <p>Anlaşılan Tutar: <strong> {props.data.cart.salary} / {props.data.salaryPeriod}</strong></p>
                                <p>Ödeme Tarihi: <strong> {props.data.payday}</strong></p>
                            </div>
                        </Col>
                        <Col lg="4">
                            <div class="card-inner m-4 text-right">
                                <p>Başlangıç Tarihi: <strong>{props.data.dateStart}</strong></p>
                                <p>Bitiş Tarihi: <strong>{props.data.dateEnd}</strong></p>
                            </div>
                        </Col>
                    </Row>
                    <div className="card-body">
                        <Row>
                            <Col lg="6" className="text-right">
                                <h4 className="card-title"><strong>{userType.name}</strong>  </h4>
                                <h4 className="card-title">{props.data.cart.serviceTitle}, {props.data.type} </h4>
                            </Col> 
                            <Col lg="6">
                                <Link className="btn btn-outline-red card-link" to={`odemeyap/${props.data.id}`}>Ödeme Yap</Link>
                                <Link className="btn btn-outline-red card-link" to={`isdetay/${props.data.id}`}>Görüntüle</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
        </Row>

    )

}
export default JobCard


