import React, { Component } from 'react'
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import Layout from "../components/layout"
import classnames from 'classnames';
//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

//Range Slider
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

//Data
import CategoryData from '../data/JobCategory.json'
import NationalityData from '../data/Nationality.json'
import AbilityData from '../data/Ability.json'

import PostData from '../data/JobPosting.json'
// import { Advertisement } from '../backend';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={true}
            placement="bottomLeft"
            key={index}
        >
            <Handle value={value} {...restProps} />
        </Tooltip>
    );
}


const Schema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Çok kısa.')
        .max(80, 'Çok uzun.')
        .required('Zorunludur'),
    info: Yup.string()
        .min(2, 'Çok kısa.')
        .max(800, 'Çok uzun.')
        .required('Zorunludur.'),
    category: Yup.string().required('İş kategorisi seçmelisiniz!'),
    period: Yup.string().required('Çalışma periyotu seçmelisiniz!'),
    type: Yup.string().required('İş tipi seçmelisiniz!')
})


const jobPostingData = PostData[0]
const JobCategories = CategoryData


export default class IlanDuzenle extends Component {
    constructor() {
        super()
        this.state = {
            mode: "edit",
            data: null,
            initialVals: [],
            formReady: false,

            categories: [],
            types: ["Tam Zamanlı", "Part-time", "Yatılı"],
            periods: ["Saatlik", "Günlük", "Haftalık", "Aylık"],
            nationalities: [],
            abilities: [],
            abilityIds: [],


            salary: [50, 500]
        }
        this.handleSalaryChange = this.handleSalaryChange.bind(this)
        this.handleAbility = this.handleAbility.bind(this)
        this.removeAbility = this.removeAbility.bind(this)
        this.renderForm = this.renderForm.bind(this)
    }
    componentDidMount() {
        if (this.state.mode === "edit") {
            const { id, title, info, category, type, period, nationality, salaryMin, salaryMax } = jobPostingData
            let data = {
                "id": id,
                "title": title,
                "info": info,
                "category": category,
                "type": type,
                "period": period,
                "nationality": nationality
            }
            this.setState({
                initialVals: data,
                salary : [salaryMin, salaryMax]
            })
        } else {
            const emptyVals = {
                id: '',
                title: '',
                info: '',
                category: '',
                type: '',
                period: '',
                nationality: '',
            }

            this.setState({
                initialVals: emptyVals,
            })
        }

        this.setState({
            categories: JobCategories,
            nationalities: NationalityData,
            abilities: AbilityData,
            formReady: true
        })
    }

    handleSalaryChange = (value) => {
        this.setState({
            salary: value
        })

    }
    handleAbility(value) {
        let abilityList = this.state.abilityIds
        if (abilityList.includes(value)) {
            abilityList = this.removeAbility(abilityList, value)
        } else {
            abilityList.push(value)
        }
        this.setState({
            abilityIds: abilityList
        })
    }
    removeAbility(arr, ability) {
        return arr.filter(function (ele) {
            return ele !== ability;
        });
    }


    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col lg="12" className="text-center">
                                <h1 className="page-title"> {this.state.mode === "edit" ? "İlan Güncelle" : "İlan Ver"}</h1>
                            </Col>

