import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import './ContactForm.css';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [emailSentSuccess, setEmailSentSuccess] = useState<boolean>(false);
  const [emailSentFail, setEmailSentFail] = useState<boolean>(false);

  const requiredField: string = ' is a required field';
  const schema = yup
    .object({
      firstName: yup.string().required('First Name' + requiredField),
      lastName: yup.string().required('Last Name' + requiredField),
      email: yup
        .string()
        .email("Invalid Email")
        .required('Email' + requiredField),
      subject: yup.string().required('Subject' + requiredField),
      message: yup.string().required('Message' + requiredField),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: ContactFormData) => {
    console.log(data);

    const emailData = {
      from_name: data.firstName + ' ' + data.lastName,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      const response = await emailjs.send(
        'service_8dprble',
        'template_w16zjc4',
        emailData,
        '3OiaskrIZRs8LbkUg'
      );
      setEmailSentSuccess(true);
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailSentFail(true);
    }
    reset();
  };

  return (
    <>
      {emailSentSuccess ? (
        <Alert
          key="success"
          variant="success"
          dismissible
          onClose={() => {
            window.location.reload();
          }}
        >
          Email sent successfully!
        </Alert>
      ) : emailSentFail ? (
        <Alert
          key="danger"
          variant="danger"
          dismissible
          onClose={() => {
            window.location.reload();
          }}
        >
          Sorry for the inconveniece. Please try
          again another time.
        </Alert>
      ) : (
        ''
      )}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <Row>
                <Col md={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => (
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          {...field}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  />
                </Col>
                <Col md={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => (
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          isInvalid={!!errors.lastName}
                          {...field}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  />
                </Col>
              </Row>

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Email Address"
                      isInvalid={!!errors.email}
                      {...field}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />

              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      isInvalid={!!errors.subject}
                      {...field}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />

              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Form.Group className="mb-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      isInvalid={!!errors.message}
                      {...field}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Button variant="outline-secondary" type="submit">
                Send Message
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}

export default ContactForm;
