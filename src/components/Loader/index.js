import React from 'react'
import { SquareLoading, SquareInside } from './styles'

export const Loader = () => {
  return (
    <SquareLoading>
      <SquareInside />
      <SquareInside />
      <SquareInside />
    </SquareLoading>
  )
}