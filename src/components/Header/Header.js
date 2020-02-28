import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import Cabinet from '../Cabinet/Cabinet'
import classes from './Header.module.scss'

class Header extends Component {
  render() {
    return (
      <div className={classes['Header']}>
        <Nav />
        <Cabinet/>
      </div>
    )
  }
}

export default Header