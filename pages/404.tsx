import Link from "next/link";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    error__container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100vh',
    },
    link: {
        display: 'block',
        backgroundColor: '#0c74e2',
        color: '#fff',
        fontSize: 30,
        padding: '10px 20px',
        borderRadius: 10,
        marginTop: 50,
    }
})

const ErrorLink = () => {
    const classes = useStyles();

    return (
        <div className={classes.error__container}>
            <h1>The current link is not available.</h1>
            <Link href='/'><a className={classes.link}>Move to main page</a></Link>
        </div>
    );
}

export default ErrorLink;