import { Grid2 as Grid } from '@mui/material';
import Image from './Image';

const ProjectCard = ({src, className}) => {
    return (
        <Grid container item className={className}
            sx = {{
                width: "400px",
                height: "250px",
                border: "1px solid #433D44",
                borderRadius: "1em",
                boxShadow: "0px 5px 5px rgba(67, 61, 68, 0.5)",
                overflow: "hidden"
            }}
        >
            <Image src={src} 
                sx={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    display: "block",
                    margin: "auto"
                }}
            />
        </Grid>
    )
}

export default ProjectCard;