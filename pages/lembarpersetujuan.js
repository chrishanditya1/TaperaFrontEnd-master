import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout';
import { Typography } from '@material-ui/core';

const currencies = [
  {
    value: 'yes',
    label: 'YA',
  },
  {
    value: 'tidak',
    label: 'TIDAK',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft:'10px',
    paddingTop:'8px',
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('tidak');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Layout>
    <div className={classes.root}>
      <form className={classes.root} noValidate autoComplete="off">
      <Typography variant="h5">Lembar Persetujuan</Typography>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue="Apakah anda memiliki surat izin usaha ?"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue="Apakah anda memiliki NPWP ?"
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={10}>
            <TextField
              id="outlined-read-only-input"
              label=""
              fullWidth
              size="large"
              defaultValue=""
              InputProps={{
                readOnly: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid md={2}>
            <TextField
              id="outlined-select-yesno"
              select
              label=""
              value={currency}
              onChange={handleChange}
              helperText=""
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
      </div>
    </Layout>
  );
}
