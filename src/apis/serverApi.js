import axiosFetch from "../utils/axiosFetch"

export const listFires = (body) =>
  axiosFetch.post(`/service/list`, { ...body, type: 'fire' })

export const listPolices = (body) =>
  axiosFetch.post(`/service/list`, { ...body, type: 'police' })

export const listServiceOptions = (body) =>
  axiosFetch.post(`/service/options`, body)

export const createFire = (body) =>
  axiosFetch.post(`/service/create`, { ...body, type: 'fire' })

export const createPolice = (body) =>
  axiosFetch.post(`/service/create`, { ...body, type: 'police' })

export const viewService = (id) =>
  axiosFetch.get(`/service/view/${id}`)

export const editService = (body) =>
  axiosFetch.post(`/service/edit/${body?.id}`, body)

export const deleteService = (id) =>
  axiosFetch.delete(`/service/delete/${id}`)
