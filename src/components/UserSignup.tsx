import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Link, Grid, Button, CssBaseline, TextField, Box, Typography, Container } from '@mui/material';
import axios from 'axios';
import { borderRadius } from '@mui/system';
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

function SignUp() {
    const navigate = useNavigate();
    let errors = {

        email: false,
        phone: false,
    }
    const [error, setError] = useState(errors);
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [calendar, setCalendar] = useState('');
    const [pan, setPan] = useState('');
    const [password, setPassword] = useState('');
    const [loader,setLoader] = useState(<p></p>);

    const submitSignUp = (e: any) => {
        e.preventDefault();
        if (error.email) {
            console.log('Validation Error');
            return;
        }
        setLoader(<Loader/>);
        axios.post(`${localStorage.getItem('server')}/UserCredentials`, {
            firstname: firstname, 
            lastname: lastname,
            password: password,
            email: email,
            // phone: phone,
            // panNumber: pan,
            dob: calendar
        }).then((resp: { data: any; }) => {
            console.log(resp.data);
            navigate('/login');
        }).catch((error: any) => {
            console.log(error);
        });
    }

    const validate = (type: string) => {
        switch (type) {
            case 'email':
                errors.email = !(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))
                setError(errors)
                break;
            case 'phone':
                errors.phone = !(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(phone))
                setError(errors)
                break;
            default:
                console.log('all good');
        }
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
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '50px'
                    }}
                >
                    <span
                    style = {{
                        width:40,
                        height: 40,
                        backgroundColor: "black",
                        borderRadius: 30,
                    }}
                    ></span>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="FirstName"
                                    fullWidth
                                    id="FirstName"
                                    label="First Name"
                                    type='text'
                                    required
                                    value={firstname}
                                    onChange={(e: any) => setFirstName(e.target.value)}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="LastName"
                                    label="Last Name"
                                    name="LastName"
                                    type='text'
                                    value={lastname}
                                    onChange={(e: any) => setLastName(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    error={error.email}
                                    id="Email"
                                    label="Email"
                                    name="Email"
                                    type='email'
                                    onBlur={() => validate('email')}
                                    value={email}
                                    required
                                    onChange={(e: any) => setEmail(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="PhoneNumber"
                                    label="PhoneNumber"
                                    name="Phone Number"
                                    error={error.phone}
                                    onBlur={() => validate('phone')}
                                    required
                                    value={phone}
                                    onChange={(e: any) => setPhone(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid> */}
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    fullWidth
                                    id="date"
                                    type="date"
                                    required
                                    value={calendar}
                                    onChange={(e: any) => setCalendar(e.target.value)}
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="PanNumber"
                                    label="PanNumber"
                                    name="PanNumber"
                                    value={pan}
                                    onChange={(e: any) => setPan(e.target.value)}
                                    autoComplete="family-name"
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="Password"
                                    label="Password"
                                    type="Password"
                                    id="Password"
                                    value={password}
                                    required
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
                            onClick={submitSignUp}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
                
            </Container>
            </div>
        //</ThemeProvider >
    );
}

export default SignUp;