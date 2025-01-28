import React from 'react'
import Confetti from 'react-confetti'

type VictoryCelebrationProps = {
  isVisible: boolean
  onRestart: () => void
}

const VictoryCelebration: React.FC<VictoryCelebrationProps> = ({
  isVisible,
  onRestart,
}) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Mensaje de victoria */}
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">¡Felicidades, ganaste!</h1>
        <p className="text-lg mb-6">Has completado el juego exitosamente.</p>
        <button
          onClick={onRestart}
          className="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-600 transition"
        >
          Jugar de nuevo
        </button>
      </div>
    </div>
  )
}

export default VictoryCelebration
