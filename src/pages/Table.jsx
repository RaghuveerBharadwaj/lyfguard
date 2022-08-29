import React from 'react'
import { LyfGuardTable } from '../common'
import { getColumns } from '../utils/getColumns'
import { deleteAgency, listAgencies } from '../apis/agencyApis'
import { deleteCountry, listCountries } from '../apis/countryApis'
import { deleteBloodBank, listBloodBanks } from '../apis/bloodBankApi'
import { deleteHospital, listHospitals } from '../apis/hospitalApi'
import { deleteBranch, listBranches } from '../apis/branchApi'
import { deleteAmbulance, listAmbulances } from '../apis/ambulanceApi'
import { deleteUser, listDrivers, listUsers } from '../apis/userApi'
import {
  agencyFields,
  ambulanceFields,
  bloodyFields,
  branchFields,
  countryFields,
  driverFields,
  fireFields,
  hospitalFields,
  userFields
} from '../constants/tableFields'
import { deleteService, listFires, listPolices } from '../apis/serverApi'

export const AgencyTable = () => {
  return (
    <LyfGuardTable
      title="Agencies"
      label="Agency"
      columns={getColumns(agencyFields)}
      fetchList={listAgencies}
      deleteItem={deleteAgency}
    />
  )
}

export const AmbulanceTable = () => {
  return (
    <LyfGuardTable
      title="Ambulances"
      label="Ambulance"
      columns={getColumns(ambulanceFields)}
      fetchList={listAmbulances}
      deleteItem={deleteAmbulance}
    />
  )
}

export const CountryTable = () => {
  return (
    <LyfGuardTable
      title="Countries"
      label="Country"
      columns={getColumns(countryFields)}
      fetchList={listCountries}
      deleteItem={deleteCountry}
    />
  )
}

export const BloodBankTable = () => {
  return (
    <LyfGuardTable
      title="Blood Banks"
      label="Blood Bank"
      columns={getColumns(bloodyFields)}
      fetchList={listBloodBanks}
      deleteItem={deleteBloodBank}
    />
  )
}

export const HospitalTable = () => {
  return (
    <LyfGuardTable
      title="Hospitals"
      label="Hospital"
      columns={getColumns(hospitalFields)}
      fetchList={listHospitals}
      deleteItem={deleteHospital}
    />
  )
}

export const BranchTable = () => {
  return (
    <LyfGuardTable
      title="Branches"
      label="Branch"
      columns={getColumns(branchFields)}
      fetchList={listBranches}
      deleteItem={deleteBranch}
    />
  )
}

export const UserTable = () => {
  return (
    <LyfGuardTable
      title="Users"
      label="User"
      columns={getColumns(userFields)}
      fetchList={listUsers}
      deleteItem={deleteUser}
    />
  )
}

export const DriverTable = () => {
  return (
    <LyfGuardTable
      title="Drivers"
      label="Driver"
      columns={getColumns(driverFields)}
      fetchList={listDrivers}
      deleteItem={deleteUser}
    />
  )
}

export const FireTable = () => {
  return (
    <LyfGuardTable
      title="Fire Departments"
      label="Fire Department"
      columns={getColumns(fireFields)}
      fetchList={listFires}
      deleteItem={deleteService}
    />
  )
}

export const PoliceTable = () => {
  return (
    <LyfGuardTable
      title="Police Departments"
      label="Police Department"
      columns={getColumns(fireFields)}
      fetchList={listPolices}
      deleteItem={deleteService}
    />
  )
}
