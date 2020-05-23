import 'babel-polyfill'

import { UserManager } from 'oidc-client'

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useRouter } from 'next/router'

import { useState } from 'react';

const customer_id = "00000000-0000-0000-0000-000000000000"

const settings = {
  authority: `https://v1.api.us.janrain.com/e0fe87a8-5911-4ea2-a2ea-9e98d2cf9805/login`, // library appends '/authorize'
  client_id: "ce230c02-339f-4ba0-b434-a70588a54aba",
  redirect_uri: "http://localhost:3000/redirect_uri",
  response_mode: "query",
}

const tableCellStyle = {
  whiteSpace: "normal",
  wordWrap: "break-word",
}

export default () => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const handleStartOver = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    router.push("/") // Redirect back to Login page
  }

  const handleGetToken = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    const myUserManager= new UserManager(settings)
    const url = window.location.href
    try {
      const _user = await myUserManager.signinCallback(url)
      console.debug("siginCallback result", _user)
      setUser(_user)
      myUserManager.storeUser(_user)
    } catch (err) {
      console.error("SigninCallback Failed", err)
      router.push("/") // Redirect back to Login page
    }
  }

  const handleRevokeAccessToken = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    const myUserManager= new UserManager(settings)
    try {
      await myUserManager.revokeAccessToken()
      myUserManager.removeUser() // remove from browser session
      setUser(null) // update the page
      router.push("/") // redirect back to Login page
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Paper>
        <Typography variant="h3" align="center">You are logged in!</Typography>
        <Button color="secondary" variant="contained" fullWidth={true} onClick={handleStartOver}>Start Over</Button>
        <TableContainer>
          <Table aria-label="settings table" style={{tableLayout: "fixed"}}>
            <TableBody>
              {Object.entries(router.query).map(entry => (
                <TableRow style={tableCellStyle}>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell>{entry[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        { user === null &&
        <Button color="primary" variant="contained" fullWidth={true} onClick={handleGetToken}>Get Token</Button>
        }
        { user !== null &&
        <Button color="primary" variant="contained" fullWidth onClick={handleRevokeAccessToken}>Revoke Access Token</Button>
        }
        { user !== null &&
        <TableContainer>
          <Table aria-label="user table" style={{tableLayout: "fixed"}}>
            <TableBody>
              {Object.entries(user).map(entry => (
                <TableRow style={tableCellStyle}>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell>{JSON.stringify(entry[1])}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        }
      </Paper>
    </Container>
  )
}
