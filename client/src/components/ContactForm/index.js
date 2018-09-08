import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const ContactForm = () => (
  <div id="contact" className="contact  ">
    <div className="container ">
      <div className="row ">
        <div className="col-lg-12 ">
          <h3 className="contact__title">Get In Touch</h3>
          <p className=" contact__text ">
            Thank you so much for visiting our site, we love what we do and we
            love our customers. We offer referral bonuses!
          </p>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              message: ""
            }}
            validationSchema={Schema}
            onSubmit={(values, { resetForm, setStatus }) => {
              const name = values.name;
              const phone = values.phone;
              const email = values.email;
              const message = values.message;
              axios({
                method: "POST",
                url: "api/send",
                data: {
                  name,
                  phone,
                  email,
                  message
                }
              }).then(response => {
                if (response.data.success === true) {
                  resetForm();
                  setStatus({ success: true });
                } else if (response.data.success === false) {
                  setStatus({ success: false });
                }
              });
            }}
            render={({ errors, touched, status }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <Field className="form-control" type="text" name="name" />
                  {touched.name &&
                    errors.name && (
                      <p className="alert-warning wrn">{errors.name}</p>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Phone</label>
                  <Field className="form-control" type="text" name="phone" />
                  {touched.phone &&
                    errors.phone && (
                      <p className="alert-warning wrn">{errors.phone}</p>
                    )}
                </div>
                <div className="form-group">
                  <label htmlFor="name">Email</label>
                  <Field className="form-control" type="email" name="email" />
                  {touched.email &&
                    errors.email && (
                      <p className="alert-warning wrn">{errors.email}</p>
                    )}
                </div>
                <label htmlFor="name">Message</label>
                <div className="form-group">
                  <Field
                    className="form-control"
                    type="text"
                    name="message"
                    component="textarea"
                  />
                </div>
                {touched.message &&
                  errors.message && (
                    <p className="alert-warning wrn">{errors.message}</p>
                  )}
                {status ? <h3 className="alert-success">Message sent</h3> : ""}
                <button className="btn btn-outline-success" type="submit">
                  Submit
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  </div>
);
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(8, "Please enter your full name")
    .required("Full Name is Required"),
  phone: Yup.string("Please enter phone number").required("Phone is required"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  message: Yup.string()
    .min(15, " must be 15 characters or longer")
    .required("A brief description is Required")
});
export default ContactForm;
