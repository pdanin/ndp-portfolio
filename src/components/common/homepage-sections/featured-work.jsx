import { Grid2 as Grid } from '@mui/material';
import Image from '../Image';
import { forwardRef, useEffect } from "react";
import FeaturedHeader from '../../../assets/featured-header.png';
import ProjSlideshow from '../ProjectSlides';

const FeaturedSection = forwardRef(( ref) => {


    return (
        <Grid 
            container 
            //ref={ref} 
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
                top: -70,
            }}/>
            <ProjSlideshow/>
        </Grid>
    );
});

export default FeaturedSection;
