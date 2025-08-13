import React, { useState } from "react";
import {
  Container,
  FormWrapper,
  Option,
  RadioInput,
  Label,
  ConfirmButton,
} from "./Register.styles";
import HeaderTop from "../Header/HeaderTop";
import Subheader from "../Header/Subheader";

const Register: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  const options = [
    "individual",
    "Doctor",
    "Clinic",
    "Laboratory",
    "Hospital",
    "Radiology",
  ];

  const handleChange = (value: string) => {
    setSelected(value);
  };

  const handleSubmit = () => {
    alert(`Selected: ${selected}`);
  };

  return (
    <>
  <HeaderTop />
  <Subheader />
    <Container>
      <FormWrapper>
        {options.map((option) => (
          <Option key={option} onClick={() => handleChange(option)}>
            <Label>
              {option}
              <RadioInput
                type="radio"
                name="registerType"
                value={option}
                checked={selected === option}
                onChange={() => handleChange(option)}
              />
            </Label>
          </Option>
        ))}
        <ConfirmButton onClick={handleSubmit}>Confirm</ConfirmButton>
      </FormWrapper>
    </Container>
      </>
  );
};

export default Register;
