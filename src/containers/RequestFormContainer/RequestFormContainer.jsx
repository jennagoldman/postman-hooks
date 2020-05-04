import React, { useState, useEffect } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm.jsx';
import Response from '../../components/Response/Response';
import RequestHistory from '../../components/RequestHistory/RequestHistory.jsx';
import makeRequest from '../../services/make-request.js';
import styles from './Container.css';

const RequestFormContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('requestHistory') === null) {
      localStorage.setItem('requestHistory', JSON.stringify([]));
    }
    const history = localStorage.getItem('requestHistory');
    setHistory(JSON.parse(history));
  }, []);

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
    localStorage.setItem('requestHistory', JSON.stringify(history));
  };

  const handleHistoryReset = () => {
    localStorage.setItem('requestHistory', JSON.stringify([]));
    setHistory([]);
  };


  return (
    <>
      <div className={styles.flexContainer}>
        <RequestForm url={url} onUrlChange={handleUrlChange} method={method} onMethodChange={handleMethodChange} body={body} onBodyChange={handleBodyChange} onRequestSubmit={handleRequestSubmit} />
        <RequestHistory history={history} onReset={handleHistoryReset} />
      </div>
      <Response response={response} />
      
    </>
  );
};

export default RequestFormContainer;

