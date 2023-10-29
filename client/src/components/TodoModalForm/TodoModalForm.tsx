import { Modal, Form, Input, DatePicker } from 'antd'
import type { FormInstance } from 'antd/lib/form'
import type { Moment } from 'moment'
import momentGenerateConfig from 'rc-picker/lib/generate/moment'

const CustomDatePicker = DatePicker.generatePicker<Moment>(momentGenerateConfig)

const { TextArea } = Input

interface TodoModalFormProps {
  isOpen: boolean
  onSubmit: () => Promise<void>
  onCancel: () => Promise<void>
  isLoading: boolean
  form: FormInstance<Todo>
}

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 }
}

export const TodoModalForm: React.FC<TodoModalFormProps> = ({
  form,
  isOpen,
  onSubmit,
  onCancel,
  isLoading = false
}) => {
  return (
    <Modal
      forceRender
      title='Add Todo'
      onOk={onSubmit}
      onCancel={onCancel}
      open={isOpen}
      okButtonProps={{ type: 'default', loading: isLoading }}
    >
      <Form form={form} name='Todo Form' {...formLayout}>
        <Form.Item name='content' label='Content' rules={[{ required: true, message: 'Content is required' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name='due_date' label='Due Date' rules={[{ required: true, message: 'Due date is required' }]}>
          <CustomDatePicker />
        </Form.Item>
      </Form>
    </Modal>
  )
}
