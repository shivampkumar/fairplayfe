import React from 'react';
import './Card1.scss';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
    componentWrapper: {
      display: 'flex',
      marginBottom: '20px',
    },
    lineColor: {
      backgroundColor: 'purple',
      width: '20px',
      height: '120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: 'white',
    },
    textWrapper: {
      marginLeft: '10px',
      display: 'flex',
      flexDirection: 'column',
    },
    headerText: {
      margin: '0',
      fontSize: '20px',
      color: 'purple',
    },
    smallText: {
      margin: '0',
      fontSize: '14px',
    },
    multiLineTextWrapper: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '10px',
      flex: '1',
    },
    multiLineText: {
      margin: '0',
      fontSize: '14px',
      marginBottom: '5px',
    },
  }));
  

const Card1 = () => {
  const classes = useStyles();
  const patient = {
    id: 2,
    location: 'Room 102',
    name: 'Jane Smith',
    age: 43,
    gender: 'Female',
    diagnosis: 'Diabetes',
    admitTime: '2023-02-02T12:45:00Z',
    ethnicity: 'Black or African American',
    hospitalAdmitTime24: '12:45:00',
  }

  return (
    <div className={classes.componentWrapper}>
      <div className={classes.lineColor}>
        <AccountBoxIcon className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>
        <h2 className={classes.headerText}> Demographics<br></br></h2>
        <Grid container spacing={10}>
        <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
        <div className={classes.multiLineTextWrapper}>
          <p className={classes.smallText}><strong>{patient.name}</strong></p>
          <p className={classes.smallText}>{patient.age} years old</p>
          <p className={classes.smallText}> {patient.gender}</p>
        </div>
        </Grid>
        <Grid item xs={4}>
        <div className={classes.multiLineTextWrapper}>
          <p className={classes.smallText}>1 Main</p>
          <p className={classes.smallText}>High Point NC 27261</p>
          <p className={classes.smallText}> 336-555-5555</p>
        </div>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Card1;
