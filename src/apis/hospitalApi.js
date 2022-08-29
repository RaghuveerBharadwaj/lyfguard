import axiosFetch from "../utils/axiosFetch"

export const listHospitals = (body) =>
  axiosFetch.post(`/hospital/list`, body)

export const listHospitalOptions = (body) =>
  axiosFetch.get(`/hospital/options`, body)

export const createHospital = (body) =>
  axiosFetch.post(`/hospital/create`, body)

export const viewHospital = (id) =>
  axiosFetch.get(`/hospital/view/${id}`)

export const editHospital = (body) =>
  axiosFetch.post(`/hospital/edit/${body?.id}`, body)

export const deleteHospital = (id) =>
  axiosFetch.delete(`/hospital/delete/${id}`)
