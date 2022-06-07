import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function panel5() {
  return (
    <div>
      <Grid
        container
        style={{ backgroundColor: "rgb(241, 241, 241)" }}
        elevation={0}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>
        </Grid>
      </Grid>
      <div style={{width:'100%',height:'30vh',backgroundColor:'white'}}>

      </div>
    </div>
  );
}
