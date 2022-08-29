import axiosFetch from "../utils/axiosFetch"

export const listBloodBanks = (body) =>
  axiosFetch.post(`/blood_bank/list`, body)

export const createBloodBank = (body) =>
  axiosFetch.post(`/blood_bank/create`, body)

export const viewBloodBank = (id) =>
  axiosFetch.get(`/blood_bank/view/${id}`)

export const editBloodBank = (body) =>
  axiosFetch.post(`/blood_bank/edit/${body?.id}`, body)

export const deleteBloodBank = (id) =>
  axiosFetch.delete(`/blood_bank/delete/${id}`)
  