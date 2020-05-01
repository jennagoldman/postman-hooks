import React, { useState } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm.jsx';
import Response from '../../components/Response/Response';

const RequestFormContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState([]);

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleBodyChange = ({ target }) => {
    setBody(target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    fetch(url)
      .then(res => res.json())
      .then(json => setResponse(JSON.stringify(json)));
  };

  return (
    <>
      <RequestForm url={url} onUrlChange={handleUrlChange} method={method} onMethodChange={handleMethodChange} body={body} onBodyChange={handleBodyChange} onRequestSubmit={handleRequestSubmit} />
      <Response response={response} />
    </>
  );
};

export default RequestFormContainer;

