import React from "react";
import {
  ExploreButton,
  HomePage,
  Intro,
  IntroHeading,
  Introtext,
  IntroVideoButton,
  PlayCircle
} from "./Home.styles";
import HeaderTop from "../Header/HeaderTop";
import Subheader from "../Header/Subheader";
import { FaPlay } from "react-icons/fa";


function Home() {
  return (
    <HomePage>
      <HeaderTop />
      <Subheader />

      <Intro>
        <IntroVideoButton>
          <PlayCircle>
            <FaPlay color="white" />
          </PlayCircle>
          INTRO VIDEO
        </IntroVideoButton>
        <IntroHeading>
          Introducing Centralized
          <br />
          Health Card
        </IntroHeading>

        <Introtext>
          Enjoy the seamless integration of Healthcare Services. Access all the
          Health care services at your finger Tip. Introducing paperless
          healthcare. One card, Unlimited Features, Seamless Experience
        </Introtext>
      </Intro>
      <ExploreButton>Discover More About Us </ExploreButton>
    </HomePage>
  );
}

export default Home;
