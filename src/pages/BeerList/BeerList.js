import React, {Component} from 'react'
import classes from './BeerList.module.scss'

class BeerList extends Component {
  render() {
    return (
      <div className={classes['BeerList']}>
        <div className={['container']}>
          <h1 style={{textAlign: 'center', marginBottom: '25px'}}>Список певчанских</h1>
        </div>
      </div>
    )
  }
}

export default BeerList