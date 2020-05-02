import React from 'react';
import styles from './RequestHistory.css';

const RequestHistory = ({ history }) => (
  <div className={styles.historyContainer}>
    <h2>Request History</h2>
    <p>Select a request to re-run it</p>
    <div>
      {history.map(request => (
        <li key={Math.random() * 100}>
          <h3 className={styles.requestMethod}>{request.method}</h3>
          <p>{request.url}</p>
        </li>
      ))}
    </div>
  </div>
);

export default RequestHistory;
