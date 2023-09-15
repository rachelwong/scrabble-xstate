import React from 'react'

type LetterProps = {
  char: string
}

const Letter = ({ char}:LetterProps) => {
  return (
    <>
      <div className="border d-flex justify-content-center align-items-center py-3 px-3 mx-2">
        <h1>{char}</h1>
      </div>
    </>
  )
}

export default Letter