'use client'
import React, { createContext, useContext, useState } from 'react'
import { AnimalProps, CardContextProps } from '@/types/Card'

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

  // Función para manejar el volteo de las cartas
  const handleFlip = async (id: AnimalProps['id']) => {
    // Si ya hay 2 cartas volteadas, no permitir más acciones
    if (flippedCards.length >= 2) return

    const updatedFlippedCards = [...flippedCards, { id }]

    setFlippedCards(updatedFlippedCards)

    if (updatedFlippedCards.length === 2) {
      const [firstCard, secondCard] = updatedFlippedCards
      if (firstCard.id === secondCard.id) {
        setMatchedCards([...matchedCards, id])

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

// Hook para usar el contexto
export const useCardContext = () => {
  const context = useContext(CardContext)
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider')
  }
  return context
}
