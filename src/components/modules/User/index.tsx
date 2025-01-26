'use client'
import NameModal from '@/components/modules/User/Modal'
import useLocalStorage from '@/utils/useLocalStorage'
import React from 'react'

export default function User() {
  const [getValue] = useLocalStorage('user', '')

  return !getValue && <NameModal />
}
