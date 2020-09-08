import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Txtlogin from '../components/txtlogin';
import Txtselamatdatang from '../components/txtselamatdatang';
import Txtdeskripsi from '../components/txtdeskripsi';
import Hidden from '@material-ui/core/Hidden';
import { login } from '../utils/auth';
import { withAuthSync } from "../utils/authlogin1";


function Copyright() {
  return (
    
    <Typography color="textPrimary" variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit">
        MII
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    justifyContent: 'space-around',
    display: 'flex',
  },
  image: {
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#008F4C',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${"/assets/img/bg11.jpg"})`
  },
  paper: {
    margin: theme.spacing(8, 4),
    marginTop: theme.spacing(15),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    // width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    width: '50ch', 
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: '#008F4C',
    borderRadius: 15,
  },
  daftar: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: '#000603',
    borderRadius: 15,
  },
  TxtField: {
    background: '#d0d3d1',
    borderRadius: 12,
  }
}));

function SignInSide() {
  const classes = useStyles();
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    
  async function handleSubmit(e) {

    e.preventDefault();
    //call api
    var status;
    var userData;
    
    const response = await fetch('http://10.172.24.130/login', {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      body: JSON.stringify({
        username,
        password,
      }),
    })

      .then((r) => {
        console.log (r.status);  
        status = r.status;
        return r.json();
      })

      .then((data) => {
        console.log (data);
        // console.log (status);
        userData = data;
      })
       
        if (status === 200) {
          // const { userData } = response.json()
          login({ userData })

          // console.log (data);
          // cookie.set('auth', data, {expires: 2});
          // const cookis = cookie.get('auth');
          // console.log (cookis);
          
          // Router.push('/menuutama');
        } else {
          // console.log("Login failed.");
          // console.log(response);
          if (username === ""){
            setLoginError("Silahkan Lengkapi User ID dan Kata Sandi Anda!");
          } else if (password === "") {
            setLoginError("Silahkan Lengkapi User ID dan Kata Sandi Anda!");
          } else if (userData.message === "User has been disabled") {
            setLoginError("Maaf, Anda sudah melampaui batas percobaan Login. Kami telah mengirimkan tautan pengaturan kata sandi baru. Silahkan cek email Anda!.");
          } else {
          setLoginError("User ID / Kata Sandi yang Anda masukkan salah. Silahkan coba kembali");
          }
        }
      
    
  }
      
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden smDown>
      <Grid item xs={false} sm={false} md={4} className={classes.image}>
        <Txtselamatdatang />
        <Txtdeskripsi />
      </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={8} component={Paper} elevation={7} square>
        <div className={classes.paper} style={{ padding: 100 }}>
          <Txtlogin />
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
              {/* <input 
                className={classes.TxtField}
                type="text" 
                fullWidth
                autoComplete="email"
                placeholder="User ID"  
                className="form-control"
              /> */}
              <TextField
                // className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                id="txtUserID"
                label="User ID"
                name="User ID"
                type="username"
                value={username}
                autoComplete="username"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                // className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Kata Sandi"
                type="password"
                id="txtPassword"
                autoComplete="current-password"
              />
            {/* <Grid container>
              <Grid item xs>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Simpan User ID"
                id="lblSimpanId"
                />
              </Grid>
              <Grid item>
                <Link href='/resetpasswordinputid' color="textPrimary" id="lupakatasandi"> 
                  Lupa Kata Sandi?
                </Link>
              </Grid>
            </Grid> */}
            <div className="submit">
              <Button
                type="submit"
                id="btnLogin"
                fullWidth
                value="Submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                LOGIN
              </Button>
              {loginError && <p style={{color: 'red'}}>{loginError}</p>}
            </div>
          </form>
            {/* <Typography component="h5">
              Atau
            </Typography> */}
          <form className={classes.form} noValidate>
            {/* <Button
              type="submit"
              id="btnDaftar"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.daftar}>
              DAFTAR
            </Button> */}
              <Copyright />
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withAuthSync(SignInSide);