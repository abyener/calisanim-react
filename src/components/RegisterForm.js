import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const RegisterForm = () => (
  <div>
    <Formik
      initialValues={{ name: '', surname: '', email: '' }}
      validationSchema={RegisterSchema}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-row">
            <div className="form-group col-lg-6">
              <Field className="form-control" type="text" placeholder="İsim, Soyisim" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div className="form-group col-lg-6">
              <Field className="form-control" type="email" placeholder="E-posta" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-lg-12">
              <Field className="form-control" type="text" placeholder="Konu" name="subject" />
              <ErrorMessage name="message" component="div" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-lg-12">
              <Field className="form-control" rows="7" cols="25" component="textarea" placeholder="Mesaj" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>
          </div>
          <div className="text-right">
            <button className="btn btn-info text-right" type="submit" disabled={isSubmitting}>
              Gönder
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;