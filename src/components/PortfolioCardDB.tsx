import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from '@mui/material';
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const axios = require('axios')

export default function PortfolioCardDB() {

    const [userprofile, setUserProfile] = useState({ id: null, email: "", password: null, coinbalance: null, accuracy: null, gamesplayed: null, role: "", firstname: "", lastname: "", dob: "" })
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const navigate = useNavigate();
    useEffect(() => {
      if (cookies.jwt == "" || cookies.jwt == null) {
        navigate('/login');
      }
  
      axios.get(`${localStorage.getItem('server')}/getLeaderboard/${cookies.jwt}`)
        .then((res: { data: any; }) => {
          setUserProfile(res.data)
          console.log(res.data)
        }).catch((err: any) => { console.log("Error found") });
  
    }, [])
    
    return (
        <>
        <TableContainer component={Paper} sx={{ marginTop: '40px', width: 'fit-content' }}>
        <Typography variant='h5' sx={{ padding: '30px 30px' }}>
                    <strong>User Stats</strong>
                        </Typography>
            <Table sx={{ minWidth: 500 }} >
                <TableHead>
                </TableHead>
                <TableBody>
                        <TableRow
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align='center' component="th" scope="row">
                            <b>Matches Played</b><br /><br/>
                                <Typography variant='subtitle1' >
                                {userprofile.gamesplayed}
                            </Typography>
                            </TableCell>
                            <TableCell align='center' component="th" scope="row">
                            <b>Accuracy</b><br /><br/>
                                <Typography variant='subtitle1' >
                                  {userprofile.accuracy} %
                            </Typography>
                            </TableCell>
                            <TableCell align='center'
                                sx=
                                {{
                                    color: 'green',
                                    fontWeight: "bold",
                                }}
                            >
                                Points Earned<br /><br />
                            <Typography  variant='subtitle1' sx={{ color: 'green'}} >
                                {userprofile.coinbalance}
                            </Typography>
                            </TableCell>
                        </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}
