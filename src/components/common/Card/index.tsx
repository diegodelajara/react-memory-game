'use client'
import React from 'react'
import { useCardContext } from '@/context/CardContext'
import { CardProps } from '@/types/Card'
import { motion } from 'motion/react'
import './styles.css'

export default function Card({ url, uuid, uniqueId }: CardProps) {
  const { handleFlip, flippedCards, matchedCards } = useCardContext()
  const isFlipped = flippedCards.some((card) => card.uniqueId === uniqueId)
  const isMatched = matchedCards.some((card) => card.id === uuid)

  console.log(flippedCards)

  return (
    <>
      <motion.div
        className={`memory-game__card card ${
          isFlipped || isMatched ? 'card--flipped' : ''
        }`}
        key={uniqueId}
        onClick={() => handleFlip(uniqueId!, uuid)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card__inner relative w-full h-32">
          <div
            className="card__back absolute inset-0 backface-hidden transform rotate-y-180 bg-cover bg-center"
            style={{ backgroundImage: `url('/question.png')` }}
          ></div>
          <div
            className="card__front absolute inset-0 backface-hidden bg-gray-200 flex items-center justify-center  bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
      </motion.div>
    </>
  )
}
