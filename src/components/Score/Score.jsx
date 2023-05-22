import React from 'react';

import classes from './Score.module.css';

const Score = ({ score }) => {
  return (
    <div className={classes.score}>
      <span className={classes.score__player}> You: {score.player}</span> {' '}
      <span className={classes.score__computer}>Computer:{score.computer}</span>
    </div>
  );
};

export default Score;
