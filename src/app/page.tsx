import MemoryGame from '@/components/MemoryGame'
import { CardProvider } from '@/context/CardContext'
import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <CardProvider>
        <MemoryGame />
      </CardProvider>
    </main>
  )
}
