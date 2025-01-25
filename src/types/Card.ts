export type CardProps = {
  children: React.ReactNode
  className?: string
  id: string
  title: string
  image: string
}
export type CardContentProps = {
  children: React.ReactNode
  className?: string
  title: string
}
export type AnimalProps = {
  id: string
  url: string
  title: string
  flipped: boolean
}
export type CardContextProps = {
  flippedCards: Array<{ id: AnimalProps['id'] }>
  matchedCards: AnimalProps['id'][]
  errorCount: number
  successCount: number
  handleFlip: (id: AnimalProps['id']) => void
  resetGame: () => void
}

export type OriginalCardProps = {
  url: string
  uuid: string
  title: string
  content_type: string
}
