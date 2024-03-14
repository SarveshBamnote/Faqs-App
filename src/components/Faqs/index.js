import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {lists: faqsList}
  }

  btnClicked = id => {
    this.setState(prevState => ({
      lists: prevState.lists.map(each => {
        if (id === each.id) {
          return {...each, isIconClicked: !each.isIconClicked}
        }
        return each
      }),
    }))
  }

  render() {
    const {lists} = this.state

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul-container">
            {lists.map(eachList => (
              <FaqItem
                eachList={eachList}
                key={eachList.id}
                btnClicked={this.btnClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
