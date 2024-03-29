import React from 'react'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

import './app.scss'
import ComponentLife from './ComponentLife'
import FormDemo from './FormDemo'
import RefsForm from './RefsForm'
import HookRefs from './HookRefs'
import FetchDemo from './FetchDemo'
import TableDemo from './TableSrotDemo'
import TableSorter from './TableSorter'
import RadioDemo from './RadioDemo'
import Formilyjs from './Formilyjs'
import ProTable from './ProTable'

class App extends React.Component {
  // constructor() {
  //   this.state = {
  //     time: 0,
  //   }
  // }
  state = {
    time: 0,
  }

  handleChangeTime = () => {
    this.setState({
      time: new Date().getTime(),
    })
  }

  render() {
    const { time } = this.state
    console.log('this :>> ', this)
    return (
      <>
        <Router>
          <button onClick={this.handleChangeTime}>点我更新props</button>
          {time}
          <ul className="list">
            <li>
              <Link to="/">ComponentLife</Link>
            </li>
            <li>
              <Link to="/FormDemo?name=1&age=2">FormDemo</Link>
            </li>
            <li>
              <Link to="/RefsForm">RefsForm</Link>
            </li>
            <li>
              <Link to="/HookRefs">HookRefs</Link>
            </li>
            <li>
              <Link to="/FetchDemo">FetchDemo</Link>
            </li>
            <li>
              <Link to="/TableDemo">TableDemo</Link>
            </li>
            <li>
              <Link to="/TableSorter">TableSorter</Link>
            </li>
            <li>
              <Link to="/RadioDemo">RadioDemo</Link>
            </li>
            <li>
              <Link to="/Formilyjs">Formilyjs</Link>
            </li>
            <li>
              <Link to="/ProTable">ProTable</Link>
            </li>
          </ul>
          <Route exact path="/" component={ComponentLife} />
          <Route path="/FormDemo" component={FormDemo} />
          <Route path="/RefsForm" component={RefsForm} />
          <Route path="/HookRefs" component={HookRefs} />
          <Route path="/FetchDemo" component={FetchDemo} />
          <Route path="/TableDemo" component={TableDemo} />
          <Route path="/TableSorter" component={TableSorter} />
          <Route path="/RadioDemo" component={RadioDemo} />
          <Route path="/Formilyjs" component={Formilyjs} />
          <Route path="/ProTable" component={ProTable} />
        </Router>
      </>
    )
  }
}

export default App
