import React from 'react'
import { Row, Col } from 'reactstrap';
import Avatar from './Avatar';
import Rating from './Rating'

function truncateText(source, size) {
  return source.length > size ? source.slice(0, size - 1) + "…" : source;
}

export default function Comment(props) {
  return (
    <div class="comment">
      <Row>
        <Col xs="2">
          <Avatar src="" alt={"props.commentData.name"} className="avatar-sm round" />
        </Col>
        <Col xs="7">
          <p class="cmt-username" >{"props.commentData.name"} </p>
          <p>{truncateText(props.commentData.comment, 200)} </p>
        </Col>
        <Col xs="3" className="text-right">
          <Rating className="small" name={`rate-${props.commentData.jobId}`} stars={props.commentData.rating} />
          <p>{props.commentData.created_at} </p>
        </Col>
      </Row>
    </div>
  );
}

