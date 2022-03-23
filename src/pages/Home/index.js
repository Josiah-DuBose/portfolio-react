import React from 'react';
import Box from '@mui/material/Box';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import image from '../../assets/gradient.jpg';

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: `url(${image})`,
                    display: 'flex',
                    flowGrow: 1,
                    justifyContent: { md: 'space-evenly', xs: 'center' },
                    alignItems: 'center',
                    height: '90vh',
                    width: '100%',
                    backgroundSize: { md: '30% 100%', xs: '0%' },
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Box
                    sx={{
                        height: '100%',
                        width: { md: '50%', xs: '90%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <LeftCard />
                </Box>
                <Box
                    sx={{
                        height: '100%',
                        width: '50%',
                        display: { md: 'flex', xs: 'none' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '10%',
                    }}
                >
                    <RightCard />
                </Box>
            </Box>
        </>
    );
}

export default Home;
