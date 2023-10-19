import { createContext, useState } from 'react'
import { EventElement } from '../interfaces/event.interface'

interface EventsInitialState {
  events: EventElement[]
  setEvents: (events: EventElement[]) => void
  getEventById: (id: string) => EventElement | null
}

export const EventsContext = createContext({} as EventsInitialState)

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const EventsProvider = ({ children }: Props) => {
  const [events, setEvents] = useState<EventElement[]>([])

  const getEventById = (id: string) => {
    return events.find(event => event.id === id) || null
  }

  return (
    <>
      <EventsContext.Provider
        value={{
          events,
          setEvents,
          getEventById,
        }}
      >
        {children}
      </EventsContext.Provider>
    </>
  )
}
