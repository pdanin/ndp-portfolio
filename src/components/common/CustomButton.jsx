import React from "react";
import { Button, Tooltip } from "@mui/material";
import { useTheme, useMediaQuery, styled } from "@mui/material";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  "& .MuiTooltip-tooltip": {
    fontFamily: `"SF Pro Display", sans-serif !important`, 
    fontSize: "0.65rem",
    fontWeight: "500",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "8px",
    letterSpacing: "0.5px",
    lineHeight: "1.4",
  },
  "& .MuiTooltip-arrow": {
    color: "#333", 
  }
}));

const CustomButton = ({
  children, 
  color = "", 
  variant = "contained", 
  size = "medium", 
  circular = false,
  sx = {}, 
  onClick, 
  disablePressEffect=false,
  tooltipText = "",
  ...props 
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const buttonElement = (
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
        marginBottom: circular ? {md: "0.5em", sm: "0"} : "",
        fontWeight: 200, 
        fontSize: "1rem", 
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", 
        scale: circular ? {
          md: 1,
          sm: 0.8,
          xs: 0.65 
        } : 1,
        transition: circular ? "transform 0.3s ease-in-out" : "",
        "&:hover": circular ? { transform: "scale(1.05)" } : {},
        ...sx, 
      }}
      {...props}
    >
      {children}
    </Button>
    );
    return circular && isSmallScreen ? (
      <CustomTooltip title={tooltipText} placement="bottom" arrow>
      <span>{buttonElement}</span> 
      </CustomTooltip>
    ) : ( buttonElement
  );
};

export default CustomButton;
