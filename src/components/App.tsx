import React from 'react'
import TodoTemplate from 'components/TodoTemplate'
import { Switch, Route } from 'react-router-dom'

const App = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        component={TodoTemplate}
      />
    </Switch>
  )
}

export default App