import React, { Component } from 'react'
import queryString from 'query-string'

export class FormDemo extends Component {
  render() {
    console.log('this.props :>> ', this.props)
    console.log('this.props :>> ', queryString.parse(this.props.location.search))
    console.log('window.location.search :>> ', window.location)
    console.log(queryString.parse(window.location.search))
    return (
      <div>
        <form>
          <label>
            名字:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}

export default FormDemo
