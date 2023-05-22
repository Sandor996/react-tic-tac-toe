import React from 'react';
import classes from './ScramblingText.module.css';
import useScramblingText from '../../hooks/useScramblingText';

const ScramblingText = ({ phrases }) => {
  const scrambleRef = useScramblingText(phrases);

  return (
    <div className={classes['scrambling-text']} ref={scrambleRef}>
      scrambling text
    </div>
  );
};

export default ScramblingText;
