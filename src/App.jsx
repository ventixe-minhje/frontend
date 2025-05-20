import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingPage from './assets/pages/BookingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<EventPage />} />
        <Route path='/events/:id' element={<EventDetailsPage />} />
        <Route path='/events/bookning/:id' element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App
