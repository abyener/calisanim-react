import React, { Component } from 'react';
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import Dob from '../../components/settings/Dob'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//todo: cinsiyet, password,email onaylama,
//data
import Data from '../../data/AccountInfo.json'

import CountryList from '../../data/location/Country'
import CityList from '../../data/location/City'
import DistrictList from '../../data/location/District'


const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Fazla kısa. Lütfen kontrol edin.')
        .max(50, 'Fazla uzun. Lütfen kontrol edin.')
        .required('Zorunludur'),
    surname: Yup.string()
        .min(2, 'Fazla kısa. Lütfen kontrol edin.')
        .max(50, 'Fazla uzun. Lütfen kontrol edin.')
        .required('Zorunludur'),
    email: Yup.string()
        .email('Geçersiz e-posta')
        .required('Zorunludur'),
    tckn: Yup.string()
        .min(7, 'Geçersiz TCKN / pasaport numarası')
        .max(11, 'Geçersiz TCKN / pasaport numarası')
});


export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            mode: "edit",
            initialVals: [],
            formReady: false,
            countryList: [],
            cityList: [],
            districtList: [],
            cityAll: [],
            districtAll: []

        }
        this.handleLocation = this.handleLocation.bind(this)
    }


    componentDidMount() {
        let formData = []
        let prevData = []
        let filteredCities = CityList
        let filteredDistricts = DistrictList

        if (this.state.mode === "edit") {

            formData = Data
            prevData = Data

            filteredCities = CityList.filter(e => e.parent_id === Data.countryId)
            filteredDistricts = DistrictList.filter(e => e.parent_id === Data.cityId)

        } else {
            formData = ""
        }

        this.setState({
            initialVals: formData,
            data: prevData,
            countryList: CountryList,

            cityList: filteredCities,
            districtList: filteredDistricts,

            cityAll: CityList,
            districtAll: DistrictList,
            formReady: true
        })
    }
    handleLocation(event) {
        const target = event.target;
        const val = target.value;
        let dataUpdate = this.state.data
        if (target.name === "countryId") {
            dataUpdate.countryId = val
            //api call get cities of country id
            let cityList = this.state.cityAll.filter(e => e.parent_id === val)
            this.setState({
                cityList: cityList,
                districtList: [],
                data: dataUpdate
            })
        } else if (target.name === "cityId") {
            dataUpdate.cityId = val
            let districtList = this.state.districtAll.filter(e => e.parent_id === val)
            this.setState({
                districtList: districtList,
                data: dataUpdate
            })
        } else if (target.name === "districtId") {
            dataUpdate.districtId = val
            this.setState({
                data: dataUpdate
            })
        }
    }


    render() {
        return (
            <div>
                {this.state.formReady ? this.renderForm() : ""}
            </div>
        )
    }

    renderForm() {


        return (
            <Formik
                initialValues={this.state.initialVals}
                validationSchema={Schema}

                onSubmit={(values, { setSubmitting }) => {

                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)

                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Container>
                        <Row>
                            <Col sm="12">

                                <div className="profile-section">
                                    <p className="profile-username">{this.state.data.name}</p>
                                </div>
                                <Form>

                                    <div className="posting-section">


                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="name">Adınız: </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" type="text" placeholder="" name="name" />
                                                <ErrorMessage name="name" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="surname">Soyadınız: </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" type="text" placeholder="" name="surname" />
                                                <ErrorMessage name="surname" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="tckn">TCKN (Veya Pasaport No.): </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" type="number" placeholder="" name="tckn" disabled={(this.state.data.tckn !== "")} />
                                                <ErrorMessage name="tckn" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="email">Email: </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" type="text" placeholder="E-posta" name="email" />
                                                <ErrorMessage name="email" component="div" />
                                            </Col>
                                        </FormGroup>
                                        
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="phone">Telefon: </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" type="text" placeholder="" name="phone" />
                                                <ErrorMessage name="phone" component="div" />
                                            </Col>
                                        </FormGroup>


                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="countryId">Ülke : </Label>
                                            <Col sm={3}>

                                                <Field className="form-control" component="select" name="countryId" onChange={this.handleLocation} value={this.state.data.countryId} >
                                                    <option value="">Ülke seçiniz.</option>
                                                    {this.state.countryList.map(e => {
                                                        return <option key={e.id} value={e.id} label={e.name} />
                                                    })}
                                                </Field>
                                                <ErrorMessage name="countryId" component="div" />

                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="cityId">İl : </Label>
                                            <Col sm={3}>

                                                <Field className="form-control" component="select" name="cityId" onChange={this.handleLocation} value={this.state.data.cityId} >
                                                    <option value="">İl seçiniz.</option>
                                                    {this.state.cityList.map(e => {
                                                        return <option key={e.id} value={e.id} label={e.name} />
                                                    })}
                                                </Field>
                                                <ErrorMessage name="cityId" component="div" />

                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="districtId">İlçe : </Label>
                                            <Col sm={3}>

                                                <Field className="form-control" component="select" name="districtId" onChange={this.handleLocation} value={this.state.data.districtId} >
                                                    <option value="">İlçe seçiniz.</option>
                                                    {this.state.districtList.map(e => {
                                                        return <option key={e.id} value={e.id} label={e.name} />
                                                    })}
                                                </Field>
                                                <ErrorMessage name="districtId" component="div" />

                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={3} size="lg" For="addres">Adres: </Label>
                                            <Col sm={5}>
                                                <Field className="form-control" component="textarea" rows="3" placeholder="" name="addres" />
                                                <ErrorMessage name="addres" component="div" />
                                            </Col>
                                        </FormGroup>

                                        <Field name="dob" component={Dob} label="Doğum Günü" />
                                        {/* <FormGroup row>
                                            <Label sm={3} size="lg" For="dob">Doğum Günü: </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" component={Dob} placeholder="" name="dob" />
                                                <ErrorMessage name="dob" component="div" />
                                            </Col>
                                        </FormGroup> */}


                                    </div>

                                    <div className="text-center">
                                        <button className="btn posting-sb-btn"
                                            // onClick={() => (
                                            //     setFieldValue("country", this.state.data.country)
                                            // )}
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