                            <Col lg="12">
                                {this.state.formReady ? this.renderForm() : "Yükleniyor"}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout >
        )
    }
    renderForm() {

        return (
            <Formik
                initialValues={this.state.initialVals}
                validationSchema={Schema}

                onSubmit={(values, { setSubmitting }) => {
                    // console.log(data)
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)

                    // Advertisement.update(id, ...values)
                    //     .then(data => {
                    //         console.log(data)
                    //         alert(JSON.stringify(values, null, 2))
                    //         setSubmitting(false)
                    //         navigate('/')
                    //     })
                    //     .catch(e => {
                    //         console.log(e)
                    //         alert(JSON.stringify(values, null, 2))
                    //         setSubmitting(false)
                    //     })
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <div className="posting-section">
                            <Row>
                                <Col sm={3}>
                                    <FormGroup>
                                        <Label className="post-label" For="category">Kategori</Label>
                                        <Field className="form-control" component="select" name="category"  >
                                            <option value="">İş kategorisi seçiniz.</option>
                                            {this.state.categories.map(e => {
                                                return e.parent_id === null && <option key={e.id} value={e.id} label={e.name} />
                                            })}
                                        </Field>
                                        <ErrorMessage name="category" component="div" />
                                    </FormGroup>

                                </Col>
                                <Col sm={3}>
                                    <FormGroup>
                                        <Label className="post-label" For="type">İş Tipi</Label>
                                        <Field className="form-control" component="select" name="type" >
                                            <option value="">İş tipi seçiniz.</option>
                                            {this.state.types.map((v, k) => {
                                                return <option key={k} value={v} label={v} />
                                            })}
                                        </Field>
                                        <ErrorMessage name="type" component="div" />
                                    </FormGroup>

                                </Col>
                                <Col sm={3}>
                                    <FormGroup>
                                        <Label className="post-label" For="period">Periyot</Label>
                                        <Field className="form-control" component="select" name="period" >
                                            <option value="">Periyot seçiniz.</option>
                                            {this.state.periods.map((v, k) => {
                                                return <option key={k} value={v} label={v} />
                                            })}
                                        </Field>
                                        <ErrorMessage name="period" component="div" />
                                    </FormGroup>

                                </Col>

                                <Col sm={3}>
                                    <FormGroup>
                                        <Label className="post-label" For="nationality">Uyruk</Label>
                                        <Field className="form-control" component="select" name="nationality" >
                                            <option value="">Uyruk seçiniz.</option>
                                            {this.state.nationalities.map(e => {
                                                return <option key={e.id} value={e.id} label={e.name} />
                                            })}
                                        </Field>
                                        <ErrorMessage name="nationality" component="div" />
                                    </FormGroup>
                                </Col>
                            </Row>

                            <FormGroup>
                                <Label className="post-label" For="title">Başlık</Label>
                                <Field className="form-control" type="text" placeholder="Başlık" name="title" placeholder="Başlık giriniz." />
                                <ErrorMessage name="title" component="div" />
                            </FormGroup>
                            <FormGroup>
                                <Label className="post-label" For="info">Açıklama</Label>
                                <Field className="form-control" component="textarea" rows="6" placeholder="İş hakkında kısa bir açıklama yazınız." name="info" style={{ padding: '15px' }} />
                                <ErrorMessage name="info" component="div" />
                            </FormGroup>


                        </div>
                        <div className="posting-section">
                            <Col lg="12">
                                <Row>
                                    <Col lg="12">
                                        <h2 className="subheader text-center">
                                            Ücret Aralığı
                                        </h2>
                                    </Col>
                                </Row>
                                <Row className="bar-slider-container">
                                   
                                        <Col xs="3" sm="1">
                                            <p className="salarytext">₺ {this.state.salary[0]}</p>
                                        </Col>
                                        <Col xs="6" sm="10">
                                            <div >
                                                <Range className="bar-slider" defaultValue={this.state.salary}
                                                    step={50}
                                                    min={50}
                                                    max={5000}
                                                    pushable={true}
                                                    allowCross={false}
                                                    onChange={this.handleSalaryChange}
                                                    handle={handle}
                                                    tipFormatter={value => `₺ ${value}`}
                                                />
                                            </div>
                                        </Col>
                                        <Col xs="3" sm="1">
                                            <p className="salarytext">₺ {this.state.salary[1]}</p>
                                        </Col>
                                    
                                </Row>
                            </Col>
                        </div>
                        <div className="posting-section">
                            <Row>
                                <Col lg="12">
                                    <h2 className="subheader text-center">
                                        Aranan Özellikler
                                        </h2>
                                </Col>
                                <Col>
                                    {this.state.abilities.map(abil => {
                                        return (<div key={abil.id} className={classnames('ability-badge', {
                                            'active': this.state.abilityIds.includes(abil.id)
                                        })} onClick={() => this.handleAbility(abil.id)}>
                                            <span>{abil.name}</span>
                                        </div>)
                                    })}
                                </Col>
                            </Row>
                        </div>

                        <div className="text-center">
                            <button className="btn posting-sb-btn" onClick={() => (
                                setFieldValue("abilityIds", this.state.abilityIds),
                                setFieldValue("salary", this.state.salary)
                            )
                            } type="submit" disabled={isSubmitting}>
                                {this.state.mode === "edit" ? "Güncelle" : "İlan Ver"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        )
    }
}