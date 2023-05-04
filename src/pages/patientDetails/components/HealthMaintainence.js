import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
    
    padding: '5px',
    borderRadius: '4px',
  },
}));

const HealthMaintainence = () => {
  const classes = useStyles();
  const visits = [
    {
      date: '01/01/1998',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Lipid Screening',
    },
    {
      date: '03/15/2005',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Immunization - Tetanus',
    },
    {
      date: '06/20/2012',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Procedure - Appendectomy',
    },
    {
      date: '09/05/2018',
      healthIcon: <AccessTimeIcon className={classes.icon1} />,
      description: 'Immunization - Influenza',
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
          <h2 className={classes.headerText}>Health Maintainence</h2>
      {visits.map((visit, index) => (
        <Grid container alignItems="center" spacing={2} key={index}>
            <Grid item xs = {1}>
            {visit.healthIcon}
          </Grid>
          <Grid item xs = {2}>
              <p className={classes.smallText}>{visit.date}</p>
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

export default HealthMaintainence;

