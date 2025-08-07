import React from "react";
import {
  Container,
  LeftSection,
  RightSection,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  Form,
  Input,
  SubmitButton,
  Title,
  Subtitle,
} from "./ContactForm.style";

import { FaCheckCircle, FaFlask, FaHeartbeat } from "react-icons/fa";

const ContactForm = () => {
  return (
    <Container>
      <LeftSection>
        <FeatureItem>
          <FeatureIcon><FaCheckCircle size={40} /></FeatureIcon>
          <FeatureText>
            <strong>Secure medical data</strong>
            <p>All your records are safely stored and shared only with consent</p>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaFlask size={40} /></FeatureIcon>
          <FeatureText>
            <strong>Lab & scan integration</strong>
            <p>Book diagnostics and receive result seamlessly on your dashboard</p>
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon><FaHeartbeat size={40} /></FeatureIcon>
          <FeatureText>
            <strong>Appointment priority</strong>
            <p>We make sure your appointments are quick, timely and reliable</p>
          </FeatureText>
        </FeatureItem>
      </LeftSection>

      <RightSection>
        <Title>Reach out to us</Title>
        <Subtitle>connecting you to right care at right time</Subtitle>
        <Form>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your number" />
          <Input placeholder="I am a ……………" />
          <Input placeholder="What is your main concern?" />
          <SubmitButton>SUBMIT REPORT</SubmitButton>
        </Form>
      </RightSection>
    </Container>
  );
};

export default ContactForm;
