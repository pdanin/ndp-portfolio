import { Grid2 as Grid, Typography } from '@mui/material';
import Logo from '../../assets/logo.png';
import Image from './Image';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {

    return (
        <Grid container
            sx = {{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                padding: "0.5em",
                paddingTop: "4em"
            }}
        >
            <Typography variant="body2" sx={{textAlign: "right", color: "#E0B1BC", fontSize: "1em"}}>
                v1.0 of dani.nina's portfolio. made in Javascript JSX. NOT zoom friendly.
            </Typography>
        </Grid>
    )
}