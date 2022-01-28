import {Link} from 'react-router-dom';
import {Typography,Box,Button} from '@material-ui/core';

function Content(props){
    return(
        <div className='Content'>
            <Box p={2}>
                <Button
                    color='primary'
                    component={Link}
                    to={props.url}
                >
                    <Typography>
                        {props.title}
                    </Typography>
                </Button>
            </Box>
        </div>
    );
}

export default Content;
