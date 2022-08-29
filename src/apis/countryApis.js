import axiosFetch from "../utils/axiosFetch"

export const listCountries = (body) =>
  axiosFetch.post(`/country/list`, body)

export const listCountryOptions = () =>
  axiosFetch.get(`/country/options`)

export const createCountry = (body) =>
  axiosFetch.post(`/country/create`, body)

export const viewCountry = (id) =>
  axiosFetch.get(`/country/view/${id}`)

export const editCountry = (body) =>
  axiosFetch.post(`/country/edit/${body?.id}`, body)

export const deleteCountry = (id) =>
  axiosFetch.delete(`/country/delete/${id}`)
  