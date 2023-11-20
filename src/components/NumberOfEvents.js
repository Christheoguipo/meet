import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberOfEvents(value);

    let errorText;
    if (value <= 0 || isNaN(value)) {
      errorText = "Invalid number of events.";
    }
    else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
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