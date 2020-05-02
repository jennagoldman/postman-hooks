import React from 'react';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <div>
    {response}
  </div>
);

Response.propTypes = {
  response: PropTypes.array.isRequired
};

export default Response;
