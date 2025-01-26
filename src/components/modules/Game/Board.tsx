'use client'
import React, { Fragment } from 'react'
import Results from './Results'
import { BoardProps } from '@/types/Card'
import Card from '../../common/Card'
import Image from 'next/image'
import User from '../User'
import useLocalStorage from '@/utils/useLocalStorage'

export default function Board({ shuffledImages }: BoardProps) {
  const [getValue] = useLocalStorage('user', '')
  return (
    <>
      {!getValue ? (
        <User />
      ) : (
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
      )}
    </>
  )
}
