import React from "react";
import {
  CardContainer,
  Icon,
  Title,
  Description,
  BulletList,
  LearnMoreButton,
} from "./Feature.style";
import { IoIosArrowDropright } from "react-icons/io";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
};

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  features,
  buttonText = "Learn More",
}) => {
  return (
    <CardContainer>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BulletList>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </BulletList>
      <LearnMoreButton>
        {buttonText}
        <IoIosArrowDropright size={18} style={{ marginLeft: "8px" }} />
      </LearnMoreButton>
    </CardContainer>
  );
};

export default Feature;
