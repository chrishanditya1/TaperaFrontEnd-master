import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Layout from "../components/layout";
import Txtpendaftaranpeserta from '../components/txtpendaftaranpeserta';
import InputPendaftaranPeserta from '../components/viewinputpendaftaranPeserta';
import UploadPendaftaranPeserta from '../components/viewuploadpendaftaranPeserta';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiGrid-root': {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            alignItems: 'center',
        },
        '& .MuiGrid-root .MuiButtonBase-root': {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            alignItems: 'center',
        },
    }

}));


export default function pendaftaranpeserta() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Layout>
            <Txtpendaftaranpeserta />
            <hr></hr>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={8} sm={6} md={4}>
                    <InputPendaftaranPeserta />
                    {/* <Button variant="contained" href='/inputpendaftaranpeserta' id="btnInputPendaftaranPeserta">Input</Button> */}
                </Grid>
                <Grid item xs={8} sm={6} md={4}>
                    <UploadPendaftaranPeserta />
                    {/* <Button variant="contained">Upload</Button> */}
                </Grid>
            </Grid>
            </Layout>
        </div>
    )
}