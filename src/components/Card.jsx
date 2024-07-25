import React from 'react'

const Card = ({card}) => {
  return (
    <div className={`card ${card.isFlepped ? "flipped" : ""}`}>
        {card.isFlepped ? card.value : "?"}
    </div>
  )
}

export default Card