import Cross from './Cross';
import Circle from './Circle';

import classes from './Cell.module.css'

const Cell = ({ turn, onClick}) => {
  let content = turn === 'x' ? <Cross /> : turn === 'o' ? <Circle /> : null;

  return (
    <div className={classes.cell} onClick={onClick}>
      {content}
    </div>
  );
};

export default Cell;
