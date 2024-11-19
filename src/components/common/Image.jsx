import React from "react";
import { Box } from "@mui/material";

const Image = ({ src, alt, sx, ...props }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%", 
        height: "auto", 
        borderRadius: "8px",
        ...sx, 
      }}
      {...props}
    />
  );
};

export default Image;