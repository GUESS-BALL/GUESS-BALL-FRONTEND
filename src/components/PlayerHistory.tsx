
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Avatar,
  CardContent,
  Chip,
  createTheme,
  Pagination,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react'
import "../App.scss";
import NavbarDB from "./NavbarDB";

const axios = require('axios')
// const options = ["Option 1", "Option 2"];


// const theme = createTheme({
//   palette: {
//     background: {
//       default: "#F0F0F0",
//     },
//     primary: {
//       main: "#000000",
//     },
//   },
// });

export default function PlayerHistory() {

  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
  const [playerhistory, setPlayerHistory] = useState([{ id: null, email: "", matchname: "",questionsattempted: null, correctanswers: null, accuracy: null, pointsgained: null}]);
  const [allowed, setAllowed] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {

    if (cookies.jwt == "" || cookies.jwt == null) {
      navigate('/login');
  }

  axios.get(`${localStorage.getItem('server')}/findByEmail/${cookies.jwt}`)
      .then((res: { data: any;}) => {
        setPlayerHistory(res.data)
        console.log(res.data);
      }).catch((err: any) => { console.log("Error found") });
  }, [])


  // const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="playerhistory1">
      <NavbarDB/>
      <br />
      <Card sx={{ width: 1000, color: "black", height: 1000, margin: "auto", marginTop: 5 }}>
        <CardContent>
          <Typography variant='h2' sx={{ textAlign: 'center' }} >Player History
          </Typography>
          {/* <ThemeProvider theme={theme}> */}
            <Table
              sx={{ minWidth: 850, marginLeft: "5" }}
              aria-label="simple table"
            >
              <br/>
              <br/>
            </Table>
            <TableContainer>
              <Table sx={{ minWidth: 700 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Match Name</b></TableCell>
                    <TableCell align="center"><b>Attempted Questions</b></TableCell>
                    <TableCell align="center"><b>Correct Answers</b></TableCell> 
                    <TableCell align="center"><b>Accuracy</b></TableCell> 
                    <TableCell align="center"><b>Points Earned</b></TableCell>  

                  </TableRow>
                </TableHead>
                <TableBody>
                  {playerhistory.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align='center' component="th" scope="row">
                        {row.matchname}
                      </TableCell>
                      <TableCell align="center">{row.questionsattempted}</TableCell>
                      <TableCell align="center" color="green">
                        <Typography>{row.correctanswers}</Typography>
                      </TableCell>
                      <TableCell align="center" color="green">
                        <Typography>{row.accuracy}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Stack spacing={1} alignItems="center">
                          <Stack direction="row" spacing={1}>
                            <Chip
                              label={row.pointsgained}
                              color="success"
                              variant="outlined"
                            />
                          </Stack>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          {/* </ThemeProvider> */}
        </CardContent>
        {/* <Pagination count={5} defaultValue={3} ></Pagination> */}
      </Card>
    </div>
  );
}