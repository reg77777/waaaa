import {Link} from 'react-router-dom';
import {Typography,Box,Button} from '@material-ui/core';

function Content(props){
    return(
        <div className='Content'>
            <Button
                variant='contained'
                component={Link}
                to={props.url}
                style={{width:'200px',height:'60px'}}
            >
                <Typography>
                    {props.title}
                </Typography>
            </Button>
        </div>
    );
}

export default Content;
