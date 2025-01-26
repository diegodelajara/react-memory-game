import React, { Fragment } from 'react'
import Results from '../modules/Game/Results'
import { BoardProps } from '@/types/Card'
import Card from './Card'
import Image from 'next/image'

export default function Board({ shuffledImages }: BoardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Results />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {shuffledImages.map((card, index) => (
          <Fragment key={index}>
            <Card
              className={`relative w-24 h-32 bg-#242439-500`}
              id={card.uuid}
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
    </div>
  )
}
