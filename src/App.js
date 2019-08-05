import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import * as urls from 'constant/urls.js'
import jwt from './util/token'
import Dashboard  from 'component/Dashboard'

import reg        from 'app/reg'
import login      from 'app/login'
import homeuser   from 'app/homeuser'
import homecomp   from 'app/homecomp'
import projquery  from 'app/projquery'
import projadd    from 'app/projadd'
import question   from 'app/question'


@inject('userActions')
@observer
class App extends React.Component {
  constructor(props) {
    super(props)
    let token = jwt.getToken()
    if (token && token!=='undefined') {
      props.userActions.autoLogin()
    } else {
      window.location.assign(
        location.origin + location.pathname + '#' + '/login'
      )
    }
  }



  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={() => (
            <div className='app-root'>
              <Dashboard>
                <Switch>
                  <Route exact path='/'          component={projquery}/>
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
