import { useState, useEffect } from 'react';
import Layout from '@/components/layout'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'
import loadICS from '../lib/loadics'

export default function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log('fetching events');
    async function fetchEvents() { 
      let loadedEvents = await loadICS('http://localhost:3000/data/calendar.ics');
      setEvents(loadedEvents);
    }
    fetchEvents();
    console.log(events);
  }, []);

  return (
    <Layout>
      <div className='calendar-container'>
        <FullCalendar
          plugins={[
            resourceTimelinePlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin
          ]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
          }}
          initialView='resourceTimelineWeek'
          nowIndicator={true}
          editable={true}
          selectable={true}
          selectMirror={true}
          events={events}
        />
      </div>
    </Layout>
  );
}

