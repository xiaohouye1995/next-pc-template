'use client'
import { useState } from 'react'
import { Button } from 'antd'
import styles from './page.module.scss'
import { getMenus } from '@/api/common.js'

export default function Menus1() {
  const [menus, setMenus] = useState<any>()
  const clickApi = () => {
    getMenus().then(res => {
      console.log('menus: ', res)
      setMenus(res)
    })
  }
  return (
    <div className={styles.menus1}>
      <h2>菜单一</h2>
      <Button onClick={() => clickApi()}>调用接口</Button>
      <div>{process.env.NEXT_PUBLIC_API}</div>
      <div>{menus}</div>
    </div>
  )
}
