import React, { useState } from 'react';
import FormRow from './FormRow';
import { UserData } from '../../types/types';
import ErrorMessage from '../ErrorMessage';
import { createUseStyles } from 'react-jss';

interface FormParams {
    userData: UserData
};

const useStyles = createUseStyles({
    button__block: {
        display: 'flex',
        paddingTop: 30,
        justifyContent: 'space-evenly',
    },
    button_pink: {
        backgroundColor: '#fd0090',
    },
    user_card: {
        backgroundColor: '#529dee',
        margin: '50px 0',
        padding: 50,
        borderRadius: 10,
        boxShadow: '0 0 10px 5px rgba(221, 221, 221, 1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
});

const Form = ({ userData }: FormParams): JSX.Element => {
    const classes = useStyles();
    const [user, setUser] = useState(userData);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const [messageType, setMessageType] = useState('');

    const handleSave = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const url = user.id ? 'http://localhost:3001/usersList/' + user.id : 'http://localhost:3001/usersList';
        const method = user.id ? 'put' : 'post';
        if (!user.id) {
            delete user[0];
        }

        const putData = async (user: UserData) => {
                const response = await fetch(url, {
                    method,
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(user)
                  });;
                if (!response.ok) {
                    setMessageType('');
                    setError(true);
                    setMessageType('error');
                    setSuccess(false);
                } else {
                    setMessageType('');
                    setError(false);
                    setSuccess(true);
                    if (user.id) {
                        setMessageType('updated');
                    } else {
                        setMessageType('created');
                    }
                }
                const updatedUser = await response.json();
                setUser(updatedUser);
                window.location.assign('http://localhost:3000/users/' + updatedUser.id)
        }
        putData(user)
    };
    const handleChange = (value: string, label: string) => {
        setUser({...user, [label]: value});
    };
    const handleClose = (): void => {
        setError(false);
        setMessageType('');
        setSuccess(false);
    };

    return (
        <>
            {(error || success || deleteSuccess) ? <ErrorMessage messageType={messageType} handleClose={handleClose}/>: <></>}
            <form id='form' className={classes.user_card} onSubmit={handleSave}>
                {Object.keys(user).map((key) => {
                    return (
                        <FormRow value={user[key]} key={key} label={key} handleChange={handleChange}/>
                    );
                })}
                <div className={classes.button__block}>
                    <button type='submit' className='button' value='Save form' disabled={success}>Save form</button>
                </div>
            </form>
        </>
    );
};

export default Form;