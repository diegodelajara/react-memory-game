'use client'
import { useCardContext } from '@/context/CardContext'
import useLocalStorage from '@/utils/useLocalStorage'
import React from 'react'

export default function Results() {
  const { successCount, errorCount } = useCardContext()
  const [getValue] = useLocalStorage<string>('user', 'Guest')

  return (
    <header className="memory-game__status">
      <h1 className="memory-game__status-item memory-game__status-item--welcome">
        Welcome, {getValue}
      </h1>
      <p className="memory-game__status-item memory-game__status-item--incorrect">
        Errors: {errorCount}
      </p>
      <p className="memory-game__status-item memory-game__status-item--correct">
        Successes: {successCount}
      </p>
    </header>
  )
}
