import React, { useEffect, useState } from 'react'

const About: React.FC = () => {
  const [listData, setListData] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      // 模拟网络请求
      await new Promise(resolve => setTimeout(resolve, 500))

      const mockData = [
        '我们是一家创新型科技公司',
        '致力于提供优质的软件解决方案',
        '拥有专业的开发团队',
        '为客户创造价值是我们的使命'
      ]

      setListData(mockData)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>关于我们</h1>
      <ul>
        {listData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default About
