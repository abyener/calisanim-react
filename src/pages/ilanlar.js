import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap';
import Layout from "../components/layout"
import Job from '../components/JobPostingCard'
import Filters from "../components/filters/Filters"
//data
import data from "../data/JobCard.json"

export default class Ilanlar extends Component {
   constructor() {
      super()
      this.state = {
         jobs: []
      }
   }
   componentDidMount(){
      this.setState({
         jobs: data,
      })
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
                     <Col lg="8">
                        {this.state.jobs.map(job => <Job data={job} />)}
                        {/* {this.state.data !== null ?
                                    this.state.data.map(e => {
                                        return <JobPostingCard key={e.id} data={this.state.data} />
                                    }) :

                                    <p>Kayıt bulunamadı</p>
                                } */}
                     </Col>
                  </Row>
               </Container>
            </section>
         </Layout>
      )
   }
}