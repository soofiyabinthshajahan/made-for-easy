import React from "react";
import {
  CEOSection,
  CEOContainer,
  CEOImageWrapper,
  CEOImage,
  CEOContent,
  CEOTitle,
  CEOText,
  CEOSignature,
} from "./CeoMessage.styles";

function CEOMessage() {
  return (
    <CEOSection>
      <CEOContainer>
        <CEOImageWrapper>
          <CEOImage
            src="/Static/CEO Profile.jpg"
            alt="CEO"
            style={{ zIndex: 1, position: "absolute" }}
          />
          <CEOImage
            src="/Static/CEO Profile.jpg"
            alt="CEO alternate"
            style={{
              position: "relative",
              left: "80px",
              top: "140px",
              zIndex: 2,
              border: "4px solid #6f7d8bff",
            }}
          />
        </CEOImageWrapper>

        <CEOContent>
          <CEOTitle>A Message from Our CEO</CEOTitle>
          <hr style={{width:"320px",marginBottom:"1.5rem", marginLeft:"15px"}}></hr>
          <CEOText>
            At Made4Easy, our vision is to transform healthcare into something
            intuitive, accessible, and truly patient-first. We believe that
            every individual deserves seamless access to medical care — without
            the complexity.
          </CEOText>
          <CEOText>
            In a world where services are just a tap away, healthcare should be
            no different. That’s why we built Made4Easy — to unify hospitals,
            diagnostics, and pharmacies under one intelligent and secure
            platform.
          </CEOText>
          <CEOText>
            This isn’t just about technology — it’s about trust. We’re here to
            humanize healthcare through smart systems that empower both patients
            and providers, where your health records are always within your
            control.
          </CEOText>
          <CEOText>
            With every feature we build, we strive to make care simpler, faster,
            and more compassionate.
          </CEOText>
          <CEOText>
            Thank you for believing in our mission. Together, we’re creating a
            future where healthcare feels as it should — easy, connected, and
            made for you.
          </CEOText>

          <CEOSignature>
            – Soofiya Binth Shajahan, <br />
            <span >CEO & Founder -Made For Easy</span>
          </CEOSignature>
        </CEOContent>
      </CEOContainer>
    </CEOSection>
  );
}

export default CEOMessage;
