import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/pages/EventPage'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import BookingPage from './assets/pages/BookingPage'
import SignUpPage from './assets/pages/SignUpPage'
import LoginPage from './assets/pages/LoginPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />

        <Route path='/' element={<EventPage />} />
        <Route path='/events/:id' element={<EventDetailsPage />} />
        <Route path='/booking/:id' element={<BookingPage />} />
      </Routes>
    </>
  )
}

export default App
