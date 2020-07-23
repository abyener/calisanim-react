import React, { Component } from 'react';
import Layout from "../components/layout"
import Messenger from "../components/messenger/Messenger"


export default class Chat extends Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        // Advertisement.all()
        // .then(data => this.setState({jobs: data}))
    }

    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <div className="container">
                        <Messenger />
                    </div>
                </section>
            </Layout>
        )
    }
}







