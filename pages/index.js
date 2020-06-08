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

const settings = {
  authority: `https://v1.api.us.janrain.com/xxxx/login`,
  client_id: "xxxx",
  redirect_uri: "http://localhost:3000/redirect_uri",
  response_type: "code",
  scope: "openid",
  prompt: "login",
}

export default () => {
  const handleOnClick = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    const myUserManager = new UserManager(settings)
    try {
      await myUserManager.signinRedirect({
        state: "hi"
      })
    } catch (err) {
      console.error("Redirect Failed", err)
    }
  }
  return (
    <Container>
      <Paper>
        <Typography variant="h3" align="center">Identity Cloud is Super Easy!</Typography>
        <TableContainer>
          <Table aria-label="settings table">
            <TableBody>
              {Object.entries(settings).map(entry => (
                <TableRow>
                  <TableCell>{entry[0]}</TableCell>
                  <TableCell>{entry[1]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button color="primary" variant="contained" fullWidth={true} onClick={handleOnClick}>Login</Button>
      </Paper>
    </Container>
  )
}
