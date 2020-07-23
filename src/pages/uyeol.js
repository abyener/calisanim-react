import React, { Component } from 'react'
import Layout from "../components/layout"
import { Row, Col, Container, Nav, NavItem, NavLink, TabContent, TabPane, Fade } from 'reactstrap'
import classnames from 'classnames'
import RegisterEmployer from '../components/RegisterEmployer'
import RegisterWorker from '../components/RegisterWorker'

export default class UyeOl extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
      fadeIn: true
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        fadeIn: !this.state.fadeIn,
        activeTab: tab
      })
    }
  }
  render() {
    return (
      <Layout>
        <section className="login-bg">
          <Container>
            <Row>
              <Col sm={4} >
                <div id="register-form">
                  <h3 className="h3 text-center">Hemen üye olun!</h3>
                  <Row>
                    <Col sm={12} >
                      <RegisterWorker />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}
