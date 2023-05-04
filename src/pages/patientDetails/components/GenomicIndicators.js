import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import FlareIcon from '@material-ui/icons/Flare';

const useStyles = makeStyles((theme) => ({
  componentWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    height: '13vh',
  },
  iconContainer: {
    padding: theme.spacing(1),
    borderRadius: '50%',
    marginRight: theme.spacing(1),
    backgroundColor: '#CF9FFF',
  },
  icon: {
    color: 'darkviolet',
    fontSize: '24px',
  },
  headerText: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: theme.spacing(1),
    color: 'darkviolet',
    backgroundColor: '#CF9FFF',
  },
  smallText: {
    marginUp: theme.spacing(5),
    fontSize: '14px',
  },
}));

const GenomicIndicator = () => {
  const classes = useStyles();

  return (
    <div className={classes.componentWrapper}>
      <Grid container alignItems="center">
        <Grid item>
          <div className={classes.iconContainer}>
            <FlareIcon className={classes.icon} />
          </div>
        </Grid>
        <Grid item>
          <Typography variant="h6" className={classes.headerText}>
            Genomic Indicator
          </Typography>
        </Grid>
      <Grid item xs={12}>
        <div>
          <Typography variant="body1" className={classes.smallText}>
            <br></br>No Documentation
          </Typography>
        </div>
      </Grid>
      </Grid>
    </div>
  );
};

export default GenomicIndicator;
