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
    zIndex: 2
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
    marginBottom: 30
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

  eventTimeline: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'green',
    padding: 5,
    cursor: 'pointer',
    borderRadius: 3,
    zIndex: 3
  },

  dayHasEventStart: {
    backgroundColor: 'red'
  },

  dayHasEventEnd: {
    backgroundColor: 'blue'
  },

  emptyDay: {
      border: 'none',

      '&:hover': {
        backgroundColor: 'unset',
        cursor: 'unset'
      }
  }
});