import React, { Component } from 'react'
import { FormGroup } from 'reactstrap'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Redirect } from 'react-router-dom';
import { Auth } from '../backend'

const RegWorkerSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Çok kısa.')
        .max(50, 'Çok uzun.')
        .required('Zorunludur'),
    lastName: Yup.string()
        .min(2, 'Çok kısa.')
        .max(50, 'Çok uzun.')
        .required('Zorunludur.'),
    // service: Yup.string()
    //     .test(
    //         'service',
    //         'Lütfen seçiniz',
    //         value => value !== -1
    //     ),
    email: Yup.string()
        .email('Geçersiz e-posta.')
        .required('E-posta zorunludur.'),
    password: Yup.string()
        .min(6, 'Şifreniz 6 karakterden uzun olmalıdır.')
        .required('Şifrenizi giriniz.'),
    consent: Yup.bool()
        .test(
            'consent',
            'Kullanıcı sözleşmesini onaylamanız gerekmektedir!',
            value => value === true
        )

})
const initialVals = {
    firstName: '',
    lastName: '',
    // service: '',
    email: '',
    password: '',
}


export default class RegisterWorker extends Component {

    constructor() {
        super()
        this.state = {
            toRoot: false,
            error: '',
        }
    }
    componentDidMount() {
        this.setState({
            selectedCategoryId: this.props.selectedCat || -1
        })
    }

    render() {
        return (
            <div style={{ marginTop: '40px' }} >
                {this.state.toRoot && <Redirect to="/" />}
                <Formik
                    initialValues={initialVals}
                    validationSchema={RegWorkerSchema}

                    onSubmit={(values, { setSubmitting }) => {
                        Auth.register(values.email, values.password, values.firstName, values.lastName)
                            .then(data => {
                                alert(JSON.stringify(values, null, 2))
                                setSubmitting(false)
                                this.setState({
                                   toRoot: true,
                                })
                            })
                            .catch(e => {
                                alert(JSON.stringify(values, null, 2))
                                setSubmitting(false)
                            })
                    }}
                >
                    {({ isSubmitting }) => (

                        <Form>
                            {this.state.error && <div>Hata: {this.state.error}</div>}
                            <FormGroup>
                                <Field className="form-control" type="text" placeholder="Adınız" name="firstName" />
                                <ErrorMessage name="firstName" component="div" />
                            </FormGroup>
                            <FormGroup>
                                <Field className="form-control" type="text" placeholder="Soyadınız" name="lastName" />
                                <ErrorMessage name="lastName" component="div" />
                            </FormGroup>
                            <FormGroup>
                                <Field className="form-control" type="text" placeholder="E-posta" name="email" />
                                <ErrorMessage name="email" component="div" />
                            </FormGroup>
                            <FormGroup>
                                <Field className="form-control" type="password" placeholder="Şifre" name="password" />
                                <ErrorMessage name="password" component="div" />
                            </FormGroup>
                            <label>
                                <Field name="consent" id="consent" component="input" type="checkbox" />
                                Kullanıcı Sözleşmesi şartlarını okudum ve kabul ediyorum.</label>
                            <ErrorMessage name="consent" component="div" />
                            <div className="text-right">
                                <button className="btn bt-submit col-12" type="submit" disabled={isSubmitting}>
                                    Üye Ol
                                 </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }

}

