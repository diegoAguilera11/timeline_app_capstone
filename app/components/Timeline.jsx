'use client';
import useEventDataFetching from '../hooks/useEventDataFetch';
import { AuthContext } from '../context/auth/AuthContext'
import { useContext } from 'react';

const EventList = () => {
  const { events, loading } = useEventDataFetching();
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Event List</h1>
      {!user && <p>TODO: Add CRUD component</p>}
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul>
          {events && events.map((event) => (
            <li key={event.id}>{event.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
