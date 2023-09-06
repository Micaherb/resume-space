import React from 'react';
import PropTypes from 'prop-types';

const HTMLRenderer = ({ htmlString }) => {
  const createMarkup = () => {
    return { __html: htmlString };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

HTMLRenderer.propTypes = {
  htmlString: PropTypes.string.isRequired,
};

export default HTMLRenderer;