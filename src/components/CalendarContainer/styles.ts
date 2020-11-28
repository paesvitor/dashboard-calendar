import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative'
  },

  weekDays: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'lightgray',
    borderBottom: '1px solid',
    zIndex: 5
  },

  weekDay: {
    textAlign: 'left',
    width: '14.28571428571429%',
    height: 60
  },

  table: {
      width: '100%'
  },

  monthList: {
    width: '100%',
    marginTop: 120
  },

  month: {
    width: '100%',
    marginBottom: 30,
    overflow: 'hidden'
  },

  monthName: {
    textAlign: 'center',
    marginBottom: 30
  },

  dayWrapper: {
      height: 90,
      border: '1px solid',
      width: '14.28571428571429%',
      flex: 'none',
      position: 'relative',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: 'mistyrose'
      }
  },
  
  day: {
    position: 'absolute',
    top: 3,
    right: 3
  },

  eventsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  eventTimeline: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'green',
    padding: 5,
    cursor: 'pointer',
    borderRadius: 3,
    zIndex: 3,
    width: '100%',
    minHeight: 10,
    marginTop: 15
  },

  eventStartAndEventEnd: {
    position: 'relative',
    width: '32%',
    left: 'unset !important'
  },

  eventStart: {
    left: '50%'
  },

  eventEnd: {
    left: '-50%'
  },



  dayHasEventStart: {
    // backgroundColor: 'red'
  },

  dayHasEventEnd: {
    // backgroundColor: 'blue'
  },

  emptyDay: {
      border: 'none',

      '&:hover': {
        backgroundColor: 'unset',
        cursor: 'unset'
      }
  }
});