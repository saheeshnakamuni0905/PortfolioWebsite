import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import '../design/ProjectsDesign.css';
import Animation from './Animation';

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
              <Col md={6} key={index} className="mb-4">
                <div className="card-container">
                  <input type="checkbox" id={`card${index}`} className="card-checkbox" />
                  <label htmlFor={`card${index}`} className="card-label">
                    <div className="card project-card">
                      <div className="front">
                        <header>
                          <h2>{project.title}</h2>
                        </header>
                        <div className="image-container">
                          <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.description}</h3>
                      </div>
                      <div className="back">
                        <header>
                          <h2>{project.title}</h2>
                        </header>
                        <p>
                          
                          <br />
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View on GitHub
                          </a>
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </Col>
            ))}
          </Row>
        </Fade>
        <Animation/>
      </Container>
    </div>
  );
};

export default Projects;
