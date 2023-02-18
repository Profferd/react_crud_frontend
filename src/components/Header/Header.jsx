import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const getClasses = makeStyles(() => ({
  container: {
    color: 'black',
    alignItems: 'center',
    display: 'flex',
    background: '#008080',
    height: '60px',
    'font-style': 'italic',
  },
}));

const Header = () => {
  const classes = getClasses();
  return (
    <div className={classes.container}>
      <h1>Library</h1>
      .UA
    </div>
  )
};

export default Header;
