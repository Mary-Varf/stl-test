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
        setChangedValue(event.target.value);
        handleChange(event.target.value, label);
        setError(false);
    };
    if (label === 'id') {
        required = true;
        disabled = true;
    }

    return (
        <>
        {label !== 'country' ? 
            <div className={classes.input__container}>
                <input required={required} disabled={disabled} placeholder={label} className={error ? classes.error : classes.input} value={changedValue ?? ''} onChange={handleChangeInput}/>
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