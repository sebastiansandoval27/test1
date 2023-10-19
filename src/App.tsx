import './App.css'
import AppRouter from './routes/AppRouter'
import { EventsProvider } from './context/EventsContext'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <EventsProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </EventsProvider>
    </>
  )
}

export default App
