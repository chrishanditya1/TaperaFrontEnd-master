import React from 'react'
import { TextField, Button, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';


const MyTypography = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '48ch',
        },
    },
    subtitle: {
        margin: theme.spacing(1),
      },
      subtitle2: {
        marginTop: theme.spacing(4),
        margin: theme.spacing(1),
      },
      button: {
        marginTop: theme.spacing(4),
        direction: "row",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    buttonconfig: {
      marginRight: theme.spacing(3),
      margin: theme.spacing(1, 0, 1),
      borderRadius: 15,
      justify: 'center',
      marginTop: 5,
      width: 110,
      backgroundColor: '#008F4C',
    },
}));

export default function formdatapeserta(props) {
    const classes = useStyles();
    
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <MyTypography className={classes.subtitle}>Informasi Peserta (Diisi oleh BP Tapera)</MyTypography>
        <div>
        <TextField
                id="standard-select-nopesertatapera"
                label="Nomor Peserta Tapera"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Tanggal Daftar Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-alamatkorespondensi"
                label="Alamat Korespondensi"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
          
        <TextField
                id="standard-select-sid"
                label="SID"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
        <TextField
                id="standard-select-statusPeserta"
                label="Status Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            
            <TextField
                id="standard-select-statuspendaftaran"
                label="Status Pendaftaran"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            
        
        <TextField
                id="standard-select-ifua"
                label="IFUA"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-resikopeserta"
                label="Profil Resiko Peserta"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-unitpenyertaan"
                label="Unit Penyertaan"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Bank Penyalur"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-saldotabungan"
                label="Saldo Tabungan"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-saldosimpanan"
                label="Saldo Simpanan"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
        
           
            <TextField
                id="standard-select-jenismanfaat"
                label="Jenis Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Jumlah Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
            <TextField
                id="standard-select-tgldaftarpeserta"
                label="Tanggal Realisasi Manfaat"
                helperText="Diisi Oleh Tapera"
                disabled
            >
            </TextField>
        </div>
        <div className={classes.button}>
        <Button 
        onClick={(e) => {props.handleNext(e, 1)}}
        type="button"
        className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
        >Selanjutnya</Button>
        </div>
        </form>
    )
}

