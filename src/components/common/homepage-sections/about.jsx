import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { useRef } from 'react';
import Image from '../Image';
import AboutHeader from '../../../assets/about-header.png';
import CustomButton from '../CustomButton';
import ArrowDown from '../../../assets/arrow-down.png';
import ContactBox from '../../../assets/contacts-box.png';
import Linkedin from '../../../assets/Linkedin.png';
import PhpSqlImage from '../../../assets/phpsql.png';
import AdobeCanvaImage from '../../../assets/aicanva.png';

import SkillsetCard from '../SkillCard';

export default function AboutSection() {
    const aboutRef = useRef(null); 

    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    
    const columnProps = {
        display: "flex", 
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
    };

    const columnButton = {
        backgroundColor: "#FBFBFB",
        fontSize: {
            lg: "2em",
            md: "1.5em",
            sm: "1.5em",
            xs: "1.5em"
        },
        color: "#433D44",
        width: "auto",
        marginBottom: "1em",

    };

    return (
        <Grid container 
            ref={aboutRef}
            sx = {{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                background: "#98FEE0",
                paddingTop: "4em",
            }}
        >
            <Box 
                item
                onClick={scrollToAbout}
                sx = {{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    background: "#98FEE0",
                    minWidth: "12em",
                    minHeight: "4em",
                    top: -45,
                    right: {md: 100, xs: 50},
                    borderRadius: "1em",
                    gap: "1em",
                    cursor: "pointer", // Makes it clickable
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": { transform: "scale(1.05)" }
                }}
            >
                <Typography variant="h3">
                    about me 
                </Typography>
                <Image src={ArrowDown} sx={{width: "28px"}}/>
            </Box>
            <Grid sx = {{ width: "100%", overflow: "hidden", position: "relative"}}>
            <Image src={AboutHeader} sx = {{scale: {md: 1, xs: 1.75}, display: "block", objectFit: "cover", 
               }}/>
            </Grid>
            <Grid container md={12} xs={12} 
                sx = {{
                    display: "flex", 
                    flexDirection: {md: "row", sm: "column", xs: "column"},
                    gap: "4em",
                    padding: "2em"
                }}
            >
                <Grid container item md={6} sm={12} sx = {{...columnProps, marginBottom: {xs: "-10em", md: "0"}}}>
                    <CustomButton disablePressEffect={true} sx = {{...columnButton}}>
                        Who Am I?
                    </CustomButton>
                    <Typography variant="body3" sx = {{textAlign: "center", color: "#8A6C77", maxWidth: "550px"}}>
                    An undergrad in her final year of a bachelor’s degree in Electrical and Electronic Engineering. 
                    Specialises in Web Development with some Machine Learning (ML) and Artificial Intelligence (AI) experience. <br/>
                    <br/>
                    Also willing to explore marketing options, with deep experience in graphic design and publicity roles.
                    </Typography>
                    <Grid container item sx={{
                        backgroundImage: `url(${ContactBox})`,
                        backgroundSize: "contain", 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: "center",
                        width: "30vw",
                        minWidth: {lg: "550px", md: "420px", sm: "500", xs: "400px"},
                        height: "500px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex", 
                        flexDirection: "column",
                        marginTop: {md: "-3em", sm: "-6em", xs: "-6em"},
                        gap: {lg: "1em", md: 0, xs: 0}
                    }}>
                        <Typography variant="body2" sx={{paddingTop: "3em",fontSize: {md: "1.75em", sm: "1.6em", xs: "1.5em"}, color: "#8A6C77", fontStyle: "italic"}}>
                            Phone Number: +65 9642 1575
                            <br/>
                            Email: ninadanin8@gmail.com
                        </Typography>
                        <CustomButton 
                            as="a" 
                            href="https://www.linkedin.com/in/danielle-ponce-2ba5b0217/" 
                            sx = {{
                                backgroundColor: "#433D44", 
                                color: "#FBFBFB",
                                display: "flex",
                                alignItems: "center",
                                textDecoration: "none",
                                gap: "0.5em"
                            }}
                        >
                            LinkedIn <Image src={Linkedin} sx={{width: "32px", height: "32px"}}/>
                        </CustomButton>
                        {/*<Grid item sx = {{display: "flex", flexDirection: "row", gap: "1em", padding: "1em", marginTop: {lg: "1em",md: "-0.5em"}, scale: {lg: 1.2, md: 1}}}>
                            <Image src={Instagram} sx={{width: "50%", height: "50%"}}/>
                            <Image src={Linkedin} sx={{width: "50%", height: "50%"}}/>
                        </Grid>*/}
                    </Grid>
                </Grid>
                <Grid container item md={6} sm={12} sx = {{...columnProps, gap: "1em", alignItems: "left", marginBottom: "1em", maxWidth: "550px"}}>
                    <Typography variant="h2" sx={{borderBottom: "2px solid #433D44", width: "100%", fontSize: {md: "3.2em", xs: "2.4em"}}}>
                        Skillsets
                    </Typography>
                    <SkillsetCard 
                        src="https://static-00.iconduck.com/assets.00/react-original-wordmark-icon-840x1024-vhmauxp6.png"
                        Header="React.js (Node.js, Next.js, React Native)"
                        Description="Proficient. Used in Learnr.sg Internship, Final Year Project, Portfolio."
                    />
                    <SkillsetCard 
                        src="https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png"
                        Header="Figma Prototyping"
                        Description="Proficient. Used in various web projects and designing for club event merchandise or instagram posts."
                    />
                    <SkillsetCard 
                        src={PhpSqlImage}
                        Header="PHP, SQL, CSS, HTML5"
                        Description="Informed. Used in NTU Module IE4727: Web Design and Application Project."
                    />
                    <SkillsetCard 
                        src={AdobeCanvaImage}
                        Header="Adobe Illustrator, Canva, Paint Tool Sai"
                        Description="Informed. Used in asset and graphic creation for various club events."
                    />
                    <SkillsetCard 
                        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                        Header="Python"
                        Description="Informed. Used in various NTU course projects i.e. EE4483, EE0005"
                    />

                </Grid>
            </Grid>
        </Grid>
    )
}
