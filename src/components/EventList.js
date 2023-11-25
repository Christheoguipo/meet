import Accordion from 'react-bootstrap/Accordion';
import Event from "./Event";

const EventList = ({ events }) => {
  return (
    // <ul id="event-list" className="mt-2">
    //   {events ? events.map((event) => <Event key={event.id} event={event} />) : null}
    // </ul>
    <Accordion id="event-list" role="list">
      {events ? events.map((event) => <Event key={event.id} event={event} />) : null}
    </Accordion>
  );
}

export default EventList;