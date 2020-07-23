import React, { Component } from 'react';
import Layout from "../components/layout"
import { Row, Col, Container, FormGroup, Label } from 'reactstrap';
import Avatar from '../components/Avatar'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import AvatarUpload from '../components/profile/AvatarUpload'
import AgencyEmployees from '../components/AgencyEmployees'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
//data
import Data from '../data/Agency.json'
import { FaCheckCircle, FaUser } from 'react-icons/fa';
import { navigate } from 'react-router-dom';

const Schema = Yup.object().shape({
    info: Yup.string()
        .min(2, 'Çok kısa.')
        .max(800, 'Çok uzun.')
})

export default class AjansProfilGuncelle extends Component {
    constructor() {
        super();

        this.state = {
            data: null,
            mode: "edit",
            initialVals: [],
            formReady: false,
            topEmployees: []

        }
        this.avatarUpdate = this.avatarUpdate.bind(this)
        this.renderForm = this.renderForm.bind(this)
        this.removeEmployee = this.removeEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)


    }
    componentDidMount() {
        let formData = []
        if (this.state.mode === "edit") {
            const { id, info } = Data

            formData = {
                "id": id,
                "info": info
            }
        } else {
            formData = {
                id: "",
                info: ""
            }
        }
        this.setState({
            initialVals: formData,
            data: Data,
            topEmployees: Data.topEmployees,
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
    removeEmployee(eid) {
        let employees = this.state.topEmployees

        confirmAlert({
            title: 'Çalışan ajansınızdan çıkarılacaktır.',
            message: 'Emin misiniz?',
            buttons: [
                {
                    label: 'Evet',
                    onClick: () => {
                        let updatedEmps = employees.filter(e => e.id !== eid)
                        this.setState({
                            topEmployees: updatedEmps
                        })
                    }
                },
                {
                    label: 'Hayır'
                }
            ]
        });



    }
    editEmployee(eid) {

        // navigate('calisan-profil-guncelle/' + eid)
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
                {({ isSubmitting, setFieldValue }) => (
                    <Container>
                        <Row>
                            <Col sm="3" className="text-center">
                                <Avatar src={this.state.data.avatar} alt={this.state.data.name} className="portrait-avatar" />
                                <p></p>
                                <AvatarUpload update={this.avatarUpdate} buttonLabel={'Logo Yükle'} />
                            </Col>
                            <Col sm="9">
                                <p class="profile-badge confirmed-badge"><FaCheckCircle /><span>ONAYLI PROFİL</span></p>
                                <p class="profile-badge usertype-badge"><FaUser /><span>AJANS</span></p>
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

                                        <div className="profile-section">
                                            <h3 className="subheader">ÖNE ÇIKAN ÇALIŞANLAR</h3>
                                            {this.state.topEmployees.map(emp => {
                                                return (
                                                    <div style={{marginBottom:'50px'}}>
                                                        <AgencyEmployees key={emp.id} employee={emp} />
                                                        <div className="btn btn-danger" key={emp.id + 100} onClick={() => this.removeEmployee(emp.id)}> Çalışan Kaldır</div>
                                                        <div style={{ marginLeft: '30px' }} className="btn btn-info" key={emp.id + 1000} onClick={() => this.editEmployee(emp.id)}>Çalışan Güncelle</div>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>

                                    </div>

                                    <div className="text-center">
                                        <button className="btn posting-sb-btn" onClick={() => (
                                            setFieldValue("employees", this.state.topEmployees)
                                        )}
                                            type="submit" disabled={isSubmitting}> Güncelle
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