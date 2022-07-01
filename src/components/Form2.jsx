import React from "react";
import { Container } from "react-bootstrap";
import "./Form.css";

const Form2 = () => {
  return (
    <div id="form1">
      <Container>
        <div className="inline">
          <input className="input-form me-3" placeholder="Company Name" />
          <input className="input-form" placeholder="Your Title" />
          <input className="input-form" placeholder="Website" />
        </div>
      </Container>
    </div>
  );
};

export default Form2;
