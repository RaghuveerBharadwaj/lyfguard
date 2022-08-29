import {
  CheckCircleFilled,
  CloseCircleFilled
} from '@ant-design/icons'

export const getColumns = (fields = []) => [
  {
    title: 'Country Code',
    dataIndex: 'code',
    key: 'code',
    render: (cd) => `+${cd}`
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
    render: (img) => <img src={img} width="50" height="50" />
  },
  {
    title: 'Banner',
    dataIndex: 'banner',
    key: 'banner',
    render: (img) => <img src={img} width="400" height="50" />
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Start Time',
    dataIndex: 'operation_start_time',
    key: 'operation_start_time',
  },
  {
    title: 'End Time',
    dataIndex: 'operation_end_time',
    key: 'operation_end_time',
  },
  {
    title: 'Latitude',
    dataIndex: 'latitude',
    key: 'latitude',
  },
  {
    title: 'Longitude',
    dataIndex: 'longitude',
    key: 'longitude',
  },
  {
    title: 'Vehicle Number',
    dataIndex: 'vehicle_number',
    key: 'vehicle_number',
  },
  {
    title: 'Services',
    dataIndex: 'services',
    key: 'services',
  },
  {
    title: 'Blood Group',
    dataIndex: 'blood_group',
    key: 'blood_group',
  },
  {
    title: 'Licence Number',
    dataIndex: 'licence_number',
    key: 'licence_number',
  },
  {
    title: 'Amenities',
    dataIndex: 'amenities',
    key: 'amenities',
  },
  {
    title: 'Is Emergency?',
    dataIndex: 'is_emergency',
    key: 'is_emergency',
    render: (bool) => bool ? <CheckCircleFilled style={{ color: '#52c41a', fontSize: 18 }} /> : <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: 18 }} />
  },
  {
    title: 'Is On Duty?',
    dataIndex: 'is_on_duty',
    key: 'is_on_duty',
    render: (bool) => bool ? <CheckCircleFilled style={{ color: '#52c41a', fontSize: 18 }} /> : <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: 18 }} />
  },
  {
    title: 'Has Partner Branch?',
    dataIndex: 'is_partner_branch',
    key: 'is_partner_branch',
    render: (bool) => bool ? <CheckCircleFilled style={{ color: '#52c41a', fontSize: 18 }} /> : <CloseCircleFilled style={{ color: '#ff4d4f', fontSize: 18 }} />
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
].filter(item => fields.includes(item.key))
