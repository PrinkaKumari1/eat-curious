import React, {useRef, useEffect} from "react";
import "./AboutSection.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSection3({handleSection3Ref}) {
  const section3 = useRef(null);

  useEffect(() => {
    if (typeof handleSection3Ref === "function") {
      handleSection3Ref(section3.current);
    }
  }, [handleSection3Ref]);
 

  return (
    <>
    <section className="about-section3 panel"  ref={section3}>
      <img src="./about/Capture3.png" alt="about2" className="about_3"/>
      <Container>
        <Row>
          <Col><div className="about3">powered by positivity</div>
          <div className="description3">It's what inspires us to whip up, throw together, tear, shake, and break the rules, on a mission to redefine food for a new generation</div>
          </Col>
          <Col><div className="man"><img src="./about/about3.svg" alt="man" /></div></Col>
        </Row>
      </Container>
    </section>
  </>
  )
}

export default AboutSection3