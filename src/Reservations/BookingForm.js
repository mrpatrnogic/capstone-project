import { useFormik } from "formik";
import { Container, FormControl, FormLabel, FormErrorMessage, Input, VStack, Select, Button } from "@chakra-ui/react";
import * as Yup from 'yup';
import { useBookingContext } from "./BookingProvider";
import React from "react";

const BookingForm = () => {
    const isLoading = false

    const {registerBooking, getAvailableTimeslots} = useBookingContext()

    const formik = useFormik({
        initialValues: {
        date: '',
        time: '',
        numberOfGuests: 1,
        occasion: ''
        },
        onSubmit:async (values) => {
            registerBooking(values.date, values.time)
            formik.resetForm();
        },
        validationSchema: Yup.object({
        date: Yup
            .date()
            .required('Required'),

        time: Yup
            .string()
            .oneOf(['1700', '1800', '1900', '2000', '2100', '2200'], 'Select a time')
            .required('Required')
            .notOneOf([''], 'Required'),

        numberOfGuests: Yup
            .number()
            .min(1, 'Reservations are for a minimum of 1 attendant')
            .max(10, 'You can make a reservation for a maximum of 10 attendants')
            .required('Required'),

        occasion: Yup
            .string()
            .oneOf(['birthday', 'anniversary', 'other', undefined], 'Select an option')
        }),
    });

    const [timeslots, setTimeslots] = React.useState(getAvailableTimeslots());

    const onDateChange = (e) => {
        setTimeslots(getAvailableTimeslots(e.target.value))
        formik.handleChange(e)
    }

    return (
        <Container p={6} rounded="md" w="100%" alignItems="center" maxWidth="2xl">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} width="100%">
              <FormControl isInvalid={formik.touched.date && !!formik.errors.date}>
                <FormLabel htmlFor="date">Date*</FormLabel>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  onChange={onDateChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.time && !!formik.errors.time}>
                <FormLabel htmlFor="time">Time*</FormLabel>
                <Select 
                  id="time" 
                  name="time" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                  placeholder='Choose a time..'
                >
                  {timeslots.map(timeslot => {
                    return <option key={timeslot} value={timeslot}>{timeslot}</option>
                  })}
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.numberOfGuests && !!formik.errors.numberOfGuests}>
                <FormLabel htmlFor="numberOfGuests">Number of Guests*</FormLabel>
                <Input
                  id="numberOfGuests"
                  name="numberOfGuests"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.numberOfGuests}
                />
                <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select 
                  id="occasion" 
                  name="occasion" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                  placeholder="Choose an option.."
                >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <Button 
                type="submit" 
                width="full" 
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Container>
    )
};

export default BookingForm;