import React, {useImperativeHandle, forwardRef} from 'react'
import PropTypes from 'prop-types'

function FunComponent(props, ref) {
  const {title} = props

  useImperativeHandle(ref, () => ({
    test: test,
    obj: this,
  }))

  function test(params) {
    const test = {a: 1}
    console.log('params :>> ', params)
    console.log(title)
  }

  return (
    <div>
      456
      <div>{title}</div>
    </div>
  )
}

// FunComponent.propTypes = {
//   title: PropTypes.string
// }

// FunComponent.defaultProps = {
//   title: '撒打飞机拉胯'
// }

export default forwardRef(FunComponent)
