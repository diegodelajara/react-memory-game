export type OriginalCardProps = {
  url: string
  uuid: string
  title: string
  contentType?: string
}

export type CardProps = OriginalCardProps & {
  uniqueId?: string
}
export type AnimalProps = {
  id: string
  url: string
  title: string
  flipped: boolean
}
export type CardContextProps = {
  flippedCards: Array<{
    id: CardProps['uniqueId']
    uniqueId?: CardProps['uniqueId']
  }>
  matchedCards: {
    id: CardProps['uniqueId']
  }[]
  errorCount: number
  successCount: number
  handleFlip: (id: CardProps['uniqueId'], uuid: CardProps['uniqueId']) => void
  resetGame: () => void
}

export type BoardProps = {
  shuffledImages: CardProps[]
}
