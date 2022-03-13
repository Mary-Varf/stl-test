import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    input__container: {
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'space-between',
        '&:last-child': {
            marginBottom: 0
        }
    },
    input: {
        width: '70%',
        padding: '5px 15px',
        fontSize: 18,
        outline: 'none',
        borderRadius: 10,
        border: '2px solid white',
        '&:focus': {
            boxShadow: '0 0 5px 5px rgba(221, 221, 221, 1)',
        },
    },
    error: {
        width: '70%',
        padding: '5px 15px',
        fontSize: 18,
        outline: 'none',
        borderRadius: 10,
        border: '2px solid white',
        backgroundColor: '#fd0090',
    }
});