import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import {Typography,Button,Box,Grid} from '@material-ui/core';
import Content from './Content'

import Lifegame from './Lifegame'

function Home(){
    return (
        <div className='Home'>
            <Box m={5}/>
            <Grid container alginItems='center' justify='center'>
                <Grid item xs={10}>
                    <Content title='ライフゲーム' url='/lifegame'/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
