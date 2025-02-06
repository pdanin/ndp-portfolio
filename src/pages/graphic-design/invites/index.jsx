import React from 'react';
import Theme from '../../../components/providers/ThemeProvider';
import { Box, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import HomepageHeader from '../../../components/common/Header';
import Image from '../../../components/common/Image';

import Left from '../../../assets/left-arrow-button.png';

import Right from '../../../assets/right-arrow-button.png';

import NTUIphoto1 from '../../../assets/graphic-design/DSCF7404.png';
import NTUIphoto2 from '../../../assets/graphic-design/DSCF7418.png';
import NTUI23 from '../../../assets/logos/ntui23.png';
import NTUI24 from '../../../assets/logos/ntui24.png';
import BannerIRL from '../../../assets/graphic-design/ntuibanner.png';
import Banner from '../../../assets/graphic-design/ntuibannerpng.png';
import shirtIRL from '../../../assets/graphic-design/ntuishirt.png';
import Design23 from '../../../assets/graphic-design/ntugraphic23.png';
import Design24 from '../../../assets/graphic-design/ntugraphic24.png';
import IGpreview from '../../../assets/graphic-design/ntuipostpreview.png';

import { InstagramEmbed } from 'react-social-media-embed';

import CustomButton from '../../../components/common/CustomButton';

export default function InvitesPage() {
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
                        onClick={() => window.location.href="/graphic-design/garage"}
                        circular={true}
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography> garage@EEE </Typography>
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
                        onClick={() => window.location.href="/web-development"}
                        circular={true}
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography> goodcause </Typography>
                </Grid>
                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    NTU Fencing Invitationals
                </Typography>
                <Typography variant="h3">
                    February - July 2023/24, Publicity Committee Member
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", marginTop: "1.5em"}}>
                    <Image src = {NTUIphoto1} sx={{width: "300px", height: "auto"}}/>
                    <Image src = {NTUIphoto2} sx={{width: "600px", height: "auto"}}/>
                </Grid>
                <Grid container sx = {{flexDirection: "row", gap: "2em", marginTop: "2em"}}>
                    <Image src = {NTUI24} sx={{width: "100px", height: "auto"}}/>
                    <Image src = {NTUI23} sx={{width: "auto", height: "100px"}}/>
                </Grid>
                <Typography variant="body2">
                    <span style = {{fontWeight: "bold"}}>Role: Shirt Design & Instagram posts (both years), Banner & Logo Design (2023)</span>
                    <br/><br/>
                    NTU Fencing Invitationals, an event that falls under the <a href="https://www.fencingsingapore.org.sg/tertiary-cup/">Tertiary Cup</a> umbrella,
                    <br/> is an annual competition endorsed by Fencing Singapore.
                    <br/><br/>
                    Design motifs take motifs of NTU’s visual identity. For example, the varsity team <br/>
                    is identified with dark blues and reds. Font selection reflects a competitive yet fun <br/> sports atmosphere.
                </Typography>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    SHIRT DESIGNS
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", margin: "2em 0"}}>
                    <Image src = {Design24} sx={{width: "500px", height: "auto"}}/>
                    <Image src = {Design23} sx={{width: "350px", height: "auto"}}/>
                </Grid>
                <Typography variant="body2">
                Elements like halftones overlapping main graphic. Background of The Wave@SRC as<br/>
                unique identifier in 2023 shirt design. Visuals serve to complement and highlight the<br/>
                fencer subjects as much as possible.
                </Typography>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    INSTAGRAM POST PREVIEW
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", margin: "2em 0"}}>
                    <Grid container 
                    sx = {{
                        flexDirection: "column", 
                        gap: "0.5em", 
                        justifyContent: "right", 
                        textAlign: "right",
                    }}
                    >
                        <Image src={IGpreview} sx={{width: "auto", height: "400px"}}/>
                        <Typography variant="body2" sx={{width: "32vw", textAlign: "justify"}}>
                            Modern, striking aesthetic with layered text elements. <span style={{color: "#E60061"}}> Bright font color</span>, but otheriwse muted to ensure spotlight on the photos.
                        </Typography>
                        <Typography variant="h3">
                            palette
                        </Typography>
                        <Grid container sx={{flexDirection: "row", gap: "0.5em", justifyContent: "right"}}>
                            <Box sx={{...paletteprops, backgroundColor: "#474D6C"}}/>
                            <Box sx={{...paletteprops, backgroundColor: "#E60061"}}/>
                            <Box sx={{...paletteprops, backgroundColor: "#F1F1F1"}}/>
                            <Box sx={{...paletteprops, backgroundColor: "#5C0000"}}/>
                            <Box sx={{...paletteprops, backgroundColor: "#CFCFCF"}}/>
                            <Box sx={{...paletteprops, backgroundColor: "#A49CFF"}}/>
                        </Grid>
                    </Grid>
                    <InstagramEmbed url="https://www.instagram.com/p/C-122IRyd71/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width="25vw"/>
                </Grid>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    BANNER AND SHIRT DESIGN (2023)
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", margin: "2em 0"}}>
                    <Image src = {shirtIRL} sx={{width: "400px", height: "auto"}}/>
                    <Image src = {BannerIRL} sx={{width: "400px", height: "auto"}}/>
                </Grid>
                    <Image src = {Banner} sx={{width: "600px", height: "auto"}}/>
            </Grid>
        </ThemeProvider>
    )
}

