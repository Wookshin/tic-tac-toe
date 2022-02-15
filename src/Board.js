import React from 'react'
import Square from './Square'

export default function Board (props) {
  const rows = Array.from({ length: 3 }, () => ({}))
  const cols = Array.from({ length: 3 }, () => ({}))
  const { x, y } = props.point
  const isCurrent = (x - 1) * 3 + (y - 1)

  return (
    <div>
      {rows.map((_, i) =>
        (<div className='board-row' key={i}>
          {cols.map((_, j) => {
            const index = j + i * 3
            return (
              <Square
                value={props.squares[index]}
                isCurrent={isCurrent === index}
                onClick={() => props.onClick(index)}
                key={index}
              />
            )
          })}
        </div>))}
    </div>
  )
}
