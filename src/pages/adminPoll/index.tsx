import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const AdminPoll = () => {
  const [open, setOpen] =useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box sx={{ width: "100%", backgroundColor: "#000", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#141414",
          padding: "20px 100px",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontSize: "24px",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            ADMIN POll
          </Typography>
        </Box>
        <Box>
          <Button variant="contained">Logout</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "10px 0" }}>
        <Button variant="contained">Add-Poll</Button>
      </Box>
      <Box
        sx={{
          border: "1px solid #fff",
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          borderRadius: "10px",
          padding: "10px",
          alignItems: "center'",
          marginTop: "10px",
        }}
      >
        <Box sx={{ color: "#fff" }}>poll</Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained">Add option</Button>
          <Button variant="contained">Edit</Button>
          <Button variant="contained">Delete</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPoll;
