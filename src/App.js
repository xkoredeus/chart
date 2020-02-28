import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import BeerList from './pages/BeerList/BeerList'

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          {/*<Route path="/fav-list" component={FavList} />*/}
          <Route path="/" component={BeerList} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
