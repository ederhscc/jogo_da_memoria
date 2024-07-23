import React from 'react'

const Card = ({card}) => {
  return (
    <div className={`card ${card.isFlepped ? "flipped" : ""}`}>
        {card.value}
    </div>
  )
}

export default Card