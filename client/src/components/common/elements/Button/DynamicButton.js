import React from 'react';
import Button from '@mui/material/Button';
import getIconComponent from '../../../../utils/iconUtils';
import classes from './Button.module.css';

const DynamicButton = ({ config, row }) => {
    const {
        icon = 'mode-edit',
        text = 'Edit',
        condition = row.status !== 'Active',
        classNameDisabled = classes.buttonDisabled,
        classNameEnabled = classes.buttonEnabled,
        handleClick = () => {}
    } = config;

    return (
        <Button
            startIcon={getIconComponent(icon)}
            variant="contained"
            onClick={handleClick}
            className={`customButton ${condition ? classNameDisabled : classNameEnabled}`}
            disabled={condition}
        >
            {text}
        </Button>
    );
};

export default DynamicButton;
