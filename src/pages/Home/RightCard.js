import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import soar from '../../assets/Soar-pic.png';

const RightCard = () => {
    return (
        <Card
            sx={{
                width: '100%',
                margin: 'auto',
                alignSelf: 'center',
            }}
            elevation={0}
        >
            <CardContent>
                <img style={{ width: '100%', height: 'auto' }} src={soar} alt="soar" />
            </CardContent>
        </Card>
    );
};

export default RightCard;
