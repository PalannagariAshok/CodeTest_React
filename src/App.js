import logo from "./logo.svg";
import "./App.css";
import Panel1 from "./components/panel1";
import Panel2 from "./components/panel2";
import Panel3 from "./components/panel3";
import Panel4 from "./components/panel4";
import Panel5 from "./components/panel5";
import Panel6 from "./components/panel6";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
  lineHeight: '60px',
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} sx={{ p: 2, }} >
        <Grid item xs={12} sm={6} md={3} >
          <Item elevation={5}>
            <Panel1/>
          </Item>
          
        </Grid>
        <Grid item xs={12}sm={6} md={6} elevation={3}>
        <Item elevation={5}>
          <Panel2 />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} elevation={3}>
        <Item elevation={5}>
          <Panel3 />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} elevation={3} >
        <Item elevation={5}>
          <Panel4 />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6} elevation={3}>
        <Item elevation={0}>
          <Panel5 />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3} elevation={3}>
        <Item elevation={5}>
        <Panel6 />
        </Item>
        </Grid>

        {/* <Panel1 sx={{ gridArea: 'header2', bgcolor: 'primary.main' }}/>
        <Panel3 sx={{ gridArea: 'header3', bgcolor: 'primary.main' }}/>

        <Panel1 sx={{ gridArea: 'footer1', bgcolor: 'primary.main' }}/>
        <Panel1 sx={{ gridArea: 'footer2', bgcolor: 'primary.main' }}/>
        <Panel1 sx={{ gridArea: 'footer3', bgcolor: 'primary.main' }}/> */}
      </Grid>
      {/* <div className="AppComponent">
       
      </div> */}
      {/* <header className="App-header">
       
      </header> */}
    </div>
  );
}

export default App;
