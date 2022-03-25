import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Loading = ({ msg, styles }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 'auto', ...styles }}>
            <CircularProgress />
            <Typography sx={{ ml: '5%'}} color="dark" variant="h5">
                {msg}
            </Typography>
        </Box>
    );
};

export default Loading;
