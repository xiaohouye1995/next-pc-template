'use client'
import { FloatButton } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

export default function Floatbar() {
  return (
    <FloatButton.BackTop
      className={styles.backTop}
      icon={<UpOutlined className='backTop-icon' />}
      visibilityHeight={200}
    />
  )
}
