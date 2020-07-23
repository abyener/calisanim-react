import React, { Component } from 'react';
import Layout from "../components/layout"
import { TabContent, TabPane, Nav, NavItem, NavLink, Col, Container, Fade } from 'reactstrap';
import classnames from 'classnames';
import JobCard from '../components/job/JobCard'

import data from '../data/JobList.json'

export default class Islerim extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTab: 1,
         jobData: data,
         activeJobs: [],
         inactiveJobs: [],
         completedJobs: []
      };
      this.toggle = this.toggle.bind(this);
   }

   toggle(tab) {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   }
   componentDidMount() {
      const jobs = this.state.jobData
      const active = [], inactive = [], completed = []
      jobs.forEach(elem => {
         if (elem.jobStatusCode === 0) {
            inactive.push(elem)
         } else if (elem.jobStatusCode === 1) {
            active.push(elem)
         } else if (elem.jobStatusCode === 2) {
            completed.push(elem)
         }
      })

      this.setState({
         activeJobs: active,
         inactiveJobs: inactive,
         completedJobs: completed
      })
   }
   render() {
      return (
         <Layout>
            <section className="content-inner">
               <Container>
                  <Col sm="12">
                     <Nav tabs id="cls-nav">
                        <NavItem>
                           <NavLink
                              className={classnames({ active: this.state.activeTab === 1 })}
                              onClick={() => { this.toggle(1); }}
                           >
                              Aktif İşlerim
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink
                              className={classnames({ active: this.state.activeTab === 2 })}
                              onClick={() => { this.toggle(2); }}
                           >
                              Bekleyen İşlerim
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink
                              className={classnames({ active: this.state.activeTab === 3 })}
                              onClick={() => { this.toggle(3); }}
                           >
                              Tamamlanan İşlerim
                           </NavLink>
                        </NavItem>
                     </Nav>
                  </Col>
                  <TabContent className="ilanlarim" activeTab={this.state.activeTab}>
                     <Fade in={(this.state.activeTab === 1)} tag="div">
                        <TabPane tabId="1">
                           {this.state.activeJobs.map(job =>
                              <JobCard key={job.id} view="worker" data={job} />
                           )
                           }
                        </TabPane>
                     </Fade>
                     <Fade in={this.state.activeTab === 2} tag="div">
                        <TabPane tabId="2">
                           {this.state.inactiveJobs.map(job =>
                              <JobCard key={job.id} view="worker" data={job} />
                           )
                           }
                        </TabPane>
                     </Fade>
                     <Fade in={this.state.activeTab === 3} tag="div">
                        <TabPane tabId="3">
                           {this.state.completedJobs.map(job =>
                              <JobCard key={job.id} view="worker" data={job} />
                           )
                           }
                        </TabPane>
                     </Fade>
                  </TabContent>
               </Container>

            </section>
         </Layout>
      );
   }
}