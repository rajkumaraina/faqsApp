import './index.css'

const EachItem = props => {
  const {item, check} = props
  const {id, questionText, answerText, isClicked} = item
  const ButtonClick = () => {
    check(id)
  }
  const imageElement = isClicked ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      className="buttonImg"
      alt="minus"
      onClick={ButtonClick}
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      className="buttonImg"
      alt="plus"
      onClick={ButtonClick}
    />
  )
  const answer = isClicked ? (
    <>
      <hr className="horizontalLine" />
      <p className="answerPara">{answerText}</p>
    </>
  ) : null
  return (
    <li className="listItem">
      <div className="item">
        <div className="QuestionContainer">
          <h1 className="question">{questionText}</h1>
          {imageElement}
        </div>
        {answer}
      </div>
    </li>
  )
}
export default EachItem
