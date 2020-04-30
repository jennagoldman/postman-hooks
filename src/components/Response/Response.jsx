import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <div>
    {response}
  </div>
);

Response.propTypes = {
  response: PropTypes.string.isRequired
};

export default Response;
