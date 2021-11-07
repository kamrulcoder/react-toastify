import { Button, Stack, Container } from '@mui/material';
import React from 'react';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ReactToaster = () => {

    const defaultMessage = () => {
        toast("Default Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            transition: Slide
        });
    }

    const successtMessage = () => {
        toast.success("Success Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            transition: Zoom


        });
    }

    const infotMessage = () => {
        toast.info("Info Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            transition: Bounce

        });
    }

    const errorMessage = () => {
        toast.error("Error  Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            transition: Flip

        });
    }
    const darkMessage = () => {
        toast.dark("Error  Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true
        });
    }

    const warnMessage = () => {
        toast.warn("Update  Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true
        });
    }

    const successThemeMessage = () => {
        toast.success("Update  Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            theme: "colored"
        });
    }

    const errorThemeMessage = () => {
        toast.error("Update  Toastify Message  !", {
            position: 'top-right',
            autoClose: 2000, // time in milli secondes
            draggable: true,
            theme: "colored"
        });
    }

    return (
        <Container>
            <Stack spacing={2} sx={{ m: 2 }} direction="row" flexWrap="wrap">
                <ToastContainer />
                <Button variant="contained" onClick={() => defaultMessage()} color="action">Default  Slide  toastify </Button>
                <Button variant="contained" onClick={successtMessage}>Success Zoom  toastify </Button>
                <Button variant="contained" onClick={infotMessage} color="info">Info Bounce  toastify </Button>
                <Button variant="contained" onClick={errorMessage} color="error">Error Flip toastify </Button>

            </Stack>
            <Stack spacing={2} sx={{ m: 2 }} direction="row" flexWrap="wrap">
                <Button variant="contained" onClick={warnMessage} color="warning">Warning   toastify </Button>
                <Button variant="contained" onClick={darkMessage} style={{ background: "#000" }}>Error  toastify </Button>
            </Stack>


            <Stack spacing={2} sx={{ m: 5 }} direction="row" flexWrap="wrap">
                <Button variant="contained" onClick={successThemeMessage} color="success">Success Theme    toastify </Button>
                <Button variant="contained" onClick={errorThemeMessage} color="error">Error   Theme   toastify </Button>
            </Stack>
        </Container>
    );
};

export default ReactToaster;