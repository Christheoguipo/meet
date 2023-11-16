import { useState } from "react";

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
      <button className="details-btn" onClick={handleItemClicked}>{showDetails ? 'hide details' : 'show details'}</button>
    </li>
  );
};

export default Event;