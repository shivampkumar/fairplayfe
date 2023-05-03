import { useState, useEffect } from 'react';
import { Grid, Card,CardContent, Typography,Container, FormControl, InputLabel, Select, CircularProgress, Button } from '@material-ui/core';
import './index.scss';

const Predictor = (props) => {
    
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [baselineResult, setBaselineResult] = useState(null);
    const [nonBaselineResult, setNonBaselineResult] = useState(null);
    const [actualResult, setActualResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
   
    useEffect(() => {
        setSelectedPatient(props.selectedPatient);
        setActualResult(null);
        setBaselineResult(null);
        setNonBaselineResult(null);
      }, [props.selectedPatient]);

  // handle baseline model prediction
  const handlePrediction = async () => {
    setIsLoading(true);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(3000);
    // const response = await fetch(`https://your-api.com/predictions/baseline/${selectedPatient}`);
    // const data = await response.json();
    if (selectedPatient.id === 1) {
        setBaselineResult('Low')
    }
    else if (selectedPatient.id === 2) {
        setBaselineResult('High')
    }
    else if (selectedPatient.id === 3) {
        setBaselineResult('Low')
    }
    else if (selectedPatient.id === 4) {
        setBaselineResult('High')
    }
    if (selectedPatient.id === 1) {
        setNonBaselineResult('High')
    }
    else if (selectedPatient.id === 2) {
        setNonBaselineResult('Low')
    }
    else if (selectedPatient.id === 3) {
        setNonBaselineResult('High')
    }
    else if (selectedPatient.id === 4) {
        setNonBaselineResult('Low')
    }
    if (selectedPatient.id === 1) {
        setActualResult('High')
    }
    else if (selectedPatient.id === 2) {
        setActualResult('Low')
    }
    else if (selectedPatient.id === 3) {
        setActualResult('Low')
    }
    else if (selectedPatient.id === 4) {
        setActualResult('High')
    }
    setIsLoading(false);
  };

  
  return (
    <div className="predictContainer">
        <Container>
        <Grid container spacing={7} justifyContent="center">
        {selectedPatient && (
           <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
            <Card variant="outlined" style={{ backgroundColor: '#E0E0E0', width: '100%' }}>
                <CardContent style={{ padding: '24px'}}>
                <div style={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>{selectedPatient.name}</Typography>
                <Typography variant="subtitle1" gutterBottom>{`Age: ${selectedPatient.age}`}</Typography>
                <Typography variant="subtitle1" gutterBottom>{`Gender: ${selectedPatient.gender}`}</Typography>
                <Typography variant="subtitle1" gutterBottom>{`Ethnicity: ${selectedPatient.ethnicity}`}</Typography>
                <div style={{ marginTop: '24px' }}>
                <Button variant="contained" color="primary" onClick={handlePrediction}>
                    {isLoading ? <CircularProgress size={24} /> : "Predict Risk to Patient"}
                </Button>
                </div>
                </div>
                </CardContent>
            </Card>
            </Grid>
            {baselineResult && (
                 <Grid item xs={12} md={6}>
                 <Card
                   variant="outlined"
                   style={{ backgroundColor: baselineResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
                 >
                   <CardContent>
                     <Typography variant="h6">
                       Baseline Model Result: {baselineResult}
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
             )}
            {nonBaselineResult && (
            <Grid item xs={12} md={6}>
            <Card
                variant="outlined"
                style={{ backgroundColor: nonBaselineResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
            >
                <CardContent>
                <Typography variant="h6">
                    FairPlay Model Result: {nonBaselineResult}
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            )}
            {actualResult && (
                <Grid item xs={12} md={12} alignItems='center'>
                <Card
                  variant="outlined"
                  style={{ backgroundColor: actualResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
                >
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Actual Result: {actualResult}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
             </Grid>
            )}
        </Grid>
        </Container>
    
    <Container>
        {/* <Audit></Audit> */}
    </Container>
    </div>
    );
}



export default Predictor;