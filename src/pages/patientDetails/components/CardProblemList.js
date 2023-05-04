import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

const useStyles = makeStyles((theme) => ({
    componentWrapper: {
      display: 'flex',
      marginBottom: '20px',
    },
    lineColor: {
      backgroundColor: '#FF00FF',
      width: '20px',
      height: '35vh',
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
      color: '#FF00FF',
      marginBottom: theme.spacing(3),
    },
    smallText1:{
        margin: '0',
        fontSize: '14px',
        color: '#FF00FF',
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
  

const CardProblemList = () => {
  const classes = useStyles();
  const patient = {
    id: 3,
      location: 'Room 103',
      name: 'Bob Johnson',
      age: 50,
      gender: 'Male',
      diagnosis: 'Cancer',
      admitTime: '2022-05-02T15:20:00Z',
      ethnicity: 'Asian',
      hospitalAdmitTime24: '15:20:00'
  }

  return (
    <div className={classes.componentWrapper}>
      <div className={classes.lineColor}>
        <FormatListBulletedIcon className={classes.icon} />
      </div>
      <div className={classes.textWrapper}>
        <h2 className={classes.headerText}> Problem List<br></br></h2>
       
        <div className={classes.multiLineTextWrapper}>
          <p className={classes.smallText}>Respiratory</p>
          <p className={classes.smallText1}>Influenza</p>
        </div>
       
      </div>
    </div>
  );
};

export default CardProblemList;
