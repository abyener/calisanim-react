import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

export default class UserTypeSelect extends Component {
  constructor() {
    super()
    this.state = {
      type: null
    }
  }

  render() {
    return (
      <div className="stepform" id="stepform" data-a-step="0" data-type="MEMBER">
        <h1 className="h1" >Kaliteli ve Güvenceli Hizmet.</h1>
        <h3 className="h3">İhtiyacın olan işe,aradığın güvenilir çalışana kolayca ulaş!</h3>
        <Row className="text-center">
          <Col lg="6">
            <fieldset className="fieldset">
              <legend className="legend" align="center">
                Çalışan Arıyorum
              </legend>
              <p className="body-2">Yakınınızdaki çalışanları aramaya hemen başlayın.</p>
              <button type="button" className="btn butn-blue btn-first" onClick={() => this.props.formFinished("employer")}>
                <span className="btn">Çalışan Bul</span>
              </button>
            </fieldset>
          </Col>

          <Col lg="6">
            <fieldset className="fieldset">
              <legend className="legend" align="center">İş Arıyorum</legend>
              <p className="body-2">Ücretsiz profil oluşturun ve iş aramaya hemen başlayın.</p>
              <button type="button" className="btn butn-blue btn-first" onClick={() => this.props.formFinished("worker")} >
                <span className="btn">İş Bul</span>
              </button>
            </fieldset>
          </Col>
        </Row>
      </div>
    )
  }
}