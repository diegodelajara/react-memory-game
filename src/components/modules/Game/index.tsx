import React from 'react'
import { CardProps, OriginalCardProps } from '@/types/Card'
import Board from './Board'

export async function MemoryGame() {
  const response =
    (await fetch(`https://challenge-uno.vercel.app/api/images`)) || []
  const data = (await response.json()) as OriginalCardProps[]

  const duplicateCardsWithUniqueIds = () => {
    return data.flatMap((card) => [
      { ...card, uniqueId: `${card.uuid}-A` },
      { ...card, uniqueId: `${card.uuid}-B` },
    ])
  }
  const shuffledImages = duplicateCardsWithUniqueIds().sort(
    () => Math.random() - 0.5
  )

  return <Board shuffledImages={shuffledImages as CardProps[]} />
}

export default MemoryGame
