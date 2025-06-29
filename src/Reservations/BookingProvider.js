import { useState, createContext, useContext } from "react"

const baseTimeslots = ['1700','1800','1900','2000','2100','2200'];
const BookingContext = createContext(undefined)

export const BookingProvider = ({children}) => {
    const [bookedTimeslots, setBookedTimeslots] = useState(new Map());

    const registerBooking = (date, time) => {
        setBookedTimeslots(prev => {
            const updatedTimes = new Map(prev)
            const times = new Set(updatedTimes.get(date) ?? [])
            times.add(time)
            updatedTimes.set(date, times)
            return updatedTimes
        })
    }

    const getAvailableTimeslots = (date) => {
        const occupiedTimeslots = bookedTimeslots.get(date);
        return baseTimeslots.filter(timeslot => !occupiedTimeslots?.has(timeslot))
    }

 return (<BookingContext value={{registerBooking, getAvailableTimeslots}}>{children}</BookingContext>)
}

export const useBookingContext = () => {
    const context = useContext(BookingContext);
    return context;
}