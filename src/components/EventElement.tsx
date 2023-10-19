import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import React from 'react'
import { EventElement } from '../interfaces/event.interface'
import { useNavigate } from 'react-router-dom'

interface Props {
  event: EventElement
}

const EventElementCard = ({ event }: Props) => {
  const router = useNavigate()

  const handleClick = () => {
    router(`/event/${event.id}`)
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {event?.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {event?.locale}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default EventElementCard
