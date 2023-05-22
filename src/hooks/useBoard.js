import { useEffect, useState } from 'react';
const defaultCells = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const useBoard = () => {
  const [cells, setCells] = useState(defaultCells());

  const [winner, setWinner] = useState(null);

  const [score, setScore] = useState({ player: 0, computer: 0 });

  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        setCells(defaultCells());
        setWinner(null);
      }, 1500);
      return;
    }

    const isComputerTurn =
      cells.filter((cell) => cell !== null).length % 2 === 1;

    const linesThatAre = (a, b, c) => {
      return lines.filter((cellIndexes) => {
        const cellValues = cellIndexes.map((index) => cells[index]);
        return (
          JSON.stringify([a, b, c].sort()) === JSON.stringify(cellValues.sort())
        );
      });
    };

    const emptyIndexes = cells
      .map((cell, index) => (cell === null ? index : null))
      .filter((val) => val !== null);

    const playerWon = linesThatAre('x', 'x', 'x').length > 0;

    const computerWon = linesThatAre('o', 'o', 'o').length > 0;

    const draw = cells.length === 9 && cells.every((el) => el !== null);

    if (playerWon || computerWon || draw) {
      setScore((prevScore) => {
        return playerWon
          ? { ...prevScore, player: prevScore.player + 1 }
          : computerWon
          ? { ...prevScore, computer: prevScore.computer + 1 }
          : prevScore;
      });
      setWinner(playerWon ? 'x' : computerWon ? 'o' : 'draw');
    }

    const putComputerAt = (index) => {
      setCells((prevCells) => {
        prevCells[index] = 'o';
        return [...prevCells];
      });
    };

    if (isComputerTurn) {
      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(
          (index) => cells[index] === null
        )[0];
        putComputerAt(winIndex);
        return;
      }

      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(
          (index) => cells[index] === null
        )[0];
        putComputerAt(blockIndex);
        return;
      }

      const linesToContinue = linesThatAre('o', null, null);
      
      if (linesToContinue.length > 0) {
        putComputerAt(
          linesToContinue[0].filter((index) => cells[index] === null)[0]
        );
        return;
      }

      const randomIndex =
        emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
      putComputerAt(randomIndex);
    }
  }, [cells, winner]);

  const handleCellClick = (index) => {
    if (winner || cells[index]) {
      return;
    }
    setCells((prevCells) => {
      prevCells[index] = 'x';
      return [...prevCells];
    });
  };
  return { score, winner, cells, handleCellClick };
};

export default useBoard;
