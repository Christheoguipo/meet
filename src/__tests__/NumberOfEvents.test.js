import { render, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents"
import App from "../App";
import { getEvents } from "../api";


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsComponent;
  let numberOfEventsTextbox;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }} />);
    numberOfEventsTextbox = NumberOfEventsComponent.queryByRole('spinbutton');
  });

  test('renders textbox', () => {
    expect(numberOfEventsTextbox).toBeInTheDocument();
  });

  test('default value of events is 32', () => {
    expect(numberOfEventsTextbox.value).toBe('32');
  });

  test('textbox should only allow numbers', async () => {
    const user = userEvent.setup();
    await user.type(numberOfEventsTextbox, '{backspace}{backspace}a');
    expect(numberOfEventsTextbox.value).toBe('');
  })

  test('textbox value changes according to user input', async () => {
    const user = userEvent.setup();
    await user.type(numberOfEventsTextbox, '{backspace}{backspace}10');
    expect(numberOfEventsTextbox.value).toBe('10');
  });
});

describe('<NumberOfEvents /> integration', () => {
  test('Filters the number of events shown equal to the entered number', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
    const numberOfEventsTextbox = within(NumberOfEventsDOM).queryByRole('spinbutton');

    await user.type(numberOfEventsTextbox, '{backspace}{backspace}1');

    const EventListDOM = AppDOM.querySelector('#event-list');
    const eventListItems = within(EventListDOM).queryAllByRole('listitem');

    const allEvents = await getEvents();
    const filteredEvents = allEvents.slice(0, numberOfEventsTextbox.value);

    expect(eventListItems.length).toBe(filteredEvents.length);
  });
});