import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  children, 
  color = "", 
  variant = "contained", 
  size = "medium", 
  circular = false,
  sx = {}, 
  onClick, 
  disablePressEffect=false,
  ...props 
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      onClick={onClick}
      disableRipple={disablePressEffect}
      disableElevation={disablePressEffect}
      sx={{
        textTransform: "none", 
        border: circular ? "2px solid #FBFBFB" : "1px solid #433D44",
        backgroundColor: circular ? "#88FFDB" : "",
        borderRadius: "50em", 
        padding: circular ? "1em" : "0.5rem 1.5rem", 
        marginBottom: circular ? "0.5em" : "",
        fontWeight: 200, 
        fontSize: "1rem", 
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
        ...sx, 
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
