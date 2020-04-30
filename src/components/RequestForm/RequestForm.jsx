import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, onRequestSubmit, onUrlChange }) => {
  <form onSubmit={onRequestSubmit}>
    <input type="text" name="requestUrl" value={url} onChange={onUrlChange} />
    <input type="radio" name="method" value="get" />
    <input type="radio" name="method" value="put" />
    <input type="radio" name="method" value="post" />
    <input type="radio" name="method" value="delete" />
    <button>Submit</button>
  </form>;
};

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onRequestSubmit: PropTypes.func.isRequired
};

export default RequestForm;
