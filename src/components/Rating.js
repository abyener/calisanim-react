import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component'
// import { FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'

class Rating extends Component {
  render() {
    let starCheck = false
    let starClass = ""
    return (
      <div className={`rating ${(this.props.className || '')}`}>
        <StarRatingComponent
          name={this.props.name !== undefined ? this.props.name : "rate-default"}
          editing={false}
          renderStarIcon={(index, value) => {
            if (index <= value) {
              if (!starCheck) {
                starClass = "fas fa-star "
              } else {
                starClass = "fas fa-star margined"
                starCheck = true;
              }
            } else {
              starClass = "far fa-star"
            }
            return (
              <span>
                <i className={starClass} />
              </span>
            )
          }}
          renderStarIconHalf={() => {
            return (
              <span>
                <span style={{ position: 'absolute' }} ><i className="far fa-star" /></span>
                <span><i className="fas fa-star-half" /></span>
              </span>
            )
          }}
          starCount={5}
          value={this.props.stars}
          starColor={'#ff2069'} /* color of selected icons, default `#ffb400` */
          emptyStarColor={'#ff2069'} /* color of non-selected icons, default `#333` */
        />
      </div>
    );
  }
}
export default Rating