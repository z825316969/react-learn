import React from 'react'
import ComponentLife from './ComponentLife'
import FormDemo from './FormDemo'
import RefsForm from './RefsForm'
import HookRefs from './HookRefs'
import FetchDemo from './FetchDemo'
import TableDemo from './TableDemo'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {/* <ComponentLife title='123' /> */}
        {/* <FormDemo/> */}
        {/* <RefsForm/> */}
        {/* <HookRefs/> */}
        {/* <FetchDemo /> */}
        <TableDemo />
      </>
    )
  }
}

export default App
