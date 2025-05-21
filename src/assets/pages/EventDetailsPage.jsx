import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
        <div className="event-details">
            <div className='details-event-image'>{event.image}</div>
            <h1>{event.title}</h1>
            <div className='details-event-date'>{event.eventDate && formatDateToReadable(event.eventDate)}</div>
            <div className='details-event-title'>{event.title}</div>
            <div className='details-event-location'><i className="fa-solid fa-location-dot"></i>{event.location}</div>
            <Link to={`/events/bookning/${id}`}>Book Event</Link>
        </div>
    )
}

export default EventDetailsPage