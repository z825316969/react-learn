import React from 'react'
// import FunComponent from './FunctionComponent'
import { DatePicker } from 'antd'

class ComponentLife extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10,
    }
    this.myRef = React.createRef()
  }

  static getDerivedStateFromProps(props, state) {
    console.log('props, state :>> ', props, state)
    return {
      a: 2,
    }
  }

  componentDidMount() {
    console.log('组件渲染完成执行')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot, 'prevProps, prevState, snapshot')
    // if (this.state.count < 15) {
    //   this.handleChangeCount()
    // }
  }

  getSnapshotBeforeUpdate() {
    return {
      b: 2,
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount + 组件销毁的时候执行')
  }

  handleChangeCount = () => {
    this.setState(
      (state, props) => {
        return {
          count: state.count + 1,
        }
      },
      (state, props) => {
        console.log('state, props', state, props)
      },
    )
  }

  render() {
    return (
      <>
        <div>
          <DatePicker />
        </div>
        <button onClick={this.handleChangeCount}>增加</button>
        <span>{this.state.count}</span>
        {/* <FunComponent /> */}
      </>
    )
  }
}

export default ComponentLife
