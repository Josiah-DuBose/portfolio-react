import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import soar from '../../assets/Soar-pic.png';
import ContactModal from './Contact';

const LeftCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
        <Card
            sx={{
                width: { md: '75%', xs: '100%' },
                margin: 'auto',
                alignSelf: 'center',
            }}
            elevation={0}
        >
            <CardContent>
                <Typography sx={{ fontSize: {md: 42, xs: 28}, width: '85%', mb: '4%', fontWeight: 'bold' }} component="div">
                    Web applications designed to propel your business to new heights.
                </Typography>
                <Typography variant="h6">
                    We help you prepare your business for the future and make it
                    stand out among the rest.
                </Typography>
                <Box
                    sx={{
                        display: { md: 'none', xs: 'block' },
                        mt: '10%',
                    }}
                >
                     <img style={{ width: '100%', height: 'auto' }} src={soar} alt="soar" />
                </Box>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: {
                        md: 'start',
                        xs: 'center',
                    }
                }}
            >
                <Button
                    sx={{
                        fontSize: '.8rem',
                        p: '20px 50px 20px 50px',
                        color: 'white',
                    }}
                    color="primary"
                    variant='contained'
                    onClick={handleOpen}
                >
                    Contact
                </Button>
                <Button
                    sx={{
                        fontSize: '.8rem',
                        p: '20px 50px 20px 50px',
                        color: 'white',
                    }}
                    color="info"
                    variant='contained'
                >
                    Learn More
                </Button>
            </CardActions>
        </Card>
        <ContactModal open={open} handleClose={handleClose} />
        </>
    );
};

export default LeftCard;
