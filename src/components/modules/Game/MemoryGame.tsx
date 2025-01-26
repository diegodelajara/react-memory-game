import React from 'react'
import { OriginalCardProps } from '@/types/Card'
import Board from '../../common/Board'
import User from '../User'

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

  return (
    <>
      <User />
      <Board shuffledImages={shuffledImages} />
    </>
  )
}

export default MemoryGame
