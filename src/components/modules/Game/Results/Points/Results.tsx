'use client'
import { useCardContext } from '@/context/CardContext'
import useLocalStorage from '@/utils/useLocalStorage'
import React from 'react'

export default function Results() {
  const { successCount, errorCount } = useCardContext()
  const [getValue] = useLocalStorage<string>('user', 'Guest')

  return (
    <header className="memory-game__status flex flex-col gap-8 justify-center items-center mt-8">
      <h1 className="memory-game__status-item memory-game__status-item--welcome text-2xl font-bold">
        Welcome, {getValue}
      </h1>
      <div className="memory-game__status-item flex gap-10">
        <p className="memory-game__status-item memory-game__status-item--incorrect text-red-700">
          Errors: {errorCount}
        </p>
        <p className="memory-game__status-item memory-game__status-item--correct text-green-700">
          Successes: {successCount}
        </p>
      </div>
    </header>
  )
}
