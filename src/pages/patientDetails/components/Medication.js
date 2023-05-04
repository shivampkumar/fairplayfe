import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid , List, ListItem, ListItemText, ListSubheader, Typography} from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    marginBottom: '20px',
  },
  lineColor: {
    backgroundColor: '#6138dcdb',
    width: '20px',
    height: '34vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'top',
  },
  icon: {
    color: 'white',
    padding: '5px',
    borderRadius: '4px',
  },
  icon1: {
    color: 'red',
    marginRight: theme.spacing(1),
  },
  healthIcon: {
    color: 'red',
    marginLeft: '5px',
  },
  textWrapper: {
    marginLeft: '10px',
  },
  headerText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#6138dcdb',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  smallText: {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    color: '#6138dcdb'
  },
  visitDescription: {
    
    padding: '5px',
    borderRadius: '4px',
  },
}));

const Medication = () => {
  const classes = useStyles();
  const visits = [
    {
      description: 'ibuprofen (MOTRIN) 800 MG tablet',
    },
    {
      date: '03/15/2005',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Artificial Tears',
    },
    {
      date: '06/20/2012',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Hydrocodone-Acetaminophen (5mg-325mg)',
    },
    {
      date: '09/05/2018',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Ferumoxytol',
    },
  ];
  

  return (
    <div>
      <Grid container alignItems="center" spacing={1} className={classes.componentWrapper}>
        <Grid item xs={1}>
        <div className={classes.lineColor}>
        <AutorenewIcon className={classes.icon} />
         </div>
        </Grid>
        <Grid item xs = {11}>
          <h2 className={classes.headerText}>Medications</h2>
          
            <Typography>Outpatient Medications</Typography>
            <ul>
      {visits.map((visit, index) => (
            <li className={classes.smallText}><p className={classes.visitDescription}>{visit.description}</p></li>
      ))}
      </ul>
      </Grid>
      </Grid>
    </div>
  );
};

export default Medication;

