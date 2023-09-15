import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import Letter from './Letter'

const Scrabble = () => {
  const testLetter = 'HELLO'.toUpperCase().split("")
  return (
    <Container>
      <Card className="py-3 px-3">
        <div className="d-flex justify-content-start align-items-center">
          {testLetter.map((char, charIndex) => (<Letter key={charIndex + char} char={char} />))}
        </div>
      </Card>
      <div className="d-flex flex-row mt-3">
        <Button variant="success" size="sm" className="mr-2">New Word</Button>
        <Button variant="warning" size="sm" className="mr-2">Submit Word</Button>
        <Button variant="danger" size="sm" className="mr-2">Remove letter</Button>
      </div>
    </Container>
  )
}

export default Scrabble