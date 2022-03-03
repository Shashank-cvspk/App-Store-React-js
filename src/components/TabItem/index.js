// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, onClickUpdate} = props
  const {tabId, displayText} = tabsList
  const onUpdate = () => {
    onClickUpdate(tabId)
  }

  return (
    <li className="items">
      <button type="button" className="btn" onClick={onUpdate}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
