import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tabs, Tab, } from '@material-ui/core';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
//import { withAuthSync } from "../utils/authprofilepekerja";
import Layout from '../components/layout';
import DataAlamat from '../components/dataAlamatProfilePekerja';
import DataPeserta from '../components/dataPesertaProfilePekerja';
import DataPribadi from '../components/dataPribadiProfilePekerja';
import DataPekerjaan from '../components/dataPekerjaanProfilePekerja';
import DataFinansial from '../components/dataFinansialProfilePekerja';

const useStyles = makeStyles((theme) => ({
    myGrid: {
        //width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        height: '100%',
    },
    expand: {
        width: 900,
        flexGrow: 1,
        marginTop: 10,
    },
    buttonGrid: {
        width: 900,
        marginTop: 5,
        direction: "row",
        alignItems: "center",
    },
    button: {
        margin: theme.spacing(1, 0, 1),
        backgroundColor: '#000603',
        borderRadius: 15,
        justify: 'center',
        marginTop: 5,
        width: 50,
    },
    profilePaper: {
        flexGrow: 1,
        letterSpacing: '1px',
        borderRadius: '0px',
        border: 'none',
        width: '100%',
    },

    ProfilePicture: {
        // marginRight: theme.spacing(0),
        // marginLeft: theme.spacing(0),
        justify: 'center',
        alignItems: 'stretch',
        height: 200,
        width: 200,
    },
    field: {
        marginLeft: theme.spacing(0),
        '& .MuiTextField-root': {
            justify: "space-between",
            margin: theme.spacing(1.5),
            width: '35ch',
        },
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    console.log(index)
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

export default function profilepekerja() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [userData, setUserData] = React.useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        GetParticipantById();
    }, []);

    async function GetParticipantById() {
        //const id = "df7d9f73-b75a-4734-ae75-dd3a40f10966"
        await fetch('http://devsitara.tapera.go.id/participants/df7d9f73-b75a-4734-ae75-dd3a40f10966')
            .then((r) => {
                return r.json();
            })

            .then((data) => {
                setUserData([data]);
            })
    }
    return (
        <div className={classes.root}>
            <Layout>
                <Grid container maxwidth="xl" className={classes.myGrid} spacing={0} justify="space-between" alignItems="flex-start">
                    <Grid container item spacing={0} xs={1} sm={1} md={1} >
                        <Paper className={classes.profilePaper} elevation={0}>
                            <Grid item xs={1} sm={1} md={1} >
                                <img src="assets/img/profileicon.png" className={classes.ProfilePicture} />
                            </Grid>
                        </Paper>
                    </Grid>
                    {userData.map((data, index) => (
                        <Grid container item spacing={0} xs={11} sm={11} md={10} key={index}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Data Kepesertaan" {...a11yProps(0)} />
                                <Tab label="Data Pribadi" {...a11yProps(1)} />
                                <Tab label="Data Alamat" {...a11yProps(2)} />
                                <Tab label="Data Pekerjaan" {...a11yProps(3)} />
                                <Tab label="Data Finansial" {...a11yProps(4)} />
                            </Tabs>

                            <TabPanel value={value} index={0}>
                                <div className={classes.field}>
                                    <DataPeserta data={data}></DataPeserta>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <div className={classes.field}>
                                    <DataPribadi data={data}></DataPribadi>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                {data.address.map((item) => (
                                    <div className={classes.field} key={item.address_type}>
                                        {(() => {
                                            switch (item.address_type) {
                                                case 3: return (
                                                    <DataAlamat address={item} type=""></DataAlamat>
                                                );
                                                case 2: return (
                                                    <DataAlamat address={item} type="Domisili"></DataAlamat>
                                                );
                                                default: return (
                                                    <DataAlamat address={item} type="kantor"></DataAlamat>
                                                );
                                            }
                                        })()}
                                    </div>
                                ))}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <div className={classes.field}>
                                    <DataPekerjaan data={data}></DataPekerjaan>
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <div className={classes.field}>
                                    <DataFinansial data={data}></DataFinansial>
                                </div>
                            </TabPanel>
                        </Grid>
                    ))}
                </Grid>
            </Layout>
        </div>
    )
}

//export default withAuthSync(profilepekerja);
