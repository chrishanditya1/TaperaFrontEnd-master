import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography, MenuItem, Button, Grid} from '@material-ui/core';
import { useFormik} from 'formik'
import * as Yup from 'yup'
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
      margin: theme.spacing(2),
      width: '47ch',
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
buttonsimpan: {
  margin: theme.spacing(1, -1, 1),
  borderRadius: 15,
  marginTop: 5,
  width: 180,
  backgroundColor: '#008F4C',
},
btnSalin: {
  margin: theme.spacing(0, 2, 1),
  backgroundColor: '#008F4C',
  borderRadius: 30,
  fontSize: 12,
  width: '21ch',
  height: '5ch' 
},
}));

const initialValues = {
  txtAlamat:'',
  txtRt:'',
  txtRw:'',
  txtKelurahan:'',
  txtKecamatan:'',
  txtKabupaten:'',
  txtKodePos:'',
  txtProvinsi:'',
  selectNegara:'ID',

  txtAlamatDomisili:'',
  txtRtDomisili:'',
  txtRwDomisili:'',
  txtKelurahanDomisili:'',
  txtKecamatanDomisili:'',
  txtKabDomisili:'',
  txtKodeposDomisili:'',
  txtProvinsiDomisili:'',
  selectNegaraDomisili:'',

  txtAlamatKerja:'',
  txtRtKerja:'',
  txtRwKerja:'',
  txtKelurahanKerja:'',
  txtKecamatanKerja:'',
  txtKabKerja:'',
  txtKodePosKerja:'',
  txtProvinsiKerja:'',
  selectNegaraKerja:'',

  txtAlamatAhliWaris:'',
}

const onSubmit = values => {
  console.log('form data', values);
  alert("Data Berhasil disimpan")

}
const validationSchema = Yup.object({

  //Alamat Utama
  txtAlamat: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRt: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT harus 3 karakter').min(3,'Nomor RT harus 3 karakter'),
  txtRw: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW harus 3 karakter').min(3, 'Nomor RW harus 3 karakter'),
  txtKelurahan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatan: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKabupaten: Yup.string().required('wajib diisi'),
  txtKodePos: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
  txtProvinsi: Yup.string().required('wajib diisi'),
  selectNegara: Yup.string().required('wajib diisi'),
  txtAlamatAhliWaris: Yup.string().required('wajib diisi').max(255,'maksimal 255 karakter'),

  //Alamat Domisili
  txtAlamatDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwDomisili: Yup.string().required('wajib diisi').matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKecamatanDomisili: Yup.string().required('wajib diisi').max(100, 'maksimal 100 karakter'),
  txtKodeposDomisili: Yup.string().required('wajib diisi').matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
  txtKabDomisili: Yup.string().required('wajib diisi'),
  txtProvinsiDomisili: Yup.string().required('wajib diisi'),

  //Alamat Kantor
  txtAlamatKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.,':/; ]+$/, 'format alamat tidak sesuai').max(100, 'maksimal 100 karakter'),
  txtRtKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RT Harus 3 karakter').min(3, 'Nomor RT Harus 3 karakter'),
  txtRwKerja: Yup.string().nullable(true).matches(/^[a-zA-Z0-9.:/ ]+$/, 'format alamat tidak sesuai').max(3, 'Nomor RW Harus 3 karakter').min(3,'Nomor RW Harus 3 karakter'),
  txtKelurahanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKecamatanKerja: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
  txtKodePosKerja: Yup.string().nullable(true).matches(/^[0-9]+$/, 'hanya angka').max(5, 'Kode Pos harus terdiri dari 5 karakter').min(5,'Kode Pos harus terdiri dari 5 karakter'),
})

export default function formdataalamat(props) {
  
  const classes = useStyles();
  const [countryData, setCountryData] = React.useState([])
  const [provinsiData, setProvinsiData] = React.useState([])

  const [countryValue, setcountryValue] = React.useState('ID')
  const [provValue, setprovValue] = React.useState('')

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      handleSave()
  },
    validationSchema
  })


  React.useEffect(() => {
    GetCountry(),
    handleProvinsi();
  }, []);

  async function GetCountry() {
    
    await fetch('http://devsitara.tapera.go.id/redis/country')
    // const response = await fetch('http://devsitara.tapera.go.id/redis/'+ country)
    // await fetch('http://devsitara.tapera.go.id/redis/ID')
        .then((r) => {
            return r.json();
        })

        .then((data) => {
            setCountryData(data);
        })
    }
  
  async function handleProvinsi() {
    console.log('masuk provinsi' + countryValue)
    await fetch('http://devsitara.tapera.go.id/redis/' + countryValue)
        .then((r) => {
          return r.json();
        })

        .then((data) => {
          setProvinsiData(data);
        })
      }

  const handleSave = () => {
    return handleChange();
    // alert("Data Berhasil Disimpan")
};

  const [value, setValue] = React.useState(true)
  const handleChange = () => {
    return setValue(false);
  };
  
  console.log(countryValue)
  return (
    <div className={classes.root}>
      <form onSubmit={formik.handleSubmit} >
      <MyTypography className={classes.subtitle2}>Informasi Alamat Peserta</MyTypography>
    <div>
        <TextField
          id="txtAlamat"
          label="Alamat KTP/Paspor *"
          name="txtAlamat"
          helperText={formik.touched.txtAlamat && formik.errors.txtAlamat ? formik.errors.txtAlamat : null}
          error={formik.touched.txtAlamat && formik.errors.txtAlamat ? true : false}
          //{...formik.getFieldProps('txtAlamat')}
          value={formik.values.txtAlamat.toUpperCase()}
          onChange={handleChange}
          //required
        >
        </TextField>
        <TextField
          select
          id="selectNegara"
          label="Negara *"
          name="selectNegara"
          onChange={(event) => {
            formik.setFieldValue('selectNegara', event.target.value);
            // console.log('test ini' + event.target.value);
            setcountryValue(event.target.value);
          }}
          onBlur={formik.handleBlur}
          helperText={formik.touched.selectNegara && formik.errors.selectNegara ? formik.errors.selectNegara : null}
          error={formik.touched.selectNegara && formik.errors.selectNegara ? true : false}
          // {...formik.getFieldProps('selectNegara')}
          //required
        >
          {countryData.map((country, index) => (
            <MenuItem key={index} value={country.Kode}>
              {country.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsi"
          label="Provinsi *"
          name="txtProvinsi"
          helperText={formik.touched.txtProvinsi && formik.errors.txtProvinsi ? formik.errors.txtProvinsi : null}
          error={formik.touched.txtProvinsi && formik.errors.txtProvinsi?true:false}
          {... formik.getFieldProps('txtProvinsi')}
        >
          {provinsiData.map((prov, index) => (
            <MenuItem key={index} value={prov.Kode} onChange={e => setprovValue(e.target.value)}>
              {prov.Nilai}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select 
          id="txtKabupaten"
          label="Kabupaten/Kota *"
          name="txtKabupaten"
          helperText={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? formik.errors.txtKabupaten : null}
          error={formik.touched.txtKabupaten && formik.errors.txtKabupaten ? true : false}
          {...formik.getFieldProps('txtKabupaten')}
         // required
        >
          {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtKecamatan"
          label="Kecamatan *"
          name="txtKecamatan"
          helperText={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? formik.errors.txtKecamatan : null}
          error={formik.touched.txtKecamatan && formik.errors.txtKecamatan ? true : false}
          {...formik.getFieldProps('txtKecamatan')}
          //required
        >
        </TextField>
        <TextField
          id="txtKelurahan"
          label="Kelurahan *"
          name="txtKelurahan"
          helperText={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? formik.errors.txtKelurahan : null}
          error={formik.touched.txtKelurahan && formik.errors.txtKelurahan ? true : false}
          {...formik.getFieldProps('txtKelurahan')}
          //required
        >
        </TextField>
        <TextField
          id="txtRw"
          label="Nomor RW *"
          name="txtRw"
          helperText={formik.touched.txtRw && formik.errors.txtRw ? formik.errors.txtRw : null}
          error={formik.touched.txtRw && formik.errors.txtRw ? true : false}
          {...formik.getFieldProps('txtRw')}
          //required
        >
        </TextField>
        <TextField
          id="txtRt"
          label="Nomor RT *"
          name="txtRt"
          helperText={formik.touched.txtRt && formik.errors.txtRt ? formik.errors.txtRt : null}
          error={formik.touched.txtRt && formik.errors.txtRt ? true : false}
          {...formik.getFieldProps('txtRt')}
          //required
        >
        </TextField>
        <TextField
          id="txtKodePos"
          label="Kode Pos *"
          name="txtKodePos"
          helperText={formik.touched.txtKodePos && formik.errors.txtKodePos ? formik.errors.txtKodePos : null}
          error={formik.touched.txtKodePos && formik.errors.txtKodePos ? true : false}
          {...formik.getFieldProps('txtKodePos')}
         // required
        >
        </TextField>
        </div>
        <MyTypography className={classes.subtitle2}>Informasi Alamat Domisili</MyTypography>
        <div>
        <Button 
          type="button" 
          fullWidth
          variant="contained"
          color="primary"  
          className={classes.btnSalin}
        >Salin
        </Button>
        <p>*Salin dari alamat KTP</p>
        </div>
        <div>
        
        <TextField
          id="txtAlamatDomisili"
          label="Alamat Domisili *"
          name="txtAlamatDomisili"
          helperText={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili ? formik.errors.txtAlamatDomisili : null}
          error={formik.touched.txtAlamatDomisili && formik.errors.txtAlamatDomisili?true:false}
          //{...formik.getFieldProps('txtAlamatDomisili')}
          value={formik.values.txtAlamatDomisili.toUpperCase()}
          onChange={handleChange}
          //helperText="Opsional"
        >
        </TextField>
        <TextField
          select
          id="selectNegaraDomisili"
          label="Negara Domisili *"
          name="selectNegaraDomisili"
          helperText={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili ? formik.errors.selectNegaraDomisili : null}
          error={formik.touched.selectNegaraDomisili && formik.errors.selectNegaraDomisili?true:false}
          {...formik.getFieldProps('selectNegaraDomisili')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsiDomisili"
          label="Provinsi Domisili *"
          name="txtProvinsiDomisili"
          helperText={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili ? formik.errors.txtProvinsiDomisili : null}
          error={formik.touched.txtProvinsiDomisili && formik.errors.txtProvinsiDomisili?true:false}
          {... formik.getFieldProps('txtProvinsiDomisili')}
        >
          {props.listdata.listProvinsi.map((option) => (
            <MenuItem key={option.id} value={option.nama}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKabDomisili"
          label="Kabupaten/Kota Domisili *"
          name="txtKabDomisili"
          helperText={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? formik.errors.txtKabDomisili : null}
          error={formik.touched.txtKabDomisili && formik.errors.txtKabDomisili ? true : false}
          {...formik.getFieldProps('txtKabDomisili')}
        >
           {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtKecamatanDomisili"
          label="Kecamatan Domisili *"
          name="txtKecamatanDomisili"
          helperText={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? formik.errors.txtKecamatanDomisili : null}
          error={formik.touched.txtKecamatanDomisili && formik.errors.txtKecamatanDomisili ? true : false}
          {...formik.getFieldProps('txtKecamatanDomisili')}
        >
        </TextField>
        <TextField
          id="txtKelurahanDomisili"
          label="Kelurahan Domisili *"
          name="txtKelurahanDomisili"
          helperText={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? formik.errors.txtKelurahanDomisili : null}
          error={formik.touched.txtKelurahanDomisili && formik.errors.txtKelurahanDomisili ? true : false}
          {...formik.getFieldProps('txtKelurahanDomisili')}
        >
        </TextField>
        <TextField
          id="txtRwDomisili"
          label="Nomor RW Domisili *"
          name="txtRwDomisili"
          helperText={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? formik.errors.txtRwDomisili : null}
          error={formik.touched.txtRwDomisili && formik.errors.txtRwDomisili ? true : false}
          {...formik.getFieldProps('txtRwDomisili')}
        >
        </TextField>
        <TextField
          id="txtRtDomisili"
          label="Nomor RT Domisili *"
          name="txtRtDomisili"
          helperText={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? formik.errors.txtRtDomisili : null}
          error={formik.touched.txtRtDomisili && formik.errors.txtRtDomisili ? true : false}
          {...formik.getFieldProps('txtRtDomisili')}
        >
        </TextField>
        <TextField
          id="txtKodeposDomisili"
          label="Kode Pos Domisili *"
          name="txtKodeposDomisili"
          helperText={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? formik.errors.txtKodeposDomisili : null}
          error={formik.touched.txtKodeposDomisili && formik.errors.txtKodeposDomisili ? true : false}
          {...formik.getFieldProps('txtKodeposDomisili')}
        >
        </TextField>
        </div>
        <MyTypography className={classes.subtitle2}>Informasi Alamat Kantor</MyTypography>
        {/* <Button 
          type="button" 
          fullWidth
          variant="contained"
          color="primary"  
          className={classes.btnSalin}
          >Samakan Data Alamat
        </Button> */}
        {/* informasi alamat kantor */}
        <div>
        <TextField
          id="txtAlamatKerja"
          label="Alamat Kantor"
          name="txtAlamatKerja"
          helperText={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja ? formik.errors.txtAlamatKerja : null}
          error={formik.touched.txtAlamatKerja && formik.errors.txtAlamatKerja?true:false}
          {...formik.getFieldProps('txtAlamatKerja')}
        >
        </TextField>
        <TextField
          select
          id="selectNegaraKerja"
          label="Negara Kantor"
          name="selectNegaraKerja"
          {...formik.getFieldProps('selectNegaraKerja')}
        >
          {props.listdata.listISOCodeCountry.map((option) => (
            <MenuItem key={option.value} value={option.ISOCode}>
              {option.Country}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtProvinsiKerja"
          label="Provinsi Kantor"
          name="ProvinsiKerja"
          {...formik.getFieldProps('ProvinsiKerja')}
        >
          {props.listdata.listProvinsi.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="txtKabKerja"
          label="Kabupaten/Kota Kantor"
          name="txtKabKerja"
          helperText={formik.touched.txtKabKerja && formik.errors.txtKabKerja ? formik.errors.txtKabKerja : null}
          error={formik.touched.txtKabKerja && formik.errors.txtKabKerja?true:false}
          {...formik.getFieldProps('txtKabKerja')}
        >
           {props.listdata.listKabupatenKota.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nama}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="txtKecamatanKerja"
          label="Kecamatan Kantor"
          name="txtKecamatanKerja"
          helperText={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja ? formik.errors.txtKecamatanKerja : null}
          error={formik.touched.txtKecamatanKerja && formik.errors.txtKecamatanKerja?true:false}
          {...formik.getFieldProps('txtKecamatanKerja')}
        >
        </TextField>
        
        <TextField
          id="txtKelurahanKerja"
          label="Kelurahan Kantor"
          name="txtKelurahanKerja"
          helperText={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja ? formik.errors.txtKelurahanKerja : null}
          error={formik.touched.txtKelurahanKerja && formik.errors.txtKelurahanKerja?true:false}
          {...formik.getFieldProps('txtKelurahanKerja')}
        >
        </TextField>
        <TextField
          id="txtRwKerja"
          label="Nomor RW Kantor"
          name="txtRwKerja"
          helperText={formik.touched.txtRwKerja && formik.errors.txtRwKerja ? formik.errors.txtRwKerja : null}
          error={formik.touched.txtRwKerja && formik.errors.txtRwKerja?true:false}
          {...formik.getFieldProps('txtRwKerja')}
        >
        </TextField>
        <TextField
          id="txtRtkerja"
          label="Nomor RT Kantor"
          name="txtRtKerja"
          helperText={formik.touched.txtRtKerja && formik.errors.txtRtKerja ? formik.errors.txtRtKerja : null}
          error={formik.touched.txtRtKerja && formik.errors.txtRtKerja?true:false}
          {...formik.getFieldProps('txtRtKerja')}
        >
        </TextField>
        <TextField
          id="txtKodePosKerja"
          label="Kode Pos Kantor"
          name="txtKodePosKerja"
          helperText={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja ? formik.errors.txtKodePosKerja : null}
          error={formik.touched.txtKodePosKerja && formik.errors.txtKodePosKerja?true:false}
          {...formik.getFieldProps('txtKodePosKerja')}
        >
        </TextField>
        </div>
        <MyTypography className={classes.subtitle2}>Informasi Alamat Ahli Waris</MyTypography>

        <div>
          <TextField
          id="txtAlamatAhliWaris"
          label="Alamat Lengkap Ahli Waris *"
          name="txtAlamatAhliWaris"
          helperText={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris ? formik.errors.txtAlamatAhliWaris : null}
          error={formik.touched.txtAlamatAhliWaris && formik.errors.txtAlamatAhliWaris?true:false}
          //{...formik.getFieldProps('txtAlamatAhliWaris')}
          value={formik.values.txtAlamatAhliWaris.toUpperCase()}
          onChange={handleChange}
          >
          </TextField>
        </div>
        <div className={classes.button}>
        <Grid container spacing={0}>
          <Grid 
          direction="row"
          item
          maxwidth="xl" 
          // className={classes.myGrid} 
          spacing={0} 
          xs={10} sm={10} md={10} 
          justify="space-between">
      <Button 
      type="button" 
      onClick={() => formik.resetForm()} 
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary"  
      >Batal</Button>
      <Button 
      onClick={(e) => {props.handleNext(e, 1)}}
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
         type="button"
         >Sebelumnya</Button>
      <Button 
      disabled={value}
      onClick={(e) => {props.handleNext(e, 3)}}
      className={classes.buttonconfig}
         fullWidth
         variant="contained"
         color="primary" 
         type="button"
      >Selanjutnya</Button>
       </Grid>

<Grid 
direction="row"
item
maxwidth="xl" 
// className={classes.myGrid} 
spacing={0} 
xs={1} sm={1} md={1} 
justify="space-between">
      <Button 
      type="submit"
      //onClick={handleChange} 
      className={classes.buttonsimpan}
         fullWidth
         justifyContent="flex-end"
         variant="contained"
         color="primary" 
      >Simpan Sementara</Button>
      </Grid>
      </Grid>
      </div>
    </form>
    </div>
  );
}