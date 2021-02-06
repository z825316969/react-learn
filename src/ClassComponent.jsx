import React from 'react'
import PropTypes from 'prop-types'

class FunComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  test = () => {
  }

  render() {
    const { title } = this.props
    return (
      <div>
        456
        <div>{ title }</div>
      </div>
    )
  }

}

FunComponent.propTypes = {
  title: PropTypes.string
}

FunComponent.defaultProps = {
  title: '撒打飞机拉胯'
}

export default FunComponent
