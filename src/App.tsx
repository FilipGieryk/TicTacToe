import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function App() {
  const [grid, setGrid] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const checkWinner = (grid) => {
    for (let win of winningConditions) {
      const [a, b, c] = win;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) return grid[a];
    }
  };

  const handleClick = (index) => {
    if (grid[index] !== "" || winner) return;

    const newGrid = [...grid];
    newGrid[index] = currentPlayer;
    setGrid(newGrid);

    const checkWin = checkWinner(newGrid);
    if (checkWin) {
      setWinner(checkWin);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  const resetGame = () => {
    setGrid(Array(9).fill(""));
    setWinner("");
    setCurrentPlayer("X");
  };

  return (
    <div>
      <h3>TicTacToe</h3>
      <p>currentPlayer: {currentPlayer}</p>
      {winner && <div>Winner {winner}</div>}
      <div className=" w-48 grid grid-cols-3 grid-rows-3">
        {grid.map((cell, index) => (
          <div
            className="w-16 h-16 border flex items-center justify-center text-2xl cursor-pointer"
            key={index}
            onClick={() => handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <button onClick={resetGame}>Reset</button>
    </div>
  );
}

export default App;
