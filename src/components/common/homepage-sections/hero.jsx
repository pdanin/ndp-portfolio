import { Grid2 as Grid, Typography } from '@mui/material';
import Image from '../Image';
import starImage from '../../../assets/star.png';
import Logo from '../../../assets/logo.png';

export default function HeroSection() {
    return (
        <Grid container 
        sx = {{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "radial-gradient(ellipse 60% 50%, #88FFDB 0%, transparent 70%)",
        }}
        >
        <Grid item position="relative">
        <Image
        src={Logo}
        sx = {{
            zIndex: 10,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%"
        }}
        />
        <Typography variant="hero1" sx = {{zIndex: 5}}>
        PORTFOLIO
        </Typography>
        <Typography variant="h2" 
        sx = {{
            position: "absolute",
            bottom: -20,
            textAlign: "center",
            width: "100%",
        }}
        >
        web development and graphic design
        </Typography>
        <Image src={starImage} 
        sx={{
            position: "absolute", bottom: -30, right: -80,
            width: "50px", height: "80px",

        }}
        />
        <Image src={starImage} 
        sx={{
            position: "absolute", top: -20, left: -80,
            width: "50px", height: "80px",
        }}
        />
        </Grid>
        </Grid>
    )
}
