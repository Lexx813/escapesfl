import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    alert: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url: "api/send",
      data: {
        name: name,
        phone: phone,
        email: email,
        message: message
      }
    }).then(response => {
      if (response.data.msg === "success") {
        this.setState({ alert: "Message Sent" });
        this.resetForm();
      } else if (response.data.msg === "fail") {
        this.setState({ alert: "Message failed" });
      }
    });
  };

  resetForm() {
    document.getElementById("contact-form").reset();
  }
  render() {
    const alert = this.state.alert;
    return (
      <div id="contact" className="contact py-2 ">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-12 ">
              <h3 className="contact__title">Get In Touch</h3>
              <p className=" contact__text ">
                Thank you so much for visiting our site, we love what we do and
                we love our customers. We offer referral bonuses!
              </p>
              <div
                className={
                  alert === " Message Sent"
                    ? "alert-warning text-center"
                    : "alert-success text-center"
                }
              >
                {alert}
              </div>
              <form
                id="contact-form"
                onSubmit={this.handleSubmit}
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    aria-describedby="phoneHelp"
                  />
                  <label htmlFor="phone">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" rows="5" id="message" />
                </div>
                <button type="submit" className="btn btn-lg btn-success ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
