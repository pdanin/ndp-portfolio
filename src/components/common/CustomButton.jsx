import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  children, 
  color = "", 
  variant = "contained", 
  size = "medium", 
  sx = {}, 
  onClick, 
  ...props 
}) => {
  return (
    <Button
      color={color}
      variant={variant}
      size={size}
      onClick={onClick}
      sx={{
        textTransform: "none", 
        border: "1px solid #433D44",
        borderRadius: "50px", 
        padding: "0.5rem 1.5rem", 
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
