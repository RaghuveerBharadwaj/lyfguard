import axiosFetch from "../utils/axiosFetch"

export const listEmergencies = (body) =>
  axiosFetch.post(`/emergency/list`, body)

export const createEmergency = (body) =>
  axiosFetch.post(`/emergency/create`, body)

export const viewEmergency = (id) =>
  axiosFetch.get(`/emergency/view/${id}`)

export const editEmergency = (body) =>
  axiosFetch.post(`/emergency/edit/${body?.id}`, body)

export const deleteEmergency = (id) =>
  axiosFetch.delete(`/emergency/delete/${id}`)
  