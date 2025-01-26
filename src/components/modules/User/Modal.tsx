'use client'
import useLocalStorage from '@/utils/useLocalStorage'
import React, { useState } from 'react'

export default function NameModal() {
  const [name, setName] = useState('')
  const [, setUserName] = useLocalStorage<string>('user', 'Guest')

  const handleSave = () => {
    if (name.trim()) {
      setUserName(name)
    } else {
      alert('Please enter a valid name.')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-80">
          <h2 className="text-xl font-semibold mb-4">Enter Your Name</h2>
          <input
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
