import { Button, Tooltip, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'

interface EditButtonProps { onClick: () => void }
interface DeleteButtonProps { onDeleteConfirm: () => void }

export const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <Tooltip title='Edit todo'>
      <Button
        onClick={onClick}
        icon={<EditOutlined />}
        shape='circle'
      />
    </Tooltip>
  )
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDeleteConfirm }) => {
  return (
    <Popconfirm
      title='Delete todo'
      description='Are you sure you want to delete this task?'
      icon={<QuestionCircleOutlined style={{ color: 'red' }}/>}
      okButtonProps={{ danger: true }}
      onConfirm={onDeleteConfirm}
    >
      <Button
        icon={<DeleteOutlined />}
        shape='circle'
        type='primary'
        danger
      />
    </Popconfirm>
  )
}
