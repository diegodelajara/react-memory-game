'use client'
import { useCardContext } from '@/context/CardContext'
import useLocalStorage from '@/utils/useLocalStorage'
import React from 'react'

export default function Results() {
  const { successCount, errorCount } = useCardContext()
  const [getValue] = useLocalStorage<string>('user', 'Guest')

  return (
    <header className="mb-6 text-center">
      <h1 className="text-2xl font-bold">Welcome, {getValue}</h1>
      <div className="mt-4">
        <p className="text-gray-700">Errors: {errorCount}</p>
        <p className="text-gray-700">Successes: {successCount}</p>
      </div>
    </header>
  )
}
