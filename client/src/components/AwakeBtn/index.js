import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { yellow } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.margin} href="/Awake">
        awake
      </ColorButton>
    </div>
  );
}
