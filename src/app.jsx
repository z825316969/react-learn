import React from 'react'
import ComponentLife from './ComponentLife'
import FormDemo from './FormDemo'
import RefsForm from './RefsForm'
import HookRefs from './HookRefs'
import FetchDemo from './FetchDemo'
import TableDemo from './TableSrotDemo'
import TableSorter from './TableSorter'
import RadioDemo from './RadioDemo'
import { HashRouter as Router, Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <ul>
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
          </ul>
          <Route exact path="/" component={ComponentLife} />
          <Route path="/FormDemo" component={FormDemo} />
          <Route path="/RefsForm" component={RefsForm} />
          <Route path="/HookRefs" component={HookRefs} />
          <Route path="/FetchDemo" component={FetchDemo} />
          <Route path="/TableDemo" component={TableDemo} />
          <Route path="/TableSorter" component={TableSorter} />
          <Route path="/RadioDemo" component={RadioDemo} />
        </Router>
      </>
    )
  }
}

export default App
