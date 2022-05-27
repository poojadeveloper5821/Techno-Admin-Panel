import React from "react";
import "./Login.css";
import LoginImg from "../../Assets/images/login_background.png";
import LogoImg from "../../Assets/images/tg_logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Card, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
//import Avatar from "@mui/material/Avatar";
//import CssBaseline from "@mui/material/CssBaseline";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
//import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import Grid from "@mui/material/Grid";
//import Paper from "@mui/material/Paper";

function Login() {
  const theme = createTheme();
  return (
    // <div className="main">
    //   <div className="container">
    //   <div className="imgContainer">
    //     <img className="logo" src={LogoImg}/>
    //     <img className="login" src={LoginImg} />
    //   </div>
    //   <div className="formDetails">
    //     <Typography component="h1" variant="h5">
    //       Login to Technogetic
    //     </Typography>
    //     <Box component="form" Validate sx={{ mt: 4 }}>
    //       <Typography  component="p" variant="p">
    //         Email
    //       </Typography>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         id="email"
    //         placeholder="xyz@gmail.com"
    //         name="email"
    //         autoComplete="email"
    //         autoFocus
    //       />
    //       <Typography component="p" variant="p">
    //         Password
    //       </Typography>
    //       <TextField
    //         margin="normal"
    //         required
    //         fullWidth
    //         name="password"
    //         placeholder="XX-XX-XX-XX-XX"
    //         type="password"
    //         id="password"
    //         autoComplete="current-password"
    //       />
    //       <Button
    //         type="submit"
    //         fullWidth
    //         variant="contained"
    //         sx={{ mt: 5, mb: 2 }}
    //       >
    //         Login
    //       </Button>
    //     </Box>
    //   </div>

    // </div>
    // </div>

    // <ThemeProvider theme={theme}>
    //   <Card sx={{ width: 900 }}>
    //     <Grid container component="main">
    //       <CssBaseline />
    //       <Grid
    //         item
    //         xs={false}
    //         sm={4}
    //         md={4}
    //         sx={{
    //           backgroundImage: `url(${LoginImg})`,
    //           backgroundRepeat: "no-repeat",
    //           backgroundColor: (t) =>
    //             t.palette.mode === "light"
    //               ? t.palette.grey[50]
    //               : t.palette.grey[900],
    //           backgroundSize: "cover",
    //           width: 50,
    //           backgroundPosition: "center",
    //         }}
    //       />
    //       <Grid
    //         item
    //         xs={12}
    //         sm={8}
    //         md={8}
    //         component={Paper}
    //         elevation={6}
    //         square
    //       >
    //         <Box
    //           sx={{
    //             my: 8,
    //             mx: 4,
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",
    //           }}
    //         >
    //           <Typography component="h1" variant="h5">
    //             Login to Technogetic
    //           </Typography>
    //           <Box component="form" noValidate sx={{ mt: 1 }}>
    //             <Typography component="p" variant="div">
    //               Email
    //             </Typography>
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               id="email"
    //               label="Email Address"
    //               name="email"
    //               autoComplete="email"
    //               autoFocus
    //             />
    //             <Typography component="p" variant="div">
    //               Password
    //             </Typography>
    //             <TextField
    //               margin="normal"
    //               required
    //               fullWidth
    //               name="password"
    //               label="Password"
    //               type="password"
    //               id="password"
    //               autoComplete="current-password"
    //             />

    //             <Button
    //               type="submit"
    //               fullWidth
    //               variant="contained"
    //               sx={{ mt: 3, mb: 2 }}
    //             >
    //               Login
    //             </Button>
    //           </Box>
    //         </Box>
    //       </Grid>
    //     </Grid>
    //   </Card>
    // </ThemeProvider>

    <Box width="300px">
      <Card>
        <CardContent>
          <Typography component="h1" variant="h5">
            Login to Technogetic
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography component="p" variant="div">
              Email
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Typography component="p" variant="div">
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
