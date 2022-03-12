import Head from 'next/head';
import Router from 'next/router';
import { createUseStyles } from 'react-jss';

interface HeaderProps {
    keywords: string,
}

const useStyles = createUseStyles({
    button: {
        marginLeft: 20
    },
    header__navbar: {
        position: 'fixed',
        width: '100%',
        top: 0,
        background: '#529dee',
        boxShadow: '0 0 10px 5px rgba(221, 221, 221, 1)',
        zIndex: 10,
    },
    navbar: {
        display: 'flex',
        justifyContent: 'right',
        padding: '10px 0',
    }
})

const Header = ({ keywords }: HeaderProps): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Head>
                <title>Test STL</title>
                <meta name='keywords' content={'test stl ' + keywords} />
            </Head>
            <div className={classes.header__navbar}>
                <div className='container'>
                    <ul className={classes.navbar}>
                        <button className={classes.button} onClick={() => Router.push('/')}>Users</button>
                        <button className={classes.button} onClick={() => Router.back()}>Go Back</button>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Header;