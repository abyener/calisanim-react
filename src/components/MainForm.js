import React, { Component } from 'react';
import CategorySelect from '../components/mainform/CategorySelect'
import SubCategorySelect from '../components/mainform/SubCategorySelect'
import UserTypeSelect from '../components/mainform/UserTypeSelect'
import OptionSelect from '../components/mainform/OptionSelect'
import RegisterWorker from '../components/RegisterWorker'

import { withRouter } from "react-router-dom"
import { Z_BLOCK } from 'zlib';

class MainForm extends Component {
  constructor() {
    super()
    this.state = {
      formStep: 'userType',
      data: {
        userType: null,
        category: null,
        subCategory: null,
        period: null,
        dateSelect: null,
        experience: null

      },

      abilityProps: {}
    }
    this.formFinishedUserType = this.formFinishedUserType.bind(this)
    this.formFinishedCategory = this.formFinishedCategory.bind(this)
    this.formFinishedSubCategory = this.formFinishedSubCategory.bind(this)
    this.formFinishedPeriod = this.formFinishedPeriod.bind(this)
    this.formFinishedExperience = this.formFinishedExperience.bind(this)
    this.formFinishedDateSelect = this.formFinishedDateSelect.bind(this)
    this.resetForm = this.resetForm.bind(this)

  }
  resetForm() {
    this.setState({
      data: {
        userType: null,
        category: null,
        subCategory: null,
        period: null,
        experience: null,
        dateSelect: null
      },
      formStep: 'userType'
    })
  }
  formFinishedUserType(userType) {
    var data = this.state.data
    data.userType = userType
    this.setState({
      data: data,
      formStep: 'category'
    })
  }

  formFinishedCategory(category, subCategories) {
    var data = this.state.data

    data.category = category.id
    if (data.userType === "worker") {
      this.setState({
        formStep: 'registerWorker',
        data: data
      })
    } else {
      let formStep
      if (subCategories.length) {
        formStep = 'subCategory'
        data.subCategory = subCategories

      } else {
        formStep = 'period'
      }
      this.setState({
        formStep: formStep,
        data: data
      })
    }

  }

  formFinishedSubCategory(subCategory) {
    var data = this.state.data
    data.subCategory = subCategory.id
    this.setState({
      data: data,
      formStep: 'period'
    })
  }

  formFinishedDateSelect(dateSelect) {
    var data = this.state.data
    data.dateSelect = dateSelect
    this.setState({
      data: data,
      formStep: 'dateSelect'
    })
  }

  formFinishedPeriod(period) {
    var data = this.state.data
    data.period = period
    this.setState({
      data: data,
      formStep: 'experience'
    })
  }

  formFinishedExperience(experience) {
    var data = this.state.data;
    data.experience = experience;
    this.props.history.push({pathname: "/calisanbul", state: { data }}) 
  }

  render() {
    return (
      <div>
        {this.state.data.userType !== null ?
          <button type="button" style={{ display: Z_BLOCK }} onClick={() => this.resetForm()} className="btn butn-white btn-start-over">
            <span className="fas fa-chevron-left"></span>
            <span> Başa Dön</span>
          </button> : ""
        }
        {
          {
            userType: <UserTypeSelect formFinished={this.formFinishedUserType} />,
            category: <CategorySelect userType={this.state.data.userType} formFinished={this.formFinishedCategory} />,

            subCategory: <SubCategorySelect subCats={this.state.data.subCategory} formFinished={this.formFinishedSubCategory} />,
            period: <OptionSelect formFinished={this.formFinishedDateSelect} className="h1" title='Ne Zaman İhtiyacınız Var?' options={Options.dateSelects} />,
            dateSelect: <OptionSelect formFinished={this.formFinishedPeriod} title='Çalışma Süresi' options={Options.periods} />,
            experience: <OptionSelect formFinished={this.formFinishedExperience} title='İş Tecrübesi' options={Options.experiences} />,
            registerWorker: <RegisterWorker title='Üye Ol' selectedCat={this.state.data.category} />

          }[this.state.formStep]
        }
      </div >



    )
  }
}
const Options = {
  periods: [
    {
      id: '10',
      key: 'full-time',
      name: 'Tam Zamanli'
    },
    {
      id: '11',
      key: 'part-time',
      name: 'Yari Zamanli'
    },
    {
      id: '12',
      key: 'yatili',
      name: 'Yatili'
    },
    {
      id: '13',
      key: 'single-time',
      name: 'Tek Seferlik'
    },
    {
      id: '14',
      key: 'all',
      name: 'Hepsi'
    }
  ],
  experiences: [
    {
      id: '5',
      key: 'tecrubesiz',
      name: 'Tecrubesiz'
    },
    {
      id: '6',
      key: '1',
      name: '1 Yıl Üzeri'
    },
    {
      id: '7',
      key: '3',
      name: '3 Yıl Üzeri'
    },
    {
      id: '8',
      key: '5',
      name: '5 Yıl Üzeri'
    },
    {
      id: '9',
      key: 'all',
      name: 'Hepsi'
    }
  ],
  dateSelects: [
    {
      id: '1',
      key: 'hemen',
      name: 'Hemen'
    },
    {
      id: '2',
      key: 'bu-hafta',
      name: 'Bu Hafta'
    },
    {
      id: '3',
      key: 'bu-ay',
      name: 'Bu Ay'
    },
    {
      id: '4',
      key: 'tum-sonuclar',
      name: 'Tüm Sonuçlar'
    }
  ]
}
export default withRouter(MainForm);