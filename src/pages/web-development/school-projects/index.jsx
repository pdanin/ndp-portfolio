import React from 'react';
import Theme from '../../../components/providers/ThemeProvider';
import { Box, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../../components/common/Header';
import Image from '../../../components/common/Image';
import Logo from '../../../assets/logos/goodcause.png'
import { Link } from 'react-router-dom';
import Right from '../../../assets/right-arrow-button.png';
import Left from '../../../assets/left-arrow-button.png';

import HeadImg2 from '../../../assets/goodcause-hero.png';
import Wireframe from '../../../assets/web-dev/goodcause-wireframe.png';

import Bobby from '../../../assets/web-dev/bobby.png';

import Asset from '../../../assets/web-dev/asset-preview.png';
import CustomButton from '../../../components/common/CustomButton';
import Footer from '../../../components/common/Footer';

export default function SchoolProjPage() {
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
                        onClick={() => window.location.href="/ndp-portfolio/#/web-development/learnr"} 
                        tooltipText='learnr.sg'
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> learnr.sg </Typography>
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
                        onClick={() => window.location.href="/ndp-portfolio/#/graphic-design/invites"} 
                        tooltipText='fencing invites'
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> fencing invites </Typography>
                </Grid>

                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    GoodCause: Heritage and Social Awareness App
                </Typography>
                <Typography variant="h3">
                    January - May 2024, UI/UX Team and Asset Creation 
                    <br/>
                    (Made for completion of EEE DIP)
                </Typography>
                <Link to="https://ntu-eee-dip-e028.web.app/">
                    <Image src = {HeadImg2} sx={{width: "30vw", height: "auto", minWidth: "400px"}}/>
                </Link>
                <Grid container 
                    sx = {{
                        flexDirection: "column", 
                        gap: "0.5em", 
                        justifyContent: "center", 
                        textAlign: "center",
                        width: {lg: "80%", sm: "100%", xs: "60%"},
                        scale: {lg: 1, md: 0.75, xs: 0.75}
                    }}
                >
                    <Typography variant="h3">
                        palette
                    </Typography>
                    <Grid container 
                        sx = {{
                            flexDirection: "row", 
                            gap: "0.5em", 
                            justifyContent: "center",
                        }}
                    >
                        <Box sx={{...paletteprops, backgroundColor: "#CA3735"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#BF8364"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#BFAD9E"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#3A3C3F"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#E6DBDD"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#FFF4EA"}}/>
                    </Grid>
                </Grid>
                <Grid item container sx = {{direction: "flex", flexDirection: "column", alignItems: "center", width: "50vw", minWidth: "320px"}}>
                        <Image src={Logo} sx = {{width: "120px"}}/>
                        <Typography variant="body2">
                            <span style = {{fontWeight: "bold"}}>Role: UI/UX team, 3D modelling & Visual Assets</span><br/><br/>
                            Educational super app made for secondary level Singaporean teenagers. 
                            Advocates for social issues such as anti-drug, anti-vape usage, cyberbullying, and national heritage.
                            <br/>
                            <ul style={{textAlign: "justify"}}>
                                <li>Worked together with front-end and game developers to curate a super app with 10+ unique services, utilising Figma and React.</li>
                                <li>Assisted in UI integration into Unity Augmented Reality game-flow and construction of 3D blender models.</li>
                            </ul>
                        </Typography>
                </Grid>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    LO-FI TO HI-FI WIREFRAMES
                </Typography>
                <Image src={Wireframe} sx = {{width: "50vw", minWidth: "360px", padding: "1em"}}/>
                <Typography variant="body2" sx = {{width: "50vw", minWidth: "320px"}}>
                Minimalist, muted color scheme. Shows all features without overwhelming the user, highlighting the colorful icons and characters. 
                Scrollable widgets for mobile mode.
                </Typography>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    ASSET DESIGN
                </Typography>
                
                <Image src={Bobby} sx = {{width: "45vw", minWidth: "360px", padding: "1em"}}/>
                <Typography variant="body2" sx = {{width: "50vw", minWidth: "320px"}}>
                    Simple, cute character designs with distinct silhouettes and lion-like, tropical sea motifs.
                </Typography>
                
                <Image src={Asset} sx = {{width: "50vw", minWidth: "360px", padding: "2em"}}/>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

