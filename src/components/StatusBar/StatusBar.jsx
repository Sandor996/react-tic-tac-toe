import classes from './StatusBar.module.css';

const StatusBar = ({ winner }) => {
  return (
    <>
      {winner === 'x' ? (
        <div className={classes.result + ' ' + classes.blue}>You WON!</div>
      ) : winner === 'o' ? (
        <div className={classes.result + ' ' + classes.red}>You LOST!</div>
      ) : winner === 'draw' ? (
        <div className={classes.result}>Draw!</div>
      ) : (
        <div className={classes.result}>Game in progress</div>
      )}
    </>
  );
};

export default StatusBar;
