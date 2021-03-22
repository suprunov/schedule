import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Navbar} from "./components/Navbar";
import {Content} from "./components/Content";
import {Copyright} from "./components/Copyright"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00858f',
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      textTransform: "uppercase",
      fontWeight: 900,
    },
    h2: {
      fontSize: "1.2rem",
      textTransform: "uppercase",
      fontWeight: 800,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 700,
    }
  }
});
const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  sidebar: {}
}));

export const App = () => {
  const classes = useStyles();
  const [view, setView] = useState('schedule')
  const onChange = (selectedView) => {
    setView(selectedView)
  }
  return (
      <ThemeProvider theme={theme}>
        <Navbar view={view} onChange={onChange}/>
        <CssBaseline/>
        <main className={classes.layout}>
          <Content view={view} />
          <Copyright/>
        </main>
      </ThemeProvider>
  );
}






