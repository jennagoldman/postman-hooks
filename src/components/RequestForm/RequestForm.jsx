import React from 'react';
import PropTypes from 'prop-types';

const RequestForm = ({ url, method, body, onRequestSubmit, onMethodChange, onUrlChange, onBodyChange }) => (
  <form onSubmit={onRequestSubmit}>
    <label htmlFor="url">URL: 
      <input type="text" name="requestUrl" value={url} id="url" onChange={onUrlChange} />
    </label>
    <div className="methodsDiv">
      <label htmlFor="get">Get
        <input type="radio" name="method" value="get" id="get" onChange={onMethodChange} checked={method === 'get'} />
      </label>
      <label htmlFor="put">Put
        <input type="radio" name="method" value="put" id="put" onChange={onMethodChange} checked={method === 'put'}/>
      </label>
      <label htmlFor="post">Post
        <input type="radio" name="method" value="post" id="post" onChange={onMethodChange} checked={method === 'post'}/>
      </label>
      <label htmlFor="delete">Delete
        <input type="radio" name="method" value="delete" id="delete" onChange={onMethodChange} checked={method === 'delete'} />
      </label>
    </div>
    <textarea value={body} onChange={onBodyChange} />
    <button>Submit</button>
  </form>
);

RequestForm.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string,
  onUrlChange: PropTypes.func.isRequired,
  onMethodChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onRequestSubmit: PropTypes.func.isRequired,
};

export default RequestForm;
