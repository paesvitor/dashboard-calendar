import React from 'react';
import CalendarContainer from './components/CalendarContainer';

function App() {
  const events = [
    {
      start: '2020-01-28',
      end: '2020-01-31',
      id: 38
    },
    {
      start: '2020-01-31',
      end: '2020-02-02',
      id: 1
    }
  ]

  return <CalendarContainer events={events} />
}


export default App;
