import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1400";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#3c1361", 
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="#f5f5f5"
        align="center"
        variant="h2"
        marked="center"
        sx={{ fontWeight: 600 }}
      >
        Blockchain Based Voting System
      </Typography>
      <Typography
        color="#e0e0e0"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 }, fontStyle: "italic" }}
      >
        A decentralized voting system built on the Ethereum blockchain.
      </Typography>
      <Button
        sx={{
          minWidth: 200,
          backgroundColor: "#ffca28", // Amber/Gold
          color: "#3c1361",
          "&:hover": {
            backgroundColor: "#ffc107",
          },
        }}
        variant="contained"
        size="large"
        onClick={handleClick}
      >
        Enter the Voting System
      </Button>
    </CoverLayout>
  );
}
