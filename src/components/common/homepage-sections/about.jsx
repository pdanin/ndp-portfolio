import { Grid2 as Grid, Typography } from '@mui/material';
import Image from '../Image';

import AboutHeader from '../../../assets/about-header.png';
import CustomButton from '../CustomButton';
import ArrowDown from '../../../assets/arrow-down.png';
import ContactBox from '../../../assets/contacts-box.png';
import Instagram from '../../../assets/Instagram.png';
import Linkedin from '../../../assets/Linkedin.png';
import PhpSqlImage from '../../../assets/phpsql.png';
import AdobeCanvaImage from '../../../assets/aicanva.png';

import SkillsetCard from '../SkillCard';

export default function AboutSection() {
    
    const columnProps = {
        display: "flex", 
        flexDirection: "column",
        flex: 1,
        alignItems: "center"
    };

    const columnButton = {
        backgroundColor: "#FBFBFB",
        fontSize: "2em",
        color: "#433D44",
        width: {
            xl: "30%", 
            lg: "35%", 
            md: "50%", 
            sm: "80%", 
            xs: "100%"
        },
        marginBottom: "1em"
    };

    return (
        <Grid container 
            sx = {{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                position: "relative",
                background: "#98FEE0",
                paddingTop: "4em"
            }}
        >
            <Grid item
                sx = {{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    background: "#98FEE0",
                    minWidth: "12em",
                    minHeight: "4em",
                    top: -45,
                    right: 100,
                    borderRadius: "1em",
                    gap: "1em",

                }}
            >
                <Typography variant="h3">
                    about me 
                </Typography>
                <Image src={ArrowDown} sx={{width: "28px"}}/>
            </Grid>
            <Image src={AboutHeader}/>
            <Grid container md={12} xs={12} 
                sx = {{
                    display: "flex", 
                    flexDirection: "row",
                    gap: "4em",
                    padding: "2em"
                }}
            >
                <Grid container item md={6} xs={12} sx = {{...columnProps}}>
                    <CustomButton disablePressEffect={true} sx = {{...columnButton}}>
                        Who Am I?
                    </CustomButton>
                    <Typography variant="body2" sx = {{textAlign: "center", color: "#8A6C77"}}>
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
                        width: "64%",
                        height: "500px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex", 
                        flexDirection: "column",
                        marginTop: "-3em"
                    }}>
                        <Typography variant="body2" sx={{paddingTop: "5em",fontSize: "1.75em", color: "#8A6C77"}}>
                            Phone Number: +65 9642 1575
                            <br/>
                            Email: ninadanin8@gmail.com
                        </Typography>
                        <Grid item sx = {{display: "flex", flexDirection: "row", gap: "1em", padding: "1em"}}>
                            <Image src={Instagram} sx={{width: "50%", height: "50%"}}/>
                            <Image src={Linkedin} sx={{width: "50%", height: "50%"}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item md={6} xs={12} sx = {{...columnProps, gap: "1em", alignItems: "left"}}>
                    <Typography variant="h2" sx={{borderBottom: "2px solid #433D44", width: "100%"}}>
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
                        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
                        Header="Python"
                        Description="Informed. Used in various school projects."
                    />
                    <SkillsetCard 
                        src={AdobeCanvaImage}
                        Header="Adobe Illustrator, Canva, Paint Tool Sai"
                        Description="Informed. Used in asset and graphic creation for various club events."
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}
