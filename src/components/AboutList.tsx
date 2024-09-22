import { use } from 'react'

interface IProps {
  api: Promise<string[]>
}

const AboutList: React.FC<IProps> = ({ api }) => {
  const data = use(api)
  return (
    <ul>
      {data.map((item: string, index: number) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

export default AboutList
