import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


export default function SubscriptionPlan(props) {

    return (
        <Col lg={4} md={6} key={props.plans.id}>
            <div  className="sub-plan">
                <h2 className="sub-title">{props.plans.title} </h2>
                <img className="sub-img img-fluid" src={require(`../dist/images/${props.plans.image}`)} alt={props.plans.title} />
                <div className="sub-specs">
                    {props.plans.specs.map(spec =>
                        <p>{spec}</p>
                    )}
                </div>
                <div className="payment-ct">
                    <div className="sub-price">
                        <p className="discounted">
                            {props.plans.discountedPrice}
                        </p>
                        <p className="monthly-price">&#8378; {props.plans.monthlyPrice}</p>
                    </div>
                    <div className="sub-button">
                        <Link className="subs-btn" to={`odemedetay/plan/${props.plans.id}`}>HEMEN AL</Link>
                    </div>
                </div>
                </div>
        </Col>
    );
}

