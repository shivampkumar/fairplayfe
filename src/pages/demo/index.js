import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Select, MenuItem, Button, List, ListItem, ListItemText, Table, TableHead, TableBody, TableRow, TableCell  } from '@material-ui/core';
import Header from '../demo/components/header';
import './index.scss';
import Predictor from './components/predicter';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '100vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const Demo = () => {
    const classes = useStyles();
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);

    // fetch the list of patients on component mount
    useEffect(() => {
        // fetch('http://localhost:5000/patients')
        //     .then(res => res.json())
        //     .then(data => setPatients(data));
        setPatients([
            {
              id: 1,
              location: 'Room 101',
              name: 'John Doe',
              age: 42,
              gender: 'Male',
              diagnosis: 'Hypertension',
              admitTime: '2022-05-01T10:30:00Z',
              ethnicity: 'Caucasian',
              hospitalAdmitTime24: '10:30:00',
            },
            {
              id: 2,
              location: 'Room 102',
              name: 'Jane Smith',
              age: 35,
              gender: 'Female',
              diagnosis: 'Diabetes',
              admitTime: '2022-05-02T12:45:00Z',
              ethnicity: 'African American',
              hospitalAdmitTime24: '12:45:00',
            },
            {
              id: 3,
              location: 'Room 103',
              name: 'Bob Johnson',
              age: 50,
              gender: 'Male',
              diagnosis: 'Cancer',
              admitTime: '2022-05-02T15:20:00Z',
              ethnicity: 'Asian',
              hospitalAdmitTime24: '15:20:00',
            },
          ])
    }
    , []);

    // fetch the patient details on patient selection
    useEffect(() => {
    if (selectedPatient) {
      const fetchPatientDetails = async () => {
        // const response = await fetch(`https://your-api.com/patients/${selectedPatient}`);
        // const data = await response.json();
        let data = null
        //create a mock patient details
        

        setPatientDetails(patients[selectedPatient-1]);
      };
      fetchPatientDetails();
    }
  }, [selectedPatient]);


  return (
    <div className={classes.root}>
    <Header withoutLink={true} />
    <Grid container spacing={3}>
    <Grid item xs={3}>
        <Paper className={classes.paper}>
        <h3>Patient Lists</h3>
        <List>
            <ListItem button>
                <ListItemText primary="My Patients" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Research and Case Reports" />
            </ListItem>
            <ListItem button selected={true}>
                <ListItemText primary="My Team\CurrentICUPatients" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Shared patient lists" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="My Favorite List" />
            </ListItem> 
        </List>
        </Paper>
    </Grid>
    <Grid item xs={5}>
        <Paper className={classes.paper}>
        <h3>"My Team\CurrentICUPatients</h3>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age/Gender</TableCell>
                <TableCell>Diagnosis</TableCell>
                <TableCell>Admit Time</TableCell>
                <TableCell>Ethnicity</TableCell>
                <TableCell>Hospital Admit Time</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {patients.map((patient) => (
                <TableRow key={patient.id}
                        onClick={() => setSelectedPatient(patient)}
                        selected={selectedPatient && selectedPatient.id === patient.id}
                >
                    <TableCell>{patient.location}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{`${patient.age}/${patient.gender}`}</TableCell>
                    <TableCell>{patient.diagnosis}</TableCell>
                    <TableCell>{new Date(patient.admitTime).toLocaleString()}</TableCell>
                    <TableCell>{patient.ethnicity}</TableCell>
                    <TableCell>{patient.hospitalAdmitTime24}</TableCell>
                </TableRow>
                ))}
            </TableBody>
         </Table>
        </Paper>
    </Grid>
    <Grid item xs={4}>
        <Paper className={classes.paper}>
        <h3>FairPlay SMART on FHIR App</h3>
        <br></br>
         {selectedPatient && <Predictor selectedPatient={selectedPatient} />}
        </Paper>
    </Grid>
    </Grid>
    </div>
    );
}



export default Demo;