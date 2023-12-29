import {Component} from 'react'

import './index.css'

import EachItem from '../FaqItem'

const initialFaqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
    isClicked: false,
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
    isClicked: false,
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
    isClicked: false,
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
    isClicked: false,
  },
]

class Faqs extends Component {
  state = {faqsList: initialFaqsList}

  check = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(each => {
        if (each.id === id) {
          return {...each, isClicked: !each.isClicked}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList, doesButtonClicked} = this.state
    return (
      <div className="mainContainer">
        <div className="insideContainer">
          <h1 className="faqHeading">FAQs</h1>
          <ul className="unordered">
            {faqsList.map(each => (
              <EachItem
                item={each}
                key={each.id}
                check={this.check}
                doesButtonClicked={doesButtonClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
