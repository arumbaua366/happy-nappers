import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './AsleepBtnWide.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      fullWidth: true,
    },
  },
}));

export default function Asleep() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button id="sleep-btn" href="/asleep" variant="dark">
        Sleep
      </Button>
    </div>
  );
}
