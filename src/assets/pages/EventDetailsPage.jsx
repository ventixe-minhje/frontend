import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import TermsAndConditions from '../components/TermsAndConditions'

const EventDetailsPage = () => {
    const {id} = useParams()
    
    const [event, setEvent] = useState({})
    const getEvents = async () => {
        const res = await fetch(`https://mh-eventservice-a7edfverf8f8cvd8.swedencentral-01.azurewebsites.net/api/events/${id}`)
        
        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }
    
    useEffect(() => {
        getEvents()
    }, [])
    
    const formatDateToReadable = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    }).format(date);
    
    const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
    });

  return `${formattedDate} - ${formattedTime}`;
};

    return (
       <div className='portal-wrapper'>
        <Header />
        <Nav />
        <main>
            <section className='event-details-page'>
                <div className='event-details-card'>
                    <div className='event-details-image'>{event.image}</div>
                    <h1 className='event-details-title'>{event.title}</h1>

                <div className="event-details-info">
                    <div className='event-details-date'><i className="fa-solid fa-calendar"></i>{event.eventDate && formatDateToReadable(event.eventDate)}</div>
                    <div className='event-details-location'><i className="fa-solid fa-location-dot"></i>{event.location}</div>
                    <div className='event-details-price'>$70</div>
                </div>

                <div className='about-event'>
                    <div className='divider'></div> 
                    <h5>About Event</h5>
                    <div className='event-details-description'>{event.description}</div>
                </div>
                </div>
            
            <div className='event-packages'>
                <h4>Packages</h4>

                <div className='package'>
                  <h4 className='package-title'>Standard Package</h4>
                    <div className='package-info'>
                        <p><i className="fa-solid fa-circle-check"></i>Seating</p>
                        <p><i className="fa-solid fa-circle-check"></i>Prime View</p> 
                    </div>
                </div>
                <Link className='booking-btn' to={`/booking/${id}`}>Book Event</Link>
            </div>

            <TermsAndConditions />
            
        </section>
        </main>
        <Footer />
    </div>
        
        )
}

export default EventDetailsPage