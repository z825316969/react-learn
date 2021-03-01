import React, {Component, createRef} from 'react'
import FormDemo from './FormDemo'

export default class RefsForm extends Component {
  constructor(props) {
    super(props)
    this.myRef = createRef()
  }

  // componentDidMount() {
  //   this.myRef.current.style.color = "red"
  // }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.myRef)
  }

  render() {
    return (
      <div>
        refsForm
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input type="file"></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
