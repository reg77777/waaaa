import {BrowserRouter,Route,Routes,Link,Navigate} from 'react-router-dom';
import {AppBar,Toolbar,Typography,Button,Box} from '@material-ui/core';
import {createTheme,ThemeProvider} from '@material-ui/core/styles';
import MyRoutes from './MyRoutes'

const Theme=createTheme({
    palette: {
        primary:{
            main:'#2b2b2b',
        },
        secondary:{
            main: '#ffffff',
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter>
    <div className='App'>
            <AppBar position='static' color='primary' elevation={0}>
                <Toolbar>
                    <Typography color='secondary'>いろんなもの</Typography>
                    <Box m={2}/>
                    <Button
                      color='secondary'
                      component={Link}
                      to='/waaaa'
                    >
                        HOME
                    </Button>
                    <Box m={1}/>
                    <Button
                      color='secondary'
                      component={Link}
                      to='/waaaa/about'
                    >
                        ABOUT
                    </Button>
                </Toolbar>
            </AppBar>

            <MyRoutes/>

    </div>
    </BrowserRouter>
    </ThemeProvider>
  );

}

export default App;
