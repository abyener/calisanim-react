import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSubCategory: null
    }
  }

  render() {
    return (
      <div className="calisan-form-content text-center">
        <Row>
          {
            this.props.subCats.map(category => {
              return (
                <Col key={category.id} style={{ marginTop: 50 }}>
                  <button onClick={() => this.props.formFinished(category)} type="button" className="btn butn-blue btn-subcategory">
                    <span className="icon">
                      <i className={`fas fa-${category.icon}`}></i>
                    </span>
                    <span className="h3">{category.name}</span>
                  </button>
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}
