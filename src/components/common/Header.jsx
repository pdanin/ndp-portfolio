import { Grid2 as Grid } from '@mui/material';
import Logo from '../../assets/logo.png';
import Image from './Image';
import CustomButton from './CustomButton';
import { Link } from 'react-router-dom';
import React from 'react';

export default function HomepageHeader({scrollToFeatured}) {
    const pathname = window.location.pathname;
    const isHomePage = pathname.endsWith("/");
    const isWebDevPage = pathname.includes("/web-development");
    const isGraphPage = pathname.includes("/graphic-design");
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
            <Grid item md={2} xs={2} sx = {{padding: "1.5em 1.5em", boxSizing: "border-box"}}>
                <Link to="/">
                <Image 
                    src = {Logo} 
                    sx = {{ 
                        width: "120px",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.08)"
                        }
                    }}
                />
                </Link>
            </Grid>
            <Grid container item md={10} xs={10}
                sx = {{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "row",
                    border: "1px solid #433D44",
                    borderRight: "0px",
                    borderRadius: "50px 0 0 50px",
                    padding: "1em 1.5em",
                    gap: "1.5em",
                    justifyContent: "flex-end",
                    background: "#FBFBFB"
                }}
            >
                <CustomButton 
                        //onClick={scrollToFeatured}
                    sx={{backgroundColor: isHomePage ? "#88FFDB" : "#E8FCF6"}}
                >
                    featured work
                </CustomButton>
                <CustomButton 
                    onClick={() => window.location.href="/web-development"}
                    sx = {{
                        backgroundColor: isWebDevPage ? "#88FFDB" : "#FBFBFB",
                        color: isWebDevPage ? "#FBFBFB" : "#433D44",
                        boxShadow: isWebDevPage ? "0px 0px 25px #88FFDB" : ""
                    }}
                >
                    web development
                </CustomButton>
                <CustomButton
                    onClick={() => window.location.href="/graphic-design/garage"}
                    sx = {{
                        backgroundColor: isGraphPage ? "#88FFDB" : "#FBFBFB",
                        color: isGraphPage ? "#FBFBFB" : "#433D44",
                        boxShadow: isGraphPage ? "0px 0px 25px #88FFDB" : ""
                    }}
                >
                    graphic design
                </CustomButton>
            </Grid>
        </Grid>
    )
}