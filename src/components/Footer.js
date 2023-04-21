import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <p>KingSRK-@iamsiva_2003 Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
