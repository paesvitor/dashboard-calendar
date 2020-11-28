import React from 'react';
import CalendarContainer from './components/CalendarContainer';

function App() {
  const events = [
    {
      name: 'booking 123456789012345',
      start: '2020-01-28',
      end: '2020-01-31',
      id: 1
    },
    {
      name: 'booking nameeeeeeeeeeeeeee',
      start: '2020-01-31',
      end: '2020-02-02',
      id: 2
    },

    {
      name: 'booking nameeeeeeeeeeeeeee',
      start: '2020-02-02',
      end: '2020-02-16',
      id: 3
    }
  ]

  return <CalendarContainer events={events} />
}


export default App;
