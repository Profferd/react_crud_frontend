import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const getClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'start',
  },
  content: {
    display: 'flex',
    width: '100%',
  },
}));

const PageContainer = ({
                         children,
                       }) => {
  const classes = getClasses();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
};

export default PageContainer;
