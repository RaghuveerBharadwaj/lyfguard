import axiosFetch from "../utils/axiosFetch"

export const listAgencies = (body) =>
  axiosFetch.post(`/agency/list`, body)

export const listAgencyOptions = () =>
  axiosFetch.get(`/agency/options`)

export const createAgency = (body) =>
  axiosFetch.post(`/agency/create`, body)

export const viewAgency = (id) =>
  axiosFetch.get(`/agency/view/${id}`)

export const editAgency = (body) =>
  axiosFetch.post(`/agency/edit/${body?.id}`, body)

export const deleteAgency = (id) =>
  axiosFetch.delete(`/agency/delete/${id}`)
