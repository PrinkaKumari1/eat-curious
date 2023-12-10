import React, {useRef, useEffect} from "react";
import "./AboutSection.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSection2({handleSection2Ref}) {
  const section2 = useRef(null);

  useEffect(() => {
    if (typeof handleSection2Ref === "function") {
      handleSection2Ref(section2.current);
    }
  }, [handleSection2Ref]);
 

  return (
    <>
      <section className="about-section2 panel" ref={section2}>
        <img src="./about/Capture2.png" alt="about2" className="about_2"/>
        <Container>
          <Row>
            <Col><div className="man"><img src="./about/about2.svg" alt="man" /></div></Col>
            <Col><div className="about2">Inspiring good through tasty Goodness</div>
            <div className="description">It's what inspires us to whip up, throw together, tear, shake, and break the rules, on a mission to redefine food for a new generation</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutSection2;
