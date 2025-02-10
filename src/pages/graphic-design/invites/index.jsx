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
import Design23Draft from '../../../assets/graphic-design/invites23-drafts.png';
import Design24Draft from '../../../assets/graphic-design/invites24-drafts.png';
import Design23Full from '../../../assets/graphic-design/Graphic.png';

import { InstagramEmbed } from 'react-social-media-embed';

import CustomButton from '../../../components/common/CustomButton';
import Footer from '../../../components/common/Footer';

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
                        onClick={() => window.location.href="/ndp-portfolio/graphic-design/garage"}
                        circular={true}
                        tooltipText='garage@EEE'
                    >
                        <Image src={Left}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> garage@EEE </Typography>
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
                        onClick={() => window.location.href="/ndp-portfolio/web-development/school-projects"}
                        circular={true}
                        tooltipText='goodcause'
                    >
                        <Image src={Right}/>
                    </CustomButton>
                    <Typography sx = {{display: {sm: "block", xs: "none"}}}> goodcause </Typography>
                </Grid>
                <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "0.5em"}}>
                    NTU Fencing Invitationals
                </Typography>
                <Typography variant="h3">
                    February - July 2023/24, Publicity Committee Member
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: {md: "2em", xs: "1em"}, marginTop: "1.5em"}}>
                    <Image src = {NTUIphoto1} sx={{width: "15vw", minWidth: "120px", height: "auto"}}/>
                    <Image src = {NTUIphoto2} sx={{width: "32vw", minWidth: "250px", height: "auto"}}/>
                </Grid>
                <Grid container sx = {{flexDirection: "row", gap: "2em", marginTop: "2em"}}>
                    <Image src = {NTUI24} sx={{width: "100px", height: "auto"}}/>
                    <Image src = {NTUI23} sx={{width: "auto", height: "100px"}}/>
                </Grid>
                <Typography variant="body2" sx={{width: "50vw", minWidth: "360px", textAlign: "center"}}>
                    <span style = {{fontWeight: "bold"}}>Role: Shirt Design & Instagram posts (Both), Banner & Logo (2023)</span>
                    <br/>
                    NTU Fencing Invitationals, an event that falls under the <a href="https://www.fencingsingapore.org.sg/tertiary-cup/">Tertiary Cup</a> umbrella,
                     is an annual competition endorsed by Fencing Singapore. <br/>
                </Typography>
                <Image src = {Design23Full} sx={{width: "100%", height: "auto"}}/>
                <Typography variant="body2" sx={{width: "50vw", minWidth: "360px", textAlign: "center"}}>
                    Design motifs take motifs of NTU’s visual identity. For example, the varsity team
                    is identified with dark blues and reds. Font selection reflects a competitive yet fun sports atmosphere.
                </Typography>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    SHIRT DESIGNS
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: "2em", margin: "2em 0", justifyContent: "center"}}>
                    <Image src = {Design24} sx={{width: "35vw", minWidth: "320px", height: "auto"}}/>
                    <Image src = {Design23} sx={{width: "25vw", minWidth: "320px", height: "auto"}}/>
                </Grid>
                <Typography variant="body2" sx={{width: "55vw", minWidth: "360px", textAlign: "justify"}}>
                Elements like halftones overlapping main graphic. Background of The Wave@SRC as
                unique identifier in 2023 shirt design. Visuals serve to complement and highlight the
                fencer subjects as much as possible.
                </Typography>

                <Image src = {Design24Draft} sx={{width: "55vw", minWidth: "360px", height: "auto"}}/>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    INSTAGRAM PREVIEW
                </Typography>
                <Grid container sx = {{flexDirection:  {md: "row", xs: "column"}, gap: "2em", margin: "2em 0"}}>
                    <Grid container item md = {6} xs = {12}
                        sx = {{
                            flexDirection: "column", 
                            gap: "0.5em", 
                            justifyContent: "right", 
                            textAlign: "right",
                        }}
                    >
                        <Image src={IGpreview} sx={{width: "35vw", height: "auto", minWidth: "360px"}}/>
                        <Typography variant="body2" sx={{width: "35vw", minWidth: "360px", textAlign: "justify"}}>
                            Modern, striking aesthetic with layered text elements. <span style={{color: "#E60061"}}> Bright font color</span>, but otheriwse muted to ensure spotlight on the photos.
                        </Typography>
                        <Grid container 
                            sx = {{
                                flexDirection: "column", 
                                gap: "0.5em", 
                                width: "35vw",
                                minWidth: "300px",
                                
                            }}
                        >
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
                    </Grid>
                    <Grid container item md = {6} xs = {12}>
                        <InstagramEmbed url="https://www.instagram.com/p/C-122IRyd71/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" style={{ width: "28vw", minWidth: "360px"}}/>
                    </Grid>
                </Grid>
                <Typography variant="h2" sx = {{fontFamily: "Anton-SC, sans-serif", marginTop: "1em"}}>
                    BANNER AND SHIRT (2023)
                </Typography>
                <Grid container sx = {{flexDirection: "row", gap: {md: "2em", xs: "0.5em"}, margin: {md: "2em 0", xs: "0.5em 0"}}}>
                    <Image src = {shirtIRL} sx={{width: "30vw", maxWidth: "280px", height: "auto"}}/>
                    <Image src = {BannerIRL} sx={{width: "30vw", maxWidth: "280px", height: "auto"}}/>
                </Grid>
                <Image src = {Banner} sx={{width: "64vw", maxWidth: "590px", height: "auto"}}/>
                <Typography variant="body2" sx={{width: "55vw", minWidth: "360px", textAlign: "justify", marginTop: "1em"}}>
                <span style={{fontWeight: "bold"}}>2023 design drafts</span>: Variations of square and circular framing, adding and subtracting details in the background and subjects. Line thickness to highlight subject and movement
                </Typography>
                <Image src = {Design23Draft} sx={{width: "50vw", minWidth: "320px", height: "auto"}}/>
                
            </Grid>
            <Footer/>
        </ThemeProvider>
    )
}

