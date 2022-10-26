import React, { useState } from "react";
import UseEmail from "./UseEmail";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [values, setValues] = useState({
    email: "",
    person: "",
    message: "",
  });

  const { email, person, message } = values;

  const { loading, submitted, error, sendEmail } = UseEmail(
    "https://public.herotofu.com/v1/ae214100-52d5-11ed-9f58-f3ab7f1a635a"
  );
  const handleChange = (name) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const sendExample = () => {
    sendEmail({
      Email: email,
      Name: person,
      Message: message,
    });
  };
  return (
    <section id="contact" className="clean-block">
      <div class="container">
        <div className="block-heading">
          <h2 className="name">Contact Me</h2>
        </div>

        <div
          className="row justify-content-center"
          style={{
            paddingBottom: "1em",
          }}
        >
          <div className="col-sm-6 col-lg-4">
            <div
              style={{
                fontSize: "1rem",
                textAlign: "center",
                color: "green",
              }}
            >
              {submitted && "Done, email was sent!"}
              {error ? `Unexpected error: ${error}` : null}
              {loading && "Email is being sent now..."}
            </div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange("person")}
                  placeholder="Enter name"
                  value={person}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange("email")}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter message"
                  onChange={handleChange("message")}
                  value={message}
                />
              </Form.Group>
              <Button onClick={sendExample} variant="primary">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
