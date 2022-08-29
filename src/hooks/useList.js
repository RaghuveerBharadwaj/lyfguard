import { message } from "antd"
import { useState } from "react"
import { useDebouncedEffect } from "./useDebounce"

export const useList = ({
  fetchList,
  deleteItem
}) => {
  const [limit, setLimit] = useState(10)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(1)
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useDebouncedEffect(() => { getLists() }, [limit, page])

  const getLists = async () => {
    try {
      setLoading(true)
      const res = await fetchList({ limit, skip: ((page - 1) * limit) })
      if (res?.data) {
        setList(res?.data?.dataList)
        setCount(res?.data?.count)
      }
    } catch (err) {
      message.error("Something went wrong!!")
      setList([])
      setCount(0)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const deleteListItem = async (id) => {
    try {
      setLoading(true)
      const res = await deleteItem(id)
      if (res) {
        message.success("Item deleted successfully")
        await getLists()
      }
    } catch (err) {
      message.error("Something went wrong!!")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }


  return {
    list,
    count,
    loading,
    limit,
    setLimit,
    page,
    setPage,
    deleteListItem
  }
}
