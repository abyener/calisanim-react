import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Layout from "../components/layout"
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import Avatar from "../components/Avatar"
import JobDatePicker from "../components/JobDatePicker"
//Formik
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
/**
 * --YÖNTEM 1--
 * (availablity check sıkıntılı)
 * Sürekli
 *  Start-End Date
 *  Choose Days
 *  Choose hours of each day toggle
 * 
 * 7/24
 *  Start-End date, no timerange
 * 
 * Tek Seferlik
 *  Start - End Date (optional)
 *  Start Time- End Time
 * 
 * 
 * --YÖNTEM 2--
 * Fulltime-parttime-yatili
 * Fulltime: timeRange 9 - 18
 * Yatili: no Timerange
 * Parttime: 9-12 , 12-18
 * 
 *
 */

const Schema = Yup.object().shape({
    offer: Yup.number()
        .moreThan(50, 'Minimum tutar 50TL dir')
        .required('Zorunludur'),
    service: Yup.string().required('Hizmet kategorisi seçmelisiniz!'),
    period: Yup.string().required('Çalışma periyotu seçmelisiniz!'),
    type: Yup.string().required('İş tipi seçmelisiniz!')
})


export default class Teklif extends Component {
    constructor() {
        super()
        this.state = {
            data: null,
            initialVals: null,
            types: ["Tam Zamanlı", "Part-time", "Yatılı"],
            periods: ["Saatlik", "Günlük", "Haftalık", "Aylık"],
            selectedStartDate: new Date(),
            selectedEndDate: new Date()

        }
        this.handleDates = this.handleDates.bind(this)
    }

    componentDidMount() {

        let data = {
            "id": 2,
            "name": "Merve Ö.",
            "avatar": "dummy-avatar.jpeg",
            "services": ["Çocuk Bakımı", "Yaşlı Bakımı"],
            "monthlySalary": "2500-3000"
        }
        this.setState({
            data,
            formReady: true
        })
    }

    handleDates(type, date) {
        if(type === "end"){
            this.setState({selectedEndDate : date})
        } else if(type === "start") {
            this.setState({selectedStartDate: date})
        }
    }


    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h1 className="page-title">Teklif Gönder</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {this.state.formReady ? this.renderForm() : "Yükleniyor"}
                            </Col>
                        </Row>

                    </Container>
                </section>
            </Layout>
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
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form>
                        <Row>
                            <Col xs={{ size: 10, offset: 1 }} className="offer-container">
                                <Row className="m-4">
                                    <Col xs="5">
                                        <Avatar src={this.state.data.avatar} alt="dummy-avatar.jpeg" className="rounded offer-avatar" />
                                    </Col>
                                    <Col xs="6">
                                        <div>
                                            <p className="offer-name">{this.state.data.name}</p>
                                            <p>Aylık Maaş Beklentisi: <strong>{this.state.data.monthlySalary} ₺</strong> </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="m-4">
                                    <Col xs={{ size: 8, offset: 2 }}>
                                        <FormGroup>
                                            <Label className="post-label" For="service">Hizmet</Label>
                                            <Field className="form-control" component="select" name="service" >
                                                <option value="">Hizmet seçiniz.</option>
                                                {this.state.data.services.map((v, k) => {
                                                    return <option key={k} value={v} label={v} />
                                                })}
                                            </Field>
                                            <ErrorMessage name="service" component="div" />
                                        </FormGroup>

                                    </Col>
                                </Row>
                                <Row className="m-4">
                                    <Col sm={{ size: 3, offset: 3 }}>
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
                                </Row>

                                <Row className="m-4">
                                    <Col xs={{ size: 8, offset: 2 }}>
                                        <JobDatePicker dates={this.handleDates} startDate={this.state.selectedStartDate} endDate={this.state.selectedEndDate} />
                                    </Col>
                                </Row>
                                <Row className="m-4">
                                    <Col xs={{ size: 8, offset: 2 }}>
                                        <FormGroup>
                                            <Label className="post-label" For="offer">Teklifiniz: </Label>
                                            <Field className="form-control" type="number" name="offer" placeholder="TL cinsinden maaş miktarı girin." />
                                            <ErrorMessage name="offer" component="div" />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <button className="btn posting-sb-btn" onClick={() => (
                                setFieldValue("startDate", this.state.selectedStartDate),
                                setFieldValue("endDate", this.state.selectedEndDate),
                                setFieldValue("userId", this.state.data.id)
                            )}
                                        type="submit" disabled={isSubmitting}>
                                        TEKLİF GÖNDER
                            </button>
                                </div>
                            </Col>
                        </Row>


                    </Form>
                )}
            </Formik>
        )
    }


}


