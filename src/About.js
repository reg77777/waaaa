import {useState,useEffect} from 'react';
import {Typography,Grid,Box} from '@material-ui/core';
import {CSSTransition} from 'react-transition-group';

function About(){
    const [mouseX,setMouseX]=useState(0);
    const [mouseY,setMouseY]=useState(0);

    useEffect(() => {
        const mouseMoveListener = (event) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
        };
        window.addEventListener('mousemove',mouseMoveListener);
        return () => {
            window.removeEventListener('mousemove',mouseMoveListener);
        };
    },[]);


    return (
        <div className='About'>
            <Box m={5}/>
            <Grid container alginItems='center' justify='center'>
                <Grid item>
                    <Typography variant='h5'>
                        このページについて
                    </Typography>
                </Grid>
            </Grid>
            <div style={{background:'red',width:'30px',height:'30px',transform:`translate(${mouseX}px)`,position:'fixed'}}/>
            <ul>
              <li>mouseX : {mouseX}</li>
              <li>mouseY : {mouseY}</li>
            </ul>
            <Box m={5}/>
            <Grid container alginItems='center' justify='center' style={{transform:`scale(${mouseX/500},${mouseX/500})`,position:'fixed'}}>
                <Grid item>
                    <Typography variant='h1'>
                        うわああああああああああああ
                    </Typography>
                    <Typography variant='h1'>
                        ああああああああああああああ
                    </Typography>
                    <Typography variant='h1'>
                        ああああああああああああああ
                    </Typography>
                    <Typography variant='h1'>
                        ああああああああああああああ
                    </Typography>
                </Grid>
            </Grid>

        </div>
    );
}

export default About;
