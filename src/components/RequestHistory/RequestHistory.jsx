import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestHistory.css';

const RequestHistory = ({ history }) => (
  <div className={styles.historyContainer}>
    <h2>Request History</h2>
    <p>Select a request to re-run it</p>
    <div>
      { history.map((request, i) => (
        <li key={i}>
          <h3 className={styles.requestMethod}>{request.method}</h3>
          <p>{request.url}</p>
        </li>
      )) }
    </div>
  </div>
);

RequestHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default RequestHistory;
