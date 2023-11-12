import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import NumberOfEvents from "../components/NumberOfEvents"


describe('<NumberOfEvents /> component', () => {

  let NumberOfEventsComponent;
  let numberOfEventsTextbox;

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
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