import React, {useRef, useEffect} from "react";
import "./AboutSection.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutSection4({handleSection4Ref}) {
  const section4 = useRef(null);

  useEffect(() => {
    if (typeof handleSection4Ref === "function") {
      handleSection4Ref(section4.current);
    }
  }, [handleSection4Ref]);
  return (
    <>
      <section className="about-section4 panel"  ref={section4}>
        <Container>
          <Row>
            <Col><div className="man"><img src="./about/about4.svg" alt="man" /></div></Col>
            <Col><div className="about4">flavourism food for everyone</div>
            <div className="description4">It's what inspires us to whip up, throw together, tear, shake, and break the rules, on a mission to redefine food for a new generation</div>
            </Col>
          </Row>
        </Container>
        <img src="./about/Capture4.png" alt="about4" className="about_4"/>
      </section>
    </>
  );
}

export default AboutSection4;
