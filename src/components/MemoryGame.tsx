import React, { Fragment } from 'react'
import Image from 'next/image'

import Card from './Card'
import Button from './Button'
import { AnimalProps } from '@/types/Card'

const getUserName = (): string => {
  const storedName =
    typeof window !== 'undefined' ? localStorage.getItem('userName') : null
  if (storedName) {
    return storedName
  } else {
    // const name = prompt("Please enter your name:");
    // if (name && typeof window !== "undefined") {
    //   localStorage.setItem("userName", name);
    //   return name;
    // }
    return 'Player'
  }
}

export async function MemoryGame() {
  const userName = getUserName()
  const response =
    (await fetch(`https://challenge-uno.vercel.app/api/images`)) || []
  const data = (await response.json()) as AnimalProps[]
  const duplicatedImages = [...data, ...data]
  const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-bold">Welcome, {userName}!</h1>
        <div className="mt-4">
          <p className="text-gray-700">Errors: 0</p>
          <p className="text-gray-700">Successes: 0</p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.map((card) => (
          <Fragment key={card.id}>
            <Card
              className={`relative w-24 h-32 bg-#242439-500`}
              id={card.id}
              title={card.title}
              image={''}
            >
              <Image
                src={card.url}
                alt="Animal"
                width={200}
                height={200}
                className="rounded-md "
              />
            </Card>
          </Fragment>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="text-green-600 text-xl font-bold">
          Congratulations! Start playing to track your scores!
        </p>
        <Button className="mt-4" onClick={() => window.location.reload()}>
          Play Again
        </Button>
      </div>
    </div>
  )
}

export default MemoryGame
