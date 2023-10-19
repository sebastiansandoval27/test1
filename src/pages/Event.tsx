import React, { useContext, useEffect, useState } from 'react'
import { EventsContext } from '../context/EventsContext'
import { useParams } from 'react-router-dom'
import EventElementCard from '../components/EventElement'
import { EventElement } from '../interfaces/event.interface'

const Event = () => {
  const { id } = useParams()
  const [eventItem, setEventItem] = useState({} as EventElement)
  const { getEventById } = useContext(EventsContext)

  useEffect(() => {
    if (id) {
      const response = getEventById(id)
      if (response) {
        setEventItem(response)
      }
    }
  }, [id])

  return (
    <>
      <EventElementCard event={eventItem} />
    </>
  )
}

export default Event
