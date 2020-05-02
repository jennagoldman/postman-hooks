import React, { useState } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm.jsx';
import Response from '../../components/Response/Response';
import RequestHistory from '../../components/RequestHistory/RequestHistory.jsx';
import makeRequest from '../../services/make-request.js';

const RequestFormContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState(null);
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

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

    if(method === 'get' || method === 'delete') {
      setBody(null);
    }

    makeRequest(url, method, body)
      .then(response => setResponse(response));

    setHistory(prevHistory => ([
      ...prevHistory,
      {
        url,
        method,
        body
      }
    ]));
  };

  // {
  //   "title": "foo",
  //   "body": "bar",
  //   "userId": 1
  // }

  return (
    <>
      <RequestForm url={url} onUrlChange={handleUrlChange} method={method} onMethodChange={handleMethodChange} body={body} onBodyChange={handleBodyChange} onRequestSubmit={handleRequestSubmit} />
      <RequestHistory history={history} />
      <Response response={response} />
    </>
  );
};

export default RequestFormContainer;

