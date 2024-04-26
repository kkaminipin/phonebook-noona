import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
const Main = () => {
  return (
    <>
      <h1></h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
