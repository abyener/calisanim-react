import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import Avatar from '../components/Avatar'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AvatarUpload from '../components/profile/AvatarUpload'
//data
import Data from '../data/Employer.json'
import { FaCheckCircle, FaUser } from 'react-icons/fa';

const Schema = Yup.object().shape({
    info: Yup.string()
        .min(2, 'Çok kısa.')
        .max(800, 'Çok uzun.'),

    roomCount: Yup.number(),
    childrenCount: Yup.number(),
    seniorCount: Yup.number(),
    camera: Yup.string(),
    security: Yup.string(),
    pet: Yup.string(),
    petInfo: Yup.string()

})

export default class IsverenProfilGuncelle extends Component {
    constructor() {
        super();

        this.state = {
            data: null,
            mode: "edit",
            initialVals: [],
            formReady: false

        }
        this.avatarUpdate = this.avatarUpdate.bind(this)
        this.renderForm = this.renderForm.bind(this)
    }
    componentDidMount() {
        let formData = []
        if (this.state.mode === "edit") {
            const { id, info, homeInfo } = Data
            const { roomCount, childrenCount, seniorCount, camera, security, pet, petInfo } = homeInfo
            formData = {
                "id": id,
                "info": info,
                "roomCount": roomCount,
                "childrenCount": childrenCount,
                "seniorCount": seniorCount,
                "camera": camera,
                "security": security,
                "pet": pet,
                "petInfo": petInfo,
            }
        } else {
            formData = {
                id: "",
                info: "",
                roomCount: "",
                childrenCount: "",
                seniorCount: "",
                camera: "",
                security: "",
                pet: "",
                petInfo: "",
            }
        }
        this.setState({
            initialVals: formData,
            data: Data,
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
    render() {
        return (
            <Layout>
                <section className="content-inner">


                    {this.state.formReady ? this.renderForm() : ""}


                </section>
            </Layout>
        );
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
                                <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                                <p class="profile-badge usertype-badge"><FaUser /><span>İŞVEREN</span></p>
                                <div className="profile-section">
                                    <p className="profile-username">{this.state.data.name}</p>
                                </div>
                                <Form>
                                    <div className="posting-section">

                                        <FormGroup>
                                            <Label className="post-label" For="info">Genel Açıklama</Label>
                                            <Field className="form-control" component="textarea" rows="8" placeholder="Kendinizle ilgili kısa bir açıklama yazınız." name="info" style={{ padding: '35px' }} />
                                            <ErrorMessage name="info" component="div" />
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label sm={5} size="lg" For="roomCount">Oda sayısı: </Label>
                                            <Col sm={2}>
                                            <Field className="form-control" type="number" placeholder="" name="roomCount" placeholder="" />
                                            <ErrorMessage name="roomCount" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={5} size="lg" For="childrenCount">Evdeki çocuk sayısı: </Label>
                                            <Col sm={2}>
                                            <Field className="form-control" type="number" placeholder="" name="childrenCount" placeholder="" />
                                            <ErrorMessage name="childrenCount" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={5} size="lg" For="seniorCount">Evdeki yaşlı sayısı: </Label>
                                            <Col sm={2}>
                                            <Field className="form-control" type="number" placeholder="Başlık" name="seniorCount" placeholder="" />
                                            <ErrorMessage name="seniorCount" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={5} size="lg" For="camera">Evinizde kamera sistemi var mı?</Label>
                                            <Col sm={2}>
                                            <Field className="form-control" component="select" name="camera" >
                                                <option value="1" label="Var"></option>
                                                <option value="2" label="Yok"></option>
                                            </Field>
                                            <ErrorMessage name="camera" component="div" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label sm={5} size="lg" For="security">Güvenlik var mı?</Label>
                                            <Col sm={2}>
                                            <Field className="form-control" component="select" name="security" >
                                                <option value={true} label="Var"></option>
                                                <option value={false} label="Yok"></option>
                                            </Field>
                                            <ErrorMessage name="security" component="div" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label For="petInfo" sm={5} size="lg" For="pet">Evinizde evcil hayvan var mı?</Label>
                                            <Col sm={2}>
                                                <Field className="form-control" component="select" name="pet" >
                                                    <option value="1" label="Var"></option>
                                                    <option value="0" label="Yok"></option>
                                                </Field>
                                                <ErrorMessage name="pet" component="div" />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label For="petInfo" sm={5} size="lg">Hayvan türü: </Label>
                                            <Col sm={2}>
                                                <Field className="form-control" type="text" placeholder="Başlık" name="petInfo" placeholder="" />
                                                <ErrorMessage name="petInfo" component="div" />
                                            </Col>

                                        </FormGroup>

                                    </div>

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