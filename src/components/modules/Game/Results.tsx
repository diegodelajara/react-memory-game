'use client'
import { useCardContext } from '@/context/CardContext'
import React from 'react'

export default function Results() {
  const { successCount, errorCount } = useCardContext()

  return (
    <header className="mb-6 text-center">
      <h1 className="text-2xl font-bold">Welcome, Diego!</h1>
      <div className="mt-4">
        <p className="text-gray-700">Errors: {errorCount}</p>
        <p className="text-gray-700">Successes: {successCount}</p>
      </div>
    </header>
  )
}
