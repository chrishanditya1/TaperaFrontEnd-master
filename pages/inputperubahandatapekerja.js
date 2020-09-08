import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from "../components/header";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, nip, tglahir, stpeserta, nik) {
  return { name, nip, tglahir, stpeserta, nik };
}

const rows = [
  createData('Giacomo Guilizzoni ', 1234, '12 Juni 1965', 'Aktif', 112345),
  createData('Marco Botton', 1245, '23 Maret 1972', 'Tidak Aktif', 112347),
  createData('Mariah Maclachlan', 1235, '10 November 1992', 'Pasif', 112312),
  createData('Valerie Liberty', 1256, '1 Januari 2000', 'Berhenti', 190345),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  con: {
    direction: 'column',
    justify: 'center',
    alignItems: 'stretch',
    padding: 20,
  },
  submit: {
    marginleft: 21,
    backgroundColor: '#008F4C',
    borderRadius: 15,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div>
        <style jsx>{`
            .judul {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: bold;  
            color: green;
            font-size: 40px;
            }
            }
        `}</style>
    <Header />
    <Grid className={classes.con} item xs>
        <div className="judul">
            <p>Input Perubahan Data Pekerja</p>
        </div>
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Nama</StyledTableCell>
                <StyledTableCell align="center">NIP</StyledTableCell>
                <StyledTableCell align="center">Tanggal Lahir</StyledTableCell>
                <StyledTableCell align="center">Status Peserta</StyledTableCell>
                <StyledTableCell align="center">NIK</StyledTableCell>
                <StyledTableCell align="center">Aksi</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="center">{row.nip}</StyledTableCell>
                <StyledTableCell align="center">{row.tglahir}</StyledTableCell>
                <StyledTableCell align="center">{row.stpeserta}</StyledTableCell>
                <StyledTableCell align="center">{row.nik}</StyledTableCell>
                <StyledTableCell align="center">
                <Grid container>
                    <Box pl={19}>
                    <Button href='/lihatdatapekerja' type="submit" id="btnView" value="Submit" variant="contained" color="primary" className={classes.submit}> Lihat </Button>
                    </Box>
                    <Box pl={3}>
                    <Button href='/perubahandatapekerja' type="submit" id="btnEdit" value="Submit" variant="contained" color="primary" className={classes.submit}> Ubah </Button>
                    </Box>
                    {/* <Box pl={3}>
                    <Button href='#' type="submit" id="btnHapus" value="Submit" variant="contained" color="primary" className={classes.submit}> Hapus </Button>
                    </Box> */}
                </Grid>
                </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Grid>
    </div>
  );
}