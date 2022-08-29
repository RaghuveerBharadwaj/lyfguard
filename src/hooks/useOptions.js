import { message } from "antd"
import { useEffect, useState } from "react"

export const useOptions = ({
  getOption
}) => {
  const [options, setOptions] = useState([])
  const [loading, setLoading] = useState(false)

  const getOpt = async () => {
    try {
      setLoading(true)
      const res = await getOption()
      if (res?.data) {
        setOptions(res?.data?.map(doc => ({
          label: doc?.name,
          value: doc?._id
        })))
      }
    } catch (err) {
      message.error("Something went wrong!!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { getOpt() }, [])

  return loading ? null : options
}
