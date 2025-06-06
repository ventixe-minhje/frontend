import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const BookingEvent = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({ eventId: id, firstName: '', lastName: '', email: '', streetName: '', postalCode: '', city: '', ticketQuantity: 1 })
    const [bookingConfirmed, setBookingConfirmed] = useState(false)
    
    useEffect(() => {
        getEvent()
    }, [])

    const getEvent = async () => {
        try {
            const res = await fetch(`https://mh-eventservice-a7edfverf8f8cvd8.swedencentral-01.azurewebsites.net/api/events/${id}`)
            if (!res.ok) throw new Error("Failed to get event")

                const data = await res.json()
                setEvent(data.result)
            } catch (err) {
                console.error(err)
            } 
        }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch(`https://mh-bookingservice-gra5adfcdyezdqbw.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData)
            })
    
            if (!res.ok) {
                console.error("Booking failed")
            }
            else {
                console.log("Booking succeeded")
                 setBookingConfirmed(true)
                setTimeout(() => navigate('/'), 4000) 
            }
        }
        catch (err) {
            console.error("Error submitting", err)
        }
    }

  return (
     <div className='portal-wrapper'>
        <Header />
        <Nav />
        <main>

        {/* Help tagen from ChatGPT 4.0 to get the form to be replaced with a confirmation when the booking succeeded. */}
    <section className='booking-page'>
        <div className='booking-form'>
            {!bookingConfirmed ? (
                <>
                    <h1>Book Event - {event.title}</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='form-input'>
                            <label>First Name</label>
                            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} required placeholder='First Name'/>
                        </div>
                        <div className='form-input'>
                            <label>Last Name</label>
                            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} required placeholder='Last Name'/>
                        </div>
                        <div className='form-input'>
                            <label>Email</label>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Email'/>
                        </div>
                        <div className='form-input'>
                            <label>Street Name</label>
                            <input type='text' name='streetName' value={formData.streetName} onChange={handleChange} required placeholder='Street Name'/>
                        </div>
                        <div className='form-input'>
                            <label>Postal Code</label>
                            <input type='text' name='postalCode' value={formData.postalCode} onChange={handleChange} required placeholder='Postal Code'/>
                        </div>
                        <div className='form-input'>
                            <label>City</label>
                            <input type='text' name='city' value={formData.city} onChange={handleChange} required placeholder='City'/>
                        </div>
                        <button className='btn-submit' type='submit'>Book now</button>
                    </form>
                </>
            ) : (
            <div className="booking-confirmation fade-in">
                <h4>Thank you for your booking!</h4>
                <p>We're looking forward to seeing you at the event - hope you have a great time.</p>
                <p><i>Hang tight - we're sending you back to the homepage in a sec.</i></p>
            </div>
            )} 
        </div> 
    </section>
        </main>
        <Footer />
    </div>
  )
}

export default BookingEvent