import React from 'react';
import PropTypes from 'prop-types';
import './ColoredBlock.css';

const ColoredBlock = ({ text, color, height }) => {
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
    </div>
  );
};

ColoredBlock.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  height: PropTypes.integer,
};

export default ColoredBlock;