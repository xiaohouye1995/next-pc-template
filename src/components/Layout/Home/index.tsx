import styles from './index.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.banner}>
        <div className={styles.title}>banner</div>
        <div>这是一个轮播图轮播图轮播图轮播图轮播图轮播图</div>
        <div className={styles.box}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>content</div>
        <div>这是一个内容内容内容内容内容内容内容内容内容</div>
        <div className='iconfont icon-error-1'></div>
      </div>
    </div>
  )
}
