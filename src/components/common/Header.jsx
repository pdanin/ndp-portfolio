import { Grid2 as Grid, Typography, ThemeProvider } from '@mui/material';
import Logo from '../../assets/logo.png';
import Image from './Image';
import CustomButton from './CustomButton';

export default function HomepageHeader() {
    
    return (
        <Grid container
            sx = {{
                width: "100%",
                height: "60px",
                display: "flex",
                flexDirection: "row",
                position: "sticky",
                top: 0, 
                zIndex: 1000, 
                backgroundColor: "#FBFBFB", 
            }}
        >
            <Grid item md={2} xs={2} sx = {{padding: "1.5em 1.5em", boxSizing: "border-box"}}>
                <Image src ={Logo} sx={{ width: "120px"}}/>
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
                    justifyContent: "flex-end"
                }}
            >
                <CustomButton sx={{backgroundColor: "#88FFDB"}}>
                    web development
                </CustomButton>
                <CustomButton>
                    graphic design
                </CustomButton>
                <CustomButton>
                    about me
                </CustomButton>
            </Grid>
        </Grid>
    )
}