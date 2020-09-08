import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Txtlogin from '../components/txtgantisandi';
import Txtselamatdatang from '../components/txtselamatdatang';
import Txtdeskripsi from '../components/txtdeskripsi';
import Hidden from '@material-ui/core/Hidden';
import { withAuthSync,logout } from "../utils/authresetpass";

function Copyright() {
  return (
    <Typography color="textPrimary" variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" >
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
  },
  image: {
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#008F4C',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${"/assets/img/bg11.jpg"})`
  },
  paper: {
    margin: theme.spacing(2, 2),
    marginTop: theme.spacing(15),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    // width: '100%', 
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
  }
}));

const SignInSide = ({ userData }) => {
  const [password, setPassword] = useState('');
  // const id = userData.user_id;

  async function handleSubmit() {
    // e.preventDefault();
    //call api
    var status = '';
    var userData;
    
    // const response = await fetch('http://10.172.24.130/changePassword', {
    //   method: 'POST',
    //   // mode: 'same-origin',
      
    //   // headers: {
    //   //   'Content-Type': 'application/json',
    //   //   'Access-Control-Allow-Origin': '*',
    //   // },
    //   body: JSON.stringify({
    //     password,
    //     status,
    //     id,
    //   }),
    // })
    
    //   .then((r) => {
    //     console.log (r.status);  
    //     status = r.status;
    //     return r.json();
    //   })

    //   .then((data) => {
    //     console.log (data);
    //     // console.log (status);
    //     userData = data;
    //   })
      // console.log("masuk handle");
        // if (status === 200) {
        //   console.log("masuk login");
        //   // const { userData } = response.json()
        //   logout();

        //   // console.log (data);
        //   // cookie.set('auth', data, {expires: 2});
        //   // const cookis = cookie.get('auth');
        //   // console.log (cookis);
          
        //   // Router.push('/menuutama');
        // } else {
        //   // console.log("Login failed.");
        //   // console.log(response);
        //     setLoginError("Internal Error!");
        // }
  }

  var satu = 0;
  var dua = 0;
  var tiga = 0;
  var empat = 0;
  var lima = 0;
  const classes = useStyles();
  
  function handleonfocus () {
    document.getElementById("message").style.display = "block";
  }

  
  function handleonblur () {
    document.getElementById("messageconfirm").style.display = "none";
  }

  function handleonkeyup () {
    var myInput = document.getElementById("txtKatasandibaru");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var special = document.getElementById("special");
    var length = document.getElementById("length");

    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      satu = 1;
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      satu = 0;
  }

    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
      dua = 1;
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
      dua = 0;
    }

    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
      tiga = 1;
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
      tiga = 0;
    }

    var specialchar = /[!"#$%&'()*,.:;<=>?@^_~]/g;
    if(myInput.value.match(specialchar)) {
      special.classList.remove("invalid");
      special.classList.add("valid");
      empat = 1;
    } else {
      special.classList.remove("valid");
      special.classList.add("invalid");
      empat = 0;
    }

    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
      lima = 1;
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
      lima = 0;
    }
  }
  

  function confirmpass(){
    var Input1 = document.getElementById("txtKatasandibaru");
    var Input2 = document.getElementById("txtKonfirmasi");
    var str = "JavaScript Substring"
    let substring = str.substring(7,100)

    if (satu === 1){
      if (dua === 1){
        if (tiga === 1){
          if (empat === 1){
            if (lima === 1){
            // document.getElementById("messageconfirm").style.display = "block";
              if (Input1.value === Input2.value){
                console.log("masuk")
                handleSubmit();
              }else {
                document.getElementById("messageconfirm").style.display = "block";
                document.getElementById("message").style.display = "none";
          }
          }else {
              console.log("forbid")
          }
          }else {
            console.log("forbid")
          }
        }else {
          console.log("forbid")
        }
      }else {
        console.log("forbid")
      }
    }else {
      console.log("forbid")
      console.log(substring)
    }
  }

  

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden smDown>
      <Grid item xs={12} sm={8} md={4} className={classes.image}>
        <Txtselamatdatang />
        <Txtdeskripsi />
      </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper} style={{ padding: 70 }}>
          <style jsx>{`
            .txtfield {
              border-radius: 50;
            }
            #message {
              display:none;
              background: #f1f1f1;
              color: #000;
              position: relative;
              padding: 7px;
              margin-top: 2px;
              line-height: 7px;
            }
            
            #message p {
              padding: 2px 20px;
              font-size: 14px;
              line-height: 1px;
            }

            #messageconfirm {
              display:none;
              background: #f1f1f1;
              color: #000;
              position: relative;
              padding: 7px;
              margin-top: 2px;
              line-height: 7px;
              color: red;
            }
            
            .valid {
              color: green;
            }
            
            .valid:before {
              position: relative;
              left: -35px;
            }
            
            .invalid {
              color: red;
            }
            
            .invalid:before {
              position: relative;
              left: -35px;
            }
            }
          `}</style>
          <Txtlogin />
          <p>Silahkan ganti kata sandi anda.</p>
          <form className={classes.form} noValidate>
            <div className="txtfield">
              {/* <TextField
                className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                id="txtKatasandilama"
                label="Kata sandi lama."
                name="Kata sandi lama"
                type="password"
                autoFocus
              /> */}
              <TextField
                className={classes.TxtField}
                onFocus={handleonfocus}
                onKeyUp={handleonkeyup}
                onClick={handleonblur}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Kata sandi baru"
                label="Kata sandi baru."
                type="password"
                id="txtKatasandibaru"
                onChange={(e) => setPassword(e.target.value)}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              />
              <TextField
                className={classes.TxtField}
                variant="outlined"
                margin="dense"
                fullWidth
                size="small"
                name="Konfirmasi kata sandi baru"
                label="Konfirmasi kata sandi baru."
                type="password"
                id="txtKonfirmasi"
              />
            </div>
            <div className="submit">
              <Button
                
                id="btnLogin"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={confirmpass}
                >
                RESET KATA SANDI
              </Button>
            </div>
            <div id="message">
              <h3>Pastikan kata sandi anda memenuhi syarat:</h3>
              <p id="letter" className="invalid">Sebuah huruf <b>kecil</b></p>
              <p id="capital" className="invalid">Sebuah huruf <b>BESAR</b></p>
              <p id="number" className="invalid">Sebuah <b>angka</b></p>
              <p id="special" className="invalid">Sebuah <b>spesial karakter</b></p>
              <p id="length" className="invalid">Minimal <b>8 karakter</b></p>
            </div>
            <div id="messageconfirm">
              <h3>Konfirmasi kata sandi tidak sesuai.</h3>
            </div>
          </form>
          <form className={classes.form} noValidate>
              <Copyright />
          </form>
        </div>
      </Grid>
      </Grid>
  );
}

export default SignInSide;