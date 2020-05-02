import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const Response = ({ response }) => (
  <section>
    <ReactJson
      src={response} 
      // theme="summerfruit:inverted"
      theme={{
        base00: '#f5f1f1',
        base01: '#ec66d6',
        base02: '#a3e053',
        base03: '#a3e053',
        base04: '#ec66d6',
        base05: '#ec66d6',
        base06: '#ec66d6',
        base07: '#444',
        base08: '#444',
        base09: '#08b699',
        base0A: '#f5f1f1',
        base0B: '#a3e053',
        base0C: '#a3e053',
        base0D: '#a3e053',
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
