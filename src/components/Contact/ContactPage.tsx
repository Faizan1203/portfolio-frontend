import { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import './ContactPage.css';
import { Container } from 'react-bootstrap';
import Loader from '../Loader/Loader';



const Contact = () => {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="contactbackground">
      <Loader load={load} />
      <Container className="contactpage">
        <h2 className="contacthead text-center">Get In Touch</h2>
        <p className="contactpara">
          I'm actively seeking co-op opportunities as a software developer. My
          inbox is always open for any potential vacancies, inquiries, or just a
          friendly "hello". I'm committed to promptly responding to your
          messages.
        </p>
        <ContactForm/>
        <span></span>
      </Container>
    </div>
  );
};

export default Contact;
