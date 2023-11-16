import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events: </label>
      <input
        type="number"
        value={numberOfEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;