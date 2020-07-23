import React from 'react'
import { Row, Col } from 'reactstrap'
import Rating from './Rating'
import Avatar from '../components/Avatar'

function truncateText(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
}
export default function AgencyEmployees(props) {
    let ratings = false;
    if (props.employee.rating !== undefined) {
        ratings = <Rating className="small" name={`rate-${props.employee.id}`} stars={props.employee.rating} />
    }
    return (
        <div class="job-reference">
            <Row>
                <Col xs="2">
                    <Avatar src={props.employee.avatar} alt={props.employee.name} className="avatar-sm round" />
                </Col>
                <Col xs="7">
                    <p class="cmt-username" >{props.employee.name} - {props.employee.title}</p>
                    <p>{truncateText(props.employee.about,200)}</p>
                </Col>
                <Col xs="3" className="text-right">
                    {ratings || ""}
                    <p>Üyelik Tarihi:<i>{props.employee.memberSince}</i></p>
                </Col>
            </Row>
        </div>
    );
}

