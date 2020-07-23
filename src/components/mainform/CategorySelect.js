import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
//data
import { Category } from '../../backend';

export default class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: null,
      categories: [],
      subCategories: [],
      abilities: []
    }
    this.getSubCategory = this.getSubCategory.bind(this)
  }

  componentDidMount() {
    Category.all().then(resp => this.setState({
      categories: resp.categories,
      subCategories: resp.sub_categories
    }))
  }

  getSubCategory(category) {
    this.setState({
      selectedCategory: category
    })
    let activeSubCats = []
    this.state.subCategories.forEach(e => {
      if (e.parent_id === category.id) {
        activeSubCats.push(e)
      }
    })

    this.props.formFinished(category, activeSubCats)

  }

  render() {
    console.log(this.state.categories)
    return (
      <div className="calisan-form-content text-center">
        <h1 class="h1">Kaliteli ve Güvenceli Hizmet</h1>
        <h3 className="h3">{this.props.userType === "worker" ? "Hangi kategoride çalışmak istiyorsunuz?" : "Aradığın güvenilir çalışana kolayca ulaş!"}</h3>
        <Row>
          {
            this.state.categories.length
              ? this.state.categories.map(category => {

                return (
                  <Col key={category.id}>

                    <button onClick={() => this.getSubCategory(category)} type="button" className="btn btn-next-step btn-choice cat-button">
                      <span className="icon cat-icon">
                        <img src={require(`../../dist/images/icons/mainform/${category.id}.png`)} alt="" />
                      </span>
                      <span>
                        <h3 className="h3-cat">
                          {category.name}
                        </h3>
                      </span>
                    </button>
                  </Col>
                )
              })
              : <p>Yukleniyor...</p>
          }
        </Row>
      </div>
    )
  }


}
