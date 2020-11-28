import moment from 'moment'
import React, { useMemo, useState } from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';

interface Event {
    start: string;
    end: string;
    id: number;
}

interface Props {
    events: Event[],
    blockedDates: string[]
}

function CalendarContainer(props: Props) {
    const { events, blockedDates } = props;

    // Constants
    const weekdayshort = moment.weekdaysShort();
    const monthsInYear = moment.months();

    // Classes
    const classes = useStyles()

    const weekdayshortname = weekdayshort.map(day => {
        return (
            <th key={day} className={classes.weekDay}>
                {day}
            </th>
        );
    });

    function getDatesInRage(date1: string, date2: string) {
        let dates = [];
        let startDate = moment(date1, 'YYYY-MM-DD');
        let finishDate = moment(date2, 'YYYY-MM-DD');
        dates.push(startDate.format('YYYY-MM-DD'));

        while (!startDate.isSame(finishDate)) {
            startDate = startDate.add(1, 'days');
            dates.push(startDate.format('YYYY-MM-DD'));
        }

        return dates;
    }

    const eventsRanges: any = useMemo(() => {
        const obj: any = {};

        // eslint-disable-next-line array-callback-return
        events.map(event => {
            obj[event.id] = {
                datesInRange: getDatesInRage(event.start, event.end)
            }
        });

        return obj;
    }, [events]);

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
            const dayFormated = dateObject.set('date', d).format('YYYY-MM-DD');
            let eventsThatDay: any = [];
            const dayIsBlocked = blockedDates.find(i => i === dayFormated) ? true : false;

            events.map(event => {
                if (eventsRanges[event.id].datesInRange.includes(dayFormated)) {
                    eventsThatDay.push(event)
                }
            });

            const element = <td
                onClick={() => handleClickDate(dayFormated)}
                key={dayFormated} id={dayFormated}
                className={clsx(
                    classes.dayWrapper,
                    dayIsBlocked && classes.dayBlocked
                )}
            >
                <div className={classes.eventStatus} />

                <div className={classes.dayLabel}>
                    {d}
                </div>

                {(eventsThatDay.length === 0 && !dayIsBlocked) && <div className={classes.dayPrice}>
                    €1,290
                </div>}

                <div className={clsx(
                    classes.eventsWrapper,
                    eventsThatDay.length >= 2 && classes.eventsWrapperMulti,
                )}>
                    {eventsThatDay.map((event: any) => <div
                        data-eventid={event.id}
                        className={clsx(
                            'event-timeline',
                            classes.eventTimeline,
                            event.end === dayFormated && classes.eventEnd,
                            event.start === dayFormated && classes.eventStart,
                            eventsThatDay.length === 2 && classes.eventStartAndEventEnd
                        )}
                        onClick={(e) => handleClickEvent(e, event)}>
                        <div className="event-name">
                            {(event.start === dayFormated || d === 1) && event.name}
                        </div>

                        {event.start === dayFormated && <span></span>}
                    </div>)}
                </div>
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

    function handleClickDate(date: any) {
        console.log('Clicked on date - ', date)
    }

    function handleClickEvent(event: React.MouseEvent, date: any) {
        event.preventDefault();
        event.stopPropagation();
        console.log(date)
    }

    return (
        <div className={classes.root} id="root">
            <table className={classes.weekDaysWrapper}>
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
