import { message } from "antd"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export const useForm = ({
  getAction,
  createAction,
  editAction,
  initForm
}) => {

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isEdit = pathname.includes('/edit/')
  const routeId = pathname.split('/')?.[3]

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState(initForm)

  const getAct = async () => {
    try {
      setLoading(true)
      const res = await getAction(routeId)
      if (res?.data) {
        const newForm = form?.map(fom => {
          if (res?.data?.[fom?.id]) {
            fom.value = res?.data?.[fom?.id]
          }
          return fom
        })
        setForm(newForm)
      }
    } catch (err) {
      message.error("Something went wrong!!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isEdit) getAct()
  }, [])

  const createAct = async (body) => {
    try {
      setLoading(true)
      const res = await createAction(body)
      if (res) {
        message.success("Created successfully!")
        navigate('/'+ pathname.split('/')?.[1])
      }
    } catch (err) {
      message.error("Something went wrong!!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const editAct = async (body) => {
    try {
      setLoading(true)
      const res = await editAction({ ...body, id: routeId })
      if (res?.data) {
        const newForm = form?.map(fom => {
          if (res?.data?.[fom?.id]) {
            fom.value = res?.data?.[fom?.id]
          }
          return fom
        })
        setForm(newForm)
        message.success("Edited successfully!")
        navigate('/'+ pathname.split('/')?.[1])
      }
    } catch (err) {
      message.error("Something went wrong!!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    createAct,
    editAct,
    form
  }
}
