import './index.css'

const FaqItem = props => {
  const {eachList, btnClicked} = props
  const {id, questionText, answerText, isIconClicked} = eachList

  const iconUrl = isIconClicked
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const iconAlt = isIconClicked ? 'minus' : 'plus'

  const onClickBtn = () => {
    btnClicked(id)
  }

  const displayAnswer = isIconClicked ? (
    <p className="answer">{answerText}</p>
  ) : (
    ''
  )
  const hrLine = isIconClicked ? <hr className="hr-line" /> : ''

  return (
    <li className="li-container">
      <div className="question-container">
        <h1 className="question">{questionText}</h1>
        <button className="button" type="button" onClick={onClickBtn}>
          <img src={iconUrl} alt={iconAlt} />
        </button>
      </div>
      {hrLine}
      {displayAnswer}
    </li>
  )
}
export default FaqItem
