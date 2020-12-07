export type DayStatus = 'INSTANT' | 'UPON_REQUEST' | 'INQUIRE' | 'UNAVAILABLE' | 'PENDING' | 'AVAILABLE'
export type BookingStatus = 'CONFIRMED' | 'PENDING'

export interface Booking {
    guest: {
        name: string
    },

    property: {
        id: number,
        minStay: number
    },

    id: number,
    status: BookingStatus,
    start: string,
    end: string,
    guests: number,
    value: number,
    changeover?: {
        before: number,
        after: number
    }
}

export interface Day {
    date: string,
    price?: number,
    note?: string,
    status?: DayStatus
}

export interface CalendarConfig {
    property: {
        name: string,
        id: number
    },

    defaultPrice: {
        value: number,
        currency: 'EUR' | 'USD'
    }

    defaultStatus: DayStatus
}