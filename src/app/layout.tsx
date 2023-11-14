import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import NextTopLoader from 'nextjs-toploader'
import theme from '@/theme/themeConfig'
import { Providers } from '@/store/provider'
import StyledComponentsRegistry from '@/utils/AntdRegistry'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Floatbar from '@/components/Layout/Floatbar'
import '@/lib/iconfont/iconfont.css'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'next-pc-template',
  description: 'next-pc-template，基于next.js的PC端项目模板',
  keywords: ['Next.js', 'React', 'JavaScript', '项目模板'],
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang='en'>
        <head></head>
        <body>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
              <NextTopLoader color='#c83232' />
              <main className='wrapper'>
                <Header />
                {children}
                <Floatbar />
                <Footer />
              </main>
            </ConfigProvider>
          </StyledComponentsRegistry>
        </body>
      </html>
    </Providers>
  )
}
