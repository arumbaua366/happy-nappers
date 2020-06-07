import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './AwakeBtn.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      fullWidth: true,
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className="awake-btn" href="/awake" variant="outlined" style={{fullWidth: true,}}>
        awake
      </Button>
    </div>
  );
}
