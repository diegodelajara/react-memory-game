'use client'
import React from 'react'
import { useCardContext } from '@/context/CardContext'
import { CardProps } from '@/types/Card'

export default function Card({ children: image, id }: CardProps) {
  const { handleFlip, flippedCards, matchedCards } = useCardContext()
  const isFlipped = flippedCards.some((card) => card.id === id)
  const isMatched = matchedCards.includes(id)

  return (
    <div
      className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
      onClick={() => handleFlip(id)}
    >
      <div className="card-inner">
        <div className="card-front">{image}</div>
        <div className="card-back">
          <p>Back of the card</p>
        </div>
      </div>
    </div>
  )
}
