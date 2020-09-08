import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { csv } from 'd3'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@material-ui/core';
import { Grid, Card, CardHeader, CardContent, CardActions, Container, Button, TextField, Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography } from '@material-ui/core'
import Layout from "../components/layout"
import { withAuthSync } from "../utils/auth";
import {Element} from 'react-scroll'

const initialValues = {
    file: ''
}

const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("Mohon Pilih File Terlebih dahulu")
        .test("fileFormat", "Tipe File Tidak Sesuai", value =>
            value && ['application/vnd.ms-excel'].includes(value.type)
        )
        .test("fileSize", "Ukuran File Melebihi Kapasitas 10Mb", value =>
            value && value.size < 10000000
        )
})

const useStyles = makeStyles((theme) =>({
    table: {
        maxWidth: 500,

    },

    root: {
        minHeight: 670
    },
    paper: {
        margin: theme.spacing(3, 2),
        marginTop: theme.spacing(5),
        padding: theme.spacing(0),
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    typo:{
        fontStyle: 'normal',
        fontWeight: '600',
        // fontSize: '32px',
        lineHeight: '39px',
        color: '#008F4C'
    },
    button: {
        margin: theme.spacing(1, 0, 1),
        borderRadius: 10,
        justify: 'center',
        marginTop: 5,
        marginRight:47,
        width: 80,
        backgroundColor: '#008F4C',
    },
}));

function upload() {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [data, setData] = React.useState([])


    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialogNo = () => {
        setOpenDialog(false);
    };
    const handleCloseDialogYes = () => {
        setOpenDialog(false);
        handleClickOpenSnackBar();
    };

    const handleClickOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            handleClickOpenDialog()
        },
        validationSchema
    })

    return (
        <Layout>
             <Element id="daftarSection" name="daftarSection">
        <Container maxWidth="xl" component="main" className={classes.root}>
            <Grid container justify="center">
                <Grid item>
                    <Card>
                        <CardHeader className={classes.typo} title="Pendaftaran Pekerja Upload" titleTypographyProps={{ align: 'center' }}>
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body" align="center" color="textSecondary" component="p">Pemberi Keja saat meng-upload data pendaftaran pekerja melalui menu upload Pendaftaran Pekerja</Typography>                            
                        </CardContent>
                        <div className={classes.paper}>
                        <div className={classes.root}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField id="txtFileName" disable="true" value={formik.values.file.name} variant="outlined" size="small"></TextField><Typography style={{ color: "red" }}>{formik.errors.file}</Typography>
                    <br></br>
                    <Button 
                    id="btnBrowsFile" 
                    className={classes.button} 
                    variant="contained" 
                    component="label"
                    color="primary"
                    >
                        Pilih
                    <input id="file" name="file" type="file" style={{ display: "none" }} onChange={(event) => {
                            formik.setFieldValue("file", event.currentTarget.files[0]);
                            csv(URL.createObjectURL(event.target.files[0])).then(data => {
                                setData(data);
                            });
                        }} />
                    </Button>
                    <Button className={classes.button}
                     id="btnSubmit" 
                     variant="contained" 
                     type="submit"
                     color="primary"
                     >Confirm</Button>
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialogNo}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Upload File?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Apakah Data Pendaftaran Peserta Yang Akan Diunggah Telah Sesuai?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialogNo} color="primary">
                                Tidak
                        </Button>
                            <Button onClick={handleCloseDialogYes} color="primary" autoFocus>
                                Iya
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={openSnackBar}
                        onClose={handleCloseDialogNo}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Upload Berhasil"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Data Pendaftaran Peserta Telah Kami Terima. Status Pendaftaran Dapat Dilihat Pada Menu Notifikasi
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button href="" onClick={handleCloseSnackBar} color="primary" autoFocus>
                                Oke
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table" style={(formik.errors.file == undefined && formik.values.file == '') || formik.errors.file ? { display: "none" } : { display: "" }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Nama</TableCell>
                                    <TableCell align="right">NIK</TableCell>
                                    <TableCell align="right">Nama Institusi</TableCell>
                                    <TableCell align="right">NIP</TableCell>
                                    <TableCell align="right">Tanggal Lahir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row, index) => {
                                    if (data.length <= 10) {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">{row.Nama}</TableCell>
                                                <TableCell align="right">{row.Nik}</TableCell>
                                                <TableCell align="right">{row.NamaInstitusi}</TableCell>
												<TableCell align="right">{row.Nip}</TableCell>
                                                <TableCell align="right">{row.TanggalLahir}</TableCell>
                                            </TableRow>)
                                    } else {
                                        if (index < 5 || index > data.length - 6) {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">{row.Nama}</TableCell>
                                                <TableCell align="right">{row.Nik}</TableCell>
                                                <TableCell align="right">{row.NamaInstitusi}</TableCell>
												<TableCell align="right">{row.Nip}</TableCell>
                                                <TableCell align="right">{row.TanggalLahir}</TableCell>
                                                </TableRow>)
                                        }
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
                <br></br>
            </div>
                        </div>
                        
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Element>
           
        </Layout>
    )
}

export default withAuthSync(upload)
