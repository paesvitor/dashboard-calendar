import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: 15
  },

  weekDaysWrapper: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    borderBottom: '1px solid #e9e9e9',
    zIndex: 5,
    paddingLeft: 15,
    paddingRight: 15
  },

  weekDay: {
    textAlign: 'left',
    width: '14.28571428571429%',
    height: 60,
    fontWeight: 600,
    fontSize: 19
  },

  table: {
      width: '100%',
      tableLayout: 'fixed',
      borderCollapse: 'collapse',
  },

  monthList: {
    width: '100%',
    marginTop: 120
  },

  month: {
    width: '100%',
    marginBottom: 60,
    overflow: 'hidden'
  },

  monthName: {
    textAlign: 'center',
    marginBottom: 60,
    fontWeight: 500
  },

  dayWrapper: {
      height: 120,
      border: '3px solid #e9e9e9',
      width: '14.28571428571429%',
      flex: 'none',
      position: 'relative',
      cursor: 'pointer',
      userSelect: 'none',

      '&:hover': {
        backgroundColor: '#f1f4ff'
      },

      '&:last-child': {
        overflow: 'hidden'
      }
  },

  dayBlocked: {
    backgroundColor: '#f9f9f9',
    // position: 'relative',

    background: 'linear-gradient(to top left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 2px), #e9e9e9 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)'
  },
  
  dayLabel: {
    position: 'absolute',
    top: 9,
    left: 9,
    fontSize: 19
  },

  dayRestriction: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 15,
    height: 15,
    borderRadius: '50%',
    backgroundColor: '#767676',
    margin: '0 auto'
  },

  dayNote: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#b6b6b6',
    margin: '0 auto'
  },

  dayPrice: {
    position: 'absolute',
    bottom: 9,
    right: 9,
    color: '#bebebe',
    fontSize: 17
  },

  daySelected: {
    backgroundColor: '#f4e9ff',
    borderColor: '#f4e9ff',

    '&:hover': {
      backgroundColor: '#f4e9ff'
    }
  },

  eventsWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  
  eventsWrapperMulti: {
    justifyContent: 'space-between'
  },

  eventTimeline: {
    backgroundColor: '#526cd5',
    padding: 5,
    cursor: 'pointer',
    borderRadius: 3,
    height: 19,
    marginTop: 45,
    whiteSpace: 'nowrap',
    width: '103%',
    left: '-3%',
    // overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    display: 'flex',
    alignItems: 'center',

    '& .event-name': {
      color: '#fff',
      paddingLeft: 6,
      fontSize: 15,
      zIndex: 3,
      textOverflow: 'ellipsis',
      fontWeight: 500
    }
  },

  eventStartAndEventEnd: {
    width: '32%',
    left: 'unset !important',
    minWidth: 'unset'
  },

  eventStart: {
    width: '50%',
    marginLeft: 'auto',
    // position: 'relative',
    display: 'flex',
    alignItems: 'center',
    right: 0,

    '& .event-name': {
      paddingLeft: 39
    },

    // Start event red bubble
    '& span': {
      position: 'absolute',
      height: 35,
      width: 35,
      backgroundColor: '#ff6969',
      left: -10,
      zIndex: 3,
      borderRadius: '50%',
      border: '3px solid #fff'
    }
  },

  eventEnd: {
    width: '20%',
    borderRadius: '0px 30px 30px 0px'
  },

  dayHasEventStart: {
    // backgroundColor: 'red'
  },

  dayHasEventEnd: {
    // backgroundColor: 'blue'
  },

  dayStatus: {
    position: 'absolute',
    bottom: 0,
    width: '102%',
    height: 3,
  },


  emptyDay: {
      border: 'none',

      '&:hover': {
        backgroundColor: 'unset',
        cursor: 'unset',
        
      }
  },

  backgroundLightBlue: {
    backgroundColor: '#36b7ec'
  },
});