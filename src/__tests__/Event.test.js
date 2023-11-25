import { render, screen, within, waitFor } from '@testing-library/react';
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
    // expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument();
    const accordionButton = EventComponent.queryByRole('listitem').querySelector('.accordion-button');
    expect(accordionButton.textContent).toContain(new Date(allEvents[0].created).toLocaleDateString('en-GB'));
  });

  test('renders event location', () => {
    // expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    const accordionButton = EventComponent.queryByRole('listitem').querySelector('.accordion-button');
    expect(accordionButton.textContent).toContain(allEvents[0].location);
  });

  // test('renders event show or hide details button with the title (show details)', () => {
  //   expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  // });

  test('event details are collapsed by default', () => {
    // expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
    expect(EventComponent.queryByRole('listitem').querySelector('.collapsed')).toBeInTheDocument();

  });

  // test('show details section when the user clicks the "show details" button', async () => {
  test('show details section when the user clicks the Accordion button while not expanded', async () => {
    const user = userEvent.setup();
    // const showHideEventDetails = EventComponent.queryByText('show details');

    const showHideEventDetails = EventComponent.queryByRole('listitem').querySelector('button');
    expect(showHideEventDetails).not.toBeNull();
    await user.click(showHideEventDetails);
    // expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    // expect(within(listitem).queryByRole('button', { expanded: true })).toBeInTheDocument();
    expect(EventComponent.queryByRole('listitem').querySelector('.accordion-body')).toBeInTheDocument();
  });

  // test('collapse details section when the user clicks the "hide details" button', async () => {
  // test('collapse details section when the user clicks the Accordion button while expanded', async () => {
  //   const user = userEvent.setup();
  //   // const showHideEventDetails = EventComponent.queryByText('hide details');

  //   const listitem = EventComponent.queryByRole('listitem');
  //   const showHideEventDetails = within(listitem).queryByRole('button', { expanded: true });
  //   await user.click(showHideEventDetails);
  //   // expect(EventComponent.queryByText('show details')).toBeInTheDocument();
  //   expect(within(listitem).queryByRole('button', { expanded: false })).toBeInTheDocument();
  //   console.log("listitem", listitem);
  // });

  test('collapse details section when the user clicks the Accordion button while expanded', async () => {
    const user = userEvent.setup();
    const btnAccordionItem = screen.getByRole('button');

    await user.click(btnAccordionItem);

    await waitFor(() => {
      const accordionBody = screen.getByRole('listitem').querySelector('.accordion-body');
      expect(accordionBody).toBeInTheDocument();
    });

    await user.click(btnAccordionItem);

    await waitFor(() => {
      // For example, you might want to check the class name
      expect(btnAccordionItem.className).toContain('collapsed');
    });
  });

});