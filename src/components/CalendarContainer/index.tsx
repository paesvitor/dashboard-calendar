import moment from 'moment'
import React, { useState } from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

const events = [
    {
        start: '2020-03-20',
        end: '2020-04-03',
        id: 389
    },

    {
        start: '2020-01-31',
        end: '2020-02-06',
        id: 1
    }
]

function CalendarContainer() {
    //State
    // const [dateObject, setDateObject] = useState<Moment>(moment().set('month', 3));
    // const [blankElements, setBlankElements] = useState<(Element | JSX.Element)[]>([])
    // const [daysInMonthElements, setDaysInMonthElements] = useState<(Element | JSX.Element)[]>([]);
    // const [totalSlots, setTotalSlots] = useState<(Element | JSX.Element)[]>([]);
    const [calendarWidth, setCalendarWidth] = useState(0);

    // Constants
    const weekdayshort = moment.weekdaysShort();
    const monthsInYear = moment.months();

    // Classes
    const classes = useStyles()

    // console.log(monthsInYear)
    // let rows: any = [];
    // let cells: any = [];

    const weekdayshortname = weekdayshort.map(day => {
        return (
            <th key={day} className={classes.weekDay}>
                {day}
            </th>
        );
    });

    function firstDayOfMonth(month: number): number {
        const dateObject = moment().set('month', month);
        return Number(moment(dateObject).startOf('month').format('d'));
    }

    function fillBlankSpaces(month: number) {
        let arr = []

        for (let i = 0; i < firstDayOfMonth(month); i++) {
            const element = <td className={clsx(classes.dayWrapper, classes.emptyDay)}>{""}</td>
            arr.push(element)
        }
        return arr;
    }

    function fillDaysInMonth(month: number) {
        const dateObject = moment().set('month', month).set('year', 2020);

        let arr = [];

        for (let d = 1; d <= dateObject.daysInMonth(); d++) {
            let dayHasEventStart = false;
            let dayHasEventEnd = false;
            let eventEndDate = '';
            let tempEvent: any = null;
            const dayFormated = dateObject.set('date', d).format('YYYY-MM-DD');

            events.map(event => {
                if (event.start === dayFormated) {
                    dayHasEventStart = true;
                    eventEndDate = event.end;
                    tempEvent = event;
                } else if (event.end === dayFormated) {
                    dayHasEventEnd = true
                }
            });

            const element = <td
                onClick={() => handleClickDate(dayFormated)}
                data-is-startdate={dayHasEventStart}
                data-is-enddate={dayHasEventEnd}
                key={dayFormated} id={dayFormated}
                className={clsx(classes.dayWrapper, dayHasEventStart && classes.dayHasEventStart, dayHasEventEnd && classes.dayHasEventEnd)}
            >
                <div className={classes.day} >
                    {d}
                </div>

                {dayHasEventStart &&
                    <div
                        data-eventid={tempEvent.id}
                        data-eventend={eventEndDate}
                        className={classes.eventTimeline}
                        onClick={(e) => handleClickEvent(e, tempEvent)}>
                        Booking
                </div>}
            </td>
            arr.push(element);
        }

        return arr;
    }

    function getRows(month: number): [] {
        const totalSlots = [...fillBlankSpaces(month), ...fillDaysInMonth(month)];

        let cells: any = [];
        let rows: any = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row); // if index not equal 7 that means not go to next week
            } else {
                rows.push(cells); // when reach next week we contain all td in last week to rows 
                cells = []; // empty container 
                cells.push(row); // in current loop we still push current row to new container
            }
            if (i === totalSlots.length - 1) { // when end loop we add remain date
                rows.push(cells);
            }
        });
        return rows
    }

    // function paintRows() {
    //     getRows().map(row => console.log(row))
    // }

    function renderDaysInMonth(month: number) {
        return getRows(month).map((row: (Element | JSX.Element)[], i: any) => {
            if (month === 2) {
                // Check each row individually
                row.map((el: any) => {
                    // console.log(el.props)
                })
            }


            return <tr className="calendar-line">{row}</tr>;
        });
    }

    function calculateCalendarWidth() {
        const rootElement = document.getElementById('root');
        if (rootElement) {
            setCalendarWidth(rootElement?.offsetWidth)
        }
    }

    function handleClickDate(date: any) {
        console.log('Clicked on date - ', date)
    }

    function handleClickEvent(event: React.MouseEvent, date: any) {
        event.preventDefault();
        event.stopPropagation();
        console.log(date)
    }

    // useEffect(() => {
    //     console.log('Clicked on date', calendarWidth)
    // }, [calendarWidth])

    // useEffect(() => {
    //     setTotalSlots([...blankElements, ...daysInMonthElements])
    // }, [blankElements, daysInMonthElements]);

    // useEffect(() => {
    //     fillRowsAndCells()
    // }, [totalSlots])

    return (
        <div className={classes.root} id="root">
            <table className={classes.weekDays}>
                <thead>
                    <tr>
                        {weekdayshortname}
                    </tr>
                </thead>
            </table>

            <section className={classes.monthList}>
                {monthsInYear.map((month, index) => <section key={month} className={classes.month}>
                    <h2 className={classes.monthName}>{month}</h2>

                    <table className={classes.table}>
                        <tbody>
                            {renderDaysInMonth(index)}
                        </tbody>
                    </table>
                </section>)}
            </section>
        </div>
    );
}

export default CalendarContainer;
