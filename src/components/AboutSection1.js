import React, {useRef, useEffect} from "react";
import "./AboutSection.scss";
import "./wave.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
function AboutSection1({handleSection1Ref}) {
  const section1 = useRef(null);

  useEffect(() => {
    if (typeof handleSection1Ref === "function") {
      handleSection1Ref(section1.current);
    }
  }, [handleSection1Ref]);
 

  return (
    <>
      <div className="box mask" ></div>
      <section className="about-section panel " ref={section1}>
        <img src="./about/Capture1.png" alt="about1" className="about_1"/>
        <Container>
          <Row>
            <Col><div className="about1">Curious... By Name, By Nature</div>
            <div className="description">It's what inspires us to whip up, throw together, tear, shake, and break the rules, on a mission to redefine food for a new generation</div>
            </Col>
            <Col><div className="man"><img src="./about/about1.svg" alt="man" /></div></Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection1;
