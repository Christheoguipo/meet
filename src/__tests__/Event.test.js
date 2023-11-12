import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from "../api";
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {

  let EventComponent;
  let allEvents;
  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  })

  test('renders event title', () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
  });

  test('renders event show or hide details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  });

  test('event details are collapsed by default', () => {
    expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
  });

  test('show details section when the user clicks the "show details" button', async () => {
    const user = userEvent.setup();
    const showHideEventDetails = EventComponent.queryByText('show details');
    await user.click(showHideEventDetails);
    expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
  });

  test('collapse details section when the user clicks the "hide details" button', async () => {
    const user = userEvent.setup();
    const showHideEventDetails = EventComponent.queryByText('hide details');
    await user.click(showHideEventDetails);
    expect(EventComponent.queryByText('show details')).toBeInTheDocument();

  });
});