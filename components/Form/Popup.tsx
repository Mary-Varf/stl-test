import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    error_popup__container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#fff',
        opacity: 0.9,
    },
    popup__card: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        textAlign: 'center',
        padding: 50,
        backgroundColor: '#529dee',
        borderRadius: 10,
        boxShadow: '0 0 10px 5px rgba(221, 221, 221, 1)',
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 20,
        fontSize: 25,
        cursor: 'pointer',
        color: '#fff',
        '&:hover': {
            color: '#000',
        }
    }
});

interface PopupProps {
    handleClose: () => void,
    messageType: string,
};

const Popup = ({ messageType, handleClose }: PopupProps) => {
    const classes = useStyles();
    let message = 'Sorry, something went wrong, please try again';
    
    if (messageType === 'created') {
        message = 'Great! New user have saved';
    } else if (messageType === 'deleted') {
        message = 'User deleted';
    } else if (messageType === 'updated'){
        message = 'Great! User information have been updated';
    }
    return (
        <div className={classes.error_popup__container}>
            <div className={classes.popup__card}>
                <div className={classes.close} onClick={handleClose}>✖</div>
                <h2>{message}</h2>
            </div>
        </div>
    );
};

export default Popup;