import React, { Suspense } from 'react'

import AboutList from '../components/AboutList'

const api = async (): Promise<string[]> => {
  const mockData = [
    '我们是一家创新型科技公司',
    '致力于提供优质的软件解决方案',
    '拥有专业的开发团队',
    '为客户创造价值是我们的使命'
  ]

  // 模拟网络请求
  return new Promise<string[]>(resolve =>
    setTimeout(() => resolve(mockData), 500)
  )
}

const About: React.FC = () => {
  const _api = api()
  return (
    <div>
      <h1>关于我们</h1>
      <Suspense fallback={<div>加载中...</div>}>
        <AboutList api={_api} />
      </Suspense>
    </div>
  )
}

export default About
