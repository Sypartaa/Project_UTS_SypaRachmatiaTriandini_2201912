import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ContactCards";
import Particle from "../Particle";
import gmail from "../../Assets/Contact/Gmail.png";
import whatsapp from "../../Assets/Contact/Whatsapp.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Hubungi <strong className="purple">Aku</strong>
        </h1>
        <p style={{ color: "white" }}>
        Hubungi aku di link bawah ini yaa
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsapp}
              isBlog={false}
              title="WhatsApp"
              description="Sypa Rachmatia Triandini | +6285777628770"
              Link="https://wa.me/6285777628770"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="Gmail"
              description="Sypa Rachmatia Triandini | syparachmaaa@gmail.com "
              Link="mailto:syparachmaaa@gmail.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;