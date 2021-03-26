import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  const { value, click } = props
  return (
    <button className="square" onClick={click}>
      {value}
    </button>
  )
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xTurn, setXTurn] = useState(true)

  const status = 'Next player: ' + (xTurn ? 'X' : 'O')

  function handleClick(i) {
    const newSquares = [...squares]
    newSquares[i] = xTurn ? 'X' : 'O'
    setSquares(() => newSquares)
    setXTurn(!xTurn)
  }

  function renderSquare(i) {
    return <Square value={squares[i]} click={() => handleClick(i)} />
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )

}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
)
