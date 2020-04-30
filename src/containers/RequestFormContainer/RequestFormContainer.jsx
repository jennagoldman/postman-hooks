import React, { useState } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm.jsx';

const RequestFormContainer = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleRequestSubmit = (event) => {
    event.preventDefault();
    console.log(url);
  };

  return (
    <RequestForm url={url} onUrlChange={handleUrlChange} onRequestSubmit={handleRequestSubmit} />
  );
};

export default RequestFormContainer;

