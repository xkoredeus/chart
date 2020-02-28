import React, {Component} from 'react'
import classes from './Nav.module.scss'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'Активность', exact: true},
    {to: '/complaints', label: 'Жалобы', exact: false},
    {to: '/demography', label: 'Демография', exact: false},
    {to: '/users', label: 'Пользователи', exact: false},
]

class Nav extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <NavLink
          to={link.to}
          exact={link.exact}
          activeClassName={classes.active}
          onClick={this.clickHandler}
          className={classes['Nav__link']}
          key={index}
        >
          {link.label}
        </NavLink>
      )
    })
  }
  render() {
    return (
      <div className={classes['Nav']}>
        { this.renderLinks() }
      </div>
    )
  }
}

export default Nav