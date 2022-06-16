import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import {
    CardContent,
    createTheme,
    Pagination,
    ThemeProvider,
    Typography,
  } from "@mui/material";
import "../App.scss";
import CircularProgress from '@mui/material/CircularProgress';

const axios = require('axios');

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Leaderboard() {
  const [leaderdetails, setLeaderDetails] = useState([{firstname: "", lastname: "", coinbalance:null, accuracy:null}])
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [loader,setLoader] = useState(<p></p>);
  const navigate = useNavigate();
  useEffect(() => {
    // if (cookies.jwt == "" || cookies.jwt == null) {
    //     navigate('/login');
    // }
    setLoader(<CircularProgress/>);
    axios.get(`${localStorage.getItem('server')}/getLeaderboard`)
        .then((res: { data: any; }) => {
          setLeaderDetails(res.data);
          setLoader(<></>);
        }).catch((err: any) => { console.log("Error found") })
}, [])
  return (
    <TableContainer component={Paper} sx={{ marginTop: '-20px', width: 'fit-content' }}>
      <Typography variant='h5' sx={{ padding: '30px 15px' }}>
                    <strong>Leader Board</strong>
      </Typography>
      {loader}
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Coin Balance</StyledTableCell>
            <StyledTableCell align="right">Accuracy</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderdetails.map((row) => (
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                {row.firstname + " " + row.lastname}
              </StyledTableCell>
              <StyledTableCell align="center">{row.coinbalance}</StyledTableCell>
              <StyledTableCell align="center"> &nbsp; &nbsp; &nbsp; {row.accuracy} %</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
}
