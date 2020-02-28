import React from 'react';
import classes from './Cabinet.module.scss';
import Button from '../UI/Button/Button';

const Cabinet = props => {
  return (
    <div className={classes['Cabinet']}>
      <Button
        type="button"
        className={classes['Cabinet__button']}
      >
        Кабинет
      </Button>
    </div>
  )
}

export default Cabinet