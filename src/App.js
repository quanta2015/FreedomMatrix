import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import * as urls from 'constant/urls.js'

import Dashboard  from 'component/Dashboard'

import home     from 'app/home'
import project  from 'app/project'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={() => (
            <div className='app-root'>
              <Dashboard>
                <Switch>
                  <Route exact path='/home'    component={home}/>
                  <Route exact path='/project' component={project}/>
                </Switch>
              </Dashboard>
            </div>
           )} />
        </Switch>
      </Router>
    )
  }
}

export default App;
