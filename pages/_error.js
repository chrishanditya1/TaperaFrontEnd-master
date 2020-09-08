import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        '& .MuiGrid-root':{
            display: 'flex',
            alignItems: 'center'
        }
    },
    image: {
        backgroundImage: 'url(/assets/img/tower.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
        //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(0, 8),
        display: 'flex',
        flexDirection: 'column',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Layout>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={12} sm={7} md={4}>
                    <div className={classes.paper}>
                    <Typography component="h1" variant="h5" color="primary">
                            U u p s . . .
                        </Typography>
                        <Typography component="h1" variant="h5" color="primary">
                            Jalan ke rumah mu tidak terlihat (server-side)
                        </Typography>
                        <Button href="/" variant="outlined" style={{ backgroundColor: '#008F4C', color: '#fff' }}>Kembali</Button>
                    </div>
                </Grid>
                <Grid item xs={false} sm={5} md={8} className={classes.image} />
            </Grid>
        </Layout>
    );
}