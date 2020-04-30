import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, onRequestSubmit, onUrlChange }) => (
  <form onSubmit={onRequestSubmit}>
    <input type="text" name="requestUrl" value={url} onChange={onUrlChange} />
    <label htmlFor="get">Get</label>
    <input type="radio" name="method" value="get" id="get" />
    <label htmlFor="get">Put</label>
    <input type="radio" name="method" value="put" id="put" />
    <label htmlFor="get">Post</label>
    <input type="radio" name="method" value="post" id="post" />
    <label htmlFor="get">Delete</label>
    <input type="radio" name="method" value="delete" id="delete" />
    <button>Submit</button>
  </form>
);

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  onUrlChange: PropTypes.func.isRequired,
  onRequestSubmit: PropTypes.func.isRequired
};

export default RequestForm;
