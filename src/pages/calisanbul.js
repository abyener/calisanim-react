import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import Layout from "../components/layout"
import Filters from "../components/filters/Filters"

import EmployeeCard from "../components/EmployeeCard";
import Data from '../data/WorkerCard.json'

import { Auth } from "../backend"


export default class FindEmployee extends Component {
  constructor() {
    super()
    this.state = {
      employees: null
    }
  }

  componentDidMount() {
    let data = Data
    this.setState({ employees: data })
  }

  render() {
    return (
      <Layout>
        <section className="content-inner">
          <Container>
            <Row>
              <Col lg="3" className="text-center">
                <Filters />
              </Col>
              <Col lg="8" className="p-card">
                {this.state.employees !== null ?
                  this.state.employees.map(e => {
                    return <EmployeeCard key={e.id} data={e} />
                  }) :
                  <p>Kayıt bulunamadı</p>
                }
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}



