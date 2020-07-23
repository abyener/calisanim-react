import React from 'react'
import Rating from './Rating'
import {Row,Col} from 'reactstrap'

export default function JobReference(props) {
  let ratings = false;
  if (props.jobData.rating !== undefined) {
    ratings = <Rating className="small" name={`rate-${props.jobData.jobId}`} stars={props.jobData.rating} />
  }
  return (
    <div class="job-reference">
      <Row>
        <Col xs="6">
        <p className="ref-title">{props.jobData.title}</p>
        {ratings || ""}
        </Col>
        <Col xs="6" className="text-right">
        <p><i>{props.jobData.started_at} - {props.jobData.finished_at}</i></p>
        </Col>
      </Row>
    </div>
  );
}

