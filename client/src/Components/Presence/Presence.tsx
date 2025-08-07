import React from 'react';
import { PanelWrapper, DateField, DateInput, IconTextWrapper, BookButton } from './Presence.styles';
import {FaClinicMedical } from 'react-icons/fa'; 
import { GiHospital,GiTestTubes } from "react-icons/gi";
import { BsCapsulePill } from "react-icons/bs";



const tileData = [
  {
    icon: <GiHospital />,
    label: 'Hospitals',
  },
  {
    icon: <FaClinicMedical />,
    label: 'Clinic',
  },
  {
    icon: <GiTestTubes />,
    label: 'Laboratory',
  },
  {
    icon: <BsCapsulePill />,
    label: 'Pharmacy',
  },
];

function Presence() {
  return (
    <PanelWrapper>
      {tileData.map((tile, index) => (
        <DateField key={index}>
          <IconTextWrapper>
            {tile.icon}
            <span>{tile.label}</span>
          </IconTextWrapper>
          <DateInput />
        </DateField>
      ))}
      <BookButton>Bank Grade Security</BookButton>
    </PanelWrapper>
  );
}

export default Presence;
