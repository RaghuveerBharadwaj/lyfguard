import { Card, message } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../apis/userApi'
import { FormLayout } from '../common/LyfGuardForm'
import { loginFields } from '../constants/formFields'
import { getInitForm } from '../utils/getInitForm'

export const Login = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const onSubmit = async (body) => {
    try {
      setLoading(true)
      const res = await login(body)
      localStorage.setItem("user", res?.data?.toString())
      localStorage.setItem("token", res?.data?.token)
      navigate("/dashboard")
    } catch (error) {
      message.error("Something went wrong!!")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgray'
    }}>
      <Card style={{ width: "600px", backgroundColor: '#FFF', borderRadius: 12 }}>
        <FormLayout
          form={getInitForm({ fields: loginFields })}
          onSubmit={onSubmit}
          loading={loading}
        />
      </Card>
    </div>
  )
}
