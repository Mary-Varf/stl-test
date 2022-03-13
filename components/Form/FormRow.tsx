import React, { useState } from "react";
import PropTypes from 'prop-types';
import Autocomplete from "./Autocomplete";
import { useStyles } from './styles';

interface FormRowProps {
    value: string,
    label: string,
    handleChange: (value: string, label: string) => void,
};

const FormRow = ({ label, value, handleChange }: FormRowProps): JSX.Element => {
    const classes = useStyles();
    const [ changedValue, setChangedValue ] = useState(value);
    const [ error, setError ] = useState(false);
    let required = true;
    let disabled = false;

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (label === 'name') {
            setChangedValue(event.target.value.replace(/[^a-zA-Z\s]{2,}/ig, ''));
        }
        if (label === 'age') {
            const regExp = /[^0-9]/ig;
            const age = Number(event.target.value.replace(regExp, ''));
            if (age > 0 && age < 101) {
                setError(false);
            } else {
                setError(true);
            }
            setChangedValue(String(age));
        }
        if (label === 'email') {
            const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            console.log(regExp.test(event.target.value))
            if (!regExp.test(event.target.value)) {
                setError(true);
            } else {
                setError(false);
            }
            setChangedValue(event.target.value);
        }
        handleChange(event.target.value, label);
    };
    if (label === 'id') {
        required = true;
        disabled = true;
    }

    return (
        <>
        {label !== 'country' ? 
            <div className={classes.input__container}>
                <input 
                    required={required}
                    disabled={disabled}
                    placeholder={label}
                    className={error ? classes.error : classes.input}
                    value={changedValue ?? ''}
                    onChange={handleChangeInput}/>
                <label>{label}</label>
            </div>
         : 
            <div className={classes.input__container}>
                <Autocomplete country={changedValue} handleChange={handleChange}/>
                <label>{label}</label>
            </div>

         } 

        </>
    )
};

export default FormRow;

FormRow.propTypes = {
    changedValue: PropTypes.number,
};