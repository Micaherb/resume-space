import React from 'react';
import PropTypes from 'prop-types';
import './ColoredBlock.css';

const ColoredBlock = ({ text, color, height, contentComponent }) => {
  const blockStyle = {
    backgroundColor: color,
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    justifyContent: 'center',
    minHeight: height,
  };

  console.log(height);

  return (
    <div className={`colored-block`} style={blockStyle}>
      {text}
      {contentComponent && <div className="content">{contentComponent}</div>}
    </div>
  );
};

ColoredBlock.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.integer,
  contentComponent: PropTypes.element,
};

export default ColoredBlock;