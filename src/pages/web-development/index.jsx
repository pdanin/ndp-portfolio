import React from 'react';
import Theme from '../../components/providers/ThemeProvider';
import { Box, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../components/common/Header';
import Image from '../../components/common/Image';
import HeadImg from '../../assets/learnr-hero.png';
import LinkImg from '../../assets/comscreen1.png';
import { Link } from 'react-router-dom';
import Right from '../../assets/right-arrow-button.png';
import Left from '../../assets/left-arrow-button.png';
import Logo from '../../assets/logos/learnr.png';
import mockup from '../../assets/web-dev/ipad-mockup.png';
import HeadImg2 from '../../assets/goodcause-hero.png';

import CustomButton from '../../components/common/CustomButton';
import Footer from '../../components/common/Footer';

export default function WebDevPage() {
    const paletteprops = {
        width: "80px", 
        height: "80px", 
        backgroundColor: "#FF0000", 
        borderRadius: "0.5em"
    };

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
                <Grid 
                    sx = {{
                        position: "fixed", 
                        right: "2%", 
                        top: "50%",
                        zIndex: 5 
                    }}
                >
                    <CustomButton
                        circular={true}
                        onClick={() => window.location.href="/ndp-portfolio/graphic-design/garage"} 
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography> garage@EEE </Typography>
                </Grid>
                <Grid 
                    sx = {{
                        position: "fixed", 
                        left: "2%", 
                        top: "50%",
                        zIndex: 5 
                    }}
                >
                    <CustomButton
                        circular={true}
                        onClick={() => window.location.href="/ndp-portfolio/graphic-design/invites"} 
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography> fencing invites </Typography>
                </Grid>
                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    Learnr.sg Pte. Ltd.
                </Typography>
                <Typography variant="h3">
                    May - October 2024, Software Developer Summer Internship & Part Time
                </Typography>
                <Grid container sx={{direction: "flex", flexDirection: "row", width: "100%", justifyContent: "center", marginTop: "1em"}}>
                    <Grid item md={6} sx = {{position: "relative"}}>
                        <Image src={HeadImg} sx={{width: "600px", height: "auto"}}/>
                        <Link to="https://www.learnr.sg/">
                            <Image src={LinkImg} sx={{width: "220px", height: "auto", position: "absolute", right: "32%", top: "15%", }}/>
                        </Link>
                    </Grid>
                    <Grid item container md={6} sx = {{direction: "flex", flexDirection: "column", alignItems: "center", maxWidth: "40vw"}}>
                        <Image src={Logo} sx = {{width: "80px"}}/>
                        <Typography variant="body2">
                            <span style = {{fontWeight: "bold"}}>Role: UI/UX Design, Frontend Development</span><br/><br/>
                            An education platform that provides tools with the aim for their students to enjoy learning and teachers to enjoy teaching.
                            <ul style={{textAlign: "justify"}}>
                                <li>Brainstormed and implemented user-friendly yet aesthetically pleasing interfaces using Next.js.</li>
                                <li>Elevated website branding with overhauls in the homepage and 5+ other content pages.</li>
                                <li>Optimized development cycle through dynamic component and page recreation in Figma.</li>
                            </ul>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container 
                    sx = {{
                        flexDirection: "column", 
                        gap: "0.5em", 
                        justifyContent: "right", 
                        textAlign: "right",
                        width: "80%"
                    }}
                >
                    <Typography variant="h3">
                        palette
                    </Typography>
                    <Grid container sx={{flexDirection: "row", gap: "0.5em", justifyContent: "right"}}>
                        <Box sx={{...paletteprops, backgroundColor: "#D2BEF3"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#97CBF1"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#FFBE00"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#141417"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#BCBCBC"}}/>
                    </Grid>
                </Grid>
                <Grid container
                    sx = {{
                        background: "linear-gradient(180deg, rgba(68, 255, 233, 0) 0%, rgba(68, 255, 233, 1) 30%, rgba(160, 255, 244, 1) 70%, rgba(160, 255, 244, 0) 100%)",
                        height: "80vh", 
                        width: "100%",
                        marginTop: "2em",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative"
                    }}
                >
                    <Image src={mockup} sx={{width: "25vw", height: "45vh"}}/>
                    <Typography variant="body2" sx = {{position: "absolute", left: "10%", width: "25vw"}}>
                        <span style={{color: "#FFBE00", fontWeight: "bold"}}>Yellow</span> highlights important elements, 
                        matches mascot and other graphics. Implies warmth and passion.
                        <br/><br/>
                        <span style={{color: "#51A9ED", fontWeight: "bold"}}>Blue</span> is a complementary palette with <span style={{color: "#9D9BFF", fontWeight: "bold"}}>purple</span>, it is softer and easier on the eyes.
                    </Typography>
                    <Typography variant="body2" sx = {{position: "absolute", right: "10%", width: "25vw"}}>
                        Simple layouts to ensure optimal user navigation. But more dynamic layouts in the homepage to capture attention.
                        <br/><br/> 
                        Exhausted user interaction cases to achieve best experience across web and mobile devices.
                    </Typography>
                </Grid>

                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "2em"}}>
                    GoodCause: Heritage and Social Awareness App
                </Typography>
                <Typography variant="h3">
                    January - May 2024, UI/UX Team and Asset Creation 
                    <br/>
                    (Made for completion of EEE DIP)
                </Typography>
                <Link to="https://ntu-eee-dip-e028.web.app/">
                    <Image src = {HeadImg2} sx={{width: "600px", height: "auto"}}/>
                </Link>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

