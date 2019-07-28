import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import * as urls from 'constant/urls.js'

import Dashboard  from 'component/Dashboard'

import reg        from 'app/reg'
import login      from 'app/login'
import homeuser   from 'app/homeuser'
import homecomp   from 'app/homecomp'
import projquery  from 'app/projquery'
import projadd    from 'app/projadd'
import question   from 'app/question'

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
                  <Route exact path='/reg'       component={reg}/>
                  <Route exact path='/login'     component={login}/>
                  <Route exact path='/projquery' component={projquery}/>
                  <Route exact path='/projadd'   component={projadd}/>
                  <Route exact path='/homeuser'  component={homeuser}/>
                  <Route exact path='/homecomp'  component={homecomp}/>
                  <Route exact path='/question'  component={question}/>
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
