import React from 'react';
import Theme from '../../../components/providers/ThemeProvider';
import { Box, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../../components/common/Header';
import Image from '../../../components/common/Image';

import Iterations from '../../../assets/graphic-design/logo-iterations.png';
import Left from '../../../assets/left-arrow-button.png';
import Right from '../../../assets/right-arrow-button.png';
import Makerspace from '../../../assets/logos/makerspace.png';
import Innofest from '../../../assets/logos/innofest.png';
import Ideasjam from '../../../assets/logos/ideasjam.png';
import Lanyard from '../../../assets/graphic-design/lanyardmockup.png';
import GrpInnofest from '../../../assets/graphic-design/innogrpphoto.png';
import ShirtInnofest from '../../../assets/graphic-design/innoshirt.png';
import GraphicInnofest from '../../../assets/graphic-design/innographic.png';
import Cappy from '../../../assets/graphic-design/cappy.png';


import { InstagramEmbed } from 'react-social-media-embed';

import CustomButton from '../../../components/common/CustomButton';
import Footer from '../../../components/common/Footer';

export default function GaragePage() {
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
                        left: "2%", 
                        top: "50%",
                        zIndex: 5 
                    }}
                >
                    <CustomButton 
                        circular={true}
                        onClick={() => window.location.href="/ndp-portfolio/#/web-development/learnr"}
                        tooltipText='learnr.sg'
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> learnr.sg </Typography>
                </Grid>
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
                        onClick={() => window.location.href="/ndp-portfolio/#/graphic-design/invites"}
                        tooltipText='fencing invites'
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> fencing invites </Typography>
                </Grid>
                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    Garage@EEE Branding & Marketing (BnM)
                </Typography>
                <Typography variant="h3">
                    August 2023 - Present, Various School Events
                </Typography>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    MAKERSPACE FRIENDLIES 2025
                </Typography>
                <Grid container 
                    sx = {{
                        direction: "flex", 
                        flexDirection: "column", 
                        justifyContent: "center",
                        alignItems: "center", 
                        marginTop: "1em"
                    }}
                >
                    <Image src={Makerspace} sx = {{width: "100px"}}/>
                    <Typography variant="body2" sx={{minWidth: "360px", width: "50vw"}}>
                        <span style = {{fontWeight: "bold"}}>Role: Main Committee Publicity Head</span><br/><br/>
                        Makerspace Friendlies 2025 is a SUTD x NTU collaborative event, 
                        launching an inter-school makerspace competition in Singapore. 
                        
                        It involves the Micro Mouse competition format.
                    </Typography>
                    <Grid container sx={{direction: "flex", flexDirection: "row", marginTop: "2em", gap: "1em", justifyContent: "center"}}>
                        <InstagramEmbed url="https://www.instagram.com/makerspacefriendlies.sg/" style={{width: "32vw", minWidth: "360px"}} />
                        <Typography variant="body2">
                            <ul style={{textAlign: "justify", width: "30vw", minWidth: "320px"}}>
                                    <li>Collaborated in designing the logo, poster, and dictated the direction of the event's branding.</li>
                                    <li>Coordinated with team mates in curating exciting, unique cinematics to garner interest.</li>
                            </ul>
                            <Image src={Iterations} style={{width: "30vw", minWidth: "320px"}}/>
                            <br/> Iterations of Makerspace Friendlies 2025's logo 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container 
                    sx = {{
                        flexDirection: "column", 
                        gap: "0.5em", 
                        justifyContent: "right", 
                        textAlign: "right",
                        width: {lg: "80%", sm: "100%", xs: "100%"},       
                        scale: {lg: 1, md: 0.75, xs: 0.75}
                    }}
                >
                    <Typography variant="h3">
                        palette
                    </Typography>
                    <Grid container sx={{flexDirection: "row", gap: "0.5em", justifyContent: "right"}}>
                        <Box sx={{...paletteprops, backgroundColor: "#FFB502"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#392A59"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#95C0B6"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#A4043E"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#F0E7E7"}}/>
                    </Grid>
                </Grid>

                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    Ideas Jam 2025
                </Typography>
                <Image src={Ideasjam} sx = {{width: "250px"}}/>
                <Typography variant="body2">
                    <span style = {{fontWeight: "bold"}}>Role: BnM Subcommittee, Lanyard Design only</span>
                </Typography>
                <Image src={Lanyard} sx = {{width: "30vw", minWidth: "360px"}}/>
                <Typography variant="body2">
                        Night sky, celestial bodies in moodboard, and palette of cool, <br/> 
                        lightning-esque colors. Elements mimic the night sky motif.
                </Typography>
                <Grid container 
                    sx = {{
                        flexDirection: "column", 
                        gap: "0.5em", 
                        justifyContent: "right", 
                        textAlign: "right",
                        width: {lg: "80%", sm: "100%", xs: "100%"},       
                        scale: {lg: 1, md: 0.75, xs: 0.75}
                    }}
                >
                    <Typography variant="h3">
                        palette
                    </Typography>
                    <Grid container sx={{flexDirection: "row", gap: "0.5em", justifyContent: "right"}}>
                        <Box sx={{...paletteprops, backgroundColor: "#8DE1EF"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#2992CF"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#EFFDFF"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#02BBD8"}}/>
                        <Box sx={{...paletteprops, backgroundColor: "#00424C"}}/>
                    </Grid>
                </Grid>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    Innovation Festival 2024
                </Typography>
                <Image src={Innofest} sx = {{width: "250px"}}/>
                <Typography variant="body2">
                    <span style = {{fontWeight: "bold"}}>Role: BnM Subcommittee, Shirt Design only</span>
                </Typography>
                <Image src={GrpInnofest} sx = {{width: "30vw", minWidth: "360px", marginBottom: "1em"}}/>
                <Typography variant="body2" sx={{minWidth: "360px", width: "50vw"}}>
                        Innovation festival (Innofest) is an event showasing robotics projects.
                        Slogan for 2024 was "Innovate, Design, Learn" with a J-Culture branding.
                        <br/> 
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", marginTop: "2em", justifyContent: "center"}}>
                    <Grid container sx = {{flexDirection: "column", gap: "2em", marginTop: "2em", alignItems: "center"}}>
                        <Image src = {Cappy} sx={{width: "auto", height: "20vh", minWidth: "360px"}}/>
                        <Image src = {GraphicInnofest} sx={{width: "18vw", height: "auto", minWidth: "240px"}}/>
                    </Grid>
                    <Image src = {ShirtInnofest} sx={{width: "25vw", height: "auto", minWidth: "360px"}}/>
                </Grid>
                <Typography variant="body2" sx={{minWidth: "360px", width: "50vw"}}>
                    Design is Garage@EEE's Mascot piloting the robot. Energy saving motifs referencing
                    Escendo 2024 (featured in event). Robot exterior mirroring mascot’s overall look<br/>
                </Typography>
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

