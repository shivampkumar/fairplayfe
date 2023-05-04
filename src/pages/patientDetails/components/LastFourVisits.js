import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    marginBottom: '20px',
  },
  lineColor: {
    backgroundColor: 'blue',
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
    color: 'blue',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  smallText: {
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
  },
  visitDescription: {
    backgroundColor: '#E8E8E8',
    padding: '5px',
    borderRadius: '4px',
  },
}));

const LastFourVisits = () => {
  const classes = useStyles();
  const visits = [
    {
      date: 'May 1',
      healthIcon: <LocalHospitalIcon className={classes.healthIcon} />,
      description: 'Admission',
    },
    {
      date: 'Feb 10',
      healthIcon: <LocalHospitalIcon className={classes.healthIcon} />,
      description: 'XRay Chest Lateral',
    },
    {
      date: 'Jan 30',
      healthIcon: <LocalHospitalIcon className={classes.healthIcon} />,
      description: 'Office Visit',
    },
    {
      date: 'Jan 2',
      healthIcon: <LocalHospitalIcon className={classes.healthIcon} />,
      description: 'Admission(Discharged)',
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
          <h2 className={classes.headerText}>Last 4 visits</h2>
      {visits.map((visit, index) => (
        <Grid container alignItems="center" spacing={2} key={index}>
          <Grid item xs = {2}>
              <p className={classes.smallText}>{visit.date}</p>
          </Grid>
          <Grid item xs = {1}>
            {visit.healthIcon}
          </Grid>
          <Grid item xs = {8}>
            <p className={classes.visitDescription}>{visit.description}</p>
          </Grid>  
          </Grid>
      ))}
      </Grid>
      </Grid>
    </div>
  );
};

export default LastFourVisits;

