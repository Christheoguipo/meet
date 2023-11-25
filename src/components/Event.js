import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

const Event = ({ event }) => {

  // const [showDetails, setShowDetails] = useState(false);

  // const handleItemClicked = (event) => {
  //   setShowDetails(!showDetails);
  // };

  const formattedCreatedDate = new Date(event.created).toLocaleDateString('en-GB');

  return (
    // <li className="event">
    //   <div>{event.summary}</div>
    //   <div>{event.created}</div>
    //   <div>{event.location}</div>
    //   <div className={showDetails ? "details" : "hide-details"}>{event.description}</div>
    //   <Button variant="outline-primary" className="details-btn" onClick={handleItemClicked}>{showDetails ? 'hide details' : 'show details'}</Button>
    // </li>

    <Accordion.Item eventKey={event.id} role="listitem" className="event">
      <Accordion.Header>
        {/* <div className="d-flex">
          <div className="mr-auto">{event.summary}</div>
          <div>{event.location} | {event.created}</div>
        </div> */}

        <span className="event-summary">{event.summary}</span>
        <span className="event-meta">{event.location} | {formattedCreatedDate}</span>
      </Accordion.Header>
      <Accordion.Body>
        {event.description}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Event;