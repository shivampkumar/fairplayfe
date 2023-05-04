import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Select, MenuItem, Button,Container,Collapse, List, ListItem,ListItemText, Typography,ListItemIcon, Table, TableHead, TableBody, TableRow, TableCell, Divider  } from '@material-ui/core';
import Header from '../demo/components/header';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import PatientDetails from '../patientDetails';
import GroupsIcon from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '100vh',
      backgroundColor: '#f5f5f5',
    },
    selected: {
      backgroundColor: theme.palette.action.selected,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
    paper2: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        height: '50vh'
      },
    fullHeightGridItem: {
        height: '90vh',
    },
    listContainer: {
      height: '30vh',
      overflow: 'auto',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    bottomText: {
        position: 'absolute',
        right: theme.spacing(70),
        bottom: theme.spacing(20),
      },
  }));
  

const Demo = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState('');
    const [patientDetails, setPatientDetails] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleSelectItem = (item) => {
      setSelectedItem(item);
    };
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
    <Grid container spacing={1}>
    <Grid item xs={3}>
     <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography variant="h6">My Lists</Typography>
          <List>
            <ListItem
              button 
              onClick={() => handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="blank" />
            </ListItem>
            <ListItem button onClick={()=> handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Floors" />
            </ListItem>
            <ListItem button onClick={()=> handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Justin's List" />
            </ListItem>
            <ListItem button onClick={()=> handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="My current Team" />
            </ListItem>
            <ListItem button onClick={()=> handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="My Group/Team Patients" />
            </ListItem>
            <ListItem button onClick={()=> handleSelectItem(null)}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="My Team/Patients" />
            </ListItem>
            <ListItem 
              button 
              selected={selectedItem === "ICU Patients/Current"}
              onClick={() => handleSelectItem("ICU Patients/Current")}
              >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="ICU Patients/Current" />
            </ListItem >
            <ListItem
               button 
               onClick={() => handleSelectItem(null)}
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="My Favorite Lists" />
            </ListItem>
            <ListItem
              button 
              onClick={() => handleSelectItem(null)}
            >
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Shared Patient Lists" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Divider></Divider>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
        <Typography variant="h6">Available Lists</Typography>
        <Container className={classes.listContainer}>
      <List>
         <ListItem
         button 
         onClick={() => handleSelectItem(null)}>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Heart Care PC" />
        </ListItem>
        <ListItem
               button 
               onClick={() => handleSelectItem(null)}        >
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Heart Consults/MI" />
        </ListItem>
        <ListItem
          button 
          onClick={() => handleSelectItem(null)}       
        >
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA McLaren Cardiovascular Institute" />
        </ListItem>
        <ListItem
          button 
          onClick={() => handleSelectItem(null)}        
        >
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Med Team A" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Med Team B" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Med Team C" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Med Team D" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Med Team E" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Mercy Hospice" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA NB/NICU" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA NICU Air Leaks" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Oakland Hills Cardiology" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Orange Assigned" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA Orange Medicine Core Faculty" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA PAT Review" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupsIcon />
          </ListItemIcon>
          <ListItemText primary="SJOA DH Made lo Bo" />
        </ListItem>
        </List>
        </Container>
          </Paper>
      </Grid>
    </Grid>
    <Grid item xs={9}>
        <Paper className={classes.paper2}>
        <h3>My Team\CurrentICUPatients</h3>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Location</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age/Gender</TableCell>
                <TableCell>Diagnosis</TableCell>
                <TableCell>Admit Time</TableCell>
                <TableCell>Ethnicity</TableCell>
                <TableCell>Last Reviewed</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                { selectedItem && (patients.map((patient) => (
                <TableRow key={patient.id}
                        onClick={() => navigate(`/patient-details/${patient.id}`)}
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
                )))}
            </TableBody>
         </Table>
        </Paper>
    </Grid>
    </Grid>
    <div className={classes.bottomText}>Select a patient to get started</div>
    </div>
    );
}



export default Demo;