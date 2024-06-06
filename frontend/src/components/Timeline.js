import React from 'react';
import { Fade } from 'react-awesome-reveal';
import '../design/TimelineDesign.css';

const Timeline = () => {
  const timelineData = [
    {
        type: 'education',
        heading: 'Education',
        title: 'Master of Science in Information Systems',
        subtitle: 'Northeastern University, Boston, MA',
        date: 'Expected May 2025',
      },
      {
        type: 'work',
        heading: 'Work Experience',
        title: 'Software Engineer',
        subtitle: 'Accenture, India',
        date: 'July 2021 - Feb 2023',
      },
    {
    //   type: 'education',
      title: 'Bachelor of Engineering in Information Technology',
      subtitle: 'Vasavi College of Engineering, India',
      date: 'July 2021',
    },
  ];

  return (
    <div id="timeline" className="timeline">
      {timelineData.map((item, index) => (
        <Fade key={index} direction="up" triggerOnce={false}>
          <div className={`timeline-item ${item.type}`}>
          <h3>{item.heading}</h3>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <time>{item.date}</time>
            </div>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Timeline;
