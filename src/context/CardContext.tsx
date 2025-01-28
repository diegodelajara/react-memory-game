'use client'
import React, { createContext, useContext, useState } from 'react'
import { CardContextProps, CardProps } from '@/types/Card'

const CardContext = createContext<CardContextProps | undefined>(undefined)

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [flippedCards, setFlippedCards] = useState<
    CardContextProps['flippedCards']
  >([])
  const [matchedCards, setMatchedCards] = useState<
    CardContextProps['matchedCards']
  >([])
  const [errorCount, setErrorCount] = useState(0)
  const [successCount, setSuccessCount] = useState(0)

  const handleFlip = async (
    id: CardProps['uniqueId'],
    uuid: CardProps['uniqueId']
  ) => {
    if (flippedCards.length >= 2) return

    const updatedFlippedCards = [...flippedCards, { id: uuid, uniqueId: id }]

    setFlippedCards(updatedFlippedCards)

    if (updatedFlippedCards.length === 2) {
      const [firstCard, secondCard] = updatedFlippedCards
      if (firstCard.id === secondCard.id) {
        setMatchedCards([...matchedCards, { id: firstCard.id }])

        setSuccessCount(successCount + 1)
      } else {
        setErrorCount(errorCount + 1)
      }

      setTimeout(() => {
        setFlippedCards([])
      }, 1000)
    }
  }

  const resetGame = () => {
    setFlippedCards([])
    setMatchedCards([])
    setErrorCount(0)
    setSuccessCount(0)
  }

  return (
    <CardContext.Provider
      value={{
        flippedCards,
        matchedCards,
        errorCount,
        successCount,
        handleFlip,
        resetGame,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export const useCardContext = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider')
  }
  return context
}
