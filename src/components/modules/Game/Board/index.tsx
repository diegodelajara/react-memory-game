'use client'
import React, { Fragment } from 'react'
import Results from '../Results/Points/Results'
import { BoardProps } from '@/types/Card'
import Card from '../../../common/Card'
import User from '../../User'
import useLocalStorage from '@/utils/useLocalStorage'
import './styles.css'
import VictoryCelebration from '../Results/Points/Congratulations'
import { onReloadPage } from '@/utils'
import { useCardContext } from '@/context/CardContext'

export default function Board({ shuffledImages }: BoardProps) {
  const [getValue] = useLocalStorage('user', '')
  const { successCount } = useCardContext()

  return (
    <div className="memory-game__container w-full min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!getValue ? (
        <User />
      ) : (
        <div className="memory-game__board w-full">
          <Results />

          <div className="memory-game__board--grid grid grid-cols-2 lg:grid-cols-4 gap-4">
            {shuffledImages.map((card, index) => (
              <Fragment key={index}>
                <Card
                  uuid={card.uuid}
                  uniqueId={card.uniqueId}
                  title={card.title}
                  url={card.url}
                />
              </Fragment>
            ))}
          </div>
        </div>
      )}
      <VictoryCelebration
        isVisible={shuffledImages.length / 2 === successCount}
        onRestart={onReloadPage}
      />
    </div>
  )
}
