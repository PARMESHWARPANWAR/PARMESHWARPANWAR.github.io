import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rackUp from "../../Assets/Projects/rackUp.png";
import eVac from "../../Assets/Projects/eVac.jpeg";
import hustle from "../../Assets/Projects/hustle.png";
import netflix from "../../Assets/Projects/netflix.jpeg";
import highBai from "../../Assets/Projects/highBai.png";
import amazon from "../../Assets/Projects/amazon.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description=" Create a Netflix clone, authentication and show data
              from TMDB database."
              link="https://netflix-cone777.netlify.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="featch data from backend and show on WebSite, select
              product, save in kart and order products."
              link="https://amazon-clone07.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eVac}
              isBlog={false}
              title="E-Vac"
              description="A platform where user can book a emergency ambulance/
              evacuation depending on the request or the nature of the
              emergency. Statistics suggest that India has most
              emergency for accident, pregnancy, heart attacks which
              amounts up to 75-80% of the emergency and this platform
              will provide one stop solution to all of these also it
              will have an air evacuation available in case of dire
              consequences."
              link="https://e-vac.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hustle}
              isBlog={false}
              title="Hustle"
              description="Developed in unity"
              link="https://hustlegame.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rackUp}
              isBlog={false}
              title="RackUp"
              description="."
              link="https://rackup.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={highBai}
              isBlog={false}
              title="HighBai"
              description="."
              link="https://highbai.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
