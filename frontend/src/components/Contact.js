import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jwa8b1h', 'template_d7wzq1f', e.target, 'klg4LshCgMYCvRrNq')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        handleClose(); // Close the offcanvas after successful submission
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  );
};

export default Contact;
