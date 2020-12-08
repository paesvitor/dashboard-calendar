import React from 'react';
import CalendarContainer from './components/CalendarContainer';
import { Booking, CalendarConfig, Day } from './utils/Event';


function App() {
  const bookings: Booking[] = [
    {
      start: '2020-01-01',
      end: '2020-01-03',
      guest: {
        name: 'Fora bolsonaro'
      },
      guests: 20,
      id: 390,
      property: {
        id: 2,
        minStay: 30
      },
      status: 'PENDING',
      value: 3999,
      changeover: {
        before: 2,
        after: 2
      }
    },
    {
      start: '2020-01-25',
      end: '2020-01-31',
      guest: {
        name: 'Vitor Paes',
      },
      guests: 20,
      id: 1,
      property: {
        id: 2,
        minStay: 2
      },
      status: 'CONFIRMED',
      value: 2000,
      changeover: {
        before: 1,
        after: 1
      }
    },

    {
      start: '2020-02-06',
      end: '2020-02-28',
      guest: {
        name: 'Vitor Paes',
      },
      guests: 20,
      id: 2,
      property: {
        id: 2,
        minStay: 2
      },
      status: 'CONFIRMED',
      value: 2000,
      changeover: {
        before: 0,
        after: 0
      }
    }
  ];

  const days: Day[] = [
    {
      date: '2020-01-24',
      status: 'UNAVAILABLE',
      note: 'NOTE',
    },
    {
      date: '2020-01-13',
      status: 'INQUIRE',
    },
    {
      date: '2020-01-14',
      status: 'INQUIRE',
    },
    {
      date: '2020-01-23',
      price: 1000,
      note: 'NOTE',
      status: 'UPON_REQUEST',
      restriction: 'Restriction'
    }
  ]

  const calendarConfig: CalendarConfig = {
    defaultPrice: {
      currency: 'EUR',
      value: 2000
    },
    defaultStatus: 'INSTANT',
    property: {
      id: 1,
      name: 'Property name'
    }
  }

  function handleClickBooking(booking: Booking) {
    console.log(booking);
  }

  function handleSelectedDatesChange(dates: string[]) {
    console.log(dates);
  }

  return <CalendarContainer
    config={calendarConfig}
    days={days}
    bookings={bookings}
    onClickBooking={handleClickBooking}
    onSelectedDatesChange={handleSelectedDatesChange}
  />
}


export default App;
