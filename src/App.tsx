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
    },

    {
      name: 'booking nameeeeeeeeeeeeeee',
      start: '2020-07-14',
      end: '2020-07-28',
      id: 4
    },

    {
      name: 'booking nameeeeeeeeeeeeeee',
      start: '2020-08-02',
      end: '2020-08-16',
      id: 5
    }
  ];

  const blockedDates = [
    '2020-01-01',
    '2020-01-02',
    '2020-02-17',
    '2020-02-18',
    '2020-02-19',
    '2020-02-20',
  ]

  return <CalendarContainer blockedDates={blockedDates} events={events} />
}


export default App;
