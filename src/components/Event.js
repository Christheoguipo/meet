import { useState } from "react";
import Button from 'react-bootstrap/Button';

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  const handleItemClicked = (event) => {
    setShowDetails(!showDetails);
  };

  return (
    <li className="event">
      <div>{event.summary}</div>
      <div>{event.created}</div>
      <div>{event.location}</div>
      <div className={showDetails ? "details" : "hide-details"}>{event.description}</div>
      <Button variant="outline-primary" className="details-btn" onClick={handleItemClicked}>{showDetails ? 'hide details' : 'show details'}</Button>
    </li>
  );
};

export default Event;