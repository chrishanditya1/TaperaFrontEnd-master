import { TextField, MenuItem, Button, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from '@material-ui/core';
import Layout from '../components/layout';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useFormik } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import * as Yup from 'yup';
import moment from 'moment';
import InputMask from 'react-input-mask'
import { styled } from '@material-ui/core/styles';
//import { linkVertical } from 'd3';


const MyTypography = styled(Typography)({
  // fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: '600',
  // fontSize: '32px',
  lineHeight: '39px',
  color: '#008F4C'
});
const listISOCodeCountry = [
    {
        value: '',
        ISOCode: '',
        Country: 'Pilih Negara'
    },
    {
        value: '1',
        ISOCode: 'AF',
        Country: 'Afghanistan'
    },
    {
        value: '2',
        ISOCode: 'AX',
        Country: 'Åland Islands'
    },
    {
        value: '3',
        ISOCode: 'AL',
        Country: 'Albania'
    },
    {
        value: '4',
        ISOCode: 'DZ',
        Country: 'Algeria'
    },
    {
        value: '5',
        ISOCode: 'AS',
        Country: 'American Samoa'
    },
    {
        value: '6',
        ISOCode: 'AD',
        Country: 'Andorra'
    },
    {
        value: '7',
        ISOCode: 'AO',
        Country: 'Angola'
    },
    {
        value: '8',
        ISOCode: 'AI',
        Country: 'Anguilla'
    },
    {
        value: '9',
        ISOCode: 'AQ',
        Country: 'Antarctica'
    },
    {
        value: '10',
        ISOCode: 'AG',
        Country: 'Antigua and Barbuda'
    },
    {
        value: '11',
        ISOCode: 'AR',
        Country: 'Argentina'
    },
    {
        value: '12',
        ISOCode: 'AM',
        Country: 'Armenia'
    },
    {
        value: '13',
        ISOCode: 'AW',
        Country: 'Aruba'
    },
    {
        value: '14',
        ISOCode: 'AU',
        Country: 'Australia'
    },
    {
        value: '15',
        ISOCode: 'AT',
        Country: 'Austria'
    },
    {
        value: '16',
        ISOCode: 'AZ',
        Country: 'Azerbaijan'
    },
    {
        value: '17',
        ISOCode: 'BS',
        Country: 'Bahamas (the)'
    },
    {
        value: '18',
        ISOCode: 'BH',
        Country: 'Bahrain'
    },
    {
        value: '19',
        ISOCode: 'BD',
        Country: 'Bangladesh'
    },
    {
        value: '20',
        ISOCode: 'BB',
        Country: 'Barbados'
    },
    {
        value: '21',
        ISOCode: 'BY',
        Country: 'Belarus'
    },
    {
        value: '22',
        ISOCode: 'BE',
        Country: 'Belgium'
    },
    {
        value: '23',
        ISOCode: 'BZ',
        Country: 'Belize'
    },
    {
        value: '24',
        ISOCode: 'BJ',
        Country: 'Benin'
    },
    {
        value: '25',
        ISOCode: 'BM',
        Country: 'Bermuda'
    },
    {
        value: '26',
        ISOCode: 'BT',
        Country: 'Bhutan'
    },
    {
        value: '27',
        ISOCode: 'BO',
        Country: 'Bolivia (Plurinational State of)'
    },
    {
        value: '28',
        ISOCode: 'BQ',
        Country: 'Bonaire, Sint Eustatius and Saba'
    },
    {
        value: '29',
        ISOCode: 'BA',
        Country: 'Bosnia and Herzegovina'
    },
    {
        value: '30',
        ISOCode: 'BW',
        Country: 'Botswana'
    },
    {
        value: '31',
        ISOCode: 'BV',
        Country: 'Bouvet Island'
    },
    {
        value: '32',
        ISOCode: 'BR',
        Country: 'Brazil'
    },
    {
        value: '33',
        ISOCode: 'IO',
        Country: 'British Indian Ocean Territory (the)'
    },
    {
        value: '34',
        ISOCode: 'BN',
        Country: 'Brunei Darussalam'
    },
    {
        value: '35',
        ISOCode: 'BG',
        Country: 'Bulgaria'
    },
    {
        value: '36',
        ISOCode: 'BF',
        Country: 'Burkina Faso'
    },
    {
        value: '37',
        ISOCode: 'BI',
        Country: 'Burundi'
    },
    {
        value: '38',
        ISOCode: 'CV',
        Country: 'Cabo Verde'
    },
    {
        value: '39',
        ISOCode: 'KH',
        Country: 'Cambodia'
    },
    {
        value: '40',
        ISOCode: 'CM',
        Country: 'Cameroon'
    },
    {
        value: '41',
        ISOCode: 'CA',
        Country: 'Canada'
    },
    {
        value: '42',
        ISOCode: 'KY',
        Country: 'Cayman Islands (the)'
    },
    {
        value: '43',
        ISOCode: 'CF',
        Country: 'Central African Republic (the)'
    },
    {
        value: '44',
        ISOCode: 'TD',
        Country: 'Chad'
    },
    {
        value: '45',
        ISOCode: 'CL',
        Country: 'Chile'
    },
    {
        value: '46',
        ISOCode: 'CN',
        Country: 'China'
    },
    {
        value: '47',
        ISOCode: 'CX',
        Country: 'Christmas Island'
    },
    {
        value: '48',
        ISOCode: 'CC',
        Country: 'Cocos (Keeling) Islands (the)'
    },
    {
        value: '49',
        ISOCode: 'CO',
        Country: 'Colombia'
    },
    {
        value: '50',
        ISOCode: 'KM',
        Country: 'Comoros (the)'
    },
    {
        value: '51',
        ISOCode: 'CD',
        Country: 'Congo (the Democratic Republic of the)'
    },
    {
        value: '52',
        ISOCode: 'CG',
        Country: 'Congo (the)'
    },
    {
        value: '53',
        ISOCode: 'CK',
        Country: 'Cook Islands (the)'
    },
    {
        value: '54',
        ISOCode: 'CR',
        Country: 'Costa Rica'
    },
    {
        value: '55',
        ISOCode: 'CI',
        Country: 'Côte d`Ivoire'
    },
    {
        value: '56',
        ISOCode: 'HR',
        Country: 'Croatia'
    },
    {
        value: '57',
        ISOCode: 'CU',
        Country: 'Cuba'
    },
    {
        value: '58',
        ISOCode: 'CW',
        Country: 'Curaçao'
    },
    {
        value: '59',
        ISOCode: 'CY',
        Country: 'Cyprus'
    },
    {
        value: '60',
        ISOCode: 'CZ',
        Country: 'Czech Republic (the)'
    },
    {
        value: '61',
        ISOCode: 'CK',
        Country: 'Denmark'
    },
    {
        value: '62',
        ISOCode: 'DJ',
        Country: 'Djibouti'
    },
    {
        value: '63',
        ISOCode: 'DM',
        Country: 'Dominica'
    },
    {
        value: '64',
        ISOCode: 'DO',
        Country: 'Dominican Republic (the)'
    },
    {
        value: '65',
        ISOCode: 'EC',
        Country: 'Ecuador'
    },
    {
        value: '66',
        ISOCode: 'EG',
        Country: 'Egypt'
    },
    {
        value: '67',
        ISOCode: 'SV',
        Country: 'El Salvador'
    },
    {
        value: '68',
        ISOCode: 'GQ',
        Country: 'Equatorial Guinea'
    },
    {
        value: '69',
        ISOCode: 'ER',
        Country: 'Eritrea'
    },
    {
        value: '70',
        ISOCode: 'EE',
        Country: 'Estonia'
    },
    {
        value: '71',
        ISOCode: 'ET',
        Country: 'Ethiopia'
    },
    {
        value: '72',
        ISOCode: 'FK',
        Country: 'Falkland Islands (the) [Malvinas]'
    },
    {
        value: '73',
        ISOCode: 'FO',
        Country: 'Faroe Islands (the)'
    },
    {
        value: '74',
        ISOCode: 'FJ',
        Country: 'Fiji'
    },
    {
        value: '75',
        ISOCode: 'FI',
        Country: 'Finland'
    },
    {
        value: '76',
        ISOCode: 'FR',
        Country: 'France'
    },
    {
        value: '77',
        ISOCode: 'GF',
        Country: 'French Guiana'
    },
    {
        value: '78',
        ISOCode: 'PF',
        Country: 'French Polynesia'
    },
    {
        value: '79',
        ISOCode: 'TF',
        Country: 'French Southern Territories (the)'
    },
    {
        value: '80',
        ISOCode: 'GA',
        Country: 'Gabon'
    },
    {
        value: '81',
        ISOCode: 'GM',
        Country: 'Gambia (the)'
    },
    {
        value: '82',
        ISOCode: 'GE',
        Country: 'Georgia'
    },
    {
        value: '83',
        ISOCode: 'DE',
        Country: 'Germany'
    },
    {
        value: '84',
        ISOCode: 'GH',
        Country: 'Ghana'
    },
    {
        value: '85',
        ISOCode: 'GI',
        Country: 'Gibraltar'
    },
    {
        value: '86',
        ISOCode: 'GR',
        Country: 'Greece'
    },
    {
        value: '87',
        ISOCode: 'GL',
        Country: 'Greenland'
    },
    {
        value: '88',
        ISOCode: 'GD',
        Country: 'Grenada'
    },
    {
        value: '89',
        ISOCode: 'GP',
        Country: 'Guadeloupe'
    },
    {
        value: '90',
        ISOCode: 'GU',
        Country: 'Guam'
    },
    {
        value: '91',
        ISOCode: 'GT',
        Country: 'Guatemala'
    },
    {
        value: '92',
        ISOCode: 'GG',
        Country: 'Guernsey'
    },
    {
        value: '93',
        ISOCode: 'GN',
        Country: 'Guinea'
    },
    {
        value: '94',
        ISOCode: 'GW',
        Country: 'Guinea-Bissau'
    },
    {
        value: '95',
        ISOCode: 'GY',
        Country: 'Guyana'
    },
    {
        value: '96',
        ISOCode: 'HT',
        Country: 'Haiti'
    },
    {
        value: '97',
        ISOCode: 'HM',
        Country: 'Heard Island and McDonald Islands'
    },
    {
        value: '98',
        ISOCode: 'VA',
        Country: 'Holy See (the)'
    },
    {
        value: '99',
        ISOCode: 'HN',
        Country: 'Honduras'
    },
    {
        value: '100',
        ISOCode: 'HK',
        Country: 'Hong Kong'
    },
    {
        value: '101',
        ISOCode: 'HU',
        Country: 'Hungary'
    },
    {
        value: '102',
        ISOCode: 'IS',
        Country: 'Iceland'
    },
    {
        value: '103',
        ISOCode: 'IN',
        Country: 'India'
    },
    {
        value: '104',
        ISOCode: 'ID',
        Country: 'Indonesia'
    },
    {
        value: '105',
        ISOCode: 'IR',
        Country: 'Iran (Islamic Republic of)'
    },
    {
        value: '106',
        ISOCode: 'IQ',
        Country: 'Iraq'
    },
    {
        value: '107',
        ISOCode: 'IE',
        Country: 'Ireland'
    },
    {
        value: '108',
        ISOCode: 'IM',
        Country: 'Isle of Man'
    },
    {
        value: '109',
        ISOCode: 'IL',
        Country: 'Israel'
    },
    {
        value: '110',
        ISOCode: 'IT',
        Country: 'Italy'
    },
    {
        value: '111',
        ISOCode: 'JM',
        Country: 'Jamaica'
    },
    {
        value: '112',
        ISOCode: 'JP',
        Country: 'Japan'
    },
    {
        value: '113',
        ISOCode: 'JE',
        Country: 'Jersey'
    },
    {
        value: '114',
        ISOCode: 'JO',
        Country: 'Jordan'
    },
    {
        value: '115',
        ISOCode: 'KZ',
        Country: 'Kazakhstan'
    },
    {
        value: '116',
        ISOCode: 'KE',
        Country: 'Kenya'
    },
    {
        value: '117',
        ISOCode: 'KI',
        Country: 'Kiribati'
    },
    {
        value: '118',
        ISOCode: 'KP',
        Country: 'Korea (the Democratic People`s Republic of)'
    },
    {
        value: '119',
        ISOCode: 'KR',
        Country: 'Korea (the Republic of)'
    },
    {
        value: '120',
        ISOCode: 'KW',
        Country: 'Kuwait'
    },
    {
        value: '121',
        ISOCode: 'KG',
        Country: 'Kyrgyzstan'
    },
    {
        value: '122',
        ISOCode: 'LA',
        Country: 'Lao People`s Democratic Republic (the)'
    },
    {
        value: '123',
        ISOCode: 'LV',
        Country: 'Latvia'
    },
    {
        value: '124',
        ISOCode: 'LB',
        Country: 'Lebanon'
    },
    {
        value: '125',
        ISOCode: 'LS',
        Country: 'Lesotho'
    },
    {
        value: '126',
        ISOCode: 'LR',
        Country: 'Liberia'
    },
    {
        value: '127',
        ISOCode: 'LY',
        Country: 'Libya'
    },
    {
        value: '128',
        ISOCode: 'LI',
        Country: 'Liechtenstein'
    },
    {
        value: '129',
        ISOCode: 'LT',
        Country: 'Lithuania'
    },
    {
        value: '130',
        ISOCode: 'LU',
        Country: 'Luxembourg'
    },
    {
        value: '131',
        ISOCode: 'MO',
        Country: 'Macao'
    },
    {
        value: '132',
        ISOCode: 'MK',
        Country: 'Macedonia (the former Yugoslav Republic of)'
    },
    {
        value: '133',
        ISOCode: 'MG',
        Country: 'Madagascar'
    },
    {
        value: '134',
        ISOCode: 'MW',
        Country: 'Malawi'
    },
    {
        value: '135',
        ISOCode: 'MY',
        Country: 'Malaysia'
    },
    {
        value: '136',
        ISOCode: 'MV',
        Country: 'Maldives'
    },
    {
        value: '137',
        ISOCode: 'ML',
        Country: 'Mali'
    },
    {
        value: '138',
        ISOCode: 'MT',
        Country: 'Malta'
    },
    {
        value: '139',
        ISOCode: 'MH',
        Country: 'Marshall Islands (the)'
    },
    {
        value: '140',
        ISOCode: 'MQ',
        Country: 'Martinique'
    },
    {
        value: '141',
        ISOCode: 'MR',
        Country: 'Mauritania'
    },
    {
        value: '142',
        ISOCode: 'MU',
        Country: 'Mauritius'
    },
    {
        value: '143',
        ISOCode: 'YT',
        Country: 'Mayotte'
    },
    {
        value: '144',
        ISOCode: 'MX',
        Country: 'Mexico'
    },
    {
        value: '145',
        ISOCode: 'FM',
        Country: 'Micronesia (Federated States of)'
    },
    {
        value: '146',
        ISOCode: 'MD',
        Country: 'Moldova (the Republic of)'
    },
    {
        value: '147',
        ISOCode: 'MC',
        Country: 'Monaco'
    },
    {
        value: '148',
        ISOCode: 'MN',
        Country: 'Mongolia'
    },
    {
        value: '149',
        ISOCode: 'ME',
        Country: 'Montenegro'
    },
    {
        value: '150',
        ISOCode: 'MS',
        Country: 'Montserrat'
    },
    {
        value: '151',
        ISOCode: 'MA',
        Country: 'Morocco'
    },
    {
        value: '152',
        ISOCode: 'MZ',
        Country: 'Mozambique'
    },
    {
        value: '153',
        ISOCode: 'MM',
        Country: 'Myanmar'
    },
    {
        value: '154',
        ISOCode: 'NA',
        Country: 'Namibia'
    },
    {
        value: '155',
        ISOCode: 'NR',
        Country: 'Nauru'
    },
    {
        value: '156',
        ISOCode: 'NP',
        Country: 'Nepal'
    },
    {
        value: '157',
        ISOCode: 'NL',
        Country: 'Netherlands (the)'
    },
    {
        value: '158',
        ISOCode: 'NC',
        Country: 'New Caledonia'
    },
    {
        value: '159',
        ISOCode: 'NZ',
        Country: 'New Zealand'
    },
    {
        value: '160',
        ISOCode: 'NI',
        Country: 'Nicaragua'
    },
    {
        value: '161',
        ISOCode: 'NE',
        Country: 'Niger (the)'
    },
    {
        value: '162',
        ISOCode: 'NG',
        Country: 'Nigeria'
    },
    {
        value: '163',
        ISOCode: 'NU',
        Country: 'Niue'
    },
    {
        value: '164',
        ISOCode: 'NF',
        Country: 'Norfolk Island'
    },
    {
        value: '165',
        ISOCode: 'MP',
        Country: 'Northern Mariana Islands (the)'
    },
    {
        value: '166',
        ISOCode: 'NO',
        Country: 'Norway'
    },
    {
        value: '167',
        ISOCode: 'OM',
        Country: 'Oman'
    },
    {
        value: '168',
        ISOCode: 'PK',
        Country: 'Pakistan'
    },
    {
        value: '169',
        ISOCode: 'PW',
        Country: 'Palau'
    },
    {
        value: '170',
        ISOCode: 'PS',
        Country: 'Palestine, State of'
    },
    {
        value: '171',
        ISOCode: 'PA',
        Country: 'Panama'
    },
    {
        value: '172',
        ISOCode: 'PG',
        Country: 'Papua New Guinea'
    },
    {
        value: '173',
        ISOCode: 'PY',
        Country: 'Paraguay'
    },
    {
        value: '174',
        ISOCode: 'PE',
        Country: 'Peru'
    },
    {
        value: '175',
        ISOCode: 'PH',
        Country: 'Philippines (the)'
    },
    {
        value: '176',
        ISOCode: 'PN',
        Country: 'Pitcairn'
    },
    {
        value: '177',
        ISOCode: 'PL',
        Country: 'Poland'
    },
    {
        value: '178',
        ISOCode: 'PT',
        Country: 'Portugal'
    },
    {
        value: '179',
        ISOCode: 'PR',
        Country: 'Puerto Rico'
    },
    {
        value: '180',
        ISOCode: 'QA',
        Country: 'Qatar'
    },
    {
        value: '181',
        ISOCode: 'RE',
        Country: 'Réunion'
    },
    {
        value: '182',
        ISOCode: 'RO',
        Country: 'Romania'
    },
    {
        value: '183',
        ISOCode: 'RU',
        Country: 'Russian Federation (the)'
    },
    {
        value: '184',
        ISOCode: 'RW',
        Country: 'Rwanda'
    },
    {
        value: '185',
        ISOCode: 'BL',
        Country: 'Saint Barthélemy'
    },
    {
        value: '186',
        ISOCode: 'SH',
        Country: 'Saint Helena, Ascension and Tristan da Cunha'
    },
    {
        value: '187',
        ISOCode: 'KN',
        Country: 'Saint Kitts and Nevis'
    },
    {
        value: '188',
        ISOCode: 'LC',
        Country: 'Saint Lucia'
    },
    {
        value: '189',
        ISOCode: 'MF',
        Country: 'Saint Martin (French part)'
    },
    {
        value: '190',
        ISOCode: 'PM',
        Country: 'Saint Pierre and Miquelon'
    },
    {
        value: '191',
        ISOCode: 'VC',
        Country: 'Saint Vincent and the Grenadines'
    },
    {
        value: '192',
        ISOCode: 'WS',
        Country: 'Samoa'
    },
    {
        value: '193',
        ISOCode: 'SM',
        Country: 'San Marino'
    },
    {
        value: '194',
        ISOCode: 'ST',
        Country: 'Sao Tome and Principe'
    },
    {
        value: '195',
        ISOCode: 'SA',
        Country: 'Saudi Arabia'
    },
    {
        value: '196',
        ISOCode: 'SN',
        Country: 'Senegal'
    },
    {
        value: '197',
        ISOCode: 'RS',
        Country: 'Serbia'
    },
    {
        value: '198',
        ISOCode: 'SC',
        Country: 'Seychelles'
    },
    {
        value: '199',
        ISOCode: 'SL',
        Country: 'Sierra Leone'
    },
    {
        value: '200',
        ISOCode: 'SG',
        Country: 'Singapore'
    },
    {
        value: '201',
        ISOCode: 'SX',
        Country: 'Sint Maarten (Dutch part)'
    },
    {
        value: '202',
        ISOCode: 'SK',
        Country: 'Slovakia'
    },
    {
        value: '203',
        ISOCode: 'SI',
        Country: 'Slovenia'
    },
    {
        value: '204',
        ISOCode: 'SB',
        Country: 'Solomon Islands'
    },
    {
        value: '205',
        ISOCode: 'SO',
        Country: 'Somalia'
    },
    {
        value: '206',
        ISOCode: 'ZA',
        Country: 'South Africa'
    },
    {
        value: '207',
        ISOCode: 'GS',
        Country: 'South Georgia and the South Sandwich Islands'
    },
    {
        value: '208',
        ISOCode: 'SS',
        Country: 'South Sudan'
    },
    {
        value: '209',
        ISOCode: 'ES',
        Country: 'Spain'
    },
    {
        value: '210',
        ISOCode: 'LK',
        Country: 'Sri Lanka'
    },
    {
        value: '211',
        ISOCode: 'SD',
        Country: 'Sudan (the)'
    },
    {
        value: '212',
        ISOCode: 'SR',
        Country: 'Suriname'
    },
    {
        value: '213',
        ISOCode: 'SJ',
        Country: 'Svalbard and Jan Mayen'
    },
    {
        value: '214',
        ISOCode: 'SZ',
        Country: 'Swaziland'
    },
    {
        value: '215',
        ISOCode: 'SE',
        Country: 'Sweden'
    },
    {
        value: '216',
        ISOCode: 'CH',
        Country: 'Switzerland'
    },
    {
        value: '217',
        ISOCode: 'SY',
        Country: 'Syrian Arab Republic'
    },
    {
        value: '218',
        ISOCode: 'TW',
        Country: 'Taiwan (Province of China)'
    },
    {
        value: '219',
        ISOCode: 'TJ',
        Country: 'Tajikistan'
    },
    {
        value: '220',
        ISOCode: 'TZ',
        Country: 'Tanzania, United Republic of'
    },
    {
        value: '221',
        ISOCode: 'TH',
        Country: 'Thailand'
    },
    {
        value: '222',
        ISOCode: 'TL',
        Country: 'Timor-Leste'
    },
    {
        value: '223',
        ISOCode: 'TG',
        Country: 'Togo'
    },
    {
        value: '224',
        ISOCode: 'TK',
        Country: 'Tokelau'
    },
    {
        value: '225',
        ISOCode: 'TO',
        Country: 'Tonga'
    },
    {
        value: '226',
        ISOCode: 'TT',
        Country: 'Trinidad and Tobago'
    },
    {
        value: '227',
        ISOCode: 'TN',
        Country: 'Tunisia'
    },
    {
        value: '228',
        ISOCode: 'TR',
        Country: 'Turkey'
    },
    {
        value: '229',
        ISOCode: 'TM',
        Country: 'Turkmenistan'
    },
    {
        value: '230',
        ISOCode: 'TC',
        Country: 'Turks and Caicos Islands (the)'
    },
    {
        value: '231',
        ISOCode: 'TV',
        Country: 'Tuvalu'
    },
    {
        value: '232',
        ISOCode: 'UG',
        Country: 'Uganda'
    },
    {
        value: '233',
        ISOCode: 'UA',
        Country: 'Ukraine'
    },
    {
        value: '234',
        ISOCode: 'AE',
        Country: 'United Arab Emirates (the)'
    },
    {
        value: '235',
        ISOCode: 'GB',
        Country: 'United Kingdom of Great Britain and Northern Ireland (the)'
    },
    {
        value: '236',
        ISOCode: 'UM',
        Country: 'United States Minor Outlying Islands (the)'
    },
    {
        value: '237',
        ISOCode: 'US',
        Country: 'United States of America (the)'
    },
    {
        value: '238',
        ISOCode: 'UY',
        Country: 'Uruguay'
    },
    {
        value: '239',
        ISOCode: 'UZ',
        Country: 'Uzbekistan'
    },
    {
        value: '240',
        ISOCode: 'VU',
        Country: 'Vanuatu'
    },
    {
        value: '241',
        ISOCode: 'VE',
        Country: 'Venezuela (Bolivarian Republic of)'
    },
    {
        value: '242',
        ISOCode: 'VN',
        Country: 'Viet Nam'
    },
    {
        value: '243',
        ISOCode: 'VG',
        Country: 'Virgin Islands (British)'
    },
    {
        value: '244',
        ISOCode: 'VI',
        Country: 'Virgin Islands (U.S.)'
    },
    {
        value: '245',
        ISOCode: 'WF',
        Country: 'Wallis and Futuna'
    },
    {
        value: '246',
        ISOCode: 'EH',
        Country: 'Western Sahara*'
    },
    {
        value: '247',
        ISOCode: 'YE',
        Country: 'Yemen'
    },
    {
        value: '248',
        ISOCode: 'ZM',
        Country: 'Zambia'
    },
    {
        value: '249',
        ISOCode: 'ZW',
        Country: 'Zimbabwe'
    },
]

const listProvinsi = [
    {id:"",nama:"Pilih Provinsi"},
	{id:"11",nama:"ACEH"},
	{id:"12",nama:"SUMATERA UTARA"},
	{id:"13",nama:"SUMATERA BARAT"},
	{id:"14",nama:"RIAU"},
	{id:"15",nama:"JAMBI"},
	{id:"16",nama:"SUMATERA SELATAN"},
	{id:"17",nama:"BENGKULU"},
	{id:"18",nama:"LAMPUNG"},
	{id:"19",nama:"KEPULAUAN BANGKA BELITUNG"},
	{id:"21",nama:"KEPULAUAN RIAU"},
	{id:"31",nama:"DKI JAKARTA"},
	{id:"32",nama:"JAWA BARAT"},
	{id:"33",nama:"JAWA TENGAH"},
	{id:"34",nama:"DAERAH ISTIMEWA YOGYAKARTA"},
	{id:"35",nama:"JAWA TIMUR"},
	{id:"36",nama:"BANTEN"},
	{id:"51",nama:"BALI"},
	{id:"52",nama:"NUSA TENGGARA BARAT"},
	{id:"53",nama:"NUSA TENGGARA TIMUR"},
	{id:"61",nama:"KALIMANTAN BARAT"},
	{id:"62",nama:"KALIMANTAN TENGAH"},
	{id:"63",nama:"KALIMANTAN SELATAN"},
	{id:"64",nama:"KALIMANTAN TIMUR"},
	{id:"65",nama:"KALIMANTAN UTARA"},
	{id:"71",nama:"SULAWESI UTARA"},
	{id:"72",nama:"SULAWESI TENGAH"},
	{id:"73",nama:"SULAWESI SELATAN"},
	{id:"74",nama:"SULAWESI TENGGARA"},
	{id:"75",nama:"GORONTALO"},
	{id:"76",nama:"SULAWESI BARAT"},
	{id:"81",nama:"MALUKU"},
	{id:"82",nama:"MALUKU UTARA"},
	{id:"91",nama:"PAPUA"},
  {id:"92",nama:"PAPUA BARAT"}
]

const listKabupatenKota = 
[
{id:'',nama:'Pilih Kab/Kota'},
{id:'3301',nama:'KAB. CILACAP'},
{id:'3302',nama:'KAB. BANYUMAS'},
{id:'3303',nama:'KAB. PURBALINGGA'},
{id:'3304',nama:'KAB. BANJARNEGARA'},
{id:'3305',nama:'KAB. KEBUMEN'},
{id:'3306',nama:'KAB. PURWOREJO'},
{id:'3307',nama:'KAB. WONOSOBO'},
{id:'3308',nama:'KAB. MAGELANG'},
{id:'3309',nama:'KAB. BOYOLALI'},
{id:'3310',nama:'KAB. KLATEN'},
{id:'3311',nama:'KAB. SUKOHARJO'},
{id:'3312',nama:'KAB. WONOGIRI'},
{id:'3313',nama:'KAB. KARANGANYAR'},
{id:'3314',nama:'KAB. SRAGEN'},
{id:'3315',nama:'KAB. GROBOGAN'},
{id:'3316',nama:'KAB. BLORA'},
{id:'3317',nama:'KAB. REMBANG'},
{id:'3318',nama:'KAB. PATI'},
{id:'3319',nama:'KAB. KUDUS'},
{id:'3320',nama:'KAB. JEPARA'},
{id:'3321',nama:'KAB. DEMAK'},
{id:'3322',nama:'KAB. SEMARANG'},
{id:'3323',nama:'KAB. TEMANGGUNG'},
{id:'3324',nama:'KAB. KENDAL'},
{id:'3325',nama:'KAB. BATANG'},
{id:'3326',nama:'KAB. PEKALONGAN'},
{id:'3327',nama:'KAB. PEMALANG'},
{id:'3328',nama:'KAB. TEGAL'},
{id:'3329',nama:'KAB. BREBES'},
{id:'3371',nama:'KOTA MAGELANG'},
{id:'3372',nama:'KOTA SURAKARTA'},
{id:'3373',nama:'KOTA SALATIGA'},
{id:'3374',nama:'KOTA SEMARANG'},
{id:'3375',nama:'KOTA PEKALONGAN'},
{id:'3376',nama:'KOTA TEGAL'},
{id:'3401',nama:'KAB. KULON PROGO'},
{id:'3402',nama:'KAB. BANTUL'},
{id:'3403',nama:'KAB. GUNUNGKIDUL'},
{id:'3404',nama:'KAB. SLEMAN'},
{id:'3471',nama:'KOTA YOGYAKARTA'},
{id:'3501',nama:'KAB. PACITAN'},
{id:'3502',nama:'KAB. PONOROGO'},
{id:'3503',nama:'KAB. TRENGGALEK'},
{id:'3504',nama:'KAB. TULUNGAGUNG'},
{id:'3505',nama:'KAB. BLITAR'},
{id:'3506',nama:'KAB. KEDIRI'},
{id:'3507',nama:'KAB. MALANG'},
{id:'3508',nama:'KAB. LUMAJANG'},
{id:'3509',nama:'KAB. JEMBER'},
{id:'3510',nama:'KAB. BANYUWANGI'},
{id:'3511',nama:'KAB. BONDOWOSO'},
{id:'3512',nama:'KAB. SITUBONDO'},
{id:'3513',nama:'KAB. PROBOLINGGO'},
{id:'3514',nama:'KAB. PASURUAN'},
{id:'3515',nama:'KAB. SIDOARJO'},
{id:'3516',nama:'KAB. MOJOKERTO'},
{id:'3517',nama:'KAB. JOMBANG'},
{id:'3518',nama:'KAB. NGANJUK'},
{id:'3519',nama:'KAB. MADIUN'},
{id:'3520',nama:'KAB. MAGETAN'},
{id:'3521',nama:'KAB. NGAWI'},
{id:'3522',nama:'KAB. BOJONEGORO'},
{id:'3523',nama:'KAB. TUBAN'},
{id:'3524',nama:'KAB. LAMONGAN'},
{id:'3525',nama:'KAB. GRESIK'},
{id:'3526',nama:'KAB. BANGKALAN'},
{id:'3527',nama:'KAB. SAMPANG'},
{id:'3528',nama:'KAB. PAMEKASAN'},
{id:'3529',nama:'KAB. SUMENEP'},
{id:'3571',nama:'KOTA KEDIRI'},
{id:'3572',nama:'KOTA BLITAR'},
{id:'3573',nama:'KOTA MALANG'},
{id:'3574',nama:'KOTA PROBOLINGGO'},
{id:'3575',nama:'KOTA PASURUAN'},
{id:'3576',nama:'KOTA MOJOKERTO'},
{id:'3577',nama:'KOTA MADIUN'},
{id:'3578',nama:'KOTA SURABAYA'},
{id:'3579',nama:'KOTA BATU'},
{id:'3601',nama:'KAB. PANDEGLANG'},
{id:'3602',nama:'KAB. LEBAK'},
{id:'3603',nama:'KAB. TANGERANG'},
{id:'3604',nama:'KAB. SERANG'},
{id:'3671',nama:'KOTA TANGERANG'},
{id:'3672',nama:'KOTA CILEGON'},
{id:'3673',nama:'KOTA SERANG'},
{id:'3674',nama:'KOTA TANGERANG SELATAN'},
{id:'5101',nama:'KAB. JEMBRANA'},
{id:'5102',nama:'KAB. TABANAN'},
{id:'5103',nama:'KAB. BADUNG'},
{id:'5104',nama:'KAB. GIANYAR'},
{id:'5105',nama:'KAB. KLUNGKUNG'},
{id:'5106',nama:'KAB. BANGLI'},
{id:'5107',nama:'KAB. KARANGASEM'},
{id:'5108',nama:'KAB. BULELENG'},
{id:'5171',nama:'KOTA DENPASAR'},
{id:'5201',nama:'KAB. LOMBOK BARAT'},
{id:'5202',nama:'KAB. LOMBOK TENGAH'},
{id:'5203',nama:'KAB. LOMBOK TIMUR'},
{id:'5204',nama:'KAB. SUMBAWA'},
{id:'5205',nama:'KAB. DOMPU'},
{id:'5206',nama:'KAB. BIMA'},
{id:'5207',nama:'KAB. SUMBAWA BARAT'},
{id:'5208',nama:'KAB. LOMBOK UTARA'},
{id:'5271',nama:'KOTA MATARAM'},
{id:'5272',nama:'KOTA BIMA'},
{id:'5301',nama:'KAB. KUPANG'},
{id:'5302',nama:'KAB TIMOR TENGAH SELATAN'},
{id:'5303',nama:'KAB. TIMOR TENGAH UTARA'},
{id:'5304',nama:'KAB. BELU'},
{id:'5305',nama:'KAB. ALOR'},
{id:'5306',nama:'KAB. FLORES TIMUR'},
{id:'5307',nama:'KAB. SIKKA'},
{id:'5308',nama:'KAB. ENDE'},
{id:'5309',nama:'KAB. NGADA'},
{id:'5310',nama:'KAB. MANGGARAI'},
{id:'5311',nama:'KAB. SUMBA TIMUR'},
{id:'5312',nama:'KAB. SUMBA BARAT'},
{id:'5313',nama:'KAB. LEMBATA'},
{id:'5314',nama:'KAB. ROTE NDAO'},
{id:'5315',nama:'KAB. MANGGARAI BARAT'},
{id:'5316',nama:'KAB. NAGEKEO'},
{id:'5317',nama:'KAB. SUMBA TENGAH'},
{id:'5318',nama:'KAB. SUMBA BARAT DAYA'},
{id:'5319',nama:'KAB. MANGGARAI TIMUR'},
{id:'5320',nama:'KAB. SABU RAIJUA'},
{id:'5321',nama:'KAB. MALAKA'},
{id:'5371',nama:'KOTA KUPANG'},
{id:'6101',nama:'KAB. SAMBAS'},
{id:'6102',nama:'KAB. MEMPAWAH'},
{id:'6103',nama:'KAB. SANGGAU'},
{id:'6104',nama:'KAB. KETAPANG'},
{id:'6105',nama:'KAB. SINTANG'},
{id:'6106',nama:'KAB. KAPUAS HULU'},
{id:'6107',nama:'KAB. BENGKAYANG'},
{id:'6108',nama:'KAB. LANDAK'},
{id:'6109',nama:'KAB. SEKADAU'},
{id:'6110',nama:'KAB. MELAWI'},
{id:'6111',nama:'KAB. KAYONG UTARA'},
{id:'6112',nama:'KAB. KUBU RAYA'},
{id:'6171',nama:'KOTA PONTIANAK'},
{id:'6172',nama:'KOTA SINGKAWANG'},
{id:'6201',nama:'KAB. KOTAWARINGIN BARAT'},
{id:'6202',nama:'KAB. KOTAWARINGIN TIMUR'},
{id:'6203',nama:'KAB. KAPUAS'},
{id:'6204',nama:'KAB. BARITO SELATAN'},
{id:'6205',nama:'KAB. BARITO UTARA'},
{id:'6206',nama:'KAB. KATINGAN'},
{id:'6207',nama:'KAB. SERUYAN'},
{id:'6208',nama:'KAB. SUKAMARA'},
{id:'6209',nama:'KAB. LAMANDAU'},
{id:'6210',nama:'KAB. GUNUNG MAS'},
{id:'6211',nama:'KAB. PULANG PISAU'},
{id:'6212',nama:'KAB. MURUNG RAYA'},
{id:'6213',nama:'KAB. BARITO TIMUR'},
{id:'6271',nama:'KOTA PALANGKARAYA'},
{id:'6301',nama:'KAB. TANAH LAUT'},
{id:'6302',nama:'KAB. KOTABARU'},
{id:'6303',nama:'KAB. BANJAR'},
{id:'6304',nama:'KAB. BARITO KUALA'},
{id:'6305',nama:'KAB. TAPIN'},
{id:'6306',nama:'KAB. HULU SUNGAI SELATAN'},
{id:'6307',nama:'KAB. HULU SUNGAI TENGAH'},
{id:'6308',nama:'KAB. HULU SUNGAI UTARA'},
{id:'6309',nama:'KAB. TABALONG'},
{id:'6310',nama:'KAB. TANAH BUMBU'},
{id:'6311',nama:'KAB. BALANGAN'},
{id:'6371',nama:'KOTA BANJARMASIN'},
{id:'6372',nama:'KOTA BANJARBARU'},
{id:'6401',nama:'KAB. PASER'},
{id:'6402',nama:'KAB. KUTAI KARTANEGARA'},
{id:'6403',nama:'KAB. BERAU'},
{id:'6407',nama:'KAB. KUTAI BARAT'},
{id:'6408',nama:'KAB. KUTAI TIMUR'},
{id:'6409',nama:'KAB. PENAJAM PASER UTARA'},
{id:'6411',nama:'KAB. MAHAKAM ULU'},
{id:'6471',nama:'KOTA BALIKPAPAN'},
{id:'6472',nama:'KOTA SAMARINDA'},
{id:'6474',nama:'KOTA BONTANG'},
{id:'6501',nama:'KAB. BULUNGAN'},
{id:'6502',nama:'KAB. MALINAU'},
{id:'6503',nama:'KAB. NUNUKAN'},
{id:'6504',nama:'KAB. TANA TIDUNG'},
{id:'6571',nama:'KOTA TARAKAN'},
{id:'7101',nama:'KAB. BOLAANG MONGONDOW'},
{id:'7102',nama:'KAB. MINAHASA'},
{id:'7103',nama:'KAB. KEPULAUAN SANGIHE'},
{id:'7104',nama:'KAB. KEPULAUAN TALAUD'},
{id:'7105',nama:'KAB. MINAHASA SELATAN'},
{id:'7106',nama:'KAB. MINAHASA UTARA'},
{id:'7107',nama:'KAB. MINAHASA TENGGARA'},
{id:'7108',nama:'KAB. BOLAANG MONGONDOW UTARA'},
{id:'7109',nama:'KAB. KEP. SIAU TAGULANDANG BIARO'},
{id:'7110',nama:'KAB. BOLAANG MONGONDOW TIMUR'},
{id:'7111',nama:'KAB. BOLAANG MONGONDOW SELATAN'},
{id:'7171',nama:'KOTA MANADO'},
{id:'7172',nama:'KOTA BITUNG'},
{id:'7173',nama:'KOTA TOMOHON'},
{id:'7174',nama:'KOTA KOTAMOBAGU'},
{id:'7201',nama:'KAB. BANGGAI'},
{id:'7202',nama:'KAB. POSO'},
{id:'7203',nama:'KAB. DONGGALA'},
{id:'7204',nama:'KAB. TOLI TOLI'},
{id:'7205',nama:'KAB. BUOL'},
{id:'7206',nama:'KAB. MOROWALI'},
{id:'7207',nama:'KAB. BANGGAI KEPULAUAN'},
{id:'7208',nama:'KAB. PARIGI MOUTONG'},
{id:'7209',nama:'KAB. TOJO UNA UNA'},
{id:'7210',nama:'KAB. SIGI'},
{id:'7211',nama:'KAB. BANGGAI LAUT'},
{id:'7212',nama:'KAB. MOROWALI UTARA'},
{id:'7271',nama:'KOTA PALU'},
{id:'7301',nama:'KAB. KEPULAUAN SELAYAR'},
{id:'7302',nama:'KAB. BULUKUMBA'},
{id:'7303',nama:'KAB. BANTAENG'},
{id:'7304',nama:'KAB. JENEPONTO'},
{id:'7305',nama:'KAB. TAKALAR'},
{id:'7306',nama:'KAB. GOWA'},
{id:'7307',nama:'KAB. SINJAI'},
{id:'7308',nama:'KAB. BONE'},
{id:'7309',nama:'KAB. MAROS'},
{id:'7310',nama:'KAB. PANGKAJENE KEPULAUAN'},
{id:'7311',nama:'KAB. BARRU'},
{id:'7312',nama:'KAB. SOPPENG'},
{id:'7313',nama:'KAB. WAJO'},
{id:'7314',nama:'KAB. SIDENRENG RAPPANG'},
{id:'7315',nama:'KAB. PINRANG'},
{id:'7316',nama:'KAB. ENREKANG'},
{id:'7317',nama:'KAB. LUWU'},
{id:'7318',nama:'KAB. TANA TORAJA'},
{id:'7322',nama:'KAB. LUWU UTARA'},
{id:'7324',nama:'KAB. LUWU TIMUR'},
{id:'7326',nama:'KAB. TORAJA UTARA'},
{id:'7371',nama:'KOTA MAKASSAR'},
{id:'7372',nama:'KOTA PARE PARE'},
{id:'7373',nama:'KOTA PALOPO'},
{id:'7401',nama:'KAB. KOLAKA'},
{id:'7402',nama:'KAB. KONAWE'},
{id:'7403',nama:'KAB. MUNA'},
{id:'7404',nama:'KAB. BUTON'},
{id:'7405',nama:'KAB. KONAWE SELATAN'},
{id:'7406',nama:'KAB. BOMBANA'},
{id:'7407',nama:'KAB. WAKATOBI'},
{id:'7408',nama:'KAB. KOLAKA UTARA'},
{id:'7409',nama:'KAB. KONAWE UTARA'},
{id:'7410',nama:'KAB. BUTON UTARA'},
{id:'7411',nama:'KAB. KOLAKA TIMUR'},
{id:'7412',nama:'KAB. KONAWE KEPULAUAN'},
{id:'7413',nama:'KAB. MUNA BARAT'},
{id:'7414',nama:'KAB. BUTON TENGAH'},
{id:'7415',nama:'KAB. BUTON SELATAN'},
{id:'7471',nama:'KOTA KENDARI'},
{id:'7472',nama:'KOTA BAU BAU'},
{id:'7501',nama:'KAB. GORONTALO'},
{id:'7502',nama:'KAB. BOALEMO'},
{id:'7503',nama:'KAB. BONE BOLANGO'},
{id:'7504',nama:'KAB. PAHUWATO'},
{id:'7505',nama:'KAB. GORONTALO UTARA'},
{id:'7571',nama:'KOTA GORONTALO'},
{id:'7601',nama:'KAB. MAMUJU UTARA'},
{id:'7602',nama:'KAB. MAMUJU'},
{id:'7603',nama:'KAB. MAMASA'},
{id:'7604',nama:'KAB. POLEWALI MANDAR'},
{id:'7605',nama:'KAB. MAJENE'},
{id:'7606',nama:'KAB. MAMUJU TENGAH'},
{id:'8101',nama:'KAB. MALUKU TENGAH'},
{id:'8102',nama:'KAB. MALUKU TENGGARA'},
{id:'8103',nama:'KAB. MALUKU TENGGARA BARAT'},
{id:'8104',nama:'KAB. BURU'},
{id:'8105',nama:'KAB. SERAM BAGIAN TIMUR'},
{id:'8106',nama:'KAB. SERAM BAGIAN BARAT'},
{id:'8107',nama:'KAB. KEPULAUAN ARU'},
{id:'8108',nama:'KAB. MALUKU BARAT DAYA'},
{id:'8109',nama:'KAB. BURU SELATAN'},
{id:'8171',nama:'KOTA AMBON'},
{id:'8172',nama:'KOTA TUAL'},
{id:'8201',nama:'KAB. HALMAHERA BARAT'},
{id:'8202',nama:'KAB. HALMAHERA TENGAH'},
{id:'8203',nama:'KAB. HALMAHERA UTARA'},
{id:'8204',nama:'KAB. HALMAHERA SELATAN'},
{id:'8205',nama:'KAB. KEPULAUAN SULA'},
{id:'8206',nama:'KAB. HALMAHERA TIMUR'},
{id:'8207',nama:'KAB. PULAU MOROTAI'},
{id:'8208',nama:'KAB. PULAU TALIABU'},
{id:'8271',nama:'KOTA TERNATE'},
{id:'8272',nama:'KOTA TIDORE KEPULAUAN'},
{id:'9101',nama:'KAB. MERAUKE'},
{id:'9102',nama:'KAB. JAYAWIJAYA'},
{id:'9103',nama:'KAB. JAYAPURA'},
{id:'9104',nama:'KAB. NABIRE'},
{id:'9105',nama:'KAB. KEPULAUAN YAPEN'},
{id:'9106',nama:'KAB. BIAK NUMFOR'},
{id:'9107',nama:'KAB. PUNCAK JAYA'},
{id:'9108',nama:'KAB. PANIAI'},
{id:'9109',nama:'KAB. MIMIKA'},
{id:'9110',nama:'KAB. SARMI'},
{id:'9111',nama:'KAB. KEEROM'},
{id:'9112',nama:'KAB. PEGUNUNGAN BINTANG'},
{id:'9113',nama:'KAB. YAHUKIMO'},
{id:'9114',nama:'KAB. TOLIKARA'},
{id:'9115',nama:'KAB. WAROPEN'},
{id:'9116',nama:'KAB. BOVEN DIGOEL'},
{id:'9117',nama:'KAB. MAPPI'},
{id:'9118',nama:'KAB. ASMAT'},
{id:'9119',nama:'KAB. SUPIORI'},
{id:'9120',nama:'KAB. MAMBERAMO RAYA'},
{id:'9121',nama:'KAB. MAMBERAMO TENGAH'},
{id:'9122',nama:'KAB. YALIMO'},
{id:'9123',nama:'KAB. LANNY JAYA'},
{id:'9124',nama:'KAB. NDUGA'},
{id:'9125',nama:'KAB. PUNCAK'},
{id:'9126',nama:'KAB. DOGIYAI'},
{id:'9127',nama:'KAB. INTAN JAYA'},
{id:'9128',nama:'KAB. DEIYAI'},
{id:'9171',nama:'KOTA JAYAPURA'},
{id:'9201',nama:'KAB. SORONG'},
{id:'9202',nama:'KAB. MANOKWARI'},
{id:'9203',nama:'KAB. FAK FAK'},
{id:'9204',nama:'KAB. SORONG SELATAN'},
{id:'9205',nama:'KAB. RAJA AMPAT'},
{id:'9206',nama:'KAB. TELUK BINTUNI'},
{id:'9207',nama:'KAB. TELUK WONDAMA'},
{id:'9208',nama:'KAB. KAIMANA'},
{id:'9209',nama:'KAB. TAMBRAUW'},
{id:'9210',nama:'KAB. MAYBRAT'},
{id:'9211',nama:'KAB. MANOKWARI SELATAN'},
{id:'9212',nama:'KAB. PEGUNUNGAN ARFAK'},
{id:'9271',nama:'KOTA SORONG'}]

var HanyaAngka = /^[0-9]+$/;
const useStyles = makeStyles((theme) => ({
    myGrid: {
        //width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
        height: '150%',
    },
    expand: {
        width: 900,
        flexGrow: 1,
        marginTop: 10,
    },
    expand2: {
        width: 900,
        marginTop: 0,
    },
    expand3: {
        marginLeft: 10,
        width: 900,
        marginTop: 30,
    },
    expandx: {
        marginLeft: 25,
        width: 900,
        marginTop: 0,
    },
    penanggungjawabpertama: {
        width: 900,
        marginTop: 30,
    },
    buttonGrid: {
        width: 900,
        marginTop: 5,
        direction: "row",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1, 0, 1),
        borderRadius: 15,
        justify: 'center',
        marginTop: 5,
        width: 50,
        backgroundColor: '#008F4C',
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
const initialValues = {
    namaInstansiPemberiKerja: '',
    nomorIdentitasPemberiKerja: '',
    tanggalDaftarPemberiKerja: '',
    klasifikasiBakuLapanganUsaha: '',
    skalaUsaha: '',
    jumlahPekerja: '',
    tanggalPendirianPerusahaan: '',
    tempatPendirianPerusahaan: '',
    kelompokPemberiKerja: '',
    npwp: '',
    noTelp: '',
    alamatEmail: '',
    statusPendaftaranPemberiKerja: '',
    statusPemberiKerja: '',
    statusInstansiPemberiKerja: '',
    statusBadanUsaha: '',

    //alamat domisili
    alamatDomisili: '',
    kabupatenKota: '',
    provinsiDomisili: '',
    kodePosDomisili: '',
    negaraDomisili: '',

    //alamat korespondensi
    alamatKorespondensi: '',
    kabupatenKorespondensi: '',
    provinsiKorespondensi: '',
    kodePosKorespondensi: '',
    negaraKorespondensi: '',

    //penanggungjawab utama
    namaPenanggungJawab1: '',
    jabatanPenanggungJawab1: '',
    noSelulerPenanggungJawab1: '',
    alamatEmailPenanggungJawab1: '',
    noTelpPenanggungJawab1: '',

    //penanggungjawab kedua
    namaPenanggungJawab2: '',
    jabatanPenanggungJawab2: '',
    noSelulerPenanggungJawab2: '',
    alamatEmailPenanggungJawab2: '',
    noTelpPenanggungJawab2: '',

    //pengelola pembayaran
    namaPengelolaPembayaran: '',
    jabatanPengelolaPembayaran: '',
    nomorSelulerPengelolaPembayaran: '',
    emailPengelolaPembayaran: '',
    nomorTeleponPengelolaPembayaran: '',


}

/*const onSubmit = values => {
    console.log('form data', values);
    alert("Berhasil Menyimpan Data")
}*/
//validasi
const validationSchema = Yup.object({
    namaInstansiPemberiKerja: Yup.string().required('harus diisi').max(255, 'maksimal 255 karakter'),
    nomorIdentitasPemberiKerja: Yup.string().nullable(true).matches(HanyaAngka, 'hanya angka').max(11, 'identitas pemberi kerja harus 11 karakter').min(11, 'identitas pemberi kerja harus 11 karakter'),
    tanggalDaftarPemberiKerja: Yup.string().nullable(true),
    tanggalPendirianPerusahaan: Yup.string().required('harus diisi'),
    klasifikasiBakuLapanganUsaha: Yup.string().nullable(true),
    skalaUsaha: Yup.string().required('harus diisi'),
    jumlahPekerja: Yup.string().required('harus diisi').matches(HanyaAngka, 'hanya angka').max(7, 'maksimal 7 digit angka'),
    tempatPendirianPerusahaan: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    kelompokPemberiKerja: Yup.string().required('harus diisi'),
    npwp: Yup.string().required('harus diisi').matches(/^[0-9.-]+$/, 'hanya angka').max(20, 'Nomor NPWP harus 15 karakter').min(20, 'Nomor NPWP harus 15 karakter'),
    noTelp: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(50, 'nomor telepon maksimal 50 karakter'),
    alamatEmail: Yup.string().required('harus diisi').email('email tidak valid').max(255, 'Maksimal 255 Karakter'),
    statusPendaftaranPemberiKerja: Yup.string().nullable(true),
    statusPemberiKerja: Yup.string().nullable(true),
    //ini conditional tapi ga ada keterangan syaratnya jadi saya buat mandatory
    statusInstansiPemberiKerja: Yup.string().required('harus diisi'),
    //sampe sini aja sih
    statusBadanUsaha: Yup.string().required('harus diisi'),

    //alamat domisili
    alamatDomisili: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    kabupatenKota: Yup.string().required('harus diisi'),
    provinsiDomisili: Yup.string().required('harus diisi'),
    kodePosDomisili: Yup.string().required('harus diisi').max(5, 'kode pos harus 5 karakter').min(5, 'kode pos harus 5 karakter'),
    negaraDomisili: Yup.string().required('harus diisi'),

    //alamat korespondensi
    alamatKorespondensi: Yup.string().nullable(true).max(100, 'maksimal 100 karakter'),
    kabupatenKorespondensi: Yup.string().nullable(true),
    provinsiKorespondensi: Yup.string().nullable(true),
    kodePosKorespondensi: Yup.string().nullable(true).max(5, 'kode pos harus 5 karakter').min(5, 'kode pos harus 5 karakter'),
    negaraKorespondensi: Yup.string().nullable(true),

    //penanggungjawab utama
    namaPenanggungJawab1: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    jabatanPenanggungJawab1: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    noSelulerPenanggungJawab1: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),
    alamatEmailPenanggungJawab1: Yup.string().required('harus diisi').email('Email tidak valid').max(255, 'panjang e-mail maksimal 255 karakter'),
    noTelpPenanggungJawab1: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),

    //penanggungjawab kedua
    namaPenanggungJawab2: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    jabatanPenanggungJawab2: Yup.string().required('harus diisi').max(100, 'maksimal 100 karakter'),
    noSelulerPenanggungJawab2: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),
    alamatEmailPenanggungJawab2: Yup.string().required('harus diisi').email('Email tidak valid').max(255, 'panjang e-mail maksimal 255 karakter'),
    noTelpPenanggungJawab2: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30, 'maksimal 30 karakter'),

    //pengelola pembayaran
    namaPengelolaPembayaran: Yup.string().required('harus diisi').max(100,'maksimal 100 karakter'),
    jabatanPengelolaPembayaran: Yup.string().required('harus diisi').max(100,'maksimal 100 karakter'),
    nomorSelulerPengelolaPembayaran: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30,'maksimal 30 karakter'),
    emailPengelolaPembayaran: Yup.string().required('harus diisi').email('Email tidak valid').max(255,'panjang e-mail maksimal 255 karakter'),
    nomorTeleponPengelolaPembayaran: Yup.string().required('harus diisi').matches(HanyaAngka,'hanya angka').max(30,'maksimal 30 karakter'),

})


