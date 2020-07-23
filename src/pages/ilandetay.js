import React, { Component } from 'react';
import Layout from "../components/layout"
import Job from '../components/job/JobPosting'
// import data from '../data/JobPosting.json'
import { Advertisement } from '../backend'

export default class IlanDetay extends Component {
    constructor() {
        super()
        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        Advertisement.all()
        .then(data => this.setState({jobs: data}))
    }

    render() {
        return (
            <Layout>
                <section className="content-inner">
                    { this.state.jobs.map(job => <Job data={job} />) }
                </section>
            </Layout>
        )
    }
}







