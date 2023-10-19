import React, { useContext, useEffect } from 'react'
import { EventsContext } from '../context/EventsContext'
import { TicketMasterAPI } from '../api/TicketMasterAPI'

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  const context = useContext(EventsContext)

  const getData = async () => {
    try {
      const size = 10
      const response = await TicketMasterAPI.get(`/events.json?size=${size}`)
      if (response.status === 200) {
        context.setEvents(response?.data?._embedded?.events)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return <>{children}</>
}

export default Layout
