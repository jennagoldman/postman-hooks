import React from 'react';
import ReactJson from 'react-json-view';
import './Response.css';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <section>
    <ReactJson
      src={response} 
      // theme="summerfruit:inverted"
      theme={{
        base00: '#001121',
        base01: '#ec66d6',
        base02: '#fc40e6',
        base03: '#fc40e6',
        base04: '#ec66d6',
        base05: '#ec66d6',
        base06: '#ec66d6',
        base07: '#fff',
        base08: '#fff',
        base09: '#1df5f1',
        base0A: '#f5f1f1',
        base0B: '#fc40e6',
        base0C: '#fc40e6',
        base0D: '#fc40e6',
        base0E: '#ec66d6',
        base0F: '#ec66d6'
      }}

      
      enableClipboard={false}
      iconStyle="circle"
      displayDataTypes={false}
      groupArraysAfterLength={50}
    />
  </section>

);

Response.propTypes = {
  response: PropTypes.array.isRequired
};

export default Response;
