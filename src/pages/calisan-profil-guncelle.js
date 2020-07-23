import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import classnames from 'classnames';

import Avatar from '../components/Avatar'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AvatarUpload from '../components/profile/AvatarUpload'
//data
import Data from '../data/Worker.json'

import LanguageData from '../data/Language.json'
import AbilityData from '../data/Ability.json'
import { FaCheckCircle, FaUser } from 'react-icons/fa';

const Schema = Yup.object().shape({
    info: Yup.string()
        .min(2, 'Çok kısa.')
        .max(800, 'Çok uzun.')
})

export default class CalisanProfilGuncelle extends Component {
    constructor() {
        super()

        this.state = {
            data: null,
            mode: "edit",
            initialVals: [],
            languages: [],
            languagesSelected: [],
            abilities: [],
            abilityIds: [],
            formReady: false,
            selectIndex: 1


        }
        this.avatarUpdate = this.avatarUpdate.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.handleAbility = this.handleAbility.bind(this)
        this.removeAbility = this.removeAbility.bind(this)
        this.addLang = this.addLang.bind(this)

    }
    componentDidMount() {
        let formData = []
        let prevData = []
        let abilIds = []
        let languagesSelected
        if (this.state.mode === "edit") {
            const { id, info, salary } = Data
            formData = {
                "id": id,
                "info": info,
                "salaryHourly": salary.hourly,
                "salaryDaily": salary.daily,
                "salaryWeekly": salary.weekly,
                "salaryMonthly": salary.monthly
            }
            prevData = Data
            languagesSelected = prevData.abilities.filter(e => e.type === "language")
            prevData.abilities.map(e => abilIds.push(e.id))
        } else {
            formData = {
                id: "",
                info: "",
                salaryHourly: "",
                salaryDaily: "",
                salaryWeekly: "",
                salaryMonthly: ""
            }
        }




        this.setState({
            initialVals: formData,
            data: prevData,
            languages: LanguageData,
            languagesSelected: languagesSelected,
            abilities: AbilityData,
            abilityIds: abilIds,
            formReady: true
        })
    }
    avatarUpdate(img) {
        let profileData = this.state.data
        profileData.avatar = img
        this.setState({
            data: profileData
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
                    {this.state.formReady ? this.renderForm() : ""}
                </section>
            </Layout>
        );
    }

    addLang() {
        let newSelect = {
            "id": "",
            "name": "",
            "position": "",
            "icon": "",
            "type": ""
        }
        // let langSelected = this.state.languagesSelected
        // let obj = { push: function push(element) { [].push.call(this, element) } };
        // langSelected.map(e => obj.push(e))
        // obj.push(newSelect)

        // this.setState({
        //     languagesSelected: obj
        // })
        let test = "hebe"
        this.setState(prevState => {
            return { languagesSelected: prevState.languagesSelected.push(test) }
        })
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
                {({ isSubmitting }) => (
                    <Container>
                        <Row>
                            <Col sm="3" className="text-center">
                                <Avatar src={this.state.data.avatar} alt={this.state.data.name} className="portrait-avatar" />
                                <p></p>
                                <AvatarUpload update={this.avatarUpdate} buttonLabel={'Profil Fotoğrafı Yükle'} />
                            </Col>
                            <Col sm="9">
                                <p className="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                                <p className="profile-badge usertype-badge"><FaUser /><span>ÇALIŞAN</span></p>
                                <div className="profile-section">
                                    <p className="profile-username">{this.state.data.name}</p>
                                </div>
                                <Form>
                                    <div className="posting-section">
                                        <Row>
                                            <Col lg="12">
                                                <h2 className="subheader text-center">
                                                    Genel Özellikler
                                        </h2>
                                            </Col>
                                            <Col>
                                                {this.state.abilities.map(abil => {
                                                    return (
                                                        abil.position === "top" ?
                                                            <div key={abil.id} className={classnames('ability-badge', {
                                                                'active': this.state.abilityIds.includes(abil.id)
                                                            })} onClick={() => this.handleAbility(abil.id)}>
                                                                <span>{abil.name}</span>
                                                            </div> : null)
                                                })}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="posting-section">

                                        <FormGroup>
                                            <Label className="post-label" For="info">Genel Açıklama</Label>
                                            <Field className="form-control" component="textarea" rows="8" placeholder="Kendinizle ilgili kısa bir açıklama yazınız." name="info" style={{ padding: '35px' }} />
                                            <ErrorMessage name="info" component="div" />
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="salaryHourly">Saatlik Ücret (₺): </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" type="number" placeholder="Başlık" name="salaryHourly" placeholder="" />
                                                <ErrorMessage name="salaryHourly" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="salaryDaily">Günlük Ücret (₺): </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" type="number" placeholder="Başlık" name="salaryDaily" placeholder="" />
                                                <ErrorMessage name="salaryDaily" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="salaryWeekly">Haftalık Ücret (₺): </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" type="number" placeholder="Başlık" name="salaryWeekly" placeholder="" />
                                                <ErrorMessage name="salaryWeekly" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="salaryMonthly">Aylık Ücret (₺): </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" type="number" placeholder="Başlık" name="salaryMonthly" placeholder="" />
                                                <ErrorMessage name="salaryMonthly" component="div" />
                                            </Col>
                                        </FormGroup>

                                    </div>
                                    <div className="posting-section">
                                        <Row>
                                            <Col lg="12">
                                                <h2 className="subheader text-center">
                                                    Özellikler
                                        </h2>
                                            </Col>
                                            <Col>
                                                {this.state.abilities.map(abil => {
                                                    return (
                                                        abil.position === "mid" ?
                                                            <div key={abil.id} className={classnames('ability-badge', {
                                                                'active': this.state.abilityIds.includes(abil.id)
                                                            })} onClick={() => this.handleAbility(abil.id)}>
                                                                <span>{abil.name}</span>
                                                            </div> : null
                                                    )
                                                })}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="posting-section">
                                        <Row>
                                            <Col lg="12">
                                                <h2 className="subheader text-center">
                                                    Yetenekler
                                        </h2>
                                            </Col>
                                            <Col>
                                                {this.state.abilities.map(abil => {
                                                    return (
                                                        abil.position === "bot" ?
                                                            <div key={abil.id} className={classnames('ability-badge', {
                                                                'active': this.state.abilityIds.includes(abil.id)
                                                            })} onClick={() => this.handleAbility(abil.id)}>
                                                                <span>{abil.name}</span>
                                                            </div> : null
                                                    )
                                                })}
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="posting-section">
                                        <Row>
                                            <Col lg="12">
                                                <h2 className="subheader text-center">
                                                    Deneyimler
                                        </h2>
                                            </Col>
                                            <Col>
                                                {this.state.abilities.map(abil => {
                                                    return (
                                                        abil.type === "experience" ?
                                                            <div key={abil.id} className={classnames('ability-badge', {
                                                                'active': this.state.abilityIds.includes(abil.id)
                                                            })} onClick={() => this.handleAbility(abil.id)}>
                                                                <span>{abil.name}</span>
                                                            </div> : null
                                                    )
                                                })}
                                            </Col>
                                        </Row>
                                    </div>
                                    {/* <div className="posting-section">
                                        <Row>
                                            <Col lg="12">
                                                <h2 className="subheader text-center">
                                                    Diller
                                        </h2>
                                            </Col>
                                            <Col>
                                                {this.state.abilities.map(abil => {
                                                    return (
                                                        abil.type === "language" ?
                                                            <div key={abil.id} className={classnames('ability-badge', {
                                                                'active': this.state.abilityIds.includes(abil.id)
                                                            })} onClick={() => this.handleAbility(abil.id)}>
                                                                <span>{abil.name}</span>
                                                            </div> : null
                                                    )
                                                })}
                                            </Col>
                                        </Row>
                                    </div> */}
                                    <div onClick={() => this.addLang()} >+ Dil Ekle +</div>
                                    {/* {this.state.languagesSelected.map(abil => {

                                        return (
                                            <Col sm={3}>
                                                <FormGroup>
                                                    <Label className="post-label" For="nationality">Diller</Label>

                                                    <div key={abil.id}>
                                                        <Field className="form-control" component="select" name={`nationality-${abil.id}`} d >
                                                            <option value="">Dil seçiniz.</option>
                                                            {this.state.languages.map(e => {
                                                                return <option key={`${e.id}-${abil.id}`} value={e.id} label={e.name} />
                                                            })}
                                                        </Field>
                                                        <ErrorMessage name={`nationality-${abil.id}`} component="div" />
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        )
                                    })} */}

                                    <div className="text-center">
                                        <button className="btn posting-sb-btn"
                                            type="submit" disabled={isSubmitting}>
                                            {this.state.mode === "edit" ? "Güncelle" : "İlan Ver"}
                                        </button>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </Container>

                )
                }
            </Formik>
        )
    }
}