import React, {Component} from 'react'
import classes from './Layout.module.scss'
import Header from '../../components/Header/Header'

class Layout extends Component {
  render() {
    return (
      <div className={classes['Layout']}>
        <div className={classes['Layout__in']}>
          <Header />
          <main>
            { this.props.children }
          </main>
        </div>
      </div>
    )
  }
}

export default Layout