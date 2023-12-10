import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { ReactComponent as Logo } from "./../drooling.svg";
import "./FeaturesBenefits.scss";
import TheCards from "./TheCards";

function FeaturesBenefits() {
  const cards = [
    {
      src: "/features&benefits/1.png",
      title: "Card Title",
      text: " Some quick example text to build on the card title and make up the bulk of the card",
    },
    {
      src: "/features&benefits/2.png",
      title: "Card Title",
      text: " Some quick example text to build on the card title and make up the bulk of the card",
    },
    {
      src: "/features&benefits/3.png",
      title: "Card Title",
      text: " Some quick example text to build on the card title and make up the bulk of the card",
    },
    {
      src: "/features&benefits/4.png",
      title: "Card Title",
      text: " Some quick example text to build on the card title and make up the bulk of the card",
    },
  ];

  return (
    <div className="main-div">
      <p className="heading">Features & Benefits</p>
      <div className="features-benefits">
        <Container className="fluid">
          <Row className="">
            {cards.map((card, index) => (
              <Col key={index}>
                <Card className="card border-0 mt-5">
                  <Card.Img variant="top" src={card.src} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="abc">
        <div className="main-drooling">
          <Logo alt="logo" />
        </div>
      </div>
      <div className="bcd">
      <TheCards/>
</div>
    </div>
  );
}

export default FeaturesBenefits;
