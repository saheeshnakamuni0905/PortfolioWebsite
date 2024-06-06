import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import '../design/ProjectsDesign.css';

const projects = [
  {
    title: 'Bookworm Society',
    description: 'An online bookstore using the MERN stack.',
    githubLink: 'https://github.com/saheeshnakamuni0905/BookwormSociety',
    image: '/images/mern.png',
  },
  {
    title: 'Bookstore Spring Application',
    description: 'A Web 2.0 online bookstore using Spring Boot, MVC architecture.',
    githubLink: 'https://github.com/saheeshnakamuni0905/BookstoreSpringProject',
    image: '/images/spring.png',
  },
];

const Projects = () => {
  return (
    <div className="project-section" id="projects">
      <Container>
      <Fade direction="up" duration={500} triggerOnce={false}>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View on GitHub
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default Projects;
