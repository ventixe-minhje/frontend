import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const res = await fetch("https://mh-eventservice-a7edfverf8f8cvd8.swedencentral-01.azurewebsites.net/api/events")

        if (res.ok) {
            const response = await res.json()
            setEvents(response.result)
        }
    }
    useEffect(() => {
        getEvents()
    }, [])


  return (
    <section id="events">
        {
            events.map(event => (<EventItem key={event.id} item={event} />))
        }
    </section>
  )
}

export default EventList