import { Grid2 as Grid, Typography, Icon } from '@mui/material';
import Image from '../Image';

import FeaturedHeader from '../../../assets/featured-header.png';
import CustomButton from '../CustomButton';
import ProjSlideshow from '../ProjectSlides';

export default function FeaturedSection() {
    return (
        <Grid container 
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
    )
}
