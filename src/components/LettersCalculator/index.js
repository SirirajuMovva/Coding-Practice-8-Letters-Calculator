import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputPhrase = event => {
    const {value} = event.target

    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="main-container">
        <div className="letter-calculate-container">
          <div className="calculate-con">
            <h1 className="heading">
              Calculate <br /> the Letters you enter
            </h1>
            <div className="input-number-for">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="input-con"
                id="phraseText"
                onChange={this.onChangeInputPhrase}
                type="text"
                value={inputPhrase}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="letter-container">
              No.of letters: {inputPhrase.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image-con"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
