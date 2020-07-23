import React, { Component } from 'react';
import axios from "axios"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export default class IndexPage extends Component {
    state = {
        categories: []
    }

    constructor(props) {
        super(props)
        this.onClickCategory = this.onClickCategory.bind(this)
    }

    componentDidMount() {
        this.categoryLoad(null)
    }

    onClickCategory(category) {
        this.categoryLoad(category.id)
    }

    categoryLoad(categoryId) {
        this.setState({
            categories: []
        })
        let categoryUrl
        if (categoryId) {
            categoryUrl = `http://localhost/api/category/${categoryId}`
        } else {
            categoryUrl = `http://localhost/api/category`
        }

        axios.get(categoryUrl)
            .then(response => {
                this.setState({
                    categories: response.data
                })
            }).catch(error => this.setState({ loading: false, error }))

    }

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <div className="row">
                    d
                    {this.state.categories.map(category => 
                    <div key={category.slug}
                        onClick={() => this.onClickCategory(category)}>{category.name}
                        </div>)}
                </div>
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <Image />
                </div>
                {/* <Link to="/page-2/">Go to page 2</Link> */}
            </Layout>
        )
    }
}
