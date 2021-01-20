import { Fragment, useState } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedEvent(null);
    setFormOpen(true);
  }

  // /(.+) this mean anything that has forward slash and and something else
  return (
    <Fragment>
    <Route exact path="/" component={HomePage} />
    
    <Route path={'/(.+)'} render={() => (
      <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <Route exact path="/events" component={EventDashboard} />
        <Route path="/events/:id" component={EventDetailedPage} />
        <Route path="/createEvent" component={EventForm} />
      </Container>
      </Fragment>
    )} />
    
      
    </Fragment>
  );
}

export default App;

/** 
 *  <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
 */
