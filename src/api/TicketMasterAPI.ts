import axios from 'axios'

const API = import.meta.env.VITE_TICKET_MASTER_API
const KEY = import.meta.env.VITE_TICKET_MASTER_KEY

export const TicketMasterAPI = axios.create({
  baseURL: API || 'https://app.ticketmaster.com/discovery/v2',
  params: {
    apikey: KEY || '',
    countryCode: 'US',
    sort: 'date,asc',
  },
})
