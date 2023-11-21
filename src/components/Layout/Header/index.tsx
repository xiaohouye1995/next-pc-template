'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from '@/store/store'
import { getMenusTitile } from '@/store/models/global'
import styles from './index.module.scss'

export default function Header() {
  const dispatch = useDispatch()
  const { menusTitle } = useSelector(state => state.global)

  const menus = [
    {
      title: '首页',
      link: '/'
    },
    {
      title: '菜单一',
      link: '/menu1'
    },
    {
      title: '菜单二',
      link: '/menu2'
    }
  ]

  useEffect(() => {
    const title = localStorage.getItem('menusTitle')
    if (title) {
      dispatch(getMenusTitile(title))
    }
  }, [])

  const handleMenusClick = (title: string) => {
    dispatch(getMenusTitile(title))
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>logo</div>
      <div className={styles.menus}>
        {menus.map(item => {
          return (
            <Link
              key={item.title}
              href={item.link}
              scroll={false}
              onClick={() => handleMenusClick(item.title)}
            >
              <div
                className={[styles.menusItem, item.title === menusTitle ? styles.active : ''].join(
                  ' '
                )}
              >
                {item.title}
              </div>
            </Link>
          )
        })}
      </div>
    </header>
  )
}
