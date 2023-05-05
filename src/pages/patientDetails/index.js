import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import { Avatar,InputBase, IconButton, Paper, Grid, Typography,Box, AppBar, Tabs, Tab, Divider, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Card1 from './components/Card1';
import Header from '../demo/components/header';
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './index.scss';
import GenomicIndicator from './components/GenomicIndicators';
import CardProblemList from './components/CardProblemList';
import LastFourVisits from './components/LastFourVisits';
import HealthMaintainence from './components/HealthMaintainence';
import Allergies from './components/Allergies';
import Reminders from './components/Reminders';
import Medication from './components/Medication';
import Predictor from '../demo/components/predicter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  leftPane: {
    padding: theme.spacing(2),
    backgroundColor: 'aliceblue',
    height: '110vh',
  },
  section: {
    marginBottom: theme.spacing(2),
  },
  section1 : {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
  },
  appBar: {
    flexGrow: 1,
    backgroundColor:'aliceblue',
  },
  icon: {
    color: 'red',
    marginRight: theme.spacing(1),
  },
  text: {
    marginLeft: theme.spacing(1),
  },
  tab: {
    borderRadius: '4px 4px 0 0',
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  tabPanel: {
    padding: theme.spacing(2),
  },
}));

const PatientDetails = () => {
  const classes = useStyles();
  const {id} = useParams()
  const [patient, setPatient] = useState(null);
  console.log(id);
  const patients = [
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
      age: 43,
      gender: 'Female',
      diagnosis: 'Diabetes',
      admitTime: '2023-02-02T12:45:00Z',
      ethnicity: 'Black or African American',
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
  ]
  const [selectedTab, setSelectedTab] = useState(0);

  const [openModal, setOpenModal] = useState(false);
  const [modalPatientData, setModalPatientData] = useState(null);
  
  const handleOpenModal = (patientData) => {
    setModalPatientData(patientData);
    setOpenModal(true);
  };


  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const careGapsData = [
    'DTaP/Tdap/Td Vaccine',
    'Pap Smear(21-64)',
    'Lipid Screening',
    'Mammogram(50-74)'
    // Add more care gap items as needed
  ];

  // fetch the patient details on patient selection
  useEffect(() => {
    console.log(patients)
    // Set the ID as the state value when the component mounts
    setPatient(patients[id-1]);

    // Clean up the state when the component unmounts
    return () => {
      setPatient(null);
    };
  }, [id]);


  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Dialog open={openModal} onClose={handleCloseModal} PaperProps={{ style: { width: '80%', height: '80%' } }}>
        <DialogTitle>FairPlay Readmission Predictor</DialogTitle>
        <DialogContent>
          <Predictor selectedPatient = {patient} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container>
        <Grid item xs={12}>
          <Header withoutLink={true} />
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.leftPane}>
            <div className={classes.section} align = "center">
              <Avatar sx={{ bgcolor: 'primary.main' }} sizes="extra-large"> BJ </Avatar>
              <Typography variant="h6"  style={{ color: 'blue' }}>{patient ? patient.name : 'Loading...'}</Typography>
              <Typography variant='h8'>{patient ? patient.gender : 'Loading...'}, {patient ? patient.age : 'Loading...'} y.o. </Typography>
              <br></br>
              <Typography variant='h8'> MRN: <strong> 100526861</strong> </Typography>
              <br></br>
              <Typography variant='h8'> Code: <strong> Not on file</strong> </Typography>
              <br></br>
              <Typography variant='h8'> Visitation: <strong> Not documented</strong><br></br><br></br> </Typography>
              <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                </Paper>
            </div>

            <div className={classes.section}>
            <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <Avatar
                      sx={{ bgcolor: 'primary.main' }}
                      src='https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'
                      sizes="extra-large"
                    />
                  </Grid>
                  <Grid item>
                    <Typography variant="h8">None Per Patient Pcp</Typography>
                    <br></br>
                    <Typography variant="h8">Pcp -General</Typography>
                  </Grid>
                </Grid>
                <Typography variant="h8">Coverage: <strong>AACA </strong></Typography>
              </div>
              <Divider />
            <div className={classes.section}>
                <Typography variant="h6"  style={{ color: 'purple' }}>Allergies</Typography>
                <Typography variant="h8">No Known Allergies</Typography>
                {/* Add allergies content here */}
              </div>
              <Divider />

              <div className={classes.section}>
                <Typography variant="h8">Registries(1)</Typography>
                {/* Add registries content here */}
              </div>
              <Divider />

              <div className={classes.section} align= 'center'>
                <Typography variant="h6"  style={{ color: 'purple' }}>Social Determinants</Typography>
                <Typography variant="h8">Not on file</Typography>
              </div>
              <Divider />

              <div className={classes.section} >
                <Typography variant="h6" style={{ color: 'purple' }}>Risk Scores</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    style={{
                      backgroundColor: 'red',
                      color: 'black',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      marginRight: '8px',
                    }}
                  >
                    <Typography variant="h6">42</Typography>
                  </Box>
                  <Typography variant="body1">Health composite score</Typography>
                </div>
              </div>
              <Divider />

              <div className={classes.section}>
                <Typography variant="h6">Care Gaps</Typography>
                <div>
                  {careGapsData.map((careGap, index) => (
                  <div key={index} className={classes.section1}>
                    <AccessTimeIcon className={classes.icon} />
                    <Typography variant="body1" className={classes.text}>
                      {careGap}
                    </Typography>
                  </div>
                ))}
                </div>
              </div>
              <Divider />

              <div className={classes.section}>
                <Typography variant="h6">Patient Contacts</Typography>
               <Typography variant="h8">No patient contacts</Typography>
              </div>
            <Divider />
            {/* Add other sections as needed */}
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <div className={classes.appBar}>
          <Paper elevation={0} square>
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              className='gClass'
            >
              <Tab className={classes.tab} label="Snapshot" />
              <Tab className={classes.tab} label="Chart Review" />
              <Tab className={classes.tab} label="Medications" />
              <Tab className={classes.tab} label="Problem List" />
              <Tab className={classes.tab} label="Demographics" />
              <Tab className={classes.tab} label="FairPlay Readmission Assist" onClick={() => handleOpenModal(patient)} />
              {/* Add more tabs as needed */}
            </Tabs>
          </Paper>
          </div>
          {/* Add tab content and other sections below */}
          <Grid item xs={12}>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Paper>
                  <Card1 />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>
                 <GenomicIndicator/>
                </Paper>
              </Grid>
              {/* Add more Grid items for each section */}
           
            <Grid item xs={6}>
              <Paper>
                <CardProblemList/>
              </Paper>
             </Grid>
             <Grid item xs={6}>
              <Paper>
                <LastFourVisits/>
              </Paper>
             </Grid>
             <Grid item xs={6}>
              <Paper>
                <HealthMaintainence/>
              </Paper>
             </Grid>
             <Grid item xs={6}>
              <Paper>
                <Medication/>
              </Paper>
             </Grid>
             <Grid item xs={6}>
              <Paper>
                <Reminders/>
              </Paper>
             </Grid>
             <Grid item xs={6}>
              <Paper>
                <Allergies/>
              </Paper>
             </Grid>
             </Grid>
            </Box>
          </Grid>
      </Grid>
        </Grid>
    </div>


  );
};

export default PatientDetails;
