import React, {Component} from 'react'

export class FormDemo extends Component {
  render() {
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
