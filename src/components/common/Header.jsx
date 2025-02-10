import { Grid2 as Grid } from '@mui/material';
import Logo from '../../assets/logo.png';
import Image from './Image';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';

export default function HomepageHeader({scrollToFeatured}) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const pathname = window.location.pathname;
    const isHomePage = pathname.endsWith("/ndp-portfolio/");
    const isWebDevPage = pathname.includes("/#/web-development");
    const isGraphPage = pathname.includes("/#/graphic-design");

    const handleClick = () => {
        sessionStorage.setItem("scrollToFeatured", "true"); 
        window.location.href = "/ndp-portfolio"; 
      };

    return (
        <Grid container
            sx = {{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                position: "sticky",
                top: 0, 
                zIndex: 1000, 
            }}
        >
            <Grid item md={2} xs={8} sx = {{padding: "1.5em 1.5em", boxSizing: "border-box"}}>
                <Link to="/ndp-portfolio">
                <Image 
                    src = {Logo} 
                    sx = {{ 
                        width: isSmallScreen ? "100px" : "120px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.08)"
                        }
                    }}
                />
                </Link>
            </Grid>
            <Grid container item md={10} xs={4}
                sx = {{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "row",
                    border: "1px solid #433D44",
                    borderRight: "0px",
                    borderRadius: "50px 0 0 50px",
                    padding: isSmallScreen ? "0.5em" : "1em 1.5em",
                    gap: isSmallScreen ? "0.5em" : "1.5em",

                    justifyContent: "flex-end",
                    background: "#FBFBFB",
                }}
            >
                <CustomButton 
                    onClick={isHomePage ? scrollToFeatured : handleClick}
                    sx={{
                        backgroundColor: isHomePage ? "#88FFDB" : "#E8FCF6",
                        scale: isSmallScreen ? 0.9 : 1,
                    }}
                >
                    {isSmallScreen ? "featured" : "featured work"}
                </CustomButton>
                <CustomButton 
                    onClick={() => window.location.href="/ndp-portfolio/#/web-development/learnr"}
                    sx = {{
                        backgroundColor: isWebDevPage ? "#88FFDB" : "#FBFBFB",
                        color: isWebDevPage ? "#868CFF" : "#433D44",
                        boxShadow: isWebDevPage ? "0px 0px 25px #88FFDB" : "",
                        scale: isSmallScreen ? 0.9 : 1,
                    }}
                >
                    {isSmallScreen ? "web dev" : "web development"}
                </CustomButton>
                <CustomButton
                    onClick={() => window.location.href="/ndp-portfolio/#/graphic-design/garage"}
                    sx = {{
                        backgroundColor: isGraphPage ? "#88FFDB" : "#FBFBFB",
                        color: isGraphPage ? "#868CFF" : "#433D44",
                        boxShadow: isGraphPage ? "0px 0px 25px #88FFDB" : "",
                        scale: isSmallScreen ? 0.9 : 1,
                    }}
                >
                    {isSmallScreen ? "graphic" : "graphic design"}
                </CustomButton>
            </Grid>
        </Grid>
    )
}