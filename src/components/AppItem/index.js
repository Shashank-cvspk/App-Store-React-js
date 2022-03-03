// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, category, imageUrl} = appsList

  return (
    <li className="item">
      <p>{appName}</p>
      <img src={imageUrl} className="logo-size" alt="appName" category={category} />
    </li>
  )
}

export default AppItem