export default function Profile() {
    const [mode, setMode] = React.useState(false)
    const classes = useStyles();
    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values)
            handleSave()
        },
        validationSchema
    })
    //const [value, setValue] = React.useState(true)
    const handleSave = () => {
        alert("Data Berhasil Disimpan");
        return setMode(true);
    };

    const handleEdit = () => {
        return setMode(false)
    }

    //console.log(value)
    console.log('form errors', formik.errors)
    const [tanggalPendirianPerusahaan, handleDateChange5] = React.useState(null);
    return (
        <Layout>
            <div>
                <Grid container item
                    maxwidth="xl" className={classes.myGrid} spacing={0} xs={5} sm={5} md={5} justify="space-between"
                >
                    <Grid container item spacing={0} xs={1} sm={1} md={1} >
                        <Paper className={classes.profilePaper} elevation={0}>
                            <img src="assets/img/profileicon.png" className={classes.ProfilePicture} />
                            {/* <h6 className={classes.expandx} justify="flex-end" >keterangan:</h6>
                            <h6 className={classes.expandx} justify="flex-end" >field bertanda bintang (*) wajib diisi</h6> */}
                        </Paper>

                    </Grid>
                    <Grid container item spacing={2} xs={7} sm={7} md={7}>
                        <form className={classes.field}
                            onSubmit={formik.handleSubmit}

                        >
                            <div>
                               
                                <MyTypography className={classes.expand3}>Informasi Pemberi Kerja</MyTypography>

                                <TextField
                                    id="namaInstansiPemberiKerja"
                                    label="Nama Instansi Pemberi Kerja *"
                                    name="namaInstansiPemberiKerja"
                                    type="input"
                                    helperText={formik.touched.namaInstansiPemberiKerja && formik.errors.namaInstansiPemberiKerja ? formik.errors.namaInstansiPemberiKerja : null}
                                    error={formik.touched.namaInstansiPemberiKerja && formik.errors.namaInstansiPemberiKerja ? true : false}
                                    {...formik.getFieldProps('namaInstansiPemberiKerja')}
                                disabled={mode}
                                >
                                </TextField>
                                <TextField
                                    id="nomorIdentitasPemberiKerja"
                                    label="Nomor Identitas Pemberi Kerja"
                                    name="nomorIdentitasPemberiKerja"
                                    defaultValue="Diisi oleh Tapera"
                                    disabled='true'
                                >
                                </TextField>

                                <TextField
                                    id="tanggalDaftarPemberiKerja"
                                    label="Tanggal Daftar Pemberi Kerja"
                                    name="tanggalDaftarPemberiKerja"
                                    defaultValue="Diisi oleh Tapera"
                                    disabled='true'
                                >
                                </TextField>
                                <TextField
                                    id="klasifikasiBakuLapanganUsaha"
                                    label="Klasifikasi Baku Lapangan Usaha"
                                    name="klasifikasiBakuLapanganUsaha"
                                    helperText={formik.touched.klasifikasiBakuLapanganUsaha && formik.errors.klasifikasiBakuLapanganUsaha ? formik.errors.klasifikasiBakuLapanganUsaha : null}
                                    error={formik.touched.klasifikasiBakuLapanganUsaha && formik.errors.klasifikasiBakuLapanganUsaha ? true : false}
                                    {...formik.getFieldProps('klasifikasiBakuLapanganUsaha')}
                                disabled={mode}
                                >
                                </TextField>
                                <TextField
                                    select
                                    id="skalaUsaha"
                                    label="Skala Usaha (Berdasarkan Aset) *"
                                    name="skalaUsaha"
                                    helperText={formik.touched.skalaUsaha && formik.errors.skalaUsaha ? formik.errors.skalaUsaha : null}
                                    error={formik.touched.skalaUsaha && formik.errors.skalaUsaha ? true : false}
                                    {...formik.getFieldProps('skalaUsaha')}
                                disabled={mode}
                                >
                                    <MenuItem key=" " value="">Pilih Skala Usaha</MenuItem>
                                    <MenuItem key="1" value="1">Besar (lebih dari Rp.10 Milyar)</MenuItem>
                                    <MenuItem key="2" value="2">Menengah (Rp. 500 Juta s.d. 10 Milyar)</MenuItem>
                                    <MenuItem key="3" value="3">Kecil (Rp. 50 Juta s.d. 500 Juta)</MenuItem>
                                    <MenuItem key="4" value="4">Mikro (kurang dari Rp. 50 Juta)</MenuItem>
                                </TextField>
                                <TextField
                                    id="jumlahPekerja"
                                    label="Jumlah Pekerja *"
                                    name="jumlahPekerja"
                                    disabled={mode}
                                    helperText={formik.touched.jumlahPekerja && formik.errors.jumlahPekerja ? formik.errors.jumlahPekerja : null}
                                    error={formik.touched.jumlahPekerja && formik.errors.jumlahPekerja ? true : false}
                                    {...formik.getFieldProps('jumlahPekerja')}
                                >
                                </TextField>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                    
                                        id="tanggalPendirianPerusahaan"
                                        label="Tanggal Pendirian Perusahaan *"
                                        name="tanggalPendirianPerusahaan"
                                        disabled={mode}
                                        helperText={formik.touched.tanggalPendirianPerusahaan && formik.errors.tanggalPendirianPerusahaan ? formik.errors.tanggalPendirianPerusahaan : null}
                                        error={formik.touched.tanggalPendirianPerusahaan && formik.errors.tanggalPendirianPerusahaan ? true : false}
                                        {...formik.getFieldProps('tanggalPendirianPerusahaan')}
                                        value={tanggalPendirianPerusahaan}
                                        onChange={(handleTanggalPendirianPerusahaan) => {
                                            formik.setFieldValue("tanggalPendirianPerusahaan", moment(handleTanggalPendirianPerusahaan).format('YYYYMMDD'));
                                            handleDateChange5(handleTanggalPendirianPerusahaan);
                                        }}
                                        onBlur={formik.handleBlur}
                                        maxDate={new Date()}
                                        format="yyyy-MM-dd"
                                    />
                                </MuiPickersUtilsProvider>

                                <TextField
                                    id="tempatPendirianPerusahaan"
                                    label="Tempat Pendirian Perusahaan *"
                                    name="tempatPendirianPerusahaan"
                                    disabled={mode}
                                    helperText={formik.touched.tempatPendirianPerusahaan && formik.errors.tempatPendirianPerusahaan ? formik.errors.tempatPendirianPerusahaan : null}
                                    error={formik.touched.tempatPendirianPerusahaan && formik.errors.tempatPendirianPerusahaan ? true : false}
                                    {...formik.getFieldProps('tempatPendirianPerusahaan')}
                                >
                                </TextField>
                                <TextField
                                    id="kelompokPemberiKerja"
                                    label="Kelompok Pemberi Kerja *"
                                    name="kelompokPemberiKerja"
                                    disabled={mode}
                                    helperText={formik.touched.kelompokPemberiKerja && formik.errors.kelompokPemberiKerja ? formik.errors.kelompokPemberiKerja : null}
                                    error={formik.touched.kelompokPemberiKerja && formik.errors.kelompokPemberiKerja ? true : false}
                                    {...formik.getFieldProps('kelompokPemberiKerja')}
                                >
                                    <MenuItem key=" " value="">Pilih Kelompok Pemberi Kerja</MenuItem>
                                    <MenuItem key="1" value="1">Penyelenggara Negara</MenuItem>
                                    <MenuItem key="2" value="2">Bukan Penyelenggara Negara</MenuItem>
                                </TextField>
                                <InputMask
        mask={"99.999.999.9-999.999"}
        maskChar=""
        onChange={formik.handleChange}
        value={formik.values.npwp || ''}
        disabled={mode}
      >
        {() => (
                                <TextField
                                    id="npwp"
                                    label="NPWP *"
                                    name="npwp"
                                    type="input"
                                    
                                    helperText={formik.touched.npwp && formik.errors.npwp ? formik.errors.npwp : null}
                                    error={formik.touched.npwp && formik.errors.npwp ? true : false}
                                   
                                >
                                </TextField>
                                )}
                                </InputMask>
                                <TextField
                                    id="noTelp"
                                    label="Nomor Telepon *"
                                    name="noTelp"
                                    disabled={mode}
                                    helperText={formik.touched.noTelp && formik.errors.noTelp ? formik.errors.noTelp : null}
                                    error={formik.touched.noTelp && formik.errors.noTelp ? true : false}
                                    {...formik.getFieldProps('noTelp')}
                                >
                                </TextField>
                                <TextField
                                    id="alamatEmail"
                                    label="Alamat E-Mail *"
                                    name="alamatEmail"
                                    disabled={mode}
                                    helperText={formik.touched.alamatEmail && formik.errors.alamatEmail ? formik.errors.alamatEmail : null}
                                    error={formik.touched.alamatEmail && formik.errors.alamatEmail ? true : false}
                                    {...formik.getFieldProps('alamatEmail')}
                                >
                                </TextField>

                                <TextField
                                    id="statusPendaftaranPemberiKerja"
                                    label="Status Pendaftaran Pemberi Kerja *"
                                    name="statusPendaftaranPemberiKerja"
                                    disabled='true'
                                    defaultValue="Diisi oleh Tapera"
                                // helperText={formik.touched.statusPendaftaranPemberiKerja && formik.errors.statusPendaftaranPemberiKerja ? formik.errors.statusPendaftaranPemberiKerja : null}
                                // error={formik.touched.statusPendaftaranPemberiKerja && formik.errors.statusPendaftaranPemberiKerja ? true : false}
                                // {...formik.getFieldProps('statusPendaftaranPemberiKerja')}
                                >
                                </TextField>
                                <TextField
                                    id="statusPemberiKerja"
                                    label="Status Pemberi Kerja *"
                                    name="statusPemberiKerja"
                                    disabled='true'
                                    defaultValue="Diisi oleh Tapera"
                                // helperText={formik.touched.statusPemberiKerja && formik.errors.statusPemberiKerja ? formik.errors.statusPemberiKerja : null}
                                // error={formik.touched.statusPemberiKerja && formik.errors.statusPemberiKerja ? true : false}
                                // {...formik.getFieldProps('statusPemberiKerja')}
                                >
                                </TextField>
                                <TextField
                                    select
                                    id="statusInstansiPemberiKerja"
                                    label="Status Instansi Pemberi Kerja *"
                                    name="statusInstansiPemberiKerja"
                                    disabled={mode}
                                    helperText={formik.touched.statusInstansiPemberiKerja && formik.errors.statusInstansiPemberiKerja ? formik.errors.statusInstansiPemberiKerja : null}
                                    error={formik.touched.statusInstansiPemberiKerja && formik.errors.statusInstansiPemberiKerja ? true : false}
                                    {...formik.getFieldProps('statusInstansiPemberiKerja')}
                                >
                                    <MenuItem key=" " value="">Pilih Status Instansi Pemberi Kerja</MenuItem>
                                    <MenuItem key="1" value="1">Pusat</MenuItem>
                                    <MenuItem key="2" value="2">Cabang/Daerah</MenuItem>
                                    <MenuItem key="3" value="3">Anak Perusahaan</MenuItem>
                                    <MenuItem key="4" value="4">Cabang Anak Perusahaan</MenuItem>

                                </TextField>
                                <TextField
                                    select
                                    id="statusBadanUsaha"
                                    label="Status Badan Usaha *"
                                    name="statusBadanUsaha"
                                    disabled={mode}
                                    helperText={formik.touched.statusBadanUsaha && formik.errors.statusBadanUsaha ? formik.errors.statusBadanUsaha : null}
                                    error={formik.touched.statusBadanUsaha && formik.errors.statusBadanUsaha ? true : false}
                                    {...formik.getFieldProps('statusBadanUsaha')}
                                >
                                    <MenuItem key=" " value="">Pilih Status Badan Usaha</MenuItem>
                                    <MenuItem key="1" value="1">Badan Usaha Milik Negara</MenuItem>
                                    <MenuItem key="2" value="2">Badan Usaha Milik Daerah</MenuItem>
                                    <MenuItem key="3" value="3">Swasta Nasional</MenuItem>
                                    <MenuItem key="4" value="4">Swasta Asing</MenuItem>
                                    <MenuItem key="5" value="5">Perorangan</MenuItem>
                                    <MenuItem key="6" value="6">Firma</MenuItem>
                                    <MenuItem key="7" value="7">Persekutuan Komanditer (CV)</MenuItem>
                                    <MenuItem key="8" value="8">Yayasan</MenuItem>
                                    <MenuItem key="9" value="9">Koperasi</MenuItem>
                                    <MenuItem key="10" value="10">Lainnya</MenuItem>

                                </TextField>

                                {/* <Typography id='titleAlamatDomisili'>
                                            Alamat Domisili
                                        </Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                        <TextField
                                        id="alamatDomisili"
                                        label="Alamat Domisili"
                                        name="alamatDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    <TextField
                                        id="kodePosDomisili"
                                        label="Kode Pos Domisili"
                                        name="kodePosDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    </div>
                                    <div>
                                    <TextField
                                        id="kabupatenKotaDomisili"
                                        label="Kabupaten/Kota Domisili"
                                        name="kabupatenKota"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    <TextField
                                        id="negaraDomisili"
                                        label="Negara Domisili"
                                        name="negaraDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                    
                                    
                                    </div>
                                    <div>
                                    <TextField
                                        id="provinsiDomisili"
                                        label="Provinsi Domisili"
                                        name="provinsiDomisili"
                                        //disabled={mode}
                                    >
                                    </TextField>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel> */}


                                <div className={classes.expand2}>
                                    <MyTypography className={classes.expand3}>Alamat Domisili</MyTypography>
                                    <TextField
                                        id="alamatDomisili"
                                        label="Alamat Domisili *"
                                        name="alamatDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.alamatDomisili && formik.errors.alamatDomisili ? formik.errors.alamatDomisili : null}
                                        error={formik.touched.alamatDomisili && formik.errors.alamatDomisili ? true : false}
                                        {...formik.getFieldProps('alamatDomisili')}
                                    >
                                    </TextField>
                                    <TextField
                                    select
                                        id="kabupatenKotaDomisili"
                                        label="Kabupaten/Kota Domisili *"
                                        name="kabupatenKota"
                                        disabled={mode}
                                        helperText={formik.touched.kabupatenKota && formik.errors.kabupatenKota ? formik.errors.kabupatenKota : null}
                                        error={formik.touched.kabupatenKota && formik.errors.kabupatenKota ? true : false}
                                        {...formik.getFieldProps('kabupatenKota')}
                                    >
                                         {listKabupatenKota.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        id="kodePosDomisili"
                                        label="Kode Pos Domisili *"
                                        name="kodePosDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.kodePosDomisili && formik.errors.kodePosDomisili ? formik.errors.kodePosDomisili : null}
                                        error={formik.touched.kodePosDomisili && formik.errors.kodePosDomisili ? true : false}
                                        {...formik.getFieldProps('kodePosDomisili')}
                                    >
                                    </TextField>
                                    <TextField
                                    select
                                        id="provinsiDomisili"
                                        label="Provinsi Domisili *"
                                        name="provinsiDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.provinsiDomisili && formik.errors.provinsiDomisili ? formik.errors.provinsiDomisili : null}
                                        error={formik.touched.provinsiDomisili && formik.errors.provinsiDomisili ? true : false}
                                        {...formik.getFieldProps('provinsiDomisili')}
                                    >
                                         {listProvinsi.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        id="negaraDomisili"
                                        label="Negara Domisili *"
                                        name="negaraDomisili"
                                        disabled={mode}
                                        helperText={formik.touched.negaraDomisili && formik.errors.negaraDomisili ? formik.errors.negaraDomisili : null}
                                        error={formik.touched.negaraDomisili && formik.errors.negaraDomisili ? true : false}
                                        {...formik.getFieldProps('negaraDomisili')}
                                    >
                                        {listISOCodeCountry.map((option) => (
                                            <MenuItem key={option.value} value={option.ISOCode}  >
                                                {option.Country}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <ExpansionPanel className={classes.expand}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="expandIcon"

                                    >
                                        <MyTypography id='titleAlamatKorespondensi'>
                                            Alamat Korespondensi
                                        </MyTypography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                            <TextField
                                                id="alamatKorespondensi"
                                                label="Alamat Korespondensi"
                                                name="alamatKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.alamatKorespondensi && formik.errors.alamatKorespondensi ? formik.errors.alamatKorespondensi : null}
                                                error={formik.touched.alamatKorespondensi && formik.errors.alamatKorespondensi ? true : false}
                                                {...formik.getFieldProps('alamatKorespondensi')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="kodePosKorespondensi"
                                                label="Kode Pos Korespondensi"
                                                name="kodePosKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.kodePosKorespondensi && formik.errors.kodePosKorespondensi ? formik.errors.kodePosKorespondensi : null}
                                                error={formik.touched.kodePosKorespondensi && formik.errors.kodePosKorespondensi ? true : false}
                                                {...formik.getFieldProps('kodePosKorespondensi')}
                                            >
                                            </TextField>
                                        </div>
                                        <div>
                                            <TextField
                                            select
                                                id="kabupatenKorespondensi"
                                                label="Kabupaten/Kota Korespondensi"
                                                name="kabupatenKotaKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.kabupatenKotaKorespondensi && formik.errors.kabupatenKotaKorespondensi ? formik.errors.kabupatenKotaKorespondensi : null}
                                                error={formik.touched.kabupatenKotaKorespondensi && formik.errors.kabupatenKotaKorespondensi ? true : false}
                                                {...formik.getFieldProps('kabupatenKotaKorespondensi')}
                                            >
                                                 {listKabupatenKota.map((option) => (
                                                <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                                </MenuItem>
                                        ))}
                                            </TextField>
                                            <TextField
                                            select
                                                id="negaraKorespondensi"
                                                label="Negara Korespondensi"
                                                name="negaraKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.negaraKorespondensi && formik.errors.negaraKorespondensi ? formik.errors.negaraKorespondensi : null}
                                                error={formik.touched.negaraKorespondensi && formik.errors.negaraKorespondensi ? true : false}
                                                {...formik.getFieldProps('negaraKorespondensi')}
                                            >
                                                 {listISOCodeCountry.map((option) => (
                                            <MenuItem key={option.value} value={option.ISOCode}  >
                                                {option.Country}
                                            </MenuItem>
                                        ))}
                                            </TextField>


                                        </div>
                                        <div>
                                            <TextField
                                            select
                                                id="provinsiKorespondensi"
                                                label="Provinsi Korespondensi"
                                                name="provinsiKorespondensi"
                                                disabled={mode}
                                                helperText={formik.touched.provinsiKorespondensi && formik.errors.provinsiKorespondensi ? formik.errors.provinsiKorespondensi : null}
                                                error={formik.touched.provinsiKorespondensi && formik.errors.provinsiKorespondensi ? true : false}
                                                {...formik.getFieldProps('provinsiKorespondensi')}
                                            >
                                                 {listProvinsi.map((option) => (
                                            <MenuItem key={option.id} value={option.nama}  >
                                                {option.nama}
                                            </MenuItem>
                                        ))}
                                            </TextField>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                                <ExpansionPanel className={classes.expand}>
                                    <ExpansionPanelSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="expandIcon"

                                    >
                                        <MyTypography id='titlePenanggungJawabPertama'>
                                            Penanggung Jawab Pertama
                                        </MyTypography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <div>
                                            <TextField
                                                id="namaPenanggungJawab1"
                                                label="Nama Lengkap *"
                                                name="namaPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.namaPenanggungJawab1 && formik.errors.namaPenanggungJawab1 ? formik.errors.namaPenanggungJawab1 : null}
                                                error={formik.touched.namaPenanggungJawab1 && formik.errors.namaPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('namaPenanggungJawab1')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="noSelulerPenanggungJawab1"
                                                label="Nomor Seluler *"
                                                name="noSelulerPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.noSelulerPenanggungJawab1 && formik.errors.noSelulerPenanggungJawab1 ? formik.errors.noSelulerPenanggungJawab1 : null}
                                                error={formik.touched.noSelulerPenanggungJawab1 && formik.errors.noSelulerPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('noSelulerPenanggungJawab1')}
                                            >
                                            </TextField>

                                        </div>
                                        <div>
                                            <TextField
                                                id="jabatanPenanggungJawab1"
                                                label="Jabatan *"
                                                name="jabatanPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.jabatanPenanggungJawab1 && formik.errors.jabatanPenanggungJawab1 ? formik.errors.jabatanPenanggungJawab1 : null}
                                                error={formik.touched.jabatanPenanggungJawab1 && formik.errors.jabatanPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('jabatanPenanggungJawab1')}
                                            >
                                            </TextField>
                                            <TextField
                                                id="alamatEmailPenanggungJawab1"
                                                label="Alamat E-Mail *"
                                                name="alamatEmailPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.alamatEmailPenanggungJawab1 && formik.errors.alamatEmailPenanggungJawab1 ? formik.errors.alamatEmailPenanggungJawab1 : null}
                                                error={formik.touched.alamatEmailPenanggungJawab1 && formik.errors.alamatEmailPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('alamatEmailPenanggungJawab1')}
                                            >
                                            </TextField>


                                        </div>
                                        <div>
                                            <TextField
                                                id="noTelpPenanggungJawab1"
                                                label="Nomor Telepon *"
                                                name="noTelpPenanggungJawab1"
                                                disabled={mode}
                                                helperText={formik.touched.noTelpPenanggungJawab1 && formik.errors.noTelpPenanggungJawab1 ? formik.errors.noTelpPenanggungJawab1 : null}
                                                error={formik.touched.noTelpPenanggungJawab1 && formik.errors.noTelpPenanggungJawab1 ? true : false}
                                                {...formik.getFieldProps('noTelpPenanggungJawab1')}
                                            >
                                            </TextField>

                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>

                            </div>

                            
                            <ExpansionPanel className={classes.expand}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="expandIcon"

                                >
                                    <MyTypography id='titlePenanggungJawabKedua'>
                                        Penanggung Jawab Kedua
                                        </MyTypography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <TextField
                                            id="namaPenanggungJawab2"
                                            label="Nama Lengkap *"
                                            name="namaPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.namaPenanggungJawab2 && formik.errors.namaPenanggungJawab2 ? formik.errors.namaPenanggungJawab2 : null}
                                            error={formik.touched.namaPenanggungJawab2 && formik.errors.namaPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('namaPenanggungJawab2')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="noSelulerPenanggungJawab2"
                                            label="Nomor Seluler *"
                                            name="noSelulerPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.noSelulerPenanggungJawab2 && formik.errors.noSelulerPenanggungJawab2 ? formik.errors.noSelulerPenanggungJawab2 : null}
                                            error={formik.touched.noSelulerPenanggungJawab2 && formik.errors.noSelulerPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('noSelulerPenanggungJawab2')}
                                        >
                                        </TextField>

                                    </div>
                                    <div>
                                        <TextField
                                            id="jabatanPenanggungJawab2"
                                            label="Jabatan *"
                                            name="jabatanPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.jabatanPenanggungJawab2 && formik.errors.jabatanPenanggungJawab2 ? formik.errors.jabatanPenanggungJawab2 : null}
                                            error={formik.touched.jabatanPenanggungJawab2 && formik.errors.jabatanPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('jabatanPenanggungJawab2')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="alamatEmailPenanggungJawab2"
                                            label="Alamat E-Mail *"
                                            name="alamatEmailPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.alamatEmailPenanggungJawab2 && formik.errors.alamatEmailPenanggungJawab2 ? formik.errors.alamatEmailPenanggungJawab2 : null}
                                            error={formik.touched.alamatEmailPenanggungJawab2 && formik.errors.alamatEmailPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('alamatEmailPenanggungJawab2')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="noTelpPenanggungJawab2"
                                            label="Nomor Telepon *"
                                            name="noTelpPenanggungJawab2"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.noTelpPenanggungJawab2 && formik.errors.noTelpPenanggungJawab2 ? formik.errors.noTelpPenanggungJawab2 : null}
                                            error={formik.touched.noTelpPenanggungJawab2 && formik.errors.noTelpPenanggungJawab2 ? true : false}
                                            {...formik.getFieldProps('noTelpPenanggungJawab2')}
                                        >
                                        </TextField>


                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <ExpansionPanel className={classes.expand}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="expandIcon"

                                >
                                    <MyTypography id='titlePengelolaPembayaranSimpananPeserta'>
                                        Pengelola Pembayaran Simpanan Peserta
                                        </MyTypography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <TextField
                                            id="namaPengelolaPembayaran"
                                            label="Nama Lengkap *"
                                            name="namaPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.namaPengelolaPembayaran && formik.errors.namaPengelolaPembayaran ? formik.errors.namaPengelolaPembayaran : null}
                                            error={formik.touched.namaPengelolaPembayaran && formik.errors.namaPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('namaPengelolaPembayaran')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="nomorSelulerPengelolaPembayaran"
                                            label="Nomor Seluler *"
                                            name="nomorSelulerPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.nomorSelulerPengelolaPembayaran && formik.errors.nomorSelulerPengelolaPembayaran ? formik.errors.nomorSelulerPengelolaPembayaran : null}
                                            error={formik.touched.nomorSelulerPengelolaPembayaran && formik.errors.nomorSelulerPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('nomorSelulerPengelolaPembayaran')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="jabatanPengelolaPembayaran"
                                            label="Jabatan *"
                                            name="jabatanPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.jabatanPengelolaPembayaran && formik.errors.jabatanPengelolaPembayaran ? formik.errors.jabatanPengelolaPembayaran : null}
                                            error={formik.touched.jabatanPengelolaPembayaran && formik.errors.jabatanPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('jabatanPengelolaPembayaran')}
                                        >
                                        </TextField>
                                        <TextField
                                            id="emailPengelolaPembayaran"
                                            label="Alamat E-Mail *"
                                            name="emailPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.emailPengelolaPembayaran && formik.errors.emailPengelolaPembayaran ? formik.errors.emailPengelolaPembayaran : null}
                                            error={formik.touched.emailPengelolaPembayaran && formik.errors.emailPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('emailPengelolaPembayaran')}
                                        >
                                        </TextField>
                                    </div>
                                    <div>
                                        <TextField
                                            id="nomorTeleponPengelolaPembayaran"
                                            label="Nomor Telepon *"
                                            name="nomorTeleponPengelolaPembayaran"
                                            disabled={mode}
                                            type="input"
                                            helperText={formik.touched.nomorTeleponPengelolaPembayaran && formik.errors.nomorTeleponPengelolaPembayaran ? formik.errors.nomorTeleponPengelolaPembayaran : null}
                                            error={formik.touched.nomorTeleponPengelolaPembayaran && formik.errors.nomorTeleponPengelolaPembayaran ? true : false}
                                            {...formik.getFieldProps('nomorTeleponPengelolaPembayaran')}
                                        >
                                        </TextField>

                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                            <div>
                                <Grid container justify="space-between" className={classes.buttonGrid}>
                                    <Grid container item spacing={0} xs={2} sm={2} md={2} justify="space-between" marginRight={10} className={classes.buttonGrid}>
                                         <Button
                                            className={classes.button}
                                            id="btnEdit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={handleEdit}
                                            disabled={mode == false ? true : false}
                                        > Ubah </Button>
                                        <Button
                                            type="button"
                                            onClick={() => formik.resetForm()}
                                            className={classes.button}
                                            id="btnCancel"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            disabled={mode}
                                        > Batal </Button>
                                    </Grid>
                                    <Grid container item spacing={0} xs={4} sm={4} md={4} justify="flex-start" className={classes.buttonGrid}>
                                    </Grid>
                                    <Grid container item spacing={0} xs={3} sm={3} md={3} justify="flex-end" className={classes.buttonGrid}>
                                        <Button
                                            type="submit"
                                            className={classes.button}
                                            id="btnSimpan"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            disabled={mode}
                                        > Simpan </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </form>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}
