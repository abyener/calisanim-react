import React, { Component } from 'react'
import Rating from '../components/Rating'
import Avatar from '../components/Avatar'
import { Row, Col } from "reactstrap";
import { Link } from 'react-router-dom'

export default class EmployeeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const data = this.props.data
    let ratings = false;
    if (data.userRating !== undefined) {
      ratings = <Rating className="small card-rating" name={`rate-${data.id}`} stars={data.userRating} />
    }
    return (

      <div className="profile-wrapper">
        <div className="profile">
          <a href="/profil/" className="profile-block" target="_blank" aria-label=" ">
            <div className="inner-container">
              <div className="row">
                <div className="col-md-3 profile-left">
                  <div className="profile-avatar avatar-xlg">
                    <div>
                      <Avatar src={data.avatar} alt="" />
                    </div>
                  </div>

                </div>
                <div className="col-md-9 profile-right"><span className="profile-name">{data.name}</span>
                  <div className="profile-details p-details">
                    <span>{data.location}</span>
                    <span>{data.workTime}</span>
                    <span>{data.experience + "Tecrübe"}</span>
                    <span>{data.salary}</span>
                  </div>
                  {ratings || ""}
                  {/* <div className="stars"><span className="icon icon-stars icon-stars-5"><svg xmlns="http://www.w3.org/2000/svg" width="89" height="13" viewBox="0 0 89 13" xlink="http://www.w3.org/1999/xlink"><defs><path id="star" stroke="none" d="M4.6186 3.5457c.2006-.5534.2006-.5534.2376-.5675l.03-.1705L5.566.9332C5.7723.3648 6.093 0 6.5555 0c.472 0 .791.3773.9848.9596L8.17 2.8524l.3853 1.1584 2.217.075.996.0337c1.3364.045 1.6617 1.0928.5853 1.8863l-.8032.5922-.803.5923-.9813.7235c.027.0918.064.2207.121.4197.137.4753.159.5512.206.7573l.564 1.9133c.2304.802.018 1.486-.7275 1.486-.28 0-.5747-.124-.886-.347l-2.614-1.871-2.6626 1.8005c-.308.2084-.5978.3237-.87.3237-.7604 0-.9678-.6972-.7136-1.503l.302-.9522.302-.9522.3688-1.1626-.3444-.2685c-.464-.3617-.464-.3617-.3114-.3767h-.172l-.1354-.1058L.619 5.848c-1.054-.822-.7004-1.8602.6362-1.8693l.9963-.007 2.2182-.0158.149-.411z"></path><linearGradient id="fill" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="50%" stop-color="#FB4C4C" stop-opacity="1"></stop><stop offset="50%" stop-color="#BCBCBC" stop-opacity="1"></stop></linearGradient></defs><use className="star star-1" xlink:href="#star"></use><use className="star star-2" xlink:href="#star" transform="translate(19)"></use><use className="star star-3" xlink:href="#star" transform="translate(38)"></use><use className="star star-4" xlink:href="#star" transform="translate(57)"></use><use className="star star-5" xlink:href="#star" transform="translate(76)"></use></svg></span><span className="stars-count stars-count-lg">(7)</span></div> */}
                  <span className="hired-info"><span className="badge tooltip-container tooltip-badge" title="">8 Referans</span></span>
                  <p className="profile-desc">{data.info}</p>
                  <Link to="/chat" className="btn btn-info text-white btn-sm btn-message">
                    <span>Mesaj Gönder</span>
                  </Link>
                </div>
              </div>
            </div>
          </a></div>
      </div>




    )
  }
}

