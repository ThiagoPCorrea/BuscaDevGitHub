import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export const DangerAlert = ({ state,setState, text }) => {
    return (
        <Collapse in={state}>
            <Alert
                severity="error"
                action={
                    <IconButton
                        aria-label="fechar"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setState(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {text}
            </Alert>
        </Collapse>
    );
}


export const SuccessAlert = ({ state,setState, text }) => {
    return (
        <Collapse in={state}>
            <Alert
                severity="success"
                action={
                    <IconButton
                        aria-label="fechar"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setState(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
            >
                {text}
            </Alert>
        </Collapse>
    );
}