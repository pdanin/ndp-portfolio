import { Grid2 as Grid, Typography } from '@mui/material';
import Image from '../Image';
import starImage from '../../../assets/star.png';
import Logo from '../../../assets/logo.png';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <motion.div
            animate={{
                backgroundImage: [
                    "radial-gradient(ellipse 55% 45% at center, #88FFDB 0%, transparent 70%)",
                    "radial-gradient(ellipse 65% 60% at center, #88FFDB 0%, transparent 70%)",
                    "radial-gradient(ellipse 55% 45% at center, #88FFDB 0%, transparent 70%)"
                ]
            }}
            transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity, 
                repeatType: "mirror" 
            }}
            style={{
                minHeight: "89vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 0
            }}
        >
            <Grid item position="relative" sx = {{scale: {lg: 1, md: 0.95, sm: 0.65, xs: 0.5}}}>
                <Image
                src={Logo}
                    sx = {{
                        zIndex: 10,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "40%",
                        
                    }}
                />
                <Typography variant="hero1" sx = {{zIndex: 5}}>
                    PORTFOLIO
                </Typography>
                <Typography variant="h2" 
                    sx = {{
                        position: "absolute",
                        bottom: -20,
                        textAlign: "center",
                        width: "100%",
                        zIndex: 1
                    }}
                >
                    web development and graphic design
                </Typography>
                <Image src={starImage} 
                    sx={{
                        position: "absolute", bottom: -30, right: -80,
                        width: "50px", height: "80px",
                        zIndex: 1
                    }}
                />
                <Image src={starImage} 
                    sx={{
                        position: "absolute", top: -20, left: -80,
                        width: "50px", height: "80px",
                        zIndex: 1
                    }}
                />
            </Grid>
        </motion.div>
    )
}
