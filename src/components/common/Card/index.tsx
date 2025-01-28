'use client'
import React from 'react'
import { useCardContext } from '@/context/CardContext'
import { CardProps } from '@/types/Card'
import { motion } from 'motion/react'
import './styles.css'

export default function Card({ url, uuid, uniqueId, title }: CardProps) {
  const { handleFlip, flippedCards, matchedCards } = useCardContext()
  // const isMatchedAux = [
  //   {
  //     id: '85062d45-c6a8-4856-8970-80d375466e96',
  //   },
  //   {
  //     id: '926b5b4b-89bc-4525-9190-e6552a3dbf81',
  //   },
  //   {
  //     id: 'bee96e43-be3a-4eb1-b718-db254f16579c',
  //   },
  //   {
  //     id: '4f9ab23f-eeb4-458d-8239-02a8a397e5bc',
  //   },
  //   {
  //     id: '887d5591-0434-4788-8894-f100ad16d2fd',
  //   },
  //   {
  //     id: '7a1d61bd-46cf-4455-a74d-f7277d95a5f3',
  //   },
  //   {
  //     id: '7067ed9b-1c30-4408-bc98-368a7b28992a',
  //   },
  //   {
  //     id: '60e5efc5-9b9f-420d-b9d6-2144450b3337',
  //   },
  //   {
  //     id: 'db96aeaa-094d-4e17-88b7-c9cd3fd9690b',
  //   },
  //   {
  //     id: '7851bd9f-ec35-4059-a160-281a699b4dc8',
  //   },
  //   {
  //     id: '93179f8f-8835-4145-8002-c6d83bfc4553',
  //   },
  //   {
  //     id: 'c0e705cb-e119-494e-919b-03a400dbc26f',
  //   },
  //   {
  //     id: 'b1831815-23ce-4f7a-bc54-34a26aba30ae',
  //   },
  //   {
  //     id: '14174087-670c-4152-ab44-f1701b0d98b1',
  //   },
  //   {
  //     id: '70e4725b-32b2-4386-ab3c-579ccf4d0e6b',
  //   },
  //   {
  //     id: 'e9745099-cb13-4612-ad91-91593ca43ec3',
  //   },
  //   {
  //     id: 'd9cfeeaf-df85-468a-aa7a-344151270d56',
  //   },
  //   {
  //     id: '575ce866-3dab-463c-b8ce-ff04dd9a5425',
  //   },
  //   {
  //     id: 'bcc5cb0d-2593-46fd-9250-12b5e04f63e2',
  //   },
  // ]
  // const isFlippedAux = [
  //   {
  //     id: '85062d45-c6a8-4856-8970-80d375466e96',
  //     uniqueId: '85062d45-c6a8-4856-8970-80d375466e96',
  //   },
  //   {
  //     id: '926b5b4b-89bc-4525-9190-e6552a3dbf81',
  //     uniqueId: '926b5b4b-89bc-4525-9190-e6552a3dbf81',
  //   },
  //   {
  //     id: 'bee96e43-be3a-4eb1-b718-db254f16579c',
  //     uniqueId: 'bee96e43-be3a-4eb1-b718-db254f16579c',
  //   },
  //   {
  //     id: '4f9ab23f-eeb4-458d-8239-02a8a397e5bc',
  //     uniqueId: '4f9ab23f-eeb4-458d-8239-02a8a397e5bc',
  //   },
  //   {
  //     id: '887d5591-0434-4788-8894-f100ad16d2fd',
  //     uniqueId: '887d5591-0434-4788-8894-f100ad16d2fd',
  //   },
  //   {
  //     id: '7a1d61bd-46cf-4455-a74d-f7277d95a5f3',
  //     uniqueId: '7a1d61bd-46cf-4455-a74d-f7277d95a5f3',
  //   },
  //   {
  //     id: '7067ed9b-1c30-4408-bc98-368a7b28992a',
  //     uniqueId: '7067ed9b-1c30-4408-bc98-368a7b28992a',
  //   },
  //   {
  //     id: '60e5efc5-9b9f-420d-b9d6-2144450b3337',
  //     uniqueId: '60e5efc5-9b9f-420d-b9d6-2144450b3337',
  //   },
  //   {
  //     id: 'db96aeaa-094d-4e17-88b7-c9cd3fd9690b',
  //     uniqueId: 'db96aeaa-094d-4e17-88b7-c9cd3fd9690b',
  //   },
  //   {
  //     id: '7851bd9f-ec35-4059-a160-281a699b4dc8',
  //     uniqueId: '7851bd9f-ec35-4059-a160-281a699b4dc8',
  //   },
  //   {
  //     id: '93179f8f-8835-4145-8002-c6d83bfc4553',
  //     uniqueId: '93179f8f-8835-4145-8002-c6d83bfc4553',
  //   },
  //   {
  //     id: 'c0e705cb-e119-494e-919b-03a400dbc26f',
  //     uniqueId: 'c0e705cb-e119-494e-919b-03a400dbc26f',
  //   },
  //   {
  //     id: 'b1831815-23ce-4f7a-bc54-34a26aba30ae',
  //     uniqueId: 'b1831815-23ce-4f7a-bc54-34a26aba30ae',
  //   },
  //   {
  //     id: '14174087-670c-4152-ab44-f1701b0d98b1',
  //     uniqueId: '14174087-670c-4152-ab44-f1701b0d98b1',
  //   },
  //   {
  //     id: '70e4725b-32b2-4386-ab3c-579ccf4d0e6b',
  //     uniqueId: '70e4725b-32b2-4386-ab3c-579ccf4d0e6b',
  //   },
  //   {
  //     id: 'e9745099-cb13-4612-ad91-91593ca43ec3',
  //     uniqueId: 'e9745099-cb13-4612-ad91-91593ca43ec3',
  //   },
  //   {
  //     id: 'd9cfeeaf-df85-468a-aa7a-344151270d56',
  //     uniqueId: 'd9cfeeaf-df85-468a-aa7a-344151270d56',
  //   },
  //   {
  //     id: '575ce866-3dab-463c-b8ce-ff04dd9a5425',
  //     uniqueId: '575ce866-3dab-463c-b8ce-ff04dd9a5425',
  //   },
  //   {
  //     id: 'bcc5cb0d-2593-46fd-9250-12b5e04f63e2',
  //     uniqueId: 'bcc5cb0d-2593-46fd-9250-12b5e04f63e2',
  //   },
  // ]
  const isFlipped = flippedCards.some((card) => card.uniqueId === uniqueId)
  const isMatched = matchedCards.some((card) => card.id === uuid)

  console.log(flippedCards)

  return (
    <>
      <motion.div
        className={`memory-game__card card ${
          isFlipped || isMatched ? 'card--flipped' : ''
        }`}
        key={uniqueId}
        onClick={() => handleFlip(uniqueId!, uuid)}
        whileTap={{ scale: 0.95 }}
      >
        <div className="card__inner relative w-full h-32">
          <div className="card__back absolute inset-0 backface-hidden transform rotate-y-180">
            <span
              className="text-xl font-bold"
              style={{ backgroundImage: `url(${url})` }}
            >
              {title}
            </span>
          </div>
          <div
            className="card__front absolute inset-0 backface-hidden bg-gray-200 flex items-center justify-center  bg-cover bg-center"
            style={{ backgroundImage: `url(${url})` }}
          ></div>
        </div>
      </motion.div>
    </>
  )
}
