import axiosFetch from "../utils/axiosFetch"

export const listBookings = (body) =>
  axiosFetch.post(`/booking/list`, body)

export const createBooking = (body) =>
  axiosFetch.post(`/booking/create`, body)

export const viewBooking = (id) =>
  axiosFetch.get(`/booking/view/${id}`)

export const editBooking = (body) =>
  axiosFetch.post(`/booking/edit/${body?.id}`, body)

export const deleteBooking = (id) =>
  axiosFetch.delete(`/booking/delete/${id}`)
  