import StatusBar from '../StatusBar/StatusBar';
import Score from '../Score/Score';

import classes from './Board.module.css'

const Board = ({ winner, score, children }) => {
  return (
    <div className={classes.wrapper}>
      <Score score={score} />
      <div className={classes.board}>{children}</div>
      <StatusBar winner={winner} />
    </div>
  );
};

export default Board;
