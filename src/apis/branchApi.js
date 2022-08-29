import axiosFetch from "../utils/axiosFetch"

export const listBranches = (body) =>
  axiosFetch.post(`/branch/list`, body)

export const listBranchOptions = () =>
  axiosFetch.get(`/branch/options`)

export const createBranch = (body) =>
  axiosFetch.post(`/branch/create`, body)

export const viewBranch = (id) =>
  axiosFetch.get(`/branch/view/${id}`)

export const editBranch = (body) =>
  axiosFetch.post(`/branch/edit/${body?.id}`, body)

export const deleteBranch = (id) =>
  axiosFetch.delete(`/branch/delete/${id}`)
  