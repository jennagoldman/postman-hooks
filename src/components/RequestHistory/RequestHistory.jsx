import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestHistory.css';

const RequestHistory = ({ history }) => {
  const pastRequests = history.map((request, i) => (
    <li key={i}>
      <h3 className={styles.requestMethod}>{request.method}</h3>
      <p>{request.url}</p>
    </li>
  ));

  return (
    <section className={styles.historyContainer}>
      <h2>Request History</h2>
      <ul>
        {pastRequests}
      </ul>
    </section>
  );
};

RequestHistory.propTypes = {
  history: PropTypes.array.isRequired,
};

export default RequestHistory;
