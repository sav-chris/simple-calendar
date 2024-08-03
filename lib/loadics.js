import ICAL from 'ical.js';

async function loadICS(url) {
  try 
  {
    const response = await fetch(url);
    const icsText = await response.text();     
    const jcalData = ICAL.parse(icsText);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');
    console.log("vevents:");
    console.log(vevents); 
    console.log(typeof []); 
    
    return vevents.map(event => ({
      title: event.getFirstPropertyValue('summary'),
      start: event.getFirstPropertyValue('dtstart').toJSDate(),
      end: event.getFirstPropertyValue('dtend').toJSDate()
    }));
    
  } catch (error) {
    console.error('Error loading ICS file:', error);
    return [];
  }
}


export default loadICS;

