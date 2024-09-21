import React, { Suspense, useTransition } from 'react'
import { Link, useNavigate, useRoutes } from 'react-router-dom'
import routes from './routes'

const AppRoutes = () => {
  const element = useRoutes(routes)
  // 加载页面显示loading
  // 页面体积很小,增加 loading 效果反而没有必要
  // 使用 useTransition 让体积小的页面无需展示 loading
  return <Suspense fallback={<div>加载中...</div>}>{element}</Suspense>
}

const App: React.FC = () => {
  const navigate = useNavigate()
  const [isPending, startTransition] = useTransition()

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <button
              disabled={isPending}
              onClick={() => {
                // 代码执行顺序上，我们会先执行路由跳转，再执行页面模块的请求任务。但是我们通过 useTransition 降低路由跳转的优先级，让他在请求任务之后执行。
                // 因此最终的结果是请求完成之后再跳转，我们就发现当跳转发生时，页面组件已经准备好了。那么 Loading 就可以不用出现。由于请求速度非常快，因此用户也不会感受到明显的卡顿
                startTransition(() => {
                  navigate('/about')
                })
              }}
            >
              关于
            </button>
          </li>
          <li>
            <Link to="/contact">联系</Link>
          </li>
        </ul>
      </nav>

      <AppRoutes />
    </div>
  )
}

export default App
