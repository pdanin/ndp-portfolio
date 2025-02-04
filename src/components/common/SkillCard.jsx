import { Grid2 as Grid, Typography } from '@mui/material';
import Image from './Image';

const SkillsetCard = ({src, Header, Description}) => {
    return (
    <Grid container sx = {{direction: "flex", flexDirection: "row", gap: "1.5em"}}>
        <Grid 
            sx = {{
                width: "100px", 
                height: "100px", 
                justifyContent: "center", 
                display: "flex", 
                backgroundColor: "#FBFBFB",
                border: "1px solid #433D44",
                borderRadius: "1em"
            }}
        >
            <Image src={src} sx = {{scale: "60%"}}/>
        </Grid>
        <Typography variant="body2" sx = {{flex: 1, color: "#8A6C77", textAlign: "justify"}}>
        <Typography variant="body2" component="span" sx={{ fontWeight: "bold", color: "#433D44" }}>
            {Header}
        </Typography> 
            <br/>
            {Description}
        </Typography>
    </Grid>
    )
}

export default SkillsetCard;