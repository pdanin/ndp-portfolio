import React from 'react';
import Theme from '../../components/providers/ThemeProvider';
import { Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../components/common/Header';
import Image from '../../components/common/Image';
import HeadImg from '../../assets/learnr-hero.png';
import LinkImg from '../../assets/comscreen1.png';
import { Link } from 'react-router-dom';
import Right from '../../assets/right-arrow-button.png';
import Left from '../../assets/left-arrow-button.png';
import CustomButton from '../../components/common/CustomButton';
export default function LearnrPage() {

  return (
    <ThemeProvider theme={Theme}>
        <HomepageHeader />
        <Grid container
            sx = {{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "top",
                alignItems: "center",
                textAlign: "center",
            }}
        >
            <CustomButton 
                sx = {{ 
                    position: "fixed", 
                    right: "2%", 
                    top: "50%",
                    backgroundColor: "#88FFDB",
                    border: "2px solid #FBFBFB",
                    borderRadius: "50em",
                    color: "#FBFBFB",
                    padding: "1em" 
                }}
            >
                <Image src={Right}/>
            </CustomButton>
            <CustomButton
                sx = {{ 
                    position: "fixed", 
                    left: "2%", 
                    top: "50%",
                    backgroundColor: "#88FFDB",
                    border: "2px solid #FBFBFB",
                    borderRadius: "50em",
                    color: "#FBFBFB",
                    padding: "1em" 
                }}
            >
                <Image src={Left}/>
            </CustomButton>
            <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                Learnr.sg Pte. Ltd.
            </Typography>
            <Typography variant="h3">
                May - October 2024, Software Developer Intern and Part Time
            </Typography>
            <Grid item sx = {{position: "relative"}}>
            <Image src={HeadImg} sx={{width: "30%", height: "auto"}}/>
            <Link to="https://www.learnr.sg/">
                <Image src={LinkImg} sx={{width: "12%", height: "auto", position: "absolute", right: "44.5%", top: "14.5%", }}/>
            </Link>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}

