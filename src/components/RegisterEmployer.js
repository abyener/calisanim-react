import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup } from 'reactstrap'

import * as Yup from 'yup';
import { Auth } from '../backend';
import { Redirect } from 'react-router-dom';

const RegEmployerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Çok kısa.')
    .max(50, 'Çok uzun.')
    .required('Zorunludur'),
  lastName: Yup.string()
    .min(2, 'Çok kısa.')
    .max(50, 'Çok uzun.')
    .required('Zorunludur.'),

  email: Yup.string()
    .email('Geçersiz e-posta.')
    .required('E-posta zorunludur.'),
  password: Yup.string()
    .min(6, 'Şifreniz 6 karakterden uzun olmalıdır.')
    .required('Şifrenizi giriniz.'),
  consent: Yup.bool()
    .test(
      'consent',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )

})

const initialVals = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

export default class RegisterEmployer extends Component {
  constructor() {
    super()
    this.state = {
      preferences: false,
      toRoot: false,
    }
  }
  componentDidMount() {
    this.setState({
      preferences: this.props.data || { userType: "employer" }
    })
  }
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        {this.state.toRoot && <Redirect to="/" />}
        <Formik
          initialValues={initialVals}
          validationSchema={RegEmployerSchema}

          onSubmit={(values, { setSubmitting }) => {
            Auth.register(values.email, values.password, values.firstName, values.lastName, this.state.preferences)
              .then(data => {
                setSubmitting(false);
                console.log(this.state.preferences);
                this.setState({
                  toRoot: true,
                })
              })
              .catch(e => {
                setSubmitting(false);
              })
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                <Field name="consent" component="input" type="checkbox" />
                Kullanıcı Sözleşmesi şartlarını okudum ve kabul ediyorum.
                            </label>
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
