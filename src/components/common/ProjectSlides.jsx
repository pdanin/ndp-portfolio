import { Grid2 as Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomButton from './CustomButton';

import ProjectCard from './ProjectCard';
import B from '../../assets/learnr-hero.png';
import C from '../../assets/garage-hero.png';
import A from '../../assets/goodcause-hero.png';
import D from '../../assets/ntui-hero.png';
import Right from '../../assets/right-arrow-button.png';
import Left from '../../assets/left-arrow-button.png';

import Image from './Image';

const projects = [
    {
        id: "1", 
        image: A,
        title: "GoodCause",
        description: "January - May 2024,\nFor EEE DIP, UI/UX and Asset Team",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
    }, 
    {
        id: "2", 
        image: B,
        title: "Learnr.sg",
        description: "May - October 2024,\nSoftware Developer Intern and Part-Time",
        link: ""
    }, 
    {
        id: "3", 
        image: C,
        title: "Garage@EEE Events",
        description: "August 2024 - Present,\nBranding and Marketing Member",
        link: ""
    }, 
    {
        id: "4", 
        image: D,
        title: "NTU Fencing Invites",
        description: "February - July 2023/24,\nPublicity Committee Member",
        link: "https://www.youtube.com/watch?v=2ai5NWd8nuo&ab_channel=DrewGooden"
    }
]; 

const ProjSlideshow = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [disabled, setDisabled] = useState(false);

    const handleNext = () => {
        setDisabled(true); 
        setActiveIndex((prev) => (prev + 1) % projects.length);
        setTimeout(() => setDisabled(false), 600);
    }
      const handlePrev = () => {
        setDisabled(true); 
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setTimeout(() => setDisabled(false), 600);
    }

    const activeProject = projects[activeIndex];

    return (
        <Grid container sx={{
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            gap: "2em", 
            }}>
            <Grid 
                sx={{
                    height: "40vh",
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    position: "relative", 
                    width: "100%", 
                }}
            >
                {projects.map((src, index) => {
                    let position = "hidden"; 

                    if (index === activeIndex) {
                    position = "active"; 
                    } else if (index === (activeIndex - 1 + projects.length) % projects.length) {
                    position = "left"; 
                    } else if (index === (activeIndex + 1) % projects.length) {
                    position = "right"; 
                    }

                    return (
                    <motion.div
                        key={src.id}
                        className={position}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                        opacity: position === "active" ? 1 : 0.8,
                        scale: position === "active" ? 1 : 0.8,
                        x: position === "left" ? "-27.5em" : position === "right" ? "27.5em" : 0,
                        y: position === "active" ? 0 : "3.5em",
                        rotateY: position === "left" ? -10 : position === "right" ? 10 : 0,
                        }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{
                        position: "absolute",
                        width: "400px",
                        height: "250px",
                        zIndex: position === "active" ? 5 : position === "left" ? 1 : 0,
                        backgroundColor: "#FBFBFB",
                        }}
                    >
                        <ProjectCard key={src.id} src={src.image} />
                    </motion.div>
                    );
                })}
            </Grid>

            <CustomButton onClick={handlePrev} 
                disabled={disabled}
                sx = {{ 
                    position: "absolute", 
                    left: "25%", 
                    bottom: "25%",
                    backgroundColor: "#88FFDB",
                    border: "2px solid #FBFBFB",
                    borderRadius: "50em",
                    color: "#FBFBFB",
                    padding: "1em"
                }}
            >
                <Image src={Left}/>
            </CustomButton>
            <CustomButton onClick={handleNext} 
                disabled={disabled}
                sx = {{ 
                    position: "absolute", 
                    right: "25%", 
                    bottom: "25%",
                    backgroundColor: "#88FFDB",
                    border: "2px solid #FBFBFB",
                    borderRadius: "50em",
                    color: "#FBFBFB",
                    padding: "1em" 
                }}
            >
                <Image src={Right}/>
            </CustomButton>
            <Typography variant="h1" sx = {{fontFamily: "Anton-SC, sans-serif", textAlign: "center", marginTop: "0.5em"}}>
                {activeProject.title}
            </Typography>
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                {activeProject.description.split("\n").map((line, index) => (
                    <span key={index}>
                        {line}
                        <br />
                    </span>
                ))}
            </Typography>
            <CustomButton 
                sx = {{backgroundColor: "#88FFDB", maxWidth: "10em"}}
                href={activeProject.link} 
                target="_blank" 
            >
                view more
            </CustomButton>

        </Grid>
    );
};

export default ProjSlideshow;