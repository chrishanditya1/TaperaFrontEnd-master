import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Button, Paper, Typography, Grid, TextField, MenuItem, Select } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePicker } from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import Header from '../components/header';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function pendaftaranulangpekerja() {
  const classes = useStyles();
  //const [dataPeserta, setDataPeserta] = React.useState([]); 
  /*React.useEffect(() => {
    GetParticipant();
}, []);

async function GetParticipant() {
    const employer_id = "3d0e6a7d-3f6a-49e1-8541-fa8e4b839a01";
    await fetch('http://devsitara.tapera.go.id/reregistrationParticipants',
    {
      method: 'POST',
      body: JSON.stringify({
        employer_id,
       }),
    })
        .then((r) => {
            console.log(r.status)
            const status = r.status;
            return r.json();
        })

        .then((data) => {
          console.log(JSON.stringify(data))
          setDataPeserta([data]);
        })

        if (status === 200) {
          console.log("masuk login");
        } else {
          console.log("Login failed.");
    
        }
}*/
  const dataPeserta =[
    { nip: '100000001', nik: '0001', nama: 'Rudi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000002', nik: '0002', nama: 'Budi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000003', nik: '0003', nama: 'Sella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000004', nik: '0004', nama: 'Eka', tglLahir: "02-12-1993", tglCpns: "01-11-2018", golongan: "2", ruang: "d", tglPensiun: "01-11-2038", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000005', nik: '0005', nama: 'Eko', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000006', nik: '0006', nama: 'Rini', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000007', nik: '0007', nama: 'Reisya', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000008', nik: '0008', nama: 'Eri', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000009', nik: '0009', nama: 'Michel', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000010', nik: '0010', nama: 'Adit', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000011', nik: '0011', nama: 'Andre', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000012', nik: '0012', nama: 'Faiq', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "4", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000013', nik: '0013', nama: 'Dodi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "3", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000014', nik: '0014', nama: 'Dini', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000015', nik: '0015', nama: 'Sarah', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000016', nik: '0016', nama: 'Dina', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "3", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000017', nik: '0017', nama: 'Putri', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000018', nik: '0018', nama: 'Risa', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000019', nik: '0019', nama: 'Rosa', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000020', nik: '0020', nama: 'Jaena', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "4", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000021', nik: '0021', nama: 'Ari', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000022', nik: '0022', nama: 'Boby', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000023', nik: '0023', nama: 'Bella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "3", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000024', nik: '0024', nama: 'Cila', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000025', nik: '0025', nama: 'Cindy', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000026', nik: '0026', nama: 'Feriandi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000027', nik: '0027', nama: 'Gisella', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000028', nik: '0028', nama: 'Heri', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000029', nik: '0029', nama: 'Heru', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "2", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000030', nik: '0030', nama: 'Gina', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000031', nik: '0031', nama: 'Indri', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000032', nik: '0032', nama: 'Indra', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000033', nik: '0033', nama: 'Januar', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "4", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000034', nik: '0034', nama: 'Keyla', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000035', nik: '0035', nama: 'Aira', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000036', nik: '0036', nama: 'Arsila', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000037', nik: '0037', nama: 'Kirana', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000038', nik: '0038', nama: 'Lusi', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000039', nik: '0039', nama: 'Lona', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000040', nik: '0040', nama: 'Maemunah', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000041', nik: '0041', nama: 'Moh', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000042', nik: '0042', nama: 'Nurul', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000043', nik: '0043', nama: 'Nurdi', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000044', nik: '0044', nama: 'Nur', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000045', nik: '0045', nama: 'Putra', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000046', nik: '0046', nama: 'Opik', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000047', nik: '0047', nama: 'Ola', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000048', nik: '0048', nama: 'Puspita', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000049', nik: '0049', nama: 'Reina', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000050', nik: '0050', nama: 'Siti', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000051', nik: '0051', nama: 'Susilo', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "3", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000052', nik: '0052', nama: 'Tia', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000053', nik: '0053', nama: 'Tika', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000054', nik: '0054', nama: 'Riandy', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000055', nik: '0055', nama: 'Rian', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000056', nik: '0056', nama: 'Sasa', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000057', nik: '0057', nama: 'Ubai', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000058', nik: '0058', nama: 'Uci', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000059', nik: '0059', nama: 'Uca', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000060', nik: '0060', nama: 'Utari', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000061', nik: '0061', nama: 'Victoria', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000062', nik: '0062', nama: 'Vicky', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000063', nik: '0063', nama: 'Willy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000064', nik: '0064', nama: 'Winarti', tglLahir: "02-12-1993", tglCpns: "01-11-2018", golongan: "2", ruang: "d", tglPensiun: "01-11-2038", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000065', nik: '0065', nama: 'Yono', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000066', nik: '0066', nama: 'Yogo', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000067', nik: '0067', nama: 'Yoyo', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000068', nik: '0068', nama: 'Zainal', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000069', nik: '0069', nama: 'Zidan', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000070', nik: '0070', nama: 'Zulaiha', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000071', nik: '0071', nama: 'Zaenab', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000072', nik: '0072', nama: 'Ana', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000073', nik: '0073', nama: 'Dimas', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000074', nik: '0074', nama: 'Yosua', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "1", link: '/profilepekerja' },
    { nip: '100000075', nik: '0075', nama: 'Dwi', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000076', nik: '0076', nama: 'Dina', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000077', nik: '0077', nama: 'Bunga', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000078', nik: '0078', nama: 'Billy', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000079', nik: '0079', nama: 'Boy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000080', nik: '0080', nama: 'Deny', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000081', nik: '0081', nama: 'Didi', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000082', nik: '0082', nama: 'Dona', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000083', nik: '0083', nama: 'Fahri', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "1", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000084', nik: '0084', nama: 'Farah', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "1", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000085', nik: '0085', nama: 'Fina', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "2", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000086', nik: '0086', nama: 'Filda', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000087', nik: '0087', nama: 'Gita', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000088', nik: '0088', nama: 'Ganes', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000089', nik: '0089', nama: 'Iwan', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "3", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000090', nik: '0090', nama: 'Irwan', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "3", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000091', nik: '0091', nama: 'Shintia', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000092', nik: '0092', nama: 'Joko', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000093', nik: '0093', nama: 'Josua', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000094', nik: '0094', nama: 'Kia', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000095', nik: '0095', nama: 'Listy', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000096', nik: '0096', nama: 'Lala', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000097', nik: '0097', nama: 'Lintang', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000098', nik: '0098', nama: 'Indah', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    { nip: '100000099', nik: '0099', nama: 'Maria', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "4", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000100', nik: '0100', nama: 'Mira', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "2", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000101', nik: '0101', nama: 'Yolanda', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "0", link: '/profilepekerja' },
    { nip: '100000102', nik: '0102', nama: 'Rahman', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "1", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "5", link: '/profilepekerja' },
    { nip: '100000103', nik: '0103', nama: 'Steven', tglLahir: "01-11-1992", tglCpns: "01-11-2017", golongan: "2", ruang: "c", tglPensiun: "01-11-2037", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000104', nik: '0104', nama: 'Siska', tglLahir: "02-12-1993", tglCpns: "01-11-2016", golongan: "3", ruang: "d", tglPensiun: "01-11-2036", statusPekerja: "4", link: '/profilepekerja' },
    { nip: '100000105', nik: '0105', nama: 'Halimah', tglLahir: "01-11-1990", tglCpns: "01-11-2017", golongan: "1", ruang: "a", tglPensiun: "01-11-2037", statusPekerja: "3", link: '/profilepekerja' },
    { nip: '100000106', nik: '0106', nama: 'Hendrik', tglLahir: "02-12-1991", tglCpns: "01-11-2016", golongan: "4", ruang: "b", tglPensiun: "01-11-2036", statusPekerja: "2", link: '/profilepekerja' },
    ]

  const [nama, setNama] = React.useState(null);
  const [selectedStatusPekerja, setSelectedStatusPekerja] = React.useState("0");
  const [selectedGolongan, setSelectedGolongan] = React.useState(" ");
  const [selectedTglCpnsStartDate, setSelectedTglCpnsStartDate] = React.useState(null);
  const [selectedTglCpnsEndDate, setSelectedTglCpnsEndDate] = React.useState(null);
  const [selectedTglPensiunStartDate, setSelectedTglPensiunStartDate] = React.useState(null);
  const [selectedTglPensiunEndDate, setSelectedTglPensiunEndDate] = React.useState(null);
  const [selectedTglLahirStartDate, setSelectedTglLahirStartDate] = React.useState(null);
  const [selectedTglLahirEndDate, setSelectedTglLahirEndDate] = React.useState(null);


  let dataPesertaSlice = dataPeserta
  if (nama) {
    dataPesertaSlice = dataPesertaSlice.filter(item => item.nama.toLowerCase().includes(nama.toLowerCase()))
  }

  if (selectedStatusPekerja != " ") {
    dataPesertaSlice = dataPesertaSlice.filter(item => item.statusPekerja == selectedStatusPekerja)
  }

  if (selectedGolongan != " ") {
    dataPesertaSlice = dataPesertaSlice.filter(item => item.golongan == selectedGolongan)
  }

  if (selectedTglCpnsStartDate) {
    let tglCpnsStartDate= new Date(selectedTglCpnsStartDate);
    tglCpnsStartDate.setHours(0,0,0,0);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglCpns) >= tglCpnsStartDate)
  }

  if (selectedTglCpnsEndDate) {
    let tglCpnsEndDate = new Date(selectedTglCpnsEndDate);
    tglCpnsEndDate.setHours(0,0,0,);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglCpns) <= tglCpnsEndDate)
  }

  if (selectedTglPensiunStartDate) {
    let tglPensiunStartDate= new Date(selectedTglPensiunStartDate);
    tglPensiunStartDate.setHours(0,0,0,0);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglPensiun) >= tglPensiunStartDate)
  }

  if (selectedTglPensiunEndDate) {
    let tglPensiunEndDate = new Date(selectedTglPensiunEndDate);
    tglPensiunEndDate.setHours(0,0,0,);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglPensiun) <= tglPensiunEndDate)
  }

  if (selectedTglLahirStartDate) {
    let tglLahirStartDate= new Date(selectedTglLahirStartDate);
    tglLahirStartDate.setHours(0,0,0,0);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglLahir) >= tglLahirStartDate)
  }

  if (selectedTglLahirEndDate) {
    let tglLahirEndDate= new Date(selectedTglLahirEndDate);
    tglLahirEndDate.setHours(0,0,0,0);
    dataPesertaSlice = dataPesertaSlice.filter(item => new Date(item.tglLahir) <= tglLahirEndDate)
  }

  //console.log("ini data peserta", dataPeserta)

  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1" component="h1">
              Nama
            </Typography>
            <TextField
              id="filterName"
              label="Nama Peserta"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            ></TextField>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1">Status Pekerja</Typography>
            <Select
              labelId="selectStatusPekerja"
              id="selectStatusPekerja"
              value={selectedStatusPekerja}
              onChange={(e) => setSelectedStatusPekerja(e.target.value)}
              //displayEmpty
              className={classes.selectEmpty}
            >
              {/*<MenuItem value="">
                <em>Pilih Status Pekerja</em>
            </MenuItem>*/}
              <MenuItem key=" " value=" ">Semua Status</MenuItem>
              <MenuItem key="0" value="0">Belum Dikonfirmasi</MenuItem>
              <MenuItem key="1" value="1">Pekerja Aktif</MenuItem>
              <MenuItem key="2" value="2">Mutasi</MenuItem>
              <MenuItem key="3" value="3">Pensiun</MenuItem>
              <MenuItem key="4" value="4">Meninggal</MenuItem>
              <MenuItem key="5" value="5">Tidak Dikenali</MenuItem>
            </Select>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1">Golongan</Typography>
            <Select
              labelId="selectGolongan"
              id="selectGolongan"
              value={selectedGolongan}
              onChange={(e) => setSelectedGolongan(e.target.value)}
              //displayEmpty
              className={classes.selectEmpty}
            >
              {/*<MenuItem value="">
                <em>Pilih Status Pekerja</em>
            </MenuItem>*/}
              <MenuItem key=" " value=" ">Semua Golongan</MenuItem>
              <MenuItem key="1" value="1">1</MenuItem>
              <MenuItem key="2" value="2">2</MenuItem>
              <MenuItem key="3" value="3">3</MenuItem>
              <MenuItem key="4" value="4">4</MenuItem>
            </Select>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1" component="h1">
              Tanggal CPNS
          </Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="cpns-start-date"
                label="Mulai"
                name="cpns-start-date"
                value={selectedTglCpnsStartDate}
                onChange={(handleSelectedTglCpnsStartDate) => {
                  /*if(selectedTglCpnsEndDate){
                    if(handleSelectedTglCpnsStartDate < selectedTglCpnsEndDate){
                      setSelectedTglCpnsStartDate(handleSelectedTglCpnsStartDate);
                    }else{
                      //const mindate = selectedTglCpnsEndDate
                      alert("Harus Sebelum Tanggal Sampai")
                    }
                  }else{
                    setSelectedTglCpnsStartDate(handleSelectedTglCpnsStartDate);
                  }*/
                  setSelectedTglCpnsStartDate(handleSelectedTglCpnsStartDate);
                }}
    
                maxDate={selectedTglCpnsEndDate ? new Date(selectedTglCpnsEndDate) : new Date()}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="cpns-end-date"
                label="Sampai"
                name="cpns-end-date"
                value={selectedTglCpnsEndDate}
                onChange={(handleSelectedTglCpnsEndDate) => {
                  /*if(selectedTglCpnsStartDate){
                    if(handleSelectedTglCpnsEndDate >= selectedTglCpnsStartDate){
                      setSelectedTglCpnsEndDate(handleSelectedTglCpnsEndDate)
                    }else{
                      alert("Harus Melebihi Tanggal Mulai")
                    }
                  }else{
                    setSelectedTglCpnsEndDate(handleSelectedTglCpnsEndDate)
                  }*/
                  setSelectedTglCpnsEndDate(handleSelectedTglCpnsEndDate)
                }}
                minDate={selectedTglCpnsStartDate ? new Date(selectedTglCpnsStartDate) : undefined}
                maxDate={new Date()}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1">Tanggal Pensiun</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="pensiun-start-date"
                label="Mulai"
                name="pensiun-start-date"
                value={selectedTglPensiunStartDate}
                onChange={(handleSelectedTglPensiunStartDate) => {
                  //console.log(handleSelectedTglPensiunStartDate)
                  if(selectedTglPensiunEndDate){
                    /*if(handleSelectedTglPensiunStartDate < selectedTglPensiunEndDate){
                      setSelectedTglPensiunStartDate(handleSelectedTglPensiunStartDate);
                    }else{
                      alert("Harus Sebelum Tanggal Sampai")
                    }*/
                  }/*else{
                    setSelectedTglPensiunStartDate(handleSelectedTglPensiunStartDate);
                  }*/
                  setSelectedTglPensiunStartDate(handleSelectedTglPensiunStartDate);
                }}
                maxDate={selectedTglPensiunEndDate ? new Date(selectedTglPensiunEndDate) : undefined}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="pensiun-end-date"
                label="Sampai"
                name="Sampai"
                value={selectedTglPensiunEndDate}
                onChange={(handleSelectedTglPensiunEndDate) => {
                  /*if(selectedTglPensiunStartDate){
                    if(handleSelectedTglPensiunEndDate >= selectedTglPensiunStartDate){
                      setSelectedTglPensiunEndDate(handleSelectedTglPensiunEndDate);
                    }else{
                      alert("Harus Melebihi Tanggal Mulai")
                    }
                  }else{
                    setSelectedTglPensiunEndDate(handleSelectedTglPensiunEndDate);
                  }*/
                  setSelectedTglPensiunEndDate(handleSelectedTglPensiunEndDate);
                }}
                minDate={selectedTglPensiunStartDate ? new Date(selectedTglPensiunStartDate) : undefined}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={0} className={classes.paper}>
            <Typography variant="body1">Tanggal Lahir</Typography>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="tgllahir-start-date"
                label="Mulai"
                name="tgllahir-start-date"
                value={selectedTglLahirStartDate}
                onChange={(handleSelectedTglLahirStartDate) => {
                  /*if(selectedTglLahirEndDate){
                    if(handleSelectedTglLahirStartDate > selectedTglLahirEndDate){
                      setSelectedTglLahirStartDate(handleSelectedTglLahirStartDate);
                    }else{
                      alert("Harus Sebelum Tanggal Sampai")
                    }
                  }else{
                    setSelectedTglLahirStartDate(handleSelectedTglLahirStartDate);
                  }*/
                  setSelectedTglLahirStartDate(handleSelectedTglLahirStartDate);
                }}
                maxDate={selectedTglLahirEndDate ? new Date(selectedTglLahirEndDate) : new Date()}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                clearable
                id="tgllahir-end-date"
                label="Sampai"
                name="tgllahir-end-date"
                value={selectedTglLahirEndDate}
                onChange={(handleSelectedTglLahirEndDate) => {
                  /*if(selectedTglLahirStartDate){
                    if(handleSelectedTglLahirEndDate >= selectedTglLahirStartDate){
                      setSelectedTglLahirEndDate(handleSelectedTglLahirEndDate);
                    }else{
                      alert("Harus Melebihi Tanggal Mulai")
                    }
                  }else{
                    setSelectedTglLahirEndDate(handleSelectedTglLahirEndDate);
                  }*/
                  setSelectedTglLahirEndDate(handleSelectedTglLahirEndDate);
                }}
                maxDate={new Date()}
                minDate={selectedTglLahirStartDate ? new Date(selectedTglLahirStartDate) : undefined}
                format="dd-MM-yyyy"
              />
            </MuiPickersUtilsProvider>
          </Paper>
        </Grid>
      </Grid>
      <MaterialTable
        icons={tableIcons}
        title="Tabel Data Peserta"
        columns={[
          { title: 'NIP', field: 'nip' },
          { title: 'NIK', field: 'nik' },
          { title: 'Nama', field: 'nama', defaultSort: "asc" },
          { title: 'Tanggal Lahir', field: 'tglLahir', render: rowData => {
            return moment(rowData.tglLahir).format("DD-MM-YYYY")
          } },
          { title: 'Tanggal CPNS', field: 'tglCpns', render: rowData=>{
            return moment(rowData.tglCpns).format("DD-MM-YYYY")
          } },
          { title: 'Golongan', field: 'golongan' },
          { title: 'Ruang', field: 'ruang' },
          { title: 'Tanggal Pensiun', field: 'tglPensiun', render: rowData=>{
            return moment(rowData.tglPensiun).format("DD-MM-YYYY")
          } },
          {
            title: 'Status Pekerja', field: 'statusPekerja', align: 'center', render: rowData => {
              if (rowData.statusPekerja == "0") {
                return "Belum Dikonfirmasi"
              } else if (rowData.statusPekerja == "1") {
                return "Pekerja Aktif"
              } else if (rowData.statusPekerja == "2") {
                return "Mutasi"
              } else if (rowData.statusPekerja == "3") {
                return "Pensiun"
              } else if (rowData.statusPekerja == "4") {
                return "Meninggal"
              } else if (rowData.statusPekerja == "5") {
                return "Tidak Dikenali"
              }
            },
          },
          {
            title: 'Lihat', field: 'link', render: rowData => {
              return <a href={rowData.link}>Lihat Profil</a>
            },
          }
        ]}
        data={dataPesertaSlice}
        options={{
          search: false,
          selection: true,
          pageSize: 50,
          pageSizeOptions: [10, 50, 100],
          emptyRowsWhenPaging: false,
        }}
        actions={[
          {
            icon: props => (
              <>
                <Typography>Konfirmasi Status Pekerja  :</Typography>
              </>
            ),
          },
          {
            //tooltip: 'Remove All Selected Users',
            icon: props => (
              <>
                <Button style={{ color: "green" }}>
                  Pekerja Aktif
                </Button>
              </>
            ),
            onClick: (evt, data) => {
              //const dataUpdate = [...data]
              //console.log("dataupdate", dataUpdate[0])
              //data.map((item, index)=>{
              //setDataPeserta([...data, {...data[2], statusPekerja:"5"}]) untuk nambah
              //})
              //setDataPeserta([{...dataPeserta, statusPekerja:"5"}])
              //setDataPeserta([...dataPeserta, {...dataPeserta[0], statusPekerja:"0"}])
              //setDataPeserta([{ ...dataPeserta[0], statusPekerja:"1"}])
              //setDataPeserta([{ ...dataPeserta, ...dataPeserta[data], statusPekerja:"0"}])
              //setDataPeserta([{ ...dataPeserta[1], statusPekerja:"1"}])
              //const dataUpdate = [...data];
              //console.log("data", data[0].statusPekerja),
              //console.log("evt", evt)
              //alert('Aktif' + data.length + ' rows')
            }
          },
          {
            //tooltip: 'Remove All Selected Users',
            icon: props => (
              <Button style={{ color: "blue" }}>
                Mutasi
              </Button>
            ),
            onClick: (evt, data) => alert('Mutasi' + data.length + ' rows')
          },
          {
            //tooltip: 'Remove All Selected Users',
            icon: props => (
              <Button style={{ color: "orange" }}>
                Pensiun
              </Button>
            ),
            onClick: (evt, data) => alert('Pensiun' + data.length + ' rows')
          },
          {
            //tooltip: 'Meninggal',
            icon: props => (
              <Button style={{ color: "grey" }}>
                Meninggal
              </Button>
            ),
            onClick: (evt, data) => alert('Meninggal' + data.length + ' rows')
          },
          {
            //tooltip: 'Batal',
            icon: props => (
              <Button>
                Batal
              </Button>
            ),
            onClick: (evt, data) => alert('Batal' + data.length + ' rows')
          },

        ]}
        localization={{
          pagination:{
            labelRowsSelect:'Baris',
            firstTooltip:'Halaman Pertama',
            lastTooltip:'Halaman Terakhir',
            nextTooltip:'Halaman Selanjutnya',
            previousTooltip:'Halaman Sebelumnya',
            labelDisplayedRows:'{from}-{to} dari {count}'
          },
          toolbar: {
            nRowsSelected: '{0} Baris Dipilih',
            showColumnsTitle: 'Status Pekerja'
          }
        }}
      />
    </>
  )
}
