import React from 'react';
import '../design/AboutButtonsDesign.css';

const AboutButton = ({ as: Component, children, filled, secondary, ...rest }) => {
  return (
    <Component
      className={`dir-control ${secondary ? 'dir-control--secondary' : ''} ${filled ? 'dir-control--filled' : ''}`}
      {...rest}
    >
      {children}
      <span />
      <span />
      <span />
      <span />
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
      <b aria-hidden="true">{children}</b>
    </Component>
  );
};

AboutButton.defaultProps = {
  as: 'button'
};

export default AboutButton;
