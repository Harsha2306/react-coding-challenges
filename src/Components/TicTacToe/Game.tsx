import React, { useCallback, useState } from "react";

type TTicTacToe = {
  board: (string | null)[][];
  player: "❌" | "⭕";
  gameStatus: "🤝 Draw" | "❌ Won" | "⭕ Won" | "inProgress";
};

const initialState: TTicTacToe = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  player: "⭕",
  gameStatus: "inProgress",
};

const Game: React.FC = () => {
  const [ticTacToe, setTicTacToe] = useState<TTicTacToe>(initialState);

  const checkWin = (board: (string | null)[][]) => {
    //rows and cols
    for (let i = 0; i < board.length; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      )
        return board[i][0];
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }
    //diagnols
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      return board[0][0];
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    ) {
      return board[0][2];
    }
    return null;
  };

  const getNoOfOccupiedCells = (board: (string | null)[][]): number => {
    let res = 0;
    board.forEach((row) =>
      row.forEach((col) => {
        if (col !== null) res++;
      })
    );
    return res;
  };

  const handleMove = useCallback((rowIdx: number, colIdx: number) => {
    setTicTacToe((prev) => {
      const updatedBoard = prev.board.map((row) => [...row]);
      updatedBoard[rowIdx][colIdx] = prev.player;
      const nextPlayer = prev.player === "⭕" ? "❌" : "⭕";
      const playerWins = checkWin(updatedBoard);
      let updatedGameStatus = prev.gameStatus;
      if (!playerWins && getNoOfOccupiedCells(updatedBoard) === 9)
        updatedGameStatus = "🤝 Draw";
      else if (playerWins === "⭕") updatedGameStatus = "⭕ Won";
      else if (playerWins === "❌") updatedGameStatus = "❌ Won";
      return {
        board: updatedBoard,
        player: nextPlayer,
        gameStatus: updatedGameStatus,
      };
    });
  }, []);

  const handleReset = () => {
    setTicTacToe(initialState);
  };

  return (
    <div>
      <h3>
        {ticTacToe.gameStatus === "inProgress"
          ? `${ticTacToe.player}'s Turn`
          : ticTacToe.gameStatus}
      </h3>
      {ticTacToe.board.map((row, rowIdx) => (
        <div key={rowIdx} style={{ display: "flex" }}>
          {row.map((col, colIdx) => (
            <button
              disabled={col !== null || ticTacToe.gameStatus !== "inProgress"}
              onClick={() => handleMove(rowIdx, colIdx)}
              key={colIdx}
              style={{ width: "50px", height: "50px", fontSize: "24px" }}
            >
              {col || "-"}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleReset} style={{ marginTop: "1rem" }}>
        Reset
      </button>
    </div>
  );
};

export default Game;
