import { ADD_BOOKINGNO } from "../types";

export const addBookingNo = (BookingNo) => {
    return {
        type: ADD_BOOKINGNO,
        payload: BookingNo
    }
  };