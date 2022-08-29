import React from 'react'
import { LyfGuardForm } from '../common'
import { createAgency, editAgency, listAgencyOptions, viewAgency } from '../apis/agencyApis'
import { getInitForm } from '../utils/getInitForm'
import { agencyFields, ambulanceFields, bloodyFields, branchFields, countryFields, driverFields, fireFields, hospitalFields, userFields } from '../constants/formFields'
import { createCountry, editCountry, listCountryOptions, viewCountry } from '../apis/countryApis'
import { createBloodBank, editBloodBank, viewBloodBank } from '../apis/bloodBankApi'
import { useOptions } from '../hooks/useOptions'
import { createHospital, editHospital, listHospitalOptions, viewHospital } from '../apis/hospitalApi'
import { createBranch, editBranch, listBranchOptions, viewBranch } from '../apis/branchApi'
import { createAmbulance, editAmbulance, viewAmbulance } from '../apis/ambulanceApi'
import { createDriver, createUser, editUser, listUserOptions, viewUser } from '../apis/userApi'
import { createFire, createPolice, editService, viewService } from '../apis/serverApi'

export const AgencyForm = () => {
  const props = {
    getAction: viewAgency,
    createAction: createAgency,
    editAction: editAgency,
    initForm: getInitForm({ fields: agencyFields })
  }

  return (<LyfGuardForm {...props} />)
}

export const AmbulanceForm = () => {
  const hospitalOptions = useOptions({ getOption: listHospitalOptions })
  const userOptions = useOptions({ getOption: listUserOptions })
  const props = {
    getAction: viewAmbulance,
    createAction: createAmbulance,
    editAction: editAmbulance,
    initForm: getInitForm({ fields: ambulanceFields, hospitalOptions, userOptions })
  }

  return (hospitalOptions && userOptions) ? (<LyfGuardForm {...props} />) : null
}

export const CountryForm = () => {
  const props = {
    getAction: viewCountry,
    createAction: createCountry,
    editAction: editCountry,
    initForm: getInitForm({ fields: countryFields })
  }

  return (<LyfGuardForm {...props} />)
}

export const BloodBankForm = () => {
  const countryOptions = useOptions({ getOption: listCountryOptions })
  const props = {
    getAction: viewBloodBank,
    createAction: createBloodBank,
    editAction: editBloodBank,
    initForm: getInitForm({ fields: bloodyFields, countryOptions })
  }

  return countryOptions ? (<LyfGuardForm {...props} />) : null
}

export const HospitalForm = () => {
  const props = {
    getAction: viewHospital,
    createAction: createHospital,
    editAction: editHospital,
    initForm: getInitForm({ fields: hospitalFields })
  }
  
  return (<LyfGuardForm {...props} />)
}

export const BranchForm = () => {
  const hospitalOptions = useOptions({ getOption: listHospitalOptions })
  const props = {
    getAction: viewBranch,
    createAction: createBranch,
    editAction: editBranch,
    initForm: getInitForm({ fields: branchFields, hospitalOptions })
  }

  return hospitalOptions ? (<LyfGuardForm {...props} />) : null
}

export const UserForm = () => {
  const agencyOptions = useOptions({ getOption: listAgencyOptions })
  const branchOptions = useOptions({ getOption: listBranchOptions })
  const countryOptions = useOptions({ getOption: listCountryOptions })
  const props = {
    getAction: viewUser,
    createAction: createUser,
    editAction: editUser,
    initForm: getInitForm({ fields: userFields, agencyOptions, branchOptions, countryOptions })
  }

  return (branchOptions && agencyOptions && countryOptions) ? (<LyfGuardForm {...props} />) : null
}

export const DriverForm = () => {
  const agencyOptions = useOptions({ getOption: listAgencyOptions })
  const branchOptions = useOptions({ getOption: listBranchOptions })
  const countryOptions = useOptions({ getOption: listCountryOptions })
  const props = {
    getAction: viewUser,
    createAction: createDriver,
    editAction: editUser,
    initForm: getInitForm({ fields: driverFields, agencyOptions, branchOptions, countryOptions })
  }

  return (branchOptions && agencyOptions && countryOptions) ? (<LyfGuardForm {...props} />) : null
}

export const FireForm = () => {
  const countryOptions = useOptions({ getOption: listCountryOptions })
  const props = {
    getAction: viewService,
    createAction: createFire,
    editAction: editService,
    initForm: getInitForm({ fields: fireFields, countryOptions })
  }

  return countryOptions ? (<LyfGuardForm {...props} />) : null
}

export const PoliceForm = () => {
  const countryOptions = useOptions({ getOption: listCountryOptions })
  const props = {
    getAction: viewService,
    createAction: createPolice,
    editAction: editService,
    initForm: getInitForm({ fields: fireFields, countryOptions })
  }

  return countryOptions ? (<LyfGuardForm {...props} />) : null
}
