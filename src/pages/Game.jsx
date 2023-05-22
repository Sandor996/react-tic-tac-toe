import Board from '../components/Board/Board';
import Cell from '../components/Cell/Cell';
import useBoard from '../hooks/useBoard';

const GamePage = () => {
  const { winner, score, cells, handleCellClick } = useBoard();

  return (
    <Board winner={winner} score={score}>
      {cells.map((cell, index) => (
        <Cell turn={cell} onClick={() => handleCellClick(index)} key={index} />
      ))}
    </Board>
  );
};

export default GamePage;
