export const getInitForm = ({
  fields = [],
  countryOptions = [],
  hospitalOptions = [],
  userOptions = [],
  agencyOptions = [],
  branchOptions = [],
}) => [
  {
    id: 'name',
    label: 'Name',
    placeholder: 'Enter Name',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'phone_number',
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    value: '',
    type: 'number',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'phone',
    label: 'Phone Number',
    placeholder: 'Enter Phone Number',
    value: '',
    type: 'number',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'password',
    label: 'Password',
    placeholder: 'Enter Password',
    value: '',
    type: 'password',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'website',
    label: 'Website',
    placeholder: 'Enter Website',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'logo',
    label: 'Logo',
    placeholder: 'Enter Logo',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'avatar',
    label: 'Avatar',
    placeholder: 'Enter Avatar',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'banner',
    label: 'Banner',
    placeholder: 'Enter Banner',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'code',
    label: 'Country Code',
    placeholder: 'Enter Country Code',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'country_code',
    label: 'Country Code',
    placeholder: 'Enter Country Code',
    value: '',
    options: countryOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'email',
    label: 'Email',
    placeholder: 'Enter Email',
    value: '',
    type: 'email',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'operation_start_time',
    label: 'Start Time',
    placeholder: 'Enter Start Time',
    value: '',
    type: 'time',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'operation_end_time',
    label: 'End Time',
    placeholder: 'Enter End Time',
    value: '',
    type: 'time',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'operation_days',
    label: 'Operation Days',
    placeholder: 'Enter Operation Days',
    value: 0,
    type: 'number',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'amenities',
    label: 'Amenities',
    placeholder: 'Enter Amenities',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'services',
    label: 'Services',
    placeholder: 'Enter Services',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'vehicle_number',
    label: 'Vehicle Number',
    placeholder: 'Enter Vehicle Number',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'latitude',
    label: 'Latitude',
    placeholder: 'Enter Latitude',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'longitude',
    label: 'Longitude',
    placeholder: 'Enter Longitude',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'hospital_id',
    label: 'Hospitals',
    placeholder: 'Enter Hospitals',
    value: '',
    options: hospitalOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'agency_id',
    label: 'Agencies',
    placeholder: 'Enter Agencies',
    value: '',
    options: agencyOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'branch_id',
    label: 'Branches',
    placeholder: 'Enter Branches',
    value: '',
    options: branchOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'user_id',
    label: 'Users',
    placeholder: 'Enter Users',
    value: '',
    options: userOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'blood_group',
    label: 'Blood Group',
    placeholder: 'Enter Blood Group',
    value: '',
    options: bloodOptions,
    inputType: 'selectField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'licence_number',
    label: 'Licence Number',
    placeholder: 'Enter Licence Number',
    value: '',
    type: 'text',
    inputType: 'textField',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'is_emergency',
    label: 'Emergency ?',
    value: false,
    inputType: 'switch',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'is_partner_branch',
    label: 'Partner Branch ?',
    value: false,
    inputType: 'switch',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'is_on_duty',
    label: 'On Duty ?',
    value: false,
    inputType: 'switch',
    rules: [{ required: true, message: 'Required' }]
  },
  {
    id: 'address',
    label: 'Address',
    placeholder: 'Enter Address',
    value: '',
    minRows: 4,
    inputType: 'textArea',
    rules: [{ required: true, message: 'Required' }]
  },
].filter(item => fields.includes(item.id))

export const bloodOptions = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"].map(bld => ({
  label: bld,
  value: bld
}))