import { Button,Container } from '@mui/material'
import React from 'react'

function Layout() {
  return (
    <Container>
        <Button variant ='outlined'>
            <h1>ROCK PAPER SCISSORS</h1>
            <Button>SCORE</Button>
            <Span>count</Span>
        </Button>
    </Container>
  )
}

export default Layout