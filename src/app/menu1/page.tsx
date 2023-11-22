'use client'
import { useState } from 'react'
import { Button, message } from 'antd'
import styles from './page.module.scss'
import { getMenus } from '@/api/common.js'

export default function Menus1() {
  const [menus, setMenus] = useState('')
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()

  const clickApi = () => {
    setLoading(true)
    setMenus('')
    getMenus().then((res: any) => {
      setTimeout(() => {
        setMenus(JSON.stringify(res))
        setLoading(false)
        messageApi.open({
          type: 'success',
          content: '接口请求成功！'
        })
      }, 2500)
    })
  }
  return (
    <div className={styles.menus1}>
      {contextHolder}
      <h2>菜单一</h2>
      <Button type='primary' loading={loading} onClick={() => clickApi()}>
        调用接口
      </Button>
      <div>{process.env.NEXT_PUBLIC_API}</div>
      <div>{menus}</div>
    </div>
  )
}
