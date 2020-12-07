import moment from 'moment'
import React, { useMemo, useState } from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Booking, CalendarConfig, Day, DayStatus } from '../../utils/Event';
interface Props {
    bookings: Booking[],
    days: Day[],
    config: CalendarConfig
}

function CalendarContainer(props: Props) {
    const { bookings, days, config } = props;

    // Stats
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

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

    function handleSelectDay(day: string) {
        const index = selectedDays.findIndex(i => i === day);
        if (index === -1) {
            setSelectedDays([...selectedDays, day])
        } else {
            setSelectedDays([...selectedDays.filter(i => i !== day)])
        }

    }

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
        bookings.map(booking => {
            obj[booking.id] = {
                datesInRange: getDatesInRage(booking.start, booking.end)
            }
        });

        return obj;
    }, [bookings]);

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

    function renderDayStatus(status: DayStatus) {

    }

    function fillDaysInMonth(month: number) {
        const dateObject = moment().set('month', month).set('year', 2020);

        let arr = [];

        for (let d = 1; d <= dateObject.daysInMonth(); d++) {
            const dayFormated = dateObject.set('date', d).format('YYYY-MM-DD');
            let bookingsThatDay: Booking[] = [];
            const dayIsSelected = selectedDays.find(i => i === dayFormated) ? true : false;
            const day = days.find(day => day.date === dayFormated)

            bookings.map(booking => {
                if (eventsRanges[booking.id].datesInRange.includes(dayFormated)) {
                    bookingsThatDay.push(booking)
                }
            });

            const element = <td
                onClick={() => handleClickDate(dayFormated)}
                key={dayFormated} id={dayFormated}
                className={clsx(
                    classes.dayWrapper,
                    day?.status === 'UNAVAILABLE' && classes.dayBlocked,
                    dayIsSelected && classes.daySelected
                )}
            >
                <div className={classes.eventStatus} />

                <div className={classes.dayLabel}>
                    {d}
                </div>

                {(bookingsThatDay.length === 0) && <div className={classes.dayPrice}>
                    {config.defaultPrice.value}
                </div>}

                <div className={clsx(
                    classes.eventsWrapper,
                    bookingsThatDay.length >= 2 && classes.eventsWrapperMulti,
                )}>
                    {bookingsThatDay.map((booking: Booking) => <div
                        data-eventid={booking.id}
                        className={clsx(
                            'event-timeline',
                            classes.eventTimeline,
                            booking.end === dayFormated && classes.eventEnd,
                            booking.start === dayFormated && classes.eventStart,
                            bookingsThatDay.length === 2 && classes.eventStartAndEventEnd
                        )}
                        onClick={(e) => handleClickEvent(e, booking)}>
                        <div className="event-name">
                            {(booking.start === dayFormated || d === 1) && booking.guest.name}
                        </div>

                        {booking.start === dayFormated && <span></span>}
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
        handleSelectDay(date)
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
