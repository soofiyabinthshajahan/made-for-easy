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
import Presence from "../Presence/Presence";
import LogoDisplay from "../LogoDisplay/LogoDisplay";
import CEOMessage from "../About/CEOMessage";
import ContactForm from "../Contact/ContactForm";
import FeatureDisplay from "../Features/FeatureDisplay";
import Feature from "../Features/Feature";
import Footer from "../Footer/Footer";


function Home() {
  return (
    <>
   
       
   <HeaderTop />
       
     

 <HomePage>
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
    <Presence />
    <LogoDisplay />
    <CEOMessage />
  
    <FeatureDisplay />
    <ContactForm />
    <Footer />
    </>
  );
}

export default Home;
