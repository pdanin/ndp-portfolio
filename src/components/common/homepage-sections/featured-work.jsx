import { Grid2 as Grid } from '@mui/material';
import Image from '../Image';
import { forwardRef, useEffect } from "react";
import FeaturedHeader from '../../../assets/featured-header.png';
import ProjSlideshow from '../ProjectSlides';

const FeaturedSection = forwardRef((profs, ref) => {


    return (
        <Grid 
            container 
            ref={ref} 
            id="featured-section"
            sx = {{
                minHeight: "110vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                gap: "2em",
                paddingTop: "6em"
            }}
        >
            <Image src={FeaturedHeader} sx={{
                position: "absolute",
                top: {md: "-4vh", xs: "-2vh"}
            }}/>
            <ProjSlideshow/>
        </Grid>
    );
});

export default FeaturedSection;
