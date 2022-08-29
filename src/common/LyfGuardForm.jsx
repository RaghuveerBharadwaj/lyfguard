import { Input, Form, Button, Typography, Select, Switch } from "antd"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { useForm } from "../hooks/useForm"

const { Title } = Typography

export const LyfGuardForm = ({
  getAction,
  createAction,
  editAction,
  initForm,
  formName
}) => {
  const {
    loading,
    createAct,
    editAct,
    form
  } = useForm({
    getAction,
    createAction,
    editAction,
    initForm
  })

  const { pathname } = useLocation()

  const isEdit = pathname.includes('/edit/')
  const subtitle = isEdit ? 'Edit ' : 'Create '
  const onSubmit = isEdit ? editAct : createAct

  return (
    <div style={{ width: 500 }}>
      <Title level={3}> {subtitle} {formName} </Title>
      <FormLayout form={form} onSubmit={onSubmit} loading={loading} />
    </div>
  )

}

export const FormLayout = ({ form, onSubmit, loading }) => {
  const memoizedForm = useMemo(() => form?.map(inp => getInput(inp)), [form, loading])
  const fields = form?.map(cur => ({ name: cur?.id, value: cur?.value }))

  return (
    <Form onFinish={onSubmit} fields={fields} layout="vertical">
      {memoizedForm}
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const getInput = (input) => {
  switch (input?.inputType) {
    case "textField": {
      return (
        <Form.Item
          key={input?.id}
          name={input?.id}
          label={input?.label}
          rules={input?.rules || []}
        >
          <Input
            placeholder={input?.placeholder}
            type={input?.type}
            value={input?.value}
          />
        </Form.Item>
      )
    }

    case "textArea": {
      return (
        <Form.Item
          key={input?.id}
          name={input?.id}
          label={input?.label}
          rules={input?.rules || []}
        >
          <Input.TextArea
            placeholder={input?.placeholder}
            autoSize={{ minRows: input?.minRows }}
            value={input?.value}
          />
        </Form.Item>
      )
    }

    case "selectField": {
      return (
        <Form.Item
          key={input?.id}
          name={input?.id}
          label={input?.label}
          rules={input?.rules || []}
        >
          <Select>
            {input?.options?.map(opt =>
            (<Select.Option key={opt?.value} value={opt?.value}>
              {opt?.label}
            </Select.Option>))}
          </Select>
        </Form.Item>
      )
    }

    case "switch": {
      return (
        <Form.Item
          key={input?.id}
          name={input?.id}
          label={input?.label}
          rules={input?.rules || []}
          checked={input?.value}
          valuePropName="checked"
        >
          <Switch color="primary.main" />
        </Form.Item>
      )
    }

    // case "multiSelectField": {
    //   const onMultiChange = (e) => {
    //     if (input?.value?.includes(e?.target?.value)) {
    //       const value = [...input?.value]?.filter(inp => inp !== e?.target?.value)
    //       input?.handleChange(input?.id, value)
    //     } else {
    //       input?.handleChange(input?.id, [...input?.value, e?.target?.value])
    //     }
    //   }
    //   return (
    //     <div key={input?.id}>
    //       <Space>{input?.label}</Space>
    //       <Select
    //         fullWidth
    //         multiple
    //         native
    //         {...props}
    //         onChange={onMultiChange}
    //       >
    //         {input?.options?.map(opt =>
    //         (<option key={opt?.id} value={opt?.id}>
    //           {opt?.name}
    //         </option>))}
    //       </Select>
    //     </div>)
    // }

    // case "slider":
    //   return (
    //     <div key={input?.id}>
    //       <Space sx={{ color: "gray", my: 2 }}>{input?.label}</Space>
    //       <Slider
    //         size="large"
    //         valueLabelFormat={(val) => val + "%"}
    //         valueLabelDisplay="on"
    //         min={0}
    //         max={100}
    //         value={input?.value}
    //         onChange={(e, val) => input?.handleChange(input?.id, val)}
    //       />
    //     </div>)

    // case "rating":
    //   return (
    //     <div sx={{ display: "flex", alignItems: "center", gap: "32px" }} key={input?.id}>
    //       <Space sx={{ color: "gray", my: 2 }}>{input?.label}</Space>
    //       <Rating
    //         size="large"
    //         name="Rating"
    //         defaultValue={2}
    //         max={10}
    //         value={input?.value}
    //         onChange={(e, val) => input?.handleChange(input?.id, val)}
    //       />
    //     </div>)

    default:
      return null
  }
}