import icalendar
from pathlib import Path
from icalendar import Calendar, Event
from datetime import datetime
from pytz import UTC # timezone

def read_events():
    events = []
    ics_path = Path("./public/data/calendar2.ics")

    with ics_path.open(encoding="utf8") as f:
        calendar = icalendar.Calendar.from_ical(f.read())
    for event in calendar.walk('VEVENT'):
        events.append(event)

    return events


def write_events(events):
    cal = Calendar()
    cal.add('version', '2.0')

    for event in events:
        new_event = Event()

        enddt = event.get("dtend")
    
        new_event.add('summary', event.get("SUMMARY"))
        new_event.add('dtstart', event.get("dtstart").dt)
        
        if enddt != None:
            new_event.add('dtend', enddt.dt)
        else:
            new_event.add('dtend', event.get("dtstamp").dt)

        new_event.add('dtstamp', event.get("dtstamp").dt)

        cal.add_component(new_event)

    f = open("./public/data/processed_calendar.ics", 'wb')
    f.write(cal.to_ical())
    f.close()

if __name__ == "__main__":
    events = read_events()
    write_events(events)
