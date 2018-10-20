import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const ContactForm = () => (
  <section className="section-contact">
    <div className="row">
      <div className="contact">
        <div className="contact__form">
          <div className=" u-margin-bottom-medium">
            <h2 className="heading-secondary"> Get in touch </h2>
            <p className=" contact__text ">
              Thank you so much for visiting our site, we love what we do and we
              love our customers. We offer referral bonuses!
            </p>
          </div>

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
              <Form className="form">
                <div className="form-group">
                  {touched.name &&
                    errors.name && (
                      <p className="alert-warning wrn"> {errors.name} </p>
                    )}
                  <Field
                    className="form__input"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="form__label">
                    Name
                  </label>
                </div>
                <div className="form__group">
                  {touched.phone &&
                    errors.phone && (
                      <p className="alert-warning wrn"> {errors.phone} </p>
                    )}
                  <Field
                    className="form__input"
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                  />
                  <label htmlFor="name" className="form__label">
                    Phone Number
                  </label>
                </div>
                <div className="form__group">
                  {touched.email &&
                    errors.email && (
                      <p className="alert-warning wrn"> {errors.email} </p>
                    )}
                  <Field
                    className="form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                </div>

                <div className="form__group">
                  {touched.message &&
                    errors.message && (
                      <p className="alert-warning wrn"> {errors.message} </p>
                    )}
                  {status ? (
                    <h3 className="alert-success"> Message sent </h3>
                  ) : (
                    ""
                  )}
                  <Field
                    className="form__input"
                    type="text"
                    name="message"
                    component="textarea"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                </div>

                <button className="btn btn--green" type="submit">
                  Submit
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  </section>
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
