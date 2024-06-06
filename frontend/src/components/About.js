import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactTyped as Typed } from 'react-typed';
import { Fade } from 'react-awesome-reveal';
import '../design/AboutDesign.css';
import { ReactComponent as Illustration } from '../images/proudcoder.svg';

const About = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Fade direction="left" cascade>
              <h2 className="greeting">Hi, I am <span className="highlight">Saheeshna Kamuni</span></h2>
              <h1 className="headline">
                <Typed
                  strings={['I write code', 'I build websites', 'I love programming']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
              <div className="description">
                <p>I am an enthusiastic learner seeking to grow with the company, contributing to its success while expanding my skills. I aim to see projects achieve great heights and aspire to gain insights from team members, enhancing my technical expertise and gaining valuable life lessons.</p>
              </div>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade direction="right">
                <Illustration className="illustration" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
