import { makeStyles } from '@mui/styles';
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import image from '../../assets/gradient.jpg';

const useStyles = makeStyles({
    container: {
        backgroundImage: `url(${image})`,
        display: 'flex',
        flowGrow: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '90vh',
        width: '100vw',
        backgroundSize: '30% 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
    },
    left: {
        height: '100%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        height: '100%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10%',
    },
});


const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <LeftCard />
            </div>
            <div className={classes.right}>
                <RightCard />
            </div>
        </div>
    );
}

export default Home;
