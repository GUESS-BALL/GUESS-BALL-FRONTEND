import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import cric from './cric.jpg';
import Loader from '../component2/Loader';

const theme = createTheme({
    palette: {
        background: {
            default: '#373640'
        }
    }
    
});

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [role, setRole, removeRole] = useCookies(['role']);
    const [loader,setLoader] = useState(<p></p>);

    useEffect(() => {
        if (role.role==="USER") {
            navigate('/userdashboard');
        }
        else if(role.role==="ADMIN"){
            navigate('/admindashboard');
        }
    },[])  

    const submitForm = () => {
        setLoader(<Loader/>);
        axios.post(`${localStorage.getItem('server')}/getValidation`, {
            email: email,
            password: password
        }).then((resp: { data: any }) => {
            console.log(resp.data);
            if(resp.data === "USER" ){
                setCookie("jwt", email)
                localStorage.setItem('username',email);
                setRole("role","USER")
                console.log(cookies.jwt);
                navigate('/userdashboard')
                
            }
            else if(resp.data === 'ADMIN'){
                setCookie("jwt", email)
                localStorage.setItem('username',email);
                setRole("role","ADMIN")
                navigate('/admindashboard')
            }
            else{
                window.location.reload();
            }
            
        }).catch((error: any) => {
            console.log(error);
        })
    }

    return (
        // <ThemeProvider theme={theme}> 
         <div style={{ display:"flex",alignItems:"center",backgroundImage:`url(${cric})`,height: '100vh',backgroundRepeat:"no-repeat",backgroundSize:"cover"} }>
            {loader}
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Paper
                    elevation={4}
                    sx={{
                        verticalAlign: 'center',
                        // marginTop: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '50px'
                    }}>
                    <span
                    style = {{
                        width:40,
                        height: 40,
                        backgroundColor: "black",
                        borderRadius: 30,
                    }}
                    ></span>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    <p>Welcome to GUESS-BALL</p>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>


                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    required
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Password"
                                    type="Password"
                                    required
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
                            onClick={submitForm}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/SignUp" variant="body2">
                                    Don't have an acount? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
            </div>
        // </ThemeProvider>
    );
}
export default Login;