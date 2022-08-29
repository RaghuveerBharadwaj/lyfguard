import React from 'react'
import { Row, Pagination, Popconfirm, Table, Typography, Button } from 'antd'
import { useList } from '../hooks/useList'
import { useLocation, useNavigate } from 'react-router-dom'

const { Title } = Typography

export const LyfGuardTable = ({
  title,
  label,
  columns,
  fetchList,
  deleteItem
}) => {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const {
    list,
    count,
    loading,
    limit,
    setLimit,
    page,
    setPage,
    deleteListItem
  } = useList({ fetchList, deleteItem })

  const cols = [
    ...columns,
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) =>
      <>
        <a onClick={() => navigate(pathname + '/edit/' + record._id)}>Edit</a>
        &nbsp; &nbsp; &nbsp;
        <Popconfirm title="Are you sure you want to delete?" onConfirm={() => deleteListItem(record._id)}>
          <a>Delete</a>
        </Popconfirm>
      </>
    }
  ]

  return (
    <>
      <Row justify='space-between'>
        <Title level={3}>{title}</Title>
        <Button type='primary' onClick={() => navigate(pathname + '/create')}>
          Create {label}
        </Button>
      </Row>
      <Table
        dataSource={list}
        columns={cols}
        pagination={false}
        bordered
        loading={loading}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
        <Pagination
          current={page}
          pageSize={limit}
          total={count}
          onChange={setPage}
        />
      </div>
    </>
  )
}
