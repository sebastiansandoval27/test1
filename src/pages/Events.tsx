import React, { useContext } from 'react'
import { EventsContext } from '../context/EventsContext'
import Card from '@mui/material/Card'
import EventElement from '../components/EventElement'

const Events = () => {
  const { events } = useContext(EventsContext)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {events?.length > 0 &&
        events.map(event => <EventElement key={event.id} event={event} />)}
    </div>
  )
}

export default Events
