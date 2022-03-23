import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const LeftCard = () => {
    return (
        <Card
            sx={{
                width: '75%',
                margin: 'auto',
                alignSelf: 'center',
            }}
            elevation={0}
        >
            <CardContent>
                <Typography sx={{ width: '85%', mb: '4%', fontWeight: 'bold' }} variant="h3" component="div">
                    Web applications designed to propel your business to new heights.
                </Typography>
                <Typography variant="h6">
                    We help you prepare your business for the future and make it
                    stand out among the rest.
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{
                        fontSize: '.8rem',
                        borderRadius: 50,
                        p: '20px 50px 20px 50px',
                        color: 'white',
                    }}
                    color="primary"
                    variant='contained'
                >
                    Contact
                </Button>
                <Button
                    sx={{
                        fontSize: '.8rem',
                        borderRadius: 50,
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
    );
};

export default LeftCard;
