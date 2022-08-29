import axiosFetch from "../utils/axiosFetch"

export const listAmbulances = (body) =>
  axiosFetch.post(`/ambulance/list`, body)

export const createAmbulance = (body) =>
  axiosFetch.post(`/ambulance/create`, body)

export const viewAmbulance = (id) =>
  axiosFetch.get(`/ambulance/view/${id}`)

export const editAmbulance = (body) =>
  axiosFetch.post(`/ambulance/edit/${body?.id}`, body)

export const deleteAmbulance = (id) =>
  axiosFetch.delete(`/ambulance/delete/${id}`)
  