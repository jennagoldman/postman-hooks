import React, { useState } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm.jsx';

const RequestFormContainer = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('');

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleMethodChange = ({ target }) => {
    setMethod(target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    console.log('url: ', url, ', method: ', method);
  };

  return (
    <RequestForm url={url} onUrlChange={handleUrlChange} method={method} onMethodChange={handleMethodChange} onRequestSubmit={handleRequestSubmit} />
  );
};

export default RequestFormContainer;

