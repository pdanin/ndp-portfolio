import React from 'react';
import Theme from '../../../components/providers/ThemeProvider';
import { Box, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../../components/common/Header';
import Image from '../../../components/common/Image';
import HeadImg from '../../../assets/learnr-hero.png';
import { Link } from 'react-router-dom';
import Right from '../../../assets/right-arrow-button.png';
import Left from '../../../assets/left-arrow-button.png';
import Logo from '../../../assets/logos/learnr.png';
import mockup from '../../../assets/web-dev/ipad-mockup.png';

import CustomButton from '../../../components/common/CustomButton';
import Footer from '../../../components/common/Footer';

export default function LearnrPage() {
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
                        tooltipText='garage@EEE'
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> garage@EEE </Typography>
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
                        onClick={() => window.location.href="/ndp-portfolio/web-development/school-projects"} 
                        tooltipText='goodcause'
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> goodcause </Typography>
                </Grid>
                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    Learnr.sg Pte. Ltd.
                </Typography>
                <Typography variant="h3">
                    May - October 2024, Software Developer Summer Internship & Part Time
                </Typography>
                <Grid container 
                    sx = {{
                        direction: "flex", 
                        flexDirection: {
                            lg: "row", 
                            md: "column", 
                            xs: "column"
                        }, 
                        width: "100%", 
                        justifyContent: "center", 
                        alignItems: "center",
                        marginTop: "1em"
                    }}
                >
                    <Link to="https://www.learnr.sg/">
                        <Image src={HeadImg} sx={{width: "40vw",minWidth: "360px", height: "auto"}}/>
                    </Link>
                    <Grid item container sx = {{direction: "flex", flexDirection: "column", alignItems: "center", width: {lg: "40vw", md: "55vw", xs: "50vw"}, minWidth: "320px"}}>
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
                        width: "35vw",
                        minWidth: {md: "500px", xs: "300px"},
                        scale: {lg: 1, md: 1, xs: 0.75}
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
                    sx={{
                        background: "linear-gradient(180deg, rgba(68, 255, 233, 0) 0%, rgba(68, 255, 233, 1) 30%, rgba(160, 255, 244, 1) 70%, rgba(160, 255, 244, 0) 100%)",
                        height: { md: "65vh", xs: "120vh" },
                        width: "100%",
                        marginTop: "2em",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { md: "row", xs: "column" },
                        gap: {lg: "1em", md: "1em", xs: 0}
                    }}
                >
                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                        <Typography variant="body2" sx={{ width: "25vw", minWidth: "300px" }}>
                            <span style={{ color: "#FFBE00", fontWeight: "bold" }}>Yellow</span> highlights important elements, 
                            matches mascot and other graphics. Implies warmth and passion.
                            <br /><br />
                            <span style={{ color: "#51A9ED", fontWeight: "bold" }}>Blue</span> is a complementary palette with <span style={{ color: "#9D9BFF", fontWeight: "bold" }}>purple</span>, it is softer and easier on the eyes.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                        <Image src={mockup} sx={{ width: {lg: "30vw", md: "100%", xs: "100%"}, maxWidth: {lg: "460px", md: "250px", xs: "300px"}, height: "auto" }} />
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                        <Typography variant="body2" sx={{ width: "25vw", minWidth: "300px" }}>
                            Simple layouts to ensure optimal user navigation. But more dynamic layouts in the homepage to capture attention.
                            <br /><br />
                            Exhausted user interaction cases to achieve the best experience across web and mobile devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

