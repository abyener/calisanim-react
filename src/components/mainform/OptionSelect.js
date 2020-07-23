import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class OptionSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      option: null
    }
    this.onClickOption = this.onClickOption.bind(this)
  }

  onClickOption(option) {
    this.props.formFinished(option)
  }

  render() {
    return (
      <div className="calisan-form-content text-center option-select">
        <h3 className="h3 ">{this.props.title}</h3>
        <Row>
          {
            this.props.options.map(option => this.renderOption(option))
          }
        </Row>
      </div>
    )
  }

  renderOption(option) {
    return (
      <Col key={option.key}>
        <button onClick={() => this.onClickOption(option.key)} type="button" className="btn btn-next-step btn-choice cat-button">
          <span className="icon cat-icon">
            <img src={require(`../../dist/images/icons/datetime/${option.id}.svg`)} alt="" />
          </span>
          <span className="h3-cat">{option.name}</span>
        </button>
      </Col>
    )
  }
}
