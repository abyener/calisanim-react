import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Auth } from '../backend'

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçersiz E-posta.')
    .required('Zorunludur.'),
  password: Yup.string()
    .min(6, 'Şifreniz 6 karakterden uzun olmalıdır.')
    .required('Zorunludur.'),
  consent: Yup.bool()
    .test(
      'consent',
      'Kullanıcı sözleşmesi şartlarını kabul etmelisiniz.',
      value => value === true
    )
})

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {

    }
    // this.state = {
    //     consent: false
    // }
    // this.handleChange = this.handleChange.bind(this)
  }
  // handleChange(e) {

  //     const { name, value, type, checked } = e.target
  //     type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  // }
  render() {

    return (
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}

          onSubmit={(values, { setSubmitting }) => {
            Auth.login(values.email, values.password)
              .then(data => {
                console.log(data);
                setSubmitting(false);
              })
              .catch(e => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              })
          }}
        >
          {({ isSubmitting }) => (

            <Form>
              <div className="form-group">
                <Field className="form-control" type="email" placeholder="E-posta" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="form-group">
                <Field className="form-control" type="password" placeholder="Şifre" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              {/* checked={this.state.isChecked}  */}
              <label>
                <Field name="consent" component="input" type="checkbox" />
                Kullanıcı Sözleşmesi şartlarını okudum ve kabul ediyorum.</label>
              <ErrorMessage name="consent" component="div" />
              <div className="text-right">
                <button className="btn bt-submit col-12" type="submit" disabled={isSubmitting}>
                  Giriş Yap
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
  }

}

export default LoginForm;
