import React, { Fragment } from 'react'
import Image from 'next/image'

import Card from './Card'
import Button from './Button'
import { OriginalCardProps } from '@/types/Card'
import { useCardContext } from '@/context/CardContext'
import Results from './Results'

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
  const data = (await response.json()) as OriginalCardProps[]
  const duplicatedImages = [...data, ...data]
  const shuffledImages = duplicatedImages.sort(() => Math.random() - 0.5)

  const duplicateCardsWithUniqueIds = () => {
    return shuffledImages.flatMap((card) => [
      { ...card, uniqueId: `${card.uuid}-A` },
      { ...card, uniqueId: `${card.uuid}-B` },
    ])
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Results />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {duplicateCardsWithUniqueIds().map((card, index) => (
          <Fragment key={index}>
            <Card
              className={`relative w-24 h-32 bg-#242439-500`}
              id={card.uuid}
              title={card.title}
              image={''}
              uniqueId={card.uniqueId}
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
