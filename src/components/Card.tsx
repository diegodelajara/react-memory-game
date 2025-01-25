'use client'
import { AnimalProps, CardProps } from '@/types/Card'
import React, { Fragment, useState } from 'react'

export default function Card({ children: image, id, title }: CardProps) {
  const MAX_FLIPPED = 2
  const [flipped, setFlipped] = useState(false)
  const [matched, setMatched] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [flippedCount, setFlippedCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)
  const [successCount, setSuccessCount] = useState(0)
  const [firstCard, setFirstCard] = useState<AnimalProps['id']>(0)
  const [secondCard, setSecondCard] = useState<AnimalProps['id']>(0)

  const onMatch = () => {
    setMatched(firstCard === secondCard)
    setFlippedCount(0)
  }

  const onFlipp = (id: AnimalProps['id']) => {
    if (disabled) return
    if (flippedCount >= MAX_FLIPPED) return

    setFlipped(true)
    setFlippedCount(flippedCount + 1)
    if (firstCard === 0) {
      setFirstCard(id)
    } else {
      setSecondCard(id)
      setDisabled(true)
    }
    onMatch()
  }

  return (
    <div onClick={() => onFlipp(id)}>
      {flipped ? (
        <div className="flex flex-col">
          <div>{image}</div>
          <p>{title}</p>
        </div>
      ) : (
        <div className="bg-blue-500 w-24 h-32"></div>
      )}
    </div>
  )
}
