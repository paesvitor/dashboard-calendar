import moment, { Moment } from 'moment'
import React, { useEffect, useState } from 'react';
import { number } from 'yargs';
import { useStyles } from './styles';
import clsx from 'clsx'

function CalendarContainer() {
    //State
    // const [dateObject, setDateObject] = useState<Moment>(moment().set('month', 3));
    // const [blankElements, setBlankElements] = useState<(Element | JSX.Element)[]>([])
    // const [daysInMonthElements, setDaysInMonthElements] = useState<(Element | JSX.Element)[]>([]);
    // const [totalSlots, setTotalSlots] = useState<(Element | JSX.Element)[]>([]);
    // const [rows, setRows] = useState([]);

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
            const element = <td className={clsx(classes.day, classes.emptyDay)}>{""}</td>
            arr.push(element)
        }
        return arr;
    }

    function fillDaysInMonth(month: number) {
        const dateObject = moment().set('month', month);

        let arr = [];

        for (let d = 1; d <= dateObject.daysInMonth(); d++) {
            const element = <td key={d} className={classes.day}>
                {d}
            </td>
            arr.push(element);
        }

        return arr;
    }

    function getRows(month: number): [] {
        const totalSlots = [...fillBlankSpaces(month), ...fillDaysInMonth(month)];

        let tempCells: any = [];
        let tempRows: any = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                tempCells.push(row); // if index not equal 7 that means not go to next week
            } else {
                tempRows.push(tempCells); // when reach next week we contain all td in last week to rows 
                tempCells = []; // empty container 
                tempCells.push(row); // in current loop we still push current row to new container
            }
            if (i === totalSlots.length - 1) { // when end loop we add remain date
                tempRows.push(tempCells);
            }
        });
        return tempRows
    }

    function renderDaysInMonth(month: number) {
        return getRows(month).map((d: any, i: any) => {
            return <tr>{d}</tr>;
        });
    }

    // useEffect(() => {
    //     setTotalSlots([...blankElements, ...daysInMonthElements])
    // }, [blankElements, daysInMonthElements]);

    // useEffect(() => {
    //     fillRowsAndCells()
    // }, [totalSlots])

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        {weekdayshortname}
                    </tr>
                </thead>
            </table>

            <section className={classes.monthList}>
                {monthsInYear.map((month, index) => <section className={classes.month}>
                    <h2>{month}</h2>

                    <table className={classes.table}>
                        <tbody>
                            {renderDaysInMonth(index + 1)}
                        </tbody>
                    </table>
                </section>)}
            </section>
        </div>
    );
}

export default CalendarContainer;
