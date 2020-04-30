import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, onRequestSubmit, onUrlChange }) => {
  <form onSubmit={onRequestSubmit}>
    <input type="text" name="requestUrl" value={url} onChange={onUrlChange} />
    <button>Submit</button>
  </form>;
};

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onRequestSubmit: PropTypes.func.isRequired
};

export default RequestForm;
