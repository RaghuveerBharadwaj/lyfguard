import axiosFetch from "../utils/axiosFetch"

export const login = (body) =>
  axiosFetch.post(`/login`, body)

export const listUsers = (body) =>
  axiosFetch.post(`/user/list`, { ...body, role: 'user' })

export const listDrivers = (body) =>
  axiosFetch.post(`/user/list`, { ...body, role: 'driver' })

export const listUserOptions = (body) =>
  axiosFetch.post(`/user/options`, body)

export const createUser = (body) =>
  axiosFetch.post(`/user/create`, { ...body, role: 'user' })

export const createDriver = (body) =>
  axiosFetch.post(`/user/create`, { ...body, role: 'driver' })

export const viewUser = (id) =>
  axiosFetch.get(`/user/view/${id}`)

export const editUser = (body) =>
  axiosFetch.post(`/user/edit/${body?.id}`, body)

export const deleteUser = (id) =>
  axiosFetch.delete(`/user/delete/${id}`)
