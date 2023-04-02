import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {
    return(
        <Box
            component="form" noValidate autoComplete="off"
        >
            <div>
                <TextField
                    error
                    id="outlined-error"
                    label="error"
                    defaultValue="Hello World"
                    />
            </div>
        </Box>
    )
}

export default Contact